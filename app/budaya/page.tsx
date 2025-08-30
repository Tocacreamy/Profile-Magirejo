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

export default function Budaya() {
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
            Budaya Padukuhan Magirejo
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeUp}
            className="mx-auto mt-4 max-w-3xl text-center text-gray-600 text-sm sm:text-base"
          >
            Kesenian tradisional, tradisi & adat istiadat, nilai sosial & gotong
            royong, dan peran dalam Desa Budaya.
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
                ["Kesenian Tradisional", "#kesenian"],
                ["Tradisi & Adat Istiadat", "#tradisi"],
                ["Nilai Sosial & Gotong Royong", "#nilai-sosial"],
                ["Magirejo dalam Desa Budaya", "#desa-budaya"],
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

          {/* Kesenian Tradisional */}
          <article
            id="kesenian"
            className="scroll-mt-24 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-10"
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-1 text-xl sm:text-2xl font-bold text-gray-900"
            >
              Kesenian Tradisional
            </motion.h2>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-2 grid gap-3 rounded-2xl border bg-white p-6 md:p-8 shadow-sm text-gray-700 text-sm sm:text-base"
            >
              <li className="pl-6 relative">
                <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                <strong>Karawitan & Gamelan</strong> — dimainkan dalam berbagai
                acara adat, pertemuan, maupun hiburan warga.
              </li>
              <li className="pl-6 relative">
                <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                <strong>Jathilan</strong> — kesenian tari tradisional yang
                sering dipentaskan saat acara dusun atau hajatan.
              </li>
              <li className="pl-6 relative">
                <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                <strong>Rebana & Sholawatan</strong> — kesenian islami yang
                digelar pada acara keagamaan maupun peringatan hari besar Islam.
              </li>
            </motion.ul>
          </article>

          {/* Tradisi & Adat Istiadat */}
          <article
            id="tradisi"
            className="scroll-mt-24 mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-10"
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-1 text-xl sm:text-2xl font-bold text-gray-900"
            >
              Tradisi & Adat Istiadat
            </motion.h2>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-2 grid gap-3 rounded-2xl border bg-white p-6 md:p-8 shadow-sm text-gray-700 text-sm sm:text-base"
            >
              <li className="pl-6 relative">
                <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                <strong>Rasulan (Bersih Dusun)</strong> — tradisi syukuran atas
                panen dan rezeki, biasanya diramaikan dengan kirab budaya.
              </li>
              <li className="pl-6 relative">
                <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                <strong>Tirakatan</strong> — doa dan renungan bersama menjelang
                peringatan hari-hari penting.
              </li>
              <li className="pl-6 relative">
                <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                <strong>Kenduren & Tumpengan</strong> — tradisi doa bersama
                sekaligus mempererat silaturahmi warga.
              </li>
              <li className="pl-6 relative">
                <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                <strong>
                  Suran, Besaran, Muludan, Saparan, Syawalan, Ruwahan,
                  Selikuran, dan Takbiran
                </strong>{" "}
                — tradisi keagamaan dan sosial sesuai penanggalan Jawa dan
                Hijriah.
              </li>
            </motion.ul>
          </article>

          {/* Nilai Sosial & Gotong Royong */}
          <article
            id="nilai-sosial"
            className="scroll-mt-24 mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-10"
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-1 text-xl sm:text-2xl font-bold text-gray-900"
            >
              Nilai Sosial & Gotong Royong
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-2 space-y-4 rounded-2xl border bg-white p-6 md:p-8 shadow-sm text-gray-700 text-sm sm:text-base leading-relaxed"
            >
              <p>
                Selain kesenian dan tradisi, budaya Magirejo juga tercermin
                dalam kehidupan sehari-hari. Gotong royong masih menjadi ciri
                khas warga, baik dalam kerja bakti membersihkan jalan,
                pembangunan rumah warga, maupun persiapan acara adat dan
                keagamaan.
              </p>
            </motion.div>
          </article>

          {/* Magirejo dalam Desa Budaya */}
          <article
            id="desa-budaya"
            className="scroll-mt-24 mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-10"
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-1 text-xl sm:text-2xl font-bold text-gray-900"
            >
              Magirejo dalam Desa Budaya
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-2 space-y-4 rounded-2xl border bg-white p-6 md:p-8 shadow-sm text-gray-700 text-sm sm:text-base leading-relaxed"
            >
              <p>
                Sebagai bagian dari Desa Ngalang yang ditetapkan sebagai Desa
                Budaya, Magirejo turut berperan dalam pelestarian seni dan
                tradisi lokal. Kegiatan budaya seperti karawitan, jathilan, dan
                rasulan menjadi identitas sekaligus potensi unggulan yang terus
                dijaga agar tidak hilang ditelan zaman.
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
