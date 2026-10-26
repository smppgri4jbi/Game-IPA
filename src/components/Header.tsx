import React from 'react';
import { Volume2, VolumeX, RotateCcw } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface HeaderProps {
  activeTab: 'arena' | 'cara' | 'ensiklopedia' | 'ciri' | 'statistik';
  setActiveTab: (tab: 'arena' | 'cara' | 'ensiklopedia' | 'ciri' | 'statistik') => void;
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
  onResetGame: () => void;
  isPlaying: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  isMuted,
  setIsMuted,
  onResetGame,
  isPlaying,
}) => {
  const toggleSound = () => {
    const nextState = soundManager.toggleMute();
    setIsMuted(nextState);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => setActiveTab('arena')}
            className="text-xl font-bold tracking-tight text-slate-900 hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
          >
            BioRantai
          </button>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              onClick={() => setActiveTab('arena')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'arena' ? 'text-emerald-700 font-semibold' : ''
              }`}
            >
              Arena Main
            </button>
            <button
              onClick={() => setActiveTab('cara')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'cara' ? 'text-emerald-700 font-semibold' : ''
              }`}
            >
              Cara Main
            </button>
            <button
              onClick={() => setActiveTab('ensiklopedia')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'ensiklopedia' ? 'text-emerald-700 font-semibold' : ''
              }`}
            >
              Ensiklopedia
            </button>
            <button
              onClick={() => setActiveTab('ciri')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'ciri' ? 'text-emerald-700 font-semibold' : ''
              }`}
            >
              8 Ciri Hidup
            </button>
            <button
              onClick={() => setActiveTab('statistik')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'statistik' ? 'text-emerald-700 font-semibold' : ''
              }`}
            >
              Statistik
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleSound}
              title={isMuted ? 'Nyalakan Suara' : 'Matikan Suara'}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label={isMuted ? 'Nyalakan Suara' : 'Matikan Suara'}
            >
              {isMuted ? <VolumeX className="w-5 h-5 text-slate-400" /> : <Volume2 className="w-5 h-5 text-emerald-600" />}
            </button>

            {isPlaying && (
              <button
                onClick={onResetGame}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Ronde Baru</span>
              </button>
            )}

            {!isPlaying && (
              <button
                onClick={() => {
                  setActiveTab('arena');
                  onResetGame();
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
              >
                Mulai Game
              </button>
            )}
          </div>
        </div>

        {/* Mobile secondary navigation strip */}
        <div className="flex md:hidden overflow-x-auto py-2 gap-4 border-t border-slate-100 text-xs font-medium text-slate-600 scrollbar-none">
          <button
            onClick={() => setActiveTab('arena')}
            className={`whitespace-nowrap shrink-0 ${activeTab === 'arena' ? 'text-emerald-700 font-bold' : ''}`}
          >
            Arena
          </button>
          <button
            onClick={() => setActiveTab('cara')}
            className={`whitespace-nowrap shrink-0 ${activeTab === 'cara' ? 'text-emerald-700 font-bold' : ''}`}
          >
            Aturan
          </button>
          <button
            onClick={() => setActiveTab('ensiklopedia')}
            className={`whitespace-nowrap shrink-0 ${activeTab === 'ensiklopedia' ? 'text-emerald-700 font-bold' : ''}`}
          >
            Ensiklopedia
          </button>
          <button
            onClick={() => setActiveTab('ciri')}
            className={`whitespace-nowrap shrink-0 ${activeTab === 'ciri' ? 'text-emerald-700 font-bold' : ''}`}
          >
            Ciri IPA
          </button>
          <button
            onClick={() => setActiveTab('statistik')}
            className={`whitespace-nowrap shrink-0 ${activeTab === 'statistik' ? 'text-emerald-700 font-bold' : ''}`}
          >
            Rekor
          </button>
        </div>
      </div>
    </header>
  );
};
