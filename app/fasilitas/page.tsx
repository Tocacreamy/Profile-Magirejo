"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Fasilitas() {
  return (
    <main className="relative w-full bg-white">
      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center"
          >
            Fasilitas Padukuhan Magirejo
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeUp}
            className="mx-auto mt-4 max-w-3xl text-center text-gray-600 text-sm sm:text-base"
          >
            Masjid & sarana ibadah, balai padukuhan, serta layanan kesehatan
            masyarakat.
          </motion.p>
        </div>
      </section>

      {/* Content sections */}
      <section className="relative w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 md:pb-24">
          {/* Table of Contents */}
          <nav aria-label="Daftar isi" className="mb-8 md:mb-10">
            <ul className="flex flex-wrap gap-2 sm:gap-3">
              {[
                ["Masjid & Sarana Ibadah", "#masjid"],
                ["Balai Padukuhan", "#balai"],
                ["Posyandu & Posbindu", "#posyandu"],
              ].map(([label, href]) => (
                <li key={href as string}>
                  <a
                    href={href as string}
                    className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-3 py-1.5 text-xs sm:text-sm text-gray-700 shadow-sm hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {label as string}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Masjid & Sarana Ibadah */}
          <article
            id="masjid"
            className="scroll-mt-24 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-10"
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-1 text-xl sm:text-2xl font-bold text-gray-900"
            >
              Masjid & Sarana Ibadah
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-2 space-y-4 rounded-2xl border bg-white p-6 md:p-8 shadow-sm text-gray-700 text-sm sm:text-base leading-relaxed"
            >
              <p>
                Padukuhan Magirejo memiliki beberapa masjid yang menjadi pusat
                kegiatan keagamaan sekaligus sosial kemasyarakatan, antara lain:
              </p>
              <ul className="grid gap-3">
                {[
                  "Masjid Al-Barokah",
                  "Masjid Assakinah",
                  "Masjid Al-Muslim",
                ].map((item) => (
                  <li key={item} className="pl-6 relative">
                    <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Selain digunakan untuk sholat berjamaah, masjid juga menjadi
                tempat TPA (Taman Pendidikan Al-Qur’an), pengajian rutin,
                yasinan, khataman, tahlilan, sholawatan, dan kegiatan hari besar
                Islam.
              </p>
            </motion.div>
          </article>

          {/* Balai Padukuhan */}
          <article
            id="balai"
            className="scroll-mt-24 mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-10"
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-1 text-xl sm:text-2xl font-bold text-gray-900"
            >
              Balai Padukuhan
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-2 space-y-4 rounded-2xl border bg-white p-6 md:p-8 shadow-sm text-gray-700 text-sm sm:text-base leading-relaxed"
            >
              <p>
                Kegiatan pemerintahan dan musyawarah warga biasanya dilaksanakan
                di rumah Kepala Dukuh yang difungsikan sebagai balai padukuhan.
                Tempat ini menjadi pusat koordinasi berbagai kegiatan, mulai
                dari rapat RT/RW, pertemuan organisasi masyarakat (PKK, Karang
                Taruna, Kelompok Tani, Kelompok Ternak), hingga sosialisasi
                program pembangunan.
              </p>
            </motion.div>
          </article>

          {/* Posyandu & Posbindu */}
          <article
            id="posyandu"
            className="scroll-mt-24 mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-10"
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-1 text-xl sm:text-2xl font-bold text-gray-900"
            >
              Posyandu & Posbindu
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-2 space-y-4 rounded-2xl border bg-white p-6 md:p-8 shadow-sm text-gray-700 text-sm sm:text-base leading-relaxed"
            >
              <p>
                Untuk mendukung kesehatan masyarakat, Padukuhan Magirejo
                memiliki beberapa pos layanan kesehatan masyarakat, di
                antaranya:
              </p>
              <ul className="grid gap-3">
                {[
                  "Posyandu Anak & Balita",
                  "Posbindu Usia Produktif",
                  "Posbindu Lansia",
                ].map((item) => (
                  <li key={item} className="pl-6 relative">
                    <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Posyandu rutin dilaksanakan oleh kader PKK dengan dukungan
                tenaga kesehatan, sebagai upaya menjaga kesehatan ibu, anak, dan
                lansia, serta mendukung program penurunan angka stunting.
              </p>
            </motion.div>
          </article>

          {/* Back to top */}
          <div className="mt-12 flex justify-end">
            <a
              href="#main-content"
              className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm text-gray-700 shadow-sm hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Kembali ke atas
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
