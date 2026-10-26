import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldAlert, Award } from 'lucide-react';

interface RulesSectionProps {
  onStartPlay: () => void;
}

export const RulesSection: React.FC<RulesSectionProps> = ({ onStartPlay }) => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          Pedoman & Cara Bermain BioRantai
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          BioRantai adalah permainan sambung kata edukatif yang mengasah perbendaharaan kosa kata sekaligus pemahaman sains biologi mengenai perbedaan mendasar antara Makhluk Hidup (Biotik) dan Makhluk Mati / Benda Tak Hidup (Abiotik).
        </p>
      </div>

      {/* Visual theme banner */}
      <div className="mb-10 rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm relative">
        <img
          src="/src/assets/images/hero_living_nonliving_balance_1793037237210.jpg"
          alt="Harmoni Makhluk Hidup dan Benda Abiotik"
          className="w-full h-56 sm:h-72 object-cover opacity-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-6">
          <div className="text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-1">
              Dua Dunia dalam Satu Rantai Kata
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
              Setiap organisme di bumi bergantung pada unsur abiotik, dan keduanya saling terhubung dalam rantai pengetahuan alam.
            </p>
          </div>
        </div>
      </div>

      {/* 4 Core Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">
              1
            </span>
            <h3 className="font-semibold text-slate-900 text-base">Aturan Huruf Terakhir</h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Kata yang dimasukkan harus diawali dengan <strong className="text-slate-900">huruf terakhir</strong> dari kata sebelumnya.
          </p>
          <div className="mt-3 p-3 bg-slate-50 rounded-lg text-xs text-slate-700 flex items-center gap-2">
            <span className="font-semibold text-emerald-700">Kucin<u>G</u></span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-sky-700"><u>G</u>aja<u>H</u></span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-amber-700"><u>H</u>elikopte<u>R</u></span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center font-bold text-sm">
              2
            </span>
            <h3 className="font-semibold text-slate-900 text-base">Ketepatan Tema (Biotik & Abiotik)</h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Kata harus berupa <strong className="text-emerald-700">Makhluk Hidup</strong> (hewan, tumbuhan, jamur, mikroba) atau <strong className="text-amber-700">Makhluk Mati</strong> (benda buatan, mineral, batu, air, udara, fenomena fisik).
          </p>
          <div className="mt-3 p-3 bg-slate-50 rounded-lg text-xs text-slate-700 flex items-center justify-between">
            <span className="text-emerald-700">🌱 Biotik: Elang, Mawar, Bakteri</span>
            <span className="text-amber-700">⚙️ Abiotik: Meja, Pasir, Emas</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-sm">
              3
            </span>
            <h3 className="font-semibold text-slate-900 text-base">Mode Selang-Seling (Harmoni)</h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Pada mode utama permainan, Anda ditantang untuk bergantian antara Makhluk Hidup dan Benda Mati secara disiplin:
          </p>
          <div className="mt-3 text-xs text-slate-700 space-y-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Kata 1: Makhluk Hidup (misal: <em>Ayam</em>)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
              <span>Kata 2: Makhluk Mati (misal: <em>Mobil</em>)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Kata 3: Makhluk Hidup (misal: <em>Lumut</em>)</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-sm">
              4
            </span>
            <h3 className="font-semibold text-slate-900 text-base">Tidak Boleh Kata Berulang</h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Setiap kata hanya dapat digunakan <strong className="text-slate-900">1 kali</strong> dalam satu sesi permainan. Memasukkan kata yang sudah ada di rantai akan dianggap pelanggaran rantai.
          </p>
          <div className="mt-3 p-3 bg-red-50/60 rounded-lg text-xs text-red-800 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-red-600 shrink-0" />
            <span>Mencegah pengulangan kata yang sama untuk melatih variasi kosakata ilmiah.</span>
          </div>
        </div>
      </div>

      {/* Modes breakdown */}
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-10">
        <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-emerald-600" />
          Pilihan Mode Permainan
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <h4 className="font-semibold text-slate-900 text-sm mb-1">Harmoni Selang-Seling</h4>
            <p className="text-xs text-slate-600">
              Bergantian wajib antara Hidup dan Mati. Menguji akurasi konsep sains dan kelincahan kata.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <h4 className="font-semibold text-slate-900 text-sm mb-1">Duel Lawan BioBot</h4>
            <p className="text-xs text-slate-600">
              Tanding sambung kata melawan AI BioBot yang cerdas dan menyertakan fakta ilmiah di setiap langkahnya.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <h4 className="font-semibold text-slate-900 text-sm mb-1">Balap Waktu 60 Detik</h4>
            <p className="text-xs text-slate-600">
              Kumpulkan rantai sebanyak mungkin sebelum waktu habis! Tiap kata benar menambah bonus waktu 3 detik.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <h4 className="font-semibold text-slate-900 text-sm mb-1">Pass & Play (2 Pemain)</h4>
            <p className="text-xs text-slate-600">
              Main bergiliran bersama teman atau murid di satu layar. Siapa yang buntu terlebih dahulu kehilangan poin!
            </p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <button
          onClick={onStartPlay}
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm transition-colors cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          <span>Mulai Bermain Sekarang</span>
        </button>
      </div>
    </div>
  );
};
