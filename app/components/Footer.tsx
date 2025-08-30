import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-auto border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/logo text.svg"
                alt="Padukuhan Magirejo"
                width={180}
                height={40}
                priority
              />
            </Link>
            <p className="text-sm text-gray-600">
              Website resmi Padukuhan Magirejo, Desa Margomulyo, Kapanewon
              Seyegan, Kabupaten Sleman.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Menu
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Tentang
                </Link>
              </li>
              <li>
                <Link
                  href="/organisasi"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Organisasi
                </Link>
              </li>
              <li>
                <Link
                  href="/umkm"
                  className="text-gray-600 hover:text-gray-900"
                >
                  UMKM
                </Link>
              </li>
              <li>
                <Link
                  href="/fasilitas"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Fasilitas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Kontak
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>Padukuhan Magirejo</li>
              <li>Margomulyo, Seyegan, Sleman</li>
              <li>Email: info@magirejo.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t pt-6">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Padukuhan Magirejo. All rights
            reserved.
          </p>
          <div className="flex gap-4 text-xs">
            <a
              href="https://maps.app.goo.gl/kcQLt5ywTJrc8CADA"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-gray-800"
            >
              Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
