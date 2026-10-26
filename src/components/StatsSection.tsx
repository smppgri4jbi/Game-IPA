import React from 'react';
import { PlayerStats, ChainRecord } from '../types';
import { Trophy, Award, Zap, BookCheck, RotateCcw } from 'lucide-react';

interface StatsSectionProps {
  stats: PlayerStats;
  recentChains: ChainRecord[][];
  onResetStats: () => void;
  onPlayAgain: () => void;
}

export const StatsSection: React.FC<StatsSectionProps> = ({
  stats,
  recentChains,
  onResetStats,
  onPlayAgain,
}) => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-200 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Statistik & Pencapaian Belajar
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Pantau rekor rantai kata terpanjang, total kosa kata yang dikuasai, dan rasio biotik vs abiotik.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onResetStats}
            className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            Reset Rekor
          </button>
          <button
            onClick={onPlayAgain}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer"
          >
            Main Lagi
          </button>
        </div>
      </div>

      {/* KPI 4-Card Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Rantai Terpanjang
            </span>
            <Trophy className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-3xl font-extrabold text-slate-900 font-mono-tabular">
            {stats.longestChain}
          </div>
          <span className="text-xs text-slate-500 mt-1 block">Kata beruntun</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Total Skor
            </span>
            <Zap className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-3xl font-extrabold text-slate-900 font-mono-tabular">
            {stats.score}
          </div>
          <span className="text-xs text-slate-500 mt-1 block">Poin akumulasi</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Kata Biotik
            </span>
            <BookCheck className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-3xl font-extrabold text-emerald-700 font-mono-tabular">
            {stats.livingWordsCount}
          </div>
          <span className="text-xs text-slate-500 mt-1 block">Makhluk Hidup</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Kata Abiotik
            </span>
            <Award className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-3xl font-extrabold text-amber-700 font-mono-tabular">
            {stats.nonLivingWordsCount}
          </div>
          <span className="text-xs text-slate-500 mt-1 block">Benda / Makhluk Mati</span>
        </div>
      </div>

      {/* Visual Balance Bar */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs mb-8">
        <h3 className="text-sm font-bold text-slate-900 mb-2">
          Keseimbangan Pemahaman Biotik & Abiotik
        </h3>
        <p className="text-xs text-slate-600 mb-4">
          Perbandingan proporsi kata makhluk hidup vs makhluk mati yang pernah kamu mainkan:
        </p>

        {stats.totalWordsPlayed > 0 ? (
          <div>
            <div className="h-4 bg-slate-100 rounded-full overflow-hidden flex">
              <div
                style={{
                  width: `${(stats.livingWordsCount / stats.totalWordsPlayed) * 100}%`,
                }}
                className="bg-emerald-600 h-full transition-all duration-500"
              />
              <div
                style={{
                  width: `${(stats.nonLivingWordsCount / stats.totalWordsPlayed) * 100}%`,
                }}
                className="bg-amber-500 h-full transition-all duration-500"
              />
            </div>
            <div className="flex items-center justify-between text-xs text-slate-600 mt-2 font-mono-tabular">
              <span className="text-emerald-700 font-semibold">
                🌱 Biotik: {Math.round((stats.livingWordsCount / stats.totalWordsPlayed) * 100)}% ({stats.livingWordsCount} kata)
              </span>
              <span className="text-amber-700 font-semibold">
                ⚙️ Abiotik: {Math.round((stats.nonLivingWordsCount / stats.totalWordsPlayed) * 100)}% ({stats.nonLivingWordsCount} kata)
              </span>
            </div>
          </div>
        ) : (
          <div className="text-xs text-slate-400 py-3 text-center bg-slate-50 rounded-lg">
            Belum ada kata yang dimainkan. Mulai permainan di tab Arena!
          </div>
        )}
      </div>

      {/* Recent Game Chains History */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 mb-4">
          Riwayat Rantai Kata Terakhir
        </h3>
        {recentChains.length === 0 ? (
          <div className="text-xs text-slate-400 text-center py-6">
            Belum ada riwayat sesi yang tersimpan.
          </div>
        ) : (
          <div className="space-y-4">
            {recentChains.slice(0, 5).map((chain, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-medium">
                  <span>Sesi #{recentChains.length - idx}</span>
                  <span>Panjang: <strong className="text-slate-900 font-mono-tabular">{chain.length} kata</strong></span>
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  {chain.map((c, cIdx) => (
                    <React.Fragment key={cIdx}>
                      <span
                        className={`text-xs px-2.5 py-1 rounded-md font-medium capitalize ${
                          c.category === 'makhluk_hidup'
                            ? 'bg-emerald-100/80 text-emerald-900'
                            : 'bg-amber-100/80 text-amber-900'
                        }`}
                        title={`${c.word} (${c.category === 'makhluk_hidup' ? 'Biotik' : 'Abiotik'}) - ${c.subCategory}`}
                      >
                        {c.word}
                      </span>
                      {cIdx < chain.length - 1 && (
                        <span className="text-slate-400 text-xs">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
