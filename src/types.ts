import { ItemCategory, BioWord } from './data/wordBank';

export type GameMode = 'selang_seling' | 'vs_bot' | 'time_attack' | 'pass_and_play';

export interface ChainRecord {
  word: string;
  category: ItemCategory;
  subCategory: string;
  submittedBy: string;
  funFact: string;
  characteristics?: string[];
  matchedChar: string; // The char that connected this word
  points: number;
}

export type ActiveTurn = 'player' | 'player1' | 'player2' | 'bot';

export interface GameSettings {
  mode: GameMode;
  turnTimeLimit: number; // in seconds, e.g. 20s
  difficulty: 'santai' | 'standar' | 'ahli';
  requireCategoryToggle: boolean; // whether player must explicitly classify their word
}

export interface PlayerStats {
  score: number;
  longestChain: number;
  totalWordsPlayed: number;
  livingWordsCount: number;
  nonLivingWordsCount: number;
  gamesWon: number;
}
