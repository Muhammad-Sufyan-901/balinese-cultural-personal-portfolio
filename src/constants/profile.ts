import type { Profile } from "@/types";
import { images } from "./images";

export const profileData: Profile = {
  name: "Muhammad Sufyan",
  region: "Indonesia",
  major: "Sistem Informasi",
  CV: "/assets/pdf/Muhammad Sufyan CV.pdf",
  divisions: [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Mobile Developer",
  ],
  pictures: {
    home: {
      src: images.profile.home,
      alt: "Muhammad Sufyan",
    },
    about: {
      src: images.profile.about,
      alt: "Muhammad Sufyan",
    },
  },
  descriptions: {
    home: "Seorang Software Engineer yang mampu memberikan Solusi Digital atas permasalahan digital anda. Jangan ragu untuk menghubungi dan mari kita bekerja sama.",
    about:
      "Halo semuanya! Nama saya Muhammad Sufyan, seorang mahasiswa jurusan Sistem Informasi yang menjadi Software Engineer dengan basis website maupun aplikasi. Berpengalaman dalam mengerjakan berbagai proyek dengan berbagai lingkup yang berbeda dan saya harap bisa selalu belajar sesuatu hal yang baru untuk bisa menciptakan berbagai solusi digital yang dapat berdampak dan membantu masyarakat luas di masa depan. Saya juga mampu bekerja sendiri maupun dalam tim.",
  },
  statistics: [
    {
      number: 3,
      title: "Tahun Pengalaman",
    },
    {
      number: 4,
      title: "Bidang Keahlian Dikuasai",
    },
    {
      number: 12,
      title: "Pengembangan Proyek Berhasil",
    },
  ],
} as const;
