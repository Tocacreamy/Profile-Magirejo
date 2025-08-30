import type { StaticImageData } from "next/image";
import Image1 from "@/public/carousel/Image1.jpg";
import Image2 from "@/public/carousel/Image2.jpg";
import Image3 from "@/public/carousel/Image3.jpg";

export type CarouselItem = {
  src: StaticImageData;
  alt: string;
};

export const carouselImages: CarouselItem[] = [
  { src: Image1, alt: "Kegiatan di Padukuhan Magirejo 1" },
  { src: Image2, alt: "Kegiatan di Padukuhan Magirejo 2" },
  { src: Image3, alt: "Kegiatan di Padukuhan Magirejo 3" },
];

export default carouselImages;
