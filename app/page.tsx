"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
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
              opacity: { duration: 0.1, ease: "easeInOut" },
              scale: { duration: 4, ease: "easeInOut" },
              rotate: { duration: 4, ease: "easeInOut" },
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
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow"
          >
            MAGIREJO SEMBODO
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="mt-4 text-lg md:text-2xl text-white/90 drop-shadow"
          >
            selamat datang di Padukuhan Magirejo
          </motion.p>
          <motion.button
            onClick={handleExplore}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-medium shadow-lg shadow-indigo-500/30 hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-transparent"
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
      {/* Section Visi dan Misi */}
      <section id="visi-misi" className="relative w-full bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
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
              transition={{ duration: 0.7, ease: "easeOut" }}
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
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="rounded-2xl border p-6 md:p-8 shadow-sm bg-white"
            >
              <h3 className="text-lg font-semibold text-gray-900">Misi</h3>
              <ul className="mt-3 space-y-3 text-gray-700">
                <motion.li
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
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
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
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
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
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
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
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
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.25 }}
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

      {/* Section konten dengan efek muncul saat discroll */}
      <section id="jelajahi" className="relative w-full bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-bold text-gray-900 text-center"
          >
            Sekilas Tentang Magirejo
          </motion.h2>
          <div className="mt-10 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative mx-auto w-full max-w-md overflow-hidden bg-gradient-to-br p-8"
            >
              <div className="relative mx-auto aspect-video w-full">
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
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="text-gray-700"
            >
              <p className="text-base leading-relaxed">
                Padukuhan Magirejo adalah komunitas yang menjunjung tinggi nilai
                kebersamaan, gotong royong, dan pelestarian budaya. Berbagai
                program pemberdayaan, ekonomi kreatif, serta kegiatan sosial
                dilaksanakan secara berkelanjutan untuk mewujudkan lingkungan
                yang maju dan harmonis.
              </p>
              {/* <ul className="mt-6 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600" />
                  Penguatan kapasitas masyarakat melalui pelatihan dan kegiatan.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600" />
                  Pelestarian tradisi dan budaya lokal secara inklusif.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600" />
                  Sinergi antarwarga untuk pembangunan berkelanjutan.
                </li>
              </ul> */}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
