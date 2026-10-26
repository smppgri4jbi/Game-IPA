/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ArenaPlay } from './components/ArenaPlay';
import { RulesSection } from './components/RulesSection';
import { EncyclopediaSection } from './components/EncyclopediaSection';
import { LifeTraitsSection } from './components/LifeTraitsSection';
import { StatsSection } from './components/StatsSection';
import { PlayerStats, ChainRecord } from './types';
import { soundManager } from './utils/audio';

const STORAGE_KEY_STATS = 'biorantai_stats_v1';
const STORAGE_KEY_CHAINS = 'biorantai_recent_chains_v1';

const DEFAULT_STATS: PlayerStats = {
  score: 0,
  longestChain: 0,
  totalWordsPlayed: 0,
  livingWordsCount: 0,
  nonLivingWordsCount: 0,
  gamesWon: 0,
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'arena' | 'cara' | 'ensiklopedia' | 'ciri' | 'statistik'>('arena');
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [stats, setStats] = useState<PlayerStats>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_STATS);
      return saved ? JSON.parse(saved) : DEFAULT_STATS;
    } catch {
      return DEFAULT_STATS;
    }
  });

  const [recentChains, setRecentChains] = useState<ChainRecord[][]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CHAINS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save stats to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify(stats));
    } catch {
      // Ignore
    }
  }, [stats]);

  // Save recent chains to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_CHAINS, JSON.stringify(recentChains));
    } catch {
      // Ignore
    }
  }, [recentChains]);

  const handleUpdateStats = (newStats: Partial<PlayerStats>) => {
    setStats((prev) => ({
      ...prev,
      ...newStats,
    }));
  };

  const handleAddSessionToHistory = (chain: ChainRecord[]) => {
    if (chain.length > 0) {
      setRecentChains((prev) => [chain, ...prev.slice(0, 19)]);
    }
  };

  const handleResetStats = () => {
    soundManager.playClick();
    setStats(DEFAULT_STATS);
    setRecentChains([]);
    try {
      localStorage.removeItem(STORAGE_KEY_STATS);
      localStorage.removeItem(STORAGE_KEY_CHAINS);
    } catch {
      // Ignore
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/60 flex flex-col text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Bar adhering to universal Top Bar Contract */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
        onResetGame={() => setActiveTab('arena')}
        isPlaying={activeTab === 'arena'}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'arena' && (
          <ArenaPlay
            stats={stats}
            onUpdateStats={handleUpdateStats}
            onAddSessionToHistory={handleAddSessionToHistory}
          />
        )}

        {activeTab === 'cara' && (
          <RulesSection onStartPlay={() => setActiveTab('arena')} />
        )}

        {activeTab === 'ensiklopedia' && (
          <EncyclopediaSection />
        )}

        {activeTab === 'ciri' && (
          <LifeTraitsSection />
        )}

        {activeTab === 'statistik' && (
          <StatsSection
            stats={stats}
            recentChains={recentChains}
            onResetStats={handleResetStats}
            onPlayAgain={() => setActiveTab('arena')}
          />
        )}
      </main>

      {/* Clean quiet educational footer */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">BioRantai</span>
            <span>·</span>
            <span>Media Pembelajaran Sambung Kata Sains (IPA SMP)</span>
            <span>·</span>
            <span className="text-emerald-700 font-medium">Biotik & Abiotik</span>
          </div>

          <div className="text-slate-400">
            Dibuat untuk pembelajaran interaktif biologi & kosa kata bahasa Indonesia.
          </div>
        </div>
      </footer>
    </div>
  );
}
