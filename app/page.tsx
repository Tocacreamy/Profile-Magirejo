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

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Kebersamaan",
                desc: "Warga saling gotong royong dalam berbagai kegiatan.",
              },
              {
                title: "Budaya",
                desc: "Tradisi dan kekayaan budaya yang terus dilestarikan.",
              },
              {
                title: "Kemajuan",
                desc: "Program pemberdayaan untuk kemajuan padukuhan.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                className="rounded-xl border bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
