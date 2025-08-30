"use client";

import { motion, easeInOut } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeInOut },
  },
};

export default function Tentang() {
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
            Tentang Padukuhan Magirejo
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeUp}
            className="mx-auto mt-4 max-w-3xl text-center text-gray-600 text-sm sm:text-base"
          >
            Profil umum, potensi, budaya, sarana prasarana, serta rencana
            pembangunan wilayah.
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
                ["Profil Umum", "#profil-umum"],
                ["Ekonomi", "#ekonomi"],
                ["Pendidikan", "#pendidikan"],
                ["Agama & Sosial", "#agama"],
                ["Budaya", "#budaya"],
                ["Sarana", "#sarana"],
                ["Tokoh", "#tokoh"],
                ["Rencana", "#rencana"],
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
          {/* Profil Umum */}
          <article
            id="profil-umum"
            className="scroll-mt-24 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-10"
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-1 text-xl sm:text-2xl font-bold text-gray-900"
            >
              Profil Umum
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-2 space-y-4 rounded-2xl border bg-white p-6 md:p-8 shadow-sm text-gray-700 text-sm sm:text-base leading-relaxed"
            >
              <p>
                Padukuhan Magirejo berada di wilayah perbukitan kapur Kabupaten
                Gunungkidul, tepatnya di Kalurahan Ngalang, Kapanewon
                Gedangsari, dengan ketinggian sekitar 100–700 mdpl. Padukuhan
                ini terdiri dari 4 RT dan termasuk dalam wilayah Desa Ngalang
                yang memiliki luas sekitar 14,82 km². Jarak Padukuhan Magirejo
                ke ibu kota kapanewon sekitar 1,5 km, ke ibu kota kabupaten
                sekitar 12,7 km, dan ke ibu kota provinsi sekitar 32,4 km.
              </p>
              <p>
                Kondisi wilayah terdiri atas lahan pertanian, pemukiman, dan
                jalan desa. Sebagian besar akses jalan sudah berupa semen beton
                dan sebagian beraspal, meskipun transportasi umum belum
                menjangkau wilayah ini. Sarana komunikasi seperti televisi,
                radio, dan smartphone sudah umum digunakan warga, walaupun
                kualitas sinyal internet masih terbatas.
              </p>
            </motion.div>
          </article>

          {/* Mata Pencaharian & Ekonomi */}
          <article
            id="ekonomi"
            className="scroll-mt-24 mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-10"
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-1 text-xl sm:text-2xl font-bold text-gray-900"
            >
              Mata Pencaharian & Ekonomi
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-2 space-y-4 rounded-2xl border bg-white p-6 md:p-8 shadow-sm text-gray-700 text-sm sm:text-base leading-relaxed"
            >
              <p>
                Mayoritas penduduk Magirejo bekerja sebagai petani dan peternak,
                disertai pekerjaan lain seperti buruh bangunan, penebang kayu,
                pedagang, pengrajin kayu, pembuat kue, serta pekerja bengkel.
                Potensi ekonomi lokal juga berkembang melalui UMKM kecil,
                termasuk pengolahan hasil pertanian seperti tape singkong.
              </p>
            </motion.div>
          </article>

          {/* Pendidikan */}
          <article
            id="pendidikan"
            className="scroll-mt-24 mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-10"
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-1 text-xl sm:text-2xl font-bold text-gray-900"
            >
              Pendidikan
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-2 space-y-4 rounded-2xl border bg-white p-6 md:p-8 shadow-sm text-gray-700 text-sm sm:text-base leading-relaxed"
            >
              <p>
                Sebagian besar masyarakat Magirejo menempuh pendidikan formal
                hingga tingkat SD, SLTP/MTS, SMA/MA, SMK/MAK, serta sebagian
                kecil melanjutkan hingga S1 dan S2.
              </p>
            </motion.div>
          </article>

          {/* Agama dan Kehidupan Sosial */}
          <article
            id="agama"
            className="scroll-mt-24 mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-10"
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-1 text-xl sm:text-2xl font-bold text-gray-900"
            >
              Agama dan Kehidupan Sosial
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-2 space-y-4 rounded-2xl border bg-white p-6 md:p-8 shadow-sm text-gray-700 text-sm sm:text-base leading-relaxed"
            >
              <p>
                Mayoritas warga Magirejo beragama Islam. Aktivitas keagamaan
                rutin di antaranya yasinan, khataman, tahlilan, TPA untuk
                anak-anak, serta kegiatan keagamaan lainnya yang terpusat di
                masjid-masjid dusun, seperti Masjid Al-Barokah dan Masjid
                Assakinah.
              </p>
            </motion.div>
          </article>

          {/* Kebudayaan dan Kesenian */}
          <article
            id="budaya"
            className="scroll-mt-24 mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-10"
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-1 text-xl sm:text-2xl font-bold text-gray-900"
            >
              Kebudayaan dan Kesenian
            </motion.h2>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-2 grid gap-3 rounded-2xl border bg-white p-6 md:p-8 shadow-sm text-gray-700 text-sm sm:text-base"
            >
              {[
                "Karawitan dan gamelan",
                "Jathilan",
                "Sholawatan dan rebana",
                "Tradisi rasulan, kenduren, tirakatan, dan tumpengan",
                "Perayaan keagamaan dan adat seperti Suran, Besaran, Muludan, Syawalan, Ruwahan, Selikuran, dan Takbiran",
              ].map((item) => (
                <li key={item} className="pl-6 relative">
                  <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                  {item}
                </li>
              ))}
              <li className="pl-6 relative">
                <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                Tradisi ini menjadi ciri khas masyarakat sekaligus mendukung
                Magirejo sebagai bagian dari Desa Mandiri Budaya.
              </li>
            </motion.ul>
          </article>

          {/* Sarana dan Prasarana */}
          <article
            id="sarana"
            className="scroll-mt-24 mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-10"
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-1 text-xl sm:text-2xl font-bold text-gray-900"
            >
              Sarana dan Prasarana
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
                Keagamaan: Masjid Al-Barokah, Masjid Assakinah, dan Masjid
                Al-Muslim
              </li>
              <li className="pl-6 relative">
                <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                Kesehatan: Posyandu anak & balita, Posbindu usia produktif,
                Posbindu lansia
              </li>
              <li className="pl-6 relative">
                <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                Kehidupan sehari-hari: Setiap rumah sudah memiliki MCK, listrik
                hampir merata, serta akses jalan utama sebagian besar sudah
                diperkeras
              </li>
            </motion.ul>
          </article>

          {/* Data Tokoh Masyarakat */}
          <article
            id="tokoh"
            className="scroll-mt-24 mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-10"
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-1 text-xl sm:text-2xl font-bold text-gray-900"
            >
              Data Tokoh Masyarakat
            </motion.h2>
            <motion.dl
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 rounded-2xl border bg-white p-6 md:p-8 shadow-sm text-gray-700 text-sm sm:text-base"
            >
              {[
                ["Kepala Dukuh", "Widodo"],
                ["Ketua RW", "Mija"],
                ["Ketua RT 01", "Subardi"],
                ["Ketua RT 02", "Rubidi"],
                ["Ketua RT 03", "Sukarji"],
                ["Ketua RT 04", "Sarno"],
                ["Ketua PKK", "Rubini"],
                ["Ketua Kelompok Tani", "Trisno Rejo"],
                ["Ketua Kelompok Ternak", "Paino"],
                ["Takmir Masjid", "Rubiyo"],
              ].map(([role, name]) => (
                <div key={role} className="grid grid-cols-3 gap-3">
                  <dt className="col-span-1 font-medium text-gray-900">
                    {role}
                  </dt>
                  <dd className="col-span-2">{name}</dd>
                </div>
              ))}
            </motion.dl>
          </article>

          {/* Rencana Pembangunan Wilayah */}
          <article
            id="rencana"
            className="scroll-mt-24 mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-10"
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-1 text-xl sm:text-2xl font-bold text-gray-900"
            >
              Rencana Pembangunan Wilayah
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-2 space-y-4 rounded-2xl border bg-white p-6 md:p-8 shadow-sm text-gray-700 text-sm sm:text-base leading-relaxed"
            >
              <p>
                Wilayah Magirejo termasuk daerah yang rawan longsor pada musim
                hujan dan menghadapi kekeringan pada musim kemarau, khususnya
                dalam hal ketersediaan air bersih. Meski demikian, masyarakat
                tetap aktif mengelola sektor pertanian, perkebunan, dan
                peternakan.
              </p>
              <ul className="grid gap-3">
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                  Penguatan sektor pertanian dan peternakan
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                  Peningkatan sarana air bersih dan konservasi lingkungan
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                  Pengembangan UMKM berbasis potensi lokal
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                  Pelestarian budaya dan tradisi untuk mendukung Desa Ngalang
                  sebagai Desa Budaya
                </li>
              </ul>
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
