import type { NavigationLink } from "@/types";

export const navigationLinkList: NavigationLink[] = [
  {
    title: "Beranda",
    href: "beranda",
  },
  {
    title: "Tentang Saya",
    href: "tentang-saya",
  },
  {
    title: "Kemampuan",
    href: "kemampuan",
  },
  {
    title: "Pendidikan",
    href: "pendidikan",
  },
  {
    title: "Pengalaman",
    href: "pengalaman",
  },
  {
    title: "Portofolio",
    href: "portofolio",
  },
  {
    title: "Artikel",
    href: "artikel",
  },
  {
    title: "Kontak",
    href: "kontak",
  },
] as const;
