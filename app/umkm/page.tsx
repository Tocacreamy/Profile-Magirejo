"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const WA_NUMBER = "6283877450866"; // Converted from 0838-7745-0866 to international format
const WA_TEXT = encodeURIComponent(
  "Halo, saya tertarik dengan UMKM Kerajinan Tangan Pak Saijo."
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;

export default function UMKM() {
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
            UMKM Padukuhan Magirejo
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeUp}
            className="mx-auto mt-4 max-w-3xl text-center text-gray-600 text-sm sm:text-base"
          >
            Kerajinan Tangan Pak Saijo
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="relative w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 md:pb-24">
          <article className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-10">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-1 text-xl sm:text-2xl font-bold text-gray-900"
            >
              Profil Usaha
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.6 }}
              variants={fadeUp}
              className="md:col-span-2 rounded-2xl border bg-white p-6 md:p-8 shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <dl className="grid gap-3 text-sm sm:text-base text-gray-700">
                  <div className="grid grid-cols-3 gap-3">
                    <dt className="col-span-1 font-medium text-gray-900">
                      Nama Pemilik
                    </dt>
                    <dd className="col-span-2">Saijo</dd>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <dt className="col-span-1 font-medium text-gray-900">
                      Jenis Usaha
                    </dt>
                    <dd className="col-span-2">Kerajinan Tangan</dd>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <dt className="col-span-1 font-medium text-gray-900">
                      Tahun Berdiri
                    </dt>
                    <dd className="col-span-2">2000</dd>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <dt className="col-span-1 font-medium text-gray-900">
                      Kontak
                    </dt>
                    <dd className="col-span-2">0838-7745-0866</dd>
                  </div>
                </dl>
                <div className="flex items-start sm:items-center justify-start">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-white shadow-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-label="Hubungi via WhatsApp"
                  >
                    {/* WhatsApp icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M20.52 3.48A11.77 11.77 0 0 0 12.04 0C5.57 0 .36 5.21.36 11.68c0 2.06.54 4.09 1.57 5.88L0 24l6.61-1.89a11.64 11.64 0 0 0 5.42 1.38h.01c6.46 0 11.68-5.21 11.68-11.68 0-3.12-1.21-6.05-3.2-8.33ZM12.04 21.3h-.01a9.64 9.64 0 0 1-4.91-1.35l-.35-.2-3.93 1.12 1.12-3.83-.23-.39a9.7 9.7 0 0 1-1.5-5.17c0-5.34 4.35-9.68 9.69-9.68 2.58 0 5 1 6.82 2.81a9.61 9.61 0 0 1 2.86 6.86c0 5.34-4.35 9.68-9.69 9.68Zm5.3-7.23c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.21-.44-2.31-1.39-.85-.76-1.42-1.7-1.59-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.52.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.52-.07-.15-.64-1.55-.88-2.12-.23-.56-.47-.49-.64-.49-.16 0-.36-.02-.55-.02-.19 0-.52.07-.79.36s-1.04 1.02-1.04 2.48 1.07 2.88 1.22 3.08c.15.19 2.11 3.22 5.11 4.52.71.31 1.27.5 1.7.64.71.23 1.36.2 1.88.12.58-.09 1.7-.69 1.94-1.35.24-.67.24-1.25.17-1.35-.07-.1-.26-.17-.55-.31Z" />
                    </svg>
                    Hubungi via WhatsApp
                  </a>
                </div>
              </div>

              <div className="mt-8 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Deskripsi Usaha
                </h3>
                <p>
                  UMKM kerajinan tangan milik Pak Saijo telah beroperasi sejak
                  tahun 2000 dan hingga kini tetap aktif memproduksi berbagai
                  produk kerajinan berbasis bahan lokal. Dengan pengalaman lebih
                  dari dua dekade, usaha ini menjadi salah satu penggerak
                  ekonomi kreatif di Padukuhan Magirejo.
                </p>
                <p>
                  Produk kerajinan karya Pak Saijo banyak dimanfaatkan oleh
                  warga sekitar dan juga menjadi potensi unggulan dusun dalam
                  sektor ekonomi berbasis keterampilan tangan.
                </p>
              </div>
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

      {/* Floating WhatsApp bubble */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl ring-1 ring-emerald-500/30 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        aria-label="Chat WhatsApp UMKM Pak Saijo"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.77 11.77 0 0 0 12.04 0C5.57 0 .36 5.21.36 11.68c0 2.06.54 4.09 1.57 5.88L0 24l6.61-1.89a11.64 11.64 0 0 0 5.42 1.38h.01c6.46 0 11.68-5.21 11.68-11.68 0-3.12-1.21-6.05-3.2-8.33ZM12.04 21.3h-.01a9.64 9.64 0 0 1-4.91-1.35l-.35-.2-3.93 1.12 1.12-3.83-.23-.39a9.7 9.7 0 0 1-1.5-5.17c0-5.34 4.35-9.68 9.69-9.68 2.58 0 5 1 6.82 2.81a9.61 9.61 0 0 1 2.86 6.86c0 5.34-4.35 9.68-9.69 9.68Zm5.3-7.23c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.21-.44-2.31-1.39-.85-.76-1.42-1.7-1.59-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.52.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.52-.07-.15-.64-1.55-.88-2.12-.23-.56-.47-.49-.64-.49-.16 0-.36-.02-.55-.02-.19 0-.52.07-.79.36s-1.04 1.02-1.04 2.48 1.07 2.88 1.22 3.08c.15.19 2.11 3.22 5.11 4.52.71.31 1.27.5 1.7.64.71.23 1.36.2 1.88.12.58-.09 1.7-.69 1.94-1.35.24-.67.24-1.25.17-1.35-.07-.1-.26-.17-.55-.31Z" />
        </svg>
      </a>
    </main>
  );
}
