"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, easeInOut } from "framer-motion";
import { carouselImages } from "@/app/lib/carouselImages";

export default function Home() {
  const [index, setIndex] = useState(0);
  const handleExplore = () => {
    const el = document.getElementById("jelajahi");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const current = carouselImages[index];
  const stats = [
    { label: "RT", value: 4 },
    { label: "KK", value: 223 },
    { label: "Jiwa", value: 620 },
    { label: "Laki-laki", value: 298 },
    { label: "Perempuan", value: 322 },
  ];

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={(current?.src as any)?.src ?? index}
            initial={{ opacity: 1, scale: 1.2, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              opacity: { duration: 0.1, ease: easeInOut },
              scale: { duration: 4, ease: easeInOut },
              rotate: { duration: 4, ease: easeInOut },
            }}
            className="absolute inset-0"
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8, ease: easeInOut, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow text-balance"
          >
            MAGIREJO SEMBODO
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8, ease: easeInOut, delay: 0.4 }}
            className="mt-3 sm:mt-4 text-base sm:text-xl md:text-2xl text-white/90 drop-shadow text-balance"
          >
            Selamat datang di Padukuhan Magirejo
          </motion.p>
          <motion.button
            onClick={handleExplore}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeInOut, delay: 0.6 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 sm:px-6 sm:py-3 text-white text-sm sm:text-base font-medium shadow-lg shadow-indigo-500/30 hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label="Jelajahi"
          >
            <span>Jelajahi</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M13.5 4.5a.75.75 0 0 0 0 1.5h4.19l-9.22 9.22a.75.75 0 1 0 1.06 1.06l9.22-9.22V11.5a.75.75 0 0 0 1.5 0v-6a1 1 0 0 0-1-1h-6a.75.75 0 0 0-.75.75Z" />
            </svg>
          </motion.button>
        </div>
      </section>

      {/* Section konten dengan efek muncul saat discroll */}
      <section
        id="jelajahi"
        className="relative w-full bg-white scroll-mt-20 md:scroll-mt-24"
      >
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: easeInOut }}
            className="text-2xl md:text-3xl font-bold text-gray-900 text-center"
          >
            Sekilas Tentang Magirejo
          </motion.h2>
          <div className="mt-8 sm:mt-10 grid grid-cols-1 items-center gap-6 sm:gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, ease: easeInOut }}
              className="order-2 md:order-1 relative mx-auto w-full max-w-md overflow-hidden  bg-gradient-to-br p-6 sm:p-8"
            >
              <div className="relative mx-auto aspect-square md:aspect-video w-full">
                <Image
                  src="/logo text landscape.svg"
                  alt="Logo Padukuhan Magirejo"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: easeInOut,
                delay: 0.1,
              }}
              className="order-1 md:order-2 text-gray-700"
            >
              <p className="text-sm sm:text-base leading-relaxed">
                Dusun Magirejo terletak di wilayah perbukitan kapur Gunungkidul,
                tepatnya di Kalurahan Ngalang, Kapanewon Gedangsari. Mayoritas
                penduduk bermata pencaharian sebagai petani dan peternak, serta
                masih menjunjung tinggi budaya gotong royong. Tradisi lokal
                seperti karawitan, jathilan, rebana, dan rasulan masih terjaga
                hingga kini. Selain itu, Magirejo juga ikut berperan dalam Desa
                Mandiri Budaya dengan semangat melestarikan kearifan lokal dan
                membangun masyarakat yang sehat serta sejahtera.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: easeInOut, delay: 0.15 }}
                className="mt-5 sm:mt-6"
              >
                <Link
                  href="/tentang"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-white text-sm sm:text-base font-medium shadow-lg shadow-indigo-500/30 hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label="Pelajari lebih lanjut tentang Padukuhan Magirejo"
                >
                  <span>Tentang Magirejo</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M13.5 4.5a.75.75 0 0 0 0 1.5h4.19l-9.22 9.22a.75.75 0 1 0 1.06 1.06l9.22-9.22V11.5a.75.75 0 0 0 1.5 0v-6a1 1 0 0 0-1-1h-6a.75.75 0 0 0-.75.75Z" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Visi dan Misi */}
      <section id="visi-misi" className="relative w-full bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-12">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: easeInOut }}
            className="text-2xl md:text-3xl font-bold text-gray-900 text-center"
          >
            Visi dan Misi
          </motion.h2>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Visi */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: easeInOut }}
              className="rounded-2xl border p-6 md:p-8 shadow-sm bg-white"
            >
              <h3 className="text-lg font-semibold text-gray-900">Visi</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                "Mewujudkan Padukuhan Magirejo sebagai padukuhan mandiri
                berbasis budaya, sejahtera melalui pertanian dan peternakan,
                serta berdaya dalam menjaga kesehatan masyarakat dengan semangat
                gotong royong."
              </p>
            </motion.div>

            {/* Misi */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: easeInOut,
                delay: 0.1,
              }}
              className="rounded-2xl border p-6 md:p-8 shadow-sm bg-white"
            >
              <h3 className="text-lg font-semibold text-gray-900">Misi</h3>
              <ul className="mt-3 space-y-3 text-gray-700">
                <motion.li
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.4,
                    ease: easeInOut,
                    delay: 0.05,
                  }}
                  className="pl-6 relative"
                >
                  <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                  Mengembangkan potensi lokal melalui pelestarian budaya
                  tradisional seperti gamelan, jatilan, dan rebana, serta
                  mendukung Magirejo sebagai bagian dari Desa Mandiri Budaya.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.4,
                    ease: easeInOut,
                    delay: 0.1,
                  }}
                  className="pl-6 relative"
                >
                  <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                  Meningkatkan kesejahteraan ekonomi masyarakat dengan penguatan
                  sektor pertanian dan peternakan yang ramah lingkungan dan
                  berkelanjutan.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.4,
                    ease: easeInOut,
                    delay: 0.15,
                  }}
                  className="pl-6 relative"
                >
                  <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                  Mengatasi tantangan kesehatan masyarakat, khususnya pencegahan
                  dan penurunan angka stunting melalui optimalisasi posyandu dan
                  peningkatan gizi keluarga.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.4,
                    ease: easeInOut,
                    delay: 0.2,
                  }}
                  className="pl-6 relative"
                >
                  <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                  Mendorong partisipasi warga dalam pembangunan dusun melalui
                  semangat gotong royong, kebersamaan, dan solidaritas sosial.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.25,
                  }}
                  className="pl-6 relative"
                >
                  <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-blue-600" />
                  Menjaga kelestarian lingkungan perbukitan dan tanah kapur
                  melalui penghijauan, pengelolaan air, serta upaya konservasi.
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistik Penduduk */}
      <section id="statistik" className="relative w-full bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: easeInOut }}
            className="text-2xl md:text-3xl font-bold text-gray-900 text-center"
          >
            Statistik Penduduk
          </motion.h2>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: easeInOut, delay: 0.1 }}
            className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:grid-cols-5"
            aria-label="Statistik penduduk Padukuhan Magirejo"
          >
            {stats.map((s, idx) => (
              <motion.li
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.4,
                  ease: easeInOut,
                  delay: 0.05 * idx,
                }}
                className="rounded-2xl border bg-white p-4 sm:p-5 shadow-sm"
              >
                <p className="text-xs sm:text-sm font-medium text-gray-600">
                  {s.label}
                </p>
                <p className="mt-1 text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900">
                  {s.value.toLocaleString("id-ID")}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </>
  );
}
