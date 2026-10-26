import React, { useState, useMemo } from 'react';
import { WORD_BANK, BioWord, ItemCategory } from '../data/wordBank';
import { Search, Filter, Sparkles, BookOpen, ChevronRight, X } from 'lucide-react';

export const EncyclopediaSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | ItemCategory>('all');
  const [selectedLetter, setSelectedLetter] = useState<string>('all');
  const [activeWordModal, setActiveWordModal] = useState<BioWord | null>(null);

  // Alphabet list for letter filter
  const alphabet = useMemo(() => {
    const letters = new Set<string>();
    WORD_BANK.forEach((w) => letters.add(w.word[0].toUpperCase()));
    return Array.from(letters).sort();
  }, []);

  // Filtered words
  const filteredWords = useMemo(() => {
    return WORD_BANK.filter((item) => {
      if (categoryFilter !== 'all' && item.category !== categoryFilter) {
        return false;
      }
      if (selectedLetter !== 'all' && item.word[0].toUpperCase() !== selectedLetter) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesWord = item.word.toLowerCase().includes(q);
        const matchesSub = item.subCategory.toLowerCase().includes(q);
        const matchesFact = item.funFact.toLowerCase().includes(q);
        if (!matchesWord && !matchesSub && !matchesFact) return false;
      }
      return true;
    }).sort((a, b) => a.word.localeCompare(b.word));
  }, [categoryFilter, selectedLetter, searchQuery]);

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          Ensiklopedia Kata: Biotik & Abiotik
        </h1>
        <p className="text-slate-600 text-base max-w-3xl leading-relaxed">
          Koleksi kosakata ilmiah dan objek alam terlengkap untuk permainan sambung kata. Pelajari taksonomi, karakteristik hidup, serta fakta sains menarik dari setiap kata.
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari kata (contoh: kaktus, elang, kristal, air)..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition-all text-slate-900"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl shrink-0">
            <button
              onClick={() => setCategoryFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                categoryFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua ({WORD_BANK.length})
            </button>
            <button
              onClick={() => setCategoryFilter('makhluk_hidup')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                categoryFilter === 'makhluk_hidup'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Makhluk Hidup
            </button>
            <button
              onClick={() => setCategoryFilter('makhluk_mati')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                categoryFilter === 'makhluk_mati'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Makhluk Mati
            </button>
          </div>
        </div>

        {/* Alphabet Letter Bar */}
        <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs text-slate-400 font-medium mr-1 flex items-center gap-1 shrink-0">
            <Filter className="w-3 h-3" /> Huruf:
          </span>
          <button
            onClick={() => setSelectedLetter('all')}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors shrink-0 cursor-pointer ${
              selectedLetter === 'all'
                ? 'bg-slate-900 text-white font-semibold'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Semua
          </button>
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`w-7 h-7 flex items-center justify-center text-xs font-semibold rounded-md transition-colors shrink-0 cursor-pointer ${
                selectedLetter === letter
                  ? 'bg-emerald-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Word Count Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 mb-4 px-1">
        <span>
          Menampilkan <strong className="text-slate-900 font-mono-tabular">{filteredWords.length}</strong> entri kosakata
        </span>
        <span className="text-slate-400">Klik kartu kata untuk membaca fakta ilmiah</span>
      </div>

      {/* Words Grid */}
      {filteredWords.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-2xl border border-slate-200">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-slate-800 mb-1">Kata tidak ditemukan</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Coba sesuaikan kata kunci pencarian atau ubah filter huruf dan kategori di atas.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredWords.map((item) => {
            const isLiving = item.category === 'makhluk_hidup';
            return (
              <div
                key={item.word}
                onClick={() => setActiveWordModal(item)}
                className="bg-white p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isLiving ? 'bg-emerald-500' : 'bg-amber-500'
                        }`}
                      />
                      <span>{isLiving ? 'Makhluk Hidup' : 'Makhluk Mati'}</span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate max-w-[130px]">{item.subCategory}</span>
                    </span>
                    <span className="text-xs text-slate-400 font-mono-tabular uppercase font-bold">
                      {item.word[0]}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 capitalize group-hover:text-emerald-700 transition-colors">
                    {item.word}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                    {item.funFact}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="text-slate-400 text-[11px]">
                    Akhiran: <strong className="text-slate-700 uppercase font-mono-tabular">{item.word[item.word.length - 1]}</strong>
                  </span>
                  <span className="text-emerald-700 font-medium inline-flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                    Detail <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Word Detail Modal */}
      {activeWordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-xl border border-slate-200 relative animate-in fade-in zoom-in duration-150">
            <button
              onClick={() => setActiveWordModal(null)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
              <span className={`w-2.5 h-2.5 rounded-full ${
                activeWordModal.category === 'makhluk_hidup' ? 'bg-emerald-500' : 'bg-amber-500'
              }`} />
              <span className="font-semibold text-slate-700">
                {activeWordModal.category === 'makhluk_hidup' ? 'Makhluk Hidup (Biotik)' : 'Makhluk Mati (Abiotik)'}
              </span>
              <span aria-hidden="true">·</span>
              <span>{activeWordModal.subCategory}</span>
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 capitalize mb-4">
              {activeWordModal.word}
            </h2>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/70 mb-5">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Fakta Edukatif & Penjelasan Sains
              </span>
              <p className="text-sm text-slate-700 leading-relaxed">
                {activeWordModal.funFact}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">
                Karakteristik & Ciri Khusus:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeWordModal.characteristics.map((c, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 flex items-center justify-between text-xs text-emerald-900">
              <span>
                Huruf Awal: <strong className="uppercase font-mono-tabular font-bold">{activeWordModal.word[0]}</strong>
              </span>
              <span>
                Huruf Sambung Selanjutnya: <strong className="uppercase font-mono-tabular font-bold text-emerald-700">{activeWordModal.word[activeWordModal.word.length - 1]}</strong>
              </span>
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => setActiveWordModal(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
