"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Organisasi() {
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
            Organisasi Padukuhan Magirejo
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeUp}
            className="mx-auto mt-4 max-w-3xl text-center text-gray-600 text-sm sm:text-base"
          >
            PKK, Karang Taruna, Kelompok Tani, Kelompok Ternak, dan Takmir
            Masjid.
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
                ["PKK", "#pkk"],
                ["Karang Taruna", "#karang-taruna"],
                ["Kelompok Tani", "#kelompok-tani"],
                ["Kelompok Ternak", "#kelompok-ternak"],
                ["Takmir Masjid", "#takmir-masjid"],
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

          {/* PKK */}
          <article
            id="pkk"
            className="scroll-mt-24 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-10"
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-1 text-xl sm:text-2xl font-bold text-gray-900"
            >
              PKK (Pemberdayaan Kesejahteraan Keluarga)
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-2 space-y-4 rounded-2xl border bg-white p-6 md:p-8 shadow-sm text-gray-700 text-sm sm:text-base leading-relaxed"
            >
              <p>
                PKK Padukuhan Magirejo berperan penting dalam peningkatan
                kesejahteraan keluarga, khususnya kaum ibu. Kegiatan PKK
                meliputi:
              </p>
              <ul className="grid gap-3">
                {[
                  "Pembinaan kesehatan keluarga melalui Posyandu balita, Posyandu anak, Posbindu usia produktif, dan Posbindu lansia",
                  "Kegiatan keterampilan rumah tangga, seperti pembuatan kue dan kerajinan",
                  "Penguatan peran ibu dalam pendidikan anak dan kehidupan sosial masyarakat",
                  "Mendukung program pemerintah, terutama terkait penurunan angka stunting",
                ].map((item) => (
                  <li key={item} className="pl-6 relative">
                    <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                <span className="font-semibold text-gray-900">Ketua PKK:</span>{" "}
                Rubini
              </p>
            </motion.div>
          </article>

          {/* Karang Taruna */}
          <article
            id="karang-taruna"
            className="scroll-mt-24 mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-10"
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-1 text-xl sm:text-2xl font-bold text-gray-900"
            >
              Karang Taruna
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-2 space-y-4 rounded-2xl border bg-white p-6 md:p-8 shadow-sm text-gray-700 text-sm sm:text-base leading-relaxed"
            >
              <p>
                Karang Taruna Magirejo menjadi wadah bagi pemuda-pemudi dusun
                untuk mengembangkan diri dalam kegiatan sosial, budaya, dan
                olahraga. Program utama Karang Taruna:
              </p>
              <ul className="grid gap-3">
                {[
                  "Menyelenggarakan kegiatan kepemudaan seperti peringatan HUT RI, lomba desa, dan olahraga bersama",
                  "Pelestarian seni dan budaya lokal seperti jathilan, rebana, dan gamelan",
                  "Kegiatan sosial seperti kerja bakti, donor darah, dan dukungan acara desa",
                  "Mendorong pemuda agar aktif dalam digitalisasi dan media informasi dusun",
                ].map((item) => (
                  <li key={item} className="pl-6 relative">
                    <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </article>

          {/* Kelompok Tani */}
          <article
            id="kelompok-tani"
            className="scroll-mt-24 mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-10"
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-1 text-xl sm:text-2xl font-bold text-gray-900"
            >
              Kelompok Tani
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-2 space-y-4 rounded-2xl border bg-white p-6 md:p-8 shadow-sm text-gray-700 text-sm sm:text-base leading-relaxed"
            >
              <p>
                Kelompok Tani berperan sebagai wadah para petani Magirejo untuk
                meningkatkan hasil pertanian dan memperkuat kerja sama
                antarwarga. Kegiatan Kelompok Tani antara lain:
              </p>
              <ul className="grid gap-3">
                {[
                  "Pertanian lahan kering dan perkebunan di tanah kapur",
                  "Pelatihan pertanian berkelanjutan dan ramah lingkungan",
                  "Pemanfaatan lahan kosong untuk perkebunan produktif",
                  "Mendukung ketahanan pangan dusun",
                ].map((item) => (
                  <li key={item} className="pl-6 relative">
                    <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                <span className="font-semibold text-gray-900">
                  Ketua Kelompok Tani:
                </span>{" "}
                Trisno Rejo
              </p>
            </motion.div>
          </article>

          {/* Kelompok Ternak */}
          <article
            id="kelompok-ternak"
            className="scroll-mt-24 mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-10"
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-1 text-xl sm:text-2xl font-bold text-gray-900"
            >
              Kelompok Ternak
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-2 space-y-4 rounded-2xl border bg-white p-6 md:p-8 shadow-sm text-gray-700 text-sm sm:text-base leading-relaxed"
            >
              <p>
                Kelompok Ternak menjadi wadah bagi masyarakat yang mengelola
                usaha peternakan. Program dan kegiatan utama:
              </p>
              <ul className="grid gap-3">
                {[
                  "Pemeliharaan ternak sapi, kambing, dan unggas",
                  "Pelatihan kesehatan hewan dan manajemen kandang",
                  "Pengembangan usaha peternakan sebagai sumber ekonomi keluarga",
                  "Mendukung kegiatan gotong royong dalam pembangunan kandang komunal",
                ].map((item) => (
                  <li key={item} className="pl-6 relative">
                    <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                <span className="font-semibold text-gray-900">
                  Ketua Kelompok Ternak:
                </span>{" "}
                Paino
              </p>
            </motion.div>
          </article>

          {/* Takmir Masjid */}
          <article
            id="takmir-masjid"
            className="scroll-mt-24 mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-10"
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-1 text-xl sm:text-2xl font-bold text-gray-900"
            >
              Takmir Masjid
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-2 space-y-4 rounded-2xl border bg-white p-6 md:p-8 shadow-sm text-gray-700 text-sm sm:text-base leading-relaxed"
            >
              <p>
                Selain organisasi sosial-ekonomi, Magirejo juga memiliki takmir
                masjid yang mengelola kegiatan keagamaan dan sosial keagamaan.
              </p>
              <ul className="grid gap-3">
                {[
                  "Pengelolaan masjid: Masjid Al-Barokah, Masjid Assakinah, Masjid Al-Muslim",
                  "Mengadakan pengajian rutin, yasinan, khataman, dan TPA untuk anak-anak",
                  "Menjadi pusat kegiatan spiritual dan sosial masyarakat",
                ].map((item) => (
                  <li key={item} className="pl-6 relative">
                    <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                <span className="font-semibold text-gray-900">
                  Takmir Masjid:
                </span>{" "}
                Rubiyo
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
