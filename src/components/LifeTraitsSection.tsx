import React, { useState } from 'react';
import { CIRI_MAKHLUK_HIDUP, LifeTrait } from '../data/wordBank';
import { Check, X, BookOpen, Sparkles } from 'lucide-react';

export const LifeTraitsSection: React.FC = () => {
  const [selectedTrait, setSelectedTrait] = useState<LifeTrait>(CIRI_MAKHLUK_HIDUP[0]);

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          8 Ciri Pokok Makhluk Hidup vs Benda Mati
        </h1>
        <p className="text-slate-600 text-base max-w-3xl leading-relaxed">
          Berdasarkan standar kurikulum Ilmu Pengetahuan Alam (IPA SMP), suatu objek diklasifikasikan sebagai makhluk hidup (biotik) apabila memenuhi kedelapan ciri kehidupan berikut, yang membedakannya secara mutlak dari benda mati (abiotik).
        </p>
      </div>

      {/* Grid selector of 8 traits */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {CIRI_MAKHLUK_HIDUP.map((trait) => {
          const isSelected = selectedTrait.id === trait.id;
          return (
            <button
              key={trait.id}
              onClick={() => setSelectedTrait(trait)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                isSelected
                  ? 'border-emerald-600 bg-emerald-50/50 shadow-xs ring-1 ring-emerald-600'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span className="text-xs font-semibold text-emerald-700 tracking-wider uppercase block mb-1">
                {trait.nameEn}
              </span>
              <h3 className="text-sm font-bold text-slate-900 line-clamp-1">{trait.name}</h3>
            </button>
          );
        })}
      </div>

      {/* Active Trait Comparison Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-4">
          <div>
            <span className="text-xs font-semibold text-emerald-700 block mb-1">
              Fokus Karakteristik Biologi
            </span>
            <h2 className="text-2xl font-bold text-slate-900">{selectedTrait.name}</h2>
            <p className="text-xs text-slate-500 font-mono-tabular mt-0.5">Istilah Ilmiah: {selectedTrait.nameEn}</p>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              Syarat Wajib Kehidupan
            </span>
          </div>
        </div>

        <p className="text-slate-700 text-base leading-relaxed mb-8 bg-slate-50 p-4 rounded-xl border border-slate-200/70">
          {selectedTrait.description}
        </p>

        {/* Side by side comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Makhluk Hidup */}
          <div className="p-6 rounded-xl border border-emerald-200 bg-emerald-50/30">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <h3 className="font-bold text-emerald-900 text-base">Pada Makhluk Hidup (Biotik)</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {selectedTrait.livingExample}
            </p>
          </div>

          {/* Benda Mati */}
          <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/60">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-slate-500 text-white flex items-center justify-center">
                <X className="w-4 h-4 stroke-[3]" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Pada Benda Mati (Abiotik)</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {selectedTrait.nonLivingContrast}
            </p>
          </div>
        </div>
      </div>

      {/* Summary Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="p-5 border-b border-slate-200 bg-slate-50/80 flex items-center justify-between">
          <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            Tabel Ringkasan Perbedaan Biotik vs Abiotik
          </h3>
          <span className="text-xs text-slate-500">Materi IPA SMP Terpadu</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-700 bg-slate-50">
                <th className="p-3.5 font-semibold">Ciri & Parameter</th>
                <th className="p-3.5 font-semibold text-emerald-800">Makhluk Hidup (Biotik)</th>
                <th className="p-3.5 font-semibold text-slate-700">Makhluk Mati (Abiotik)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="p-3.5 font-medium text-slate-900">Unit Struktural Terkecil</td>
                <td className="p-3.5 text-emerald-900">Sel (memiliki membran sel, sitoplasma, DNA)</td>
                <td className="p-3.5">Atom atau molekul tanpa sel dan tanpa metabolisme biologis</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-slate-900">Aktivitas Biokimia</td>
                <td className="p-3.5 text-emerald-900">Melakukan anabolisme dan katabolisme (metabolisme)</td>
                <td className="p-3.5">Hanya mengalami perubahan fisika atau reaksi kimia eksternal</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-slate-900">Pertambahan Massa & Ukuran</td>
                <td className="p-3.5 text-emerald-900">Tumbuh secara ireversibel dari dalam sel tubuh</td>
                <td className="p-3.5">Ukuran tidak bertambah secara mandiri (hanya menumpuk partikel)</td>
              </tr>
              <tr>
                <td className="p-3.5 font-medium text-slate-900">Ketergantungan Ekologis</td>
                <td className="p-3.5 text-emerald-900">Sangat membutuhkan air, oksigen, tanah, dan cahaya</td>
                <td className="p-3.5">Menjadi penyokong habitat dan unsur fisik pendukung kehidupan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
