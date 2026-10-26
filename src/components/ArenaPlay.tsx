import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import {
  GameMode,
  ChainRecord,
  ActiveTurn,
  PlayerStats,
} from '../types';
import {
  findWordInBank,
  pickRandomWord,
  getAvailableWordsStartingWith,
  ItemCategory,
  BioWord,
} from '../data/wordBank';
import { soundManager } from '../utils/audio';
import {
  Sparkles,
  ArrowRight,
  HelpCircle,
  RotateCcw,
  Bot,
  User,
  Users,
  Timer,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  Info,
} from 'lucide-react';

interface ArenaPlayProps {
  stats: PlayerStats;
  onUpdateStats: (newStats: Partial<PlayerStats>) => void;
  onAddSessionToHistory: (chain: ChainRecord[]) => void;
}

export const ArenaPlay: React.FC<ArenaPlayProps> = ({
  stats,
  onUpdateStats,
  onAddSessionToHistory,
}) => {
  // Game states
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [gameMode, setGameMode] = useState<GameMode>('selang_seling');
  const [chain, setChain] = useState<ChainRecord[]>([]);
  const [activeTurn, setActiveTurn] = useState<ActiveTurn>('player');
  const [playerScores, setPlayerScores] = useState<{ p1: number; p2: number }>({ p1: 0, p2: 0 });

  // Inputs & validation
  const [inputWord, setInputWord] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<ItemCategory>('makhluk_hidup');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [latestFactWord, setLatestFactWord] = useState<ChainRecord | null>(null);

  // Time limit management
  const [timeLeft, setTimeLeft] = useState<number>(25);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  // Hints and assists
  const [hintMessage, setHintMessage] = useState<string | null>(null);
  const [hintsRemaining, setHintsRemaining] = useState<number>(3);
  const [isBotThinking, setIsBotThinking] = useState<boolean>(false);

  // Focus input ref
  const inputRef = useRef<HTMLInputElement>(null);

  // The last word in the chain
  const lastChainItem = chain.length > 0 ? chain[chain.length - 1] : null;

  // Expected starting char
  const expectedChar = lastChainItem
    ? lastChainItem.word[lastChainItem.word.length - 1].toLowerCase()
    : null;

  // Expected category in 'selang_seling' mode
  const expectedCategory: ItemCategory | null =
    gameMode === 'selang_seling' && lastChainItem
      ? lastChainItem.category === 'makhluk_hidup'
        ? 'makhluk_mati'
        : 'makhluk_hidup'
      : null;

  // Sync selectedCategory when expectedCategory changes in selang_seling mode
  useEffect(() => {
    if (expectedCategory) {
      setSelectedCategory(expectedCategory);
    }
  }, [expectedCategory]);

  // Start a new game session
  const startGame = (mode: GameMode = gameMode) => {
    soundManager.playClick();
    setGameMode(mode);
    setErrorMessage(null);
    setHintMessage(null);
    setHintsRemaining(3);
    setPlayerScores({ p1: 0, p2: 0 });

    // Pick a gentle starting word
    const startCategory: ItemCategory = 'makhluk_hidup';
    const firstWord = pickRandomWord(startCategory);

    if (firstWord) {
      const initialRecord: ChainRecord = {
        word: firstWord.word,
        category: firstWord.category,
        subCategory: firstWord.subCategory,
        submittedBy: 'Sistem Awal',
        funFact: firstWord.funFact,
        characteristics: firstWord.characteristics,
        matchedChar: firstWord.word[0],
        points: 10,
      };

      setChain([initialRecord]);
      setLatestFactWord(initialRecord);
    } else {
      setChain([]);
      setLatestFactWord(null);
    }

    setIsPlaying(true);
    setActiveTurn(mode === 'pass_and_play' ? 'player1' : 'player');
    const initialTime = mode === 'time_attack' ? 60 : 25;
    setTimeLeft(initialTime);
    setTimerRunning(true);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 150);
  };

  // Timer loop
  useEffect(() => {
    if (!timerRunning || !isPlaying) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleTimeExpired();
          return 0;
        }
        if (prev <= 5) {
          soundManager.playTick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timerRunning, isPlaying, activeTurn, gameMode]);

  // Time expired handler
  const handleTimeExpired = () => {
    soundManager.playError();
    setTimerRunning(false);
    setErrorMessage('Waktu giliran habis! Sesi ini telah berakhir.');
    endSession('Waktu habis');
  };

  // End game session and log statistics
  const endSession = (reason: string) => {
    setIsPlaying(false);
    setTimerRunning(false);
    onAddSessionToHistory(chain);

    const totalPts = chain.reduce((acc, c) => acc + c.points, 0);
    const livingCount = chain.filter((c) => c.category === 'makhluk_hidup').length;
    const nonLivingCount = chain.filter((c) => c.category === 'makhluk_mati').length;

    onUpdateStats({
      score: stats.score + totalPts,
      longestChain: Math.max(stats.longestChain, chain.length),
      totalWordsPlayed: stats.totalWordsPlayed + chain.length,
      livingWordsCount: stats.livingWordsCount + livingCount,
      nonLivingWordsCount: stats.nonLivingWordsCount + nonLivingCount,
    });
  };

  // Bot Turn Logic for 'vs_bot'
  useEffect(() => {
    if (isPlaying && gameMode === 'vs_bot' && activeTurn === 'bot') {
      setIsBotThinking(true);
      const timer = setTimeout(() => {
        executeBotTurn();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isPlaying, gameMode, activeTurn]);

  const executeBotTurn = () => {
    if (!expectedChar) return;

    const usedWords = new Set(chain.map((c) => c.word.toLowerCase()));
    // Determine target category if selang_seling applies or any valid word
    const targetCat = expectedCategory || (Math.random() > 0.5 ? 'makhluk_hidup' : 'makhluk_mati');

    let botChoice = pickRandomWord(targetCat, expectedChar, usedWords);

    // If no word found with target category, try opposite category
    if (!botChoice) {
      const oppositeCat = targetCat === 'makhluk_hidup' ? 'makhluk_mati' : 'makhluk_hidup';
      botChoice = pickRandomWord(oppositeCat, expectedChar, usedWords);
    }

    setIsBotThinking(false);

    if (botChoice) {
      const points = 15;
      const botRecord: ChainRecord = {
        word: botChoice.word,
        category: botChoice.category,
        subCategory: botChoice.subCategory,
        submittedBy: 'BioBot (AI)',
        funFact: botChoice.funFact,
        characteristics: botChoice.characteristics,
        matchedChar: expectedChar,
        points,
      };

      const nextChain = [...chain, botRecord];
      setChain(nextChain);
      setLatestFactWord(botRecord);
      soundManager.playSuccess();

      // Check milestones for confetti
      if (nextChain.length % 5 === 0) {
        confetti({ particleCount: 40, spread: 60 });
      }

      // Switch turn back to player
      setActiveTurn('player');
      setTimeLeft(25);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      // Bot is stuck! Player wins
      soundManager.playFanfare();
      confetti({ particleCount: 100, spread: 80 });
      setErrorMessage('BioBot kehabisan kata yang sesuai! Selamat, kamu berhasil mengalahkan BioBot!');
      endSession('BioBot buntu dan menyerah');
    }
  };

  // Submit word logic
  const handleSubmitWord = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!isPlaying) return;

    const cleanWord = inputWord.trim().toLowerCase();
    if (!cleanWord) {
      setErrorMessage('Silakan ketikkan kata terlebih dahulu.');
      return;
    }

    // 1. Check starting letter
    if (expectedChar && cleanWord[0] !== expectedChar) {
      soundManager.playError();
      setErrorMessage(
        `Kata harus diawali dengan huruf "${expectedChar.toUpperCase()}" (huruf akhir dari kata sebelumnya).`
      );
      return;
    }

    // 2. Check duplicate word in chain
    const alreadyUsed = chain.some((c) => c.word.toLowerCase() === cleanWord);
    if (alreadyUsed) {
      soundManager.playError();
      setErrorMessage(`Kata "${cleanWord}" sudah pernah dipakai dalam rantai ini! Gunakan kata lain.`);
      return;
    }

    // 3. Check expected category in selang_seling mode
    if (expectedCategory && selectedCategory !== expectedCategory) {
      soundManager.playError();
      setErrorMessage(
        `Pada mode Harmoni Selang-Seling, giliran ini wajib berupa ${
          expectedCategory === 'makhluk_hidup' ? 'Makhluk Hidup (Biotik)' : 'Makhluk Mati (Abiotik)'
        }.`
      );
      return;
    }

    // 4. Validate word with dictionary or provide educational verification
    const foundInBank = findWordInBank(cleanWord);

    if (foundInBank) {
      // Check if user's chosen category matches the scientific bank
      if (foundInBank.category !== selectedCategory) {
        soundManager.playError();
        setErrorMessage(
          `Secara ilmiah, "${cleanWord}" diklasifikasikan sebagai ${
            foundInBank.category === 'makhluk_hidup' ? 'Makhluk Hidup (Biotik)' : 'Makhluk Mati (Abiotik)'
          }, bukan ${
            selectedCategory === 'makhluk_hidup' ? 'Makhluk Hidup' : 'Makhluk Mati'
          }. Periksa ciri-cirinya!`
        );
        return;
      }
    }

    // Success! Prepare new chain record
    const points = 10 + Math.min(cleanWord.length, 10);
    const newRecord: ChainRecord = {
      word: cleanWord,
      category: selectedCategory,
      subCategory: foundInBank?.subCategory || (selectedCategory === 'makhluk_hidup' ? 'Organisme Biotik' : 'Objek Abiotik'),
      submittedBy:
        gameMode === 'pass_and_play'
          ? activeTurn === 'player1'
            ? 'Pemain 1'
            : 'Pemain 2'
          : 'Kamu',
      funFact:
        foundInBank?.funFact ||
        (selectedCategory === 'makhluk_hidup'
          ? `${cleanWord} memiliki sel hidup, bermetabolisme, dan memerlukan nutrisi untuk bertahan hidup.`
          : `${cleanWord} adalah benda tak hidup (abiotik) yang tidak bernapas dan tidak mengalami metabolisme seluler.`),
      characteristics:
        foundInBank?.characteristics ||
        (selectedCategory === 'makhluk_hidup'
          ? ['Bernapas', 'Tumbuh', 'Memerlukan Nutrisi']
          : ['Benda Mati', 'Tidak Bernapas', 'Komponen Fisik']),
      matchedChar: expectedChar || cleanWord[0],
      points,
    };

    const nextChain = [...chain, newRecord];
    setChain(nextChain);
    setLatestFactWord(newRecord);
    setInputWord('');
    setErrorMessage(null);
    setHintMessage(null);
    soundManager.playSuccess();

    // Time bonus in time attack mode
    if (gameMode === 'time_attack') {
      setTimeLeft((prev) => Math.min(prev + 3, 90));
    } else {
      setTimeLeft(25);
    }

    // Confetti celebration on milestones
    if (nextChain.length % 5 === 0) {
      soundManager.playFanfare();
      confetti({ particleCount: 50, spread: 70 });
    }

    // Switch turns
    if (gameMode === 'vs_bot') {
      setActiveTurn('bot');
    } else if (gameMode === 'pass_and_play') {
      setActiveTurn((prev) => (prev === 'player1' ? 'player2' : 'player1'));
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  // Hint / Petunjuk handler
  const handleRequestHint = () => {
    if (hintsRemaining <= 0 || !expectedChar) return;

    soundManager.playClick();
    const usedWords = new Set(chain.map((c) => c.word.toLowerCase()));
    const targetCat = expectedCategory || selectedCategory;
    const candidates = getAvailableWordsStartingWith(expectedChar, targetCat, usedWords);

    if (candidates.length > 0) {
      const sample = candidates[0];
      setHintMessage(
        `Petunjuk Kosa Kata: Awalan "${expectedChar.toUpperCase()}" untuk ${
          targetCat === 'makhluk_hidup' ? 'Makhluk Hidup' : 'Makhluk Mati'
        } contohnya "${sample.word}" (${sample.subCategory}).`
      );
      setHintsRemaining((prev) => prev - 1);
    } else {
      setHintMessage(
        `Petunjuk: Awalan "${expectedChar.toUpperCase()}" cukup menantang! Pikirkan objek di sekitar atau fauna/flora nusantara.`
      );
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6">
      {!isPlaying ? (
        /* Title & Mode Selection View */
        <div className="space-y-10">
          {/* Hero Banner Card */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="p-8 sm:p-12 lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-4">
                    <span className="text-emerald-700">Ilmu Pengetahuan Alam</span>
                    <span aria-hidden="true">·</span>
                    <span>Game Sambung Kata Edukatif</span>
                    <span aria-hidden="true">·</span>
                    <span>Biotik & Abiotik</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                    Sambung Kata Cerdas: Makhluk Hidup & Benda Mati
                  </h1>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    Uji ketajaman kosakata dan pemahaman biologi Anda! Hubungkan huruf akhir kata menjadi kata baru, bedakan organisme hidup (biotik) dari benda mati (abiotik), dan bangun rantai sains terpanjang.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => startGame('selang_seling')}
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Mulai Main Sekarang</span>
                  </button>

                  <button
                    onClick={() => startGame('vs_bot')}
                    className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                  >
                    <Bot className="w-4 h-4 text-emerald-700" />
                    <span>Duel Lawan BioBot</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 relative bg-slate-900 min-h-[260px] lg:min-h-full">
                <img
                  src="/src/assets/images/hero_living_nonliving_balance_1793037237210.jpg"
                  alt="Keseimbangan Makhluk Hidup dan Benda Mati"
                  className="w-full h-full object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                  <span className="text-xs text-white/90 font-medium">
                    Harmoni Ekosistem: Keterikatan Alam Biotik & Abiotik
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mode Selector Cards */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Pilih Mode Tantangan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Mode 1 */}
              <div
                onClick={() => startGame('selang_seling')}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-600/60 hover:shadow-sm transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-4 group-hover:scale-105 transition-transform">
                  🌱⚙️
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                  Harmoni Selang-Seling
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tantangan sains: Wajib bergantian memasukkan Makhluk Hidup lalu Makhluk Mati secara konsisten.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-700 font-semibold">
                  <span>Paling Direkomendasikan</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>

              {/* Mode 2 */}
              <div
                onClick={() => startGame('vs_bot')}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold mb-4 group-hover:scale-105 transition-transform">
                  <Bot className="w-5 h-5 text-sky-600" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-sky-700 transition-colors">
                  Duel Lawan BioBot
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tanding 1 lawan 1 dengan AI BioBot ilmuwan yang siap membalas kata dan membagikan trivia.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
                  <span>Tanding AI</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>

              {/* Mode 3 */}
              <div
                onClick={() => startGame('time_attack')}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold mb-4 group-hover:scale-105 transition-transform">
                  <Timer className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-amber-700 transition-colors">
                  Balap Waktu 60 Detik
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pacu ketangkasan berpikir! Kumpulkan rantai sebanyak mungkin; tiap kata benar menambah +3 detik.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
                  <span>Sprint Cepat</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>

              {/* Mode 4 */}
              <div
                onClick={() => startGame('pass_and_play')}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold mb-4 group-hover:scale-105 transition-transform">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-purple-700 transition-colors">
                  Pass & Play (2 Pemain)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ideal untuk kelas atau teman: Pemain 1 dan Pemain 2 bergantian mengisi kata di perangkat yang sama.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
                  <span>Multiplayer Lokal</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Active Game Play Arena */
        <div className="space-y-6">
          {/* Top Game HUD Strip */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div>
                <span className="text-xs text-slate-400 block font-medium">Mode</span>
                <span className="text-sm font-bold text-slate-900 capitalize">
                  {gameMode === 'selang_seling'
                    ? 'Harmoni Selang-Seling'
                    : gameMode === 'vs_bot'
                    ? 'Duel vs BioBot'
                    : gameMode === 'time_attack'
                    ? 'Balap Waktu'
                    : 'Pass & Play'}
                </span>
              </div>

              <div className="h-8 w-px bg-slate-200" />

              <div>
                <span className="text-xs text-slate-400 block font-medium">Panjang Rantai</span>
                <span className="text-sm font-bold text-slate-900 font-mono-tabular">
                  {chain.length} kata
                </span>
              </div>

              <div className="h-8 w-px bg-slate-200 hidden sm:block" />

              <div className="hidden sm:block">
                <span className="text-xs text-slate-400 block font-medium">Total Skor</span>
                <span className="text-sm font-bold text-emerald-700 font-mono-tabular">
                  {chain.reduce((a, b) => a + b.points, 0)}
                </span>
              </div>
            </div>

            {/* Timer and Turn status */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Timer className={`w-4 h-4 ${timeLeft <= 5 ? 'text-red-600 animate-pulse' : 'text-slate-400'}`} />
                <div className="text-right">
                  <span className={`text-base font-extrabold font-mono-tabular ${
                    timeLeft <= 5 ? 'text-red-600' : 'text-slate-900'
                  }`}>
                    {timeLeft}s
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  soundManager.playClick();
                  endSession('Pemain mengakhiri ronde');
                }}
                className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                Selesai / Menyerah
              </button>
            </div>
          </div>

          {/* Active Target Deck (Card with current letter & category requirements) */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs relative overflow-hidden">
            {/* Subtle background category badge illustrations */}
            <div className="absolute right-4 top-4 opacity-15 pointer-events-none hidden sm:block">
              {expectedCategory === 'makhluk_hidup' ? (
                <img
                  src="/src/assets/images/badge_biotic_nature_1793037238148.jpg"
                  alt="Biotik Badge"
                  className="w-28 h-28 object-contain rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <img
                  src="/src/assets/images/badge_abiotic_matter_1793037237935.jpg"
                  alt="Abiotik Badge"
                  className="w-28 h-28 object-contain rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              )}
            </div>

            <div className="relative z-10">
              {/* Turn indicator */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  {gameMode === 'vs_bot' ? (
                    activeTurn === 'bot' ? (
                      <span className="flex items-center gap-1.5 text-sky-600">
                        <Bot className="w-4 h-4" /> Giliran BioBot berpikir...
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-emerald-700">
                        <User className="w-4 h-4" /> Giliran Kamu Menjawab
                      </span>
                    )
                  ) : gameMode === 'pass_and_play' ? (
                    <span className="flex items-center gap-1.5 text-purple-700 font-bold">
                      <Users className="w-4 h-4" /> Giliran: {activeTurn === 'player1' ? 'Pemain 1' : 'Pemain 2'}
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-emerald-700">
                      <User className="w-4 h-4" /> Giliran Kamu
                    </span>
                  )}
                </div>

                {lastChainItem && (
                  <span className="text-xs text-slate-500">
                    Kata Sebelumnya:{' '}
                    <strong className="text-slate-900 capitalize font-mono-tabular">
                      {lastChainItem.word}
                    </strong>
                  </span>
                )}
              </div>

              {/* Huge letter prompt */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-6">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block mb-1">
                    Huruf Awalan Wajib
                  </span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl sm:text-6xl font-extrabold text-emerald-600 font-mono-tabular tracking-tight">
                      {expectedChar ? expectedChar.toUpperCase() : 'Bebas'}
                    </span>
                    <span className="text-sm text-slate-500">
                      {expectedChar ? `(Diawali huruf "${expectedChar.toUpperCase()}")` : 'Kata Pembuka'}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block mb-1">
                    Kategori Kata yang Dicari
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">
                      {expectedCategory === 'makhluk_hidup' ? '🌱' : '⚙️'}
                    </span>
                    <div>
                      <span className="text-base font-bold text-slate-900 block">
                        {expectedCategory === 'makhluk_hidup'
                          ? 'Makhluk Hidup (Biotik)'
                          : expectedCategory === 'makhluk_mati'
                          ? 'Makhluk Mati (Abiotik)'
                          : 'Bebas (Pilih Kategori)'}
                      </span>
                      <span className="text-xs text-slate-500">
                        {expectedCategory === 'makhluk_hidup'
                          ? 'Hewan, Tumbuhan, Jamur, Mikroba'
                          : expectedCategory === 'makhluk_mati'
                          ? 'Benda Buatan, Unsur Alam, Mineral'
                          : 'Tentukan apakah biotik atau abiotik'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bot thinking indicator */}
              {isBotThinking && (
                <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100 flex items-center gap-3 mb-6 animate-pulse">
                  <Bot className="w-5 h-5 text-sky-600" />
                  <span className="text-sm text-sky-900 font-medium">
                    BioBot sedang menganalisis kosa kata sains berawalan &ldquo;{expectedChar?.toUpperCase()}&rdquo;...
                  </span>
                </div>
              )}

              {/* Input Form */}
              {(!isBotThinking || activeTurn !== 'bot') && (
                <form onSubmit={handleSubmitWord} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-2">
                      Ketikkan Kata yang Dimaksud:
                    </label>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="relative flex-1">
                        <input
                          ref={inputRef}
                          type="text"
                          value={inputWord}
                          onChange={(e) => {
                            setInputWord(e.target.value);
                            if (errorMessage) setErrorMessage(null);
                          }}
                          placeholder={
                            expectedChar
                              ? `Ketik kata berawalan ${expectedChar.toUpperCase()}...`
                              : 'Ketik kata pertama...'
                          }
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-base font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition-all text-slate-900"
                          autoComplete="off"
                          autoCapitalize="none"
                        />
                      </div>

                      {/* Submit button */}
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-colors shrink-0 cursor-pointer"
                      >
                        <span>Kirim Kata</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Category confirmation buttons (if not locked in selang-seling mode) */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500 font-medium mr-1">Klasifikasi:</span>
                      <button
                        type="button"
                        disabled={expectedCategory !== null}
                        onClick={() => setSelectedCategory('makhluk_hidup')}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                          selectedCategory === 'makhluk_hidup'
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        } ${expectedCategory !== null ? 'opacity-85 cursor-not-allowed' : ''}`}
                      >
                        🌱 Makhluk Hidup
                      </button>
                      <button
                        type="button"
                        disabled={expectedCategory !== null}
                        onClick={() => setSelectedCategory('makhluk_mati')}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                          selectedCategory === 'makhluk_mati'
                            ? 'bg-amber-600 text-white'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        } ${expectedCategory !== null ? 'opacity-85 cursor-not-allowed' : ''}`}
                      >
                        ⚙️ Makhluk Mati
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleRequestHint}
                        disabled={hintsRemaining <= 0}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                          hintsRemaining > 0
                            ? 'border-slate-200 text-slate-700 bg-white hover:bg-slate-50'
                            : 'border-slate-100 text-slate-400 bg-slate-50 cursor-not-allowed'
                        }`}
                      >
                        <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
                        <span>Bantuan ({hintsRemaining})</span>
                      </button>
                    </div>
                  </div>

                  {/* Feedback or error message */}
                  {errorMessage && (
                    <div className="p-3 bg-red-50 text-red-800 rounded-xl border border-red-200 text-xs flex items-center gap-2 animate-shake">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Hint text */}
                  {hintMessage && (
                    <div className="p-3 bg-amber-50 text-amber-900 rounded-xl border border-amber-200 text-xs flex items-center gap-2">
                      <Info className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{hintMessage}</span>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* Latest Word Educational Spotlight */}
          {latestFactWord && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      latestFactWord.category === 'makhluk_hidup'
                        ? 'bg-emerald-500'
                        : 'bg-amber-500'
                    }`}
                  />
                  <span>Fakta Edukatif Kata Terakhir:</span>
                  <strong className="text-slate-900 capitalize text-sm">
                    {latestFactWord.word}
                  </strong>
                </span>
                <span className="text-slate-400">
                  Oleh: {latestFactWord.submittedBy}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                {latestFactWord.funFact}
              </p>
              {latestFactWord.characteristics && (
                <div className="flex flex-wrap gap-1.5">
                  {latestFactWord.characteristics.map((c, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Visual Chain History Trail */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center justify-between">
              <span>Rantai Kata Aktif ({chain.length})</span>
              <span className="text-xs text-slate-400 font-normal">
                Tersambung dari huruf akhir ke huruf awal
              </span>
            </h3>

            <div className="flex flex-wrap items-center gap-2">
              {chain.map((record, idx) => {
                const isLiving = record.category === 'makhluk_hidup';
                const firstChar = record.word[0].toUpperCase();
                const lastChar = record.word[record.word.length - 1].toUpperCase();

                return (
                  <React.Fragment key={idx}>
                    <div
                      className={`px-3 py-2 rounded-xl border text-xs flex items-center gap-2 transition-all ${
                        isLiving
                          ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                          : 'bg-amber-50/70 border-amber-200 text-amber-950'
                      }`}
                    >
                      <span className="font-mono-tabular font-bold text-[11px] text-slate-400">
                        {idx + 1}.
                      </span>
                      <div>
                        <span className="font-bold text-sm capitalize block">
                          <span className="underline decoration-2 decoration-emerald-500">
                            {firstChar}
                          </span>
                          {record.word.slice(1, -1)}
                          <span className="underline decoration-2 decoration-amber-500">
                            {lastChar}
                          </span>
                        </span>
                        <span className="text-[10px] text-slate-500 block truncate max-w-[120px]">
                          {isLiving ? '🌱 Biotik' : '⚙️ Abiotik'} · {record.subCategory}
                        </span>
                      </div>
                    </div>

                    {idx < chain.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
