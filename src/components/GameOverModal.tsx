import React from 'react';
import { ChainRecord, GameMode } from '../types';
import { Trophy, RotateCcw, Award, CheckCircle, ArrowRight } from 'lucide-react';

interface GameOverModalProps {
  isOpen: boolean;
  score: number;
  chain: ChainRecord[];
  reason: string;
  gameMode: GameMode;
  onPlayAgain: () => void;
  onClose: () => void;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({
  isOpen,
  score,
  chain,
  reason,
  gameMode,
  onPlayAgain,
  onClose,
}) => {
  if (!isOpen) return null;

  const livingCount = chain.filter((c) => c.category === 'makhluk_hidup').length;
  const nonLivingCount = chain.filter((c) => c.category === 'makhluk_mati').length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in duration-200">
        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200">
            <Trophy className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Sesi Permainan Selesai
          </h2>
          <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
            {reason || 'Rantai kata telah berakhir. Kerja bagus dalam menghubungkan makhluk hidup & benda mati!'}
          </p>
        </div>

        {/* Score & Chain summary */}
        <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/80 mb-6 text-center">
          <div>
            <span className="text-xs text-slate-500 block mb-0.5">Total Skor</span>
            <span className="text-2xl font-extrabold text-emerald-700 font-mono-tabular">
              {score}
            </span>
          </div>
          <div className="border-x border-slate-200">
            <span className="text-xs text-slate-500 block mb-0.5">Panjang Rantai</span>
            <span className="text-2xl font-extrabold text-slate-900 font-mono-tabular">
              {chain.length}
            </span>
          </div>
          <div>
            <span className="text-xs text-slate-500 block mb-0.5">Rasio Kata</span>
            <span className="text-xs font-semibold text-slate-700 font-mono-tabular block mt-1">
              {livingCount} Biotik · {nonLivingCount} Abiotik
            </span>
          </div>
        </div>

        {/* Chain Review List */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            Rantai Kata yang Telah Terbentuk ({chain.length})
          </h4>
          <div className="max-h-48 overflow-y-auto space-y-2 p-3 bg-slate-50/70 rounded-xl border border-slate-200">
            {chain.length === 0 ? (
              <p className="text-xs text-slate-400 text-center py-4">Belum ada kata dalam rantai.</p>
            ) : (
              chain.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-100 text-xs shadow-2xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono-tabular text-slate-400 font-semibold w-5 text-right">
                      {idx + 1}.
                    </span>
                    <span className="font-bold text-slate-900 capitalize text-sm">
                      {item.word}
                    </span>
                    <span className="text-slate-400">·</span>
                    <span
                      className={`font-medium ${
                        item.category === 'makhluk_hidup' ? 'text-emerald-700' : 'text-amber-700'
                      }`}
                    >
                      {item.category === 'makhluk_hidup' ? 'Makhluk Hidup' : 'Makhluk Mati'}
                    </span>
                  </div>
                  <span className="text-slate-400 text-[11px] font-mono-tabular">
                    +{item.points} poin
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Lihat Arena
          </button>
          <button
            onClick={onPlayAgain}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Main Lagi</span>
          </button>
        </div>
      </div>
    </div>
  );
};
