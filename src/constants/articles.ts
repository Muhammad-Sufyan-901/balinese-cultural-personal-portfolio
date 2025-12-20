import pengembanganWebMd from "@/contents/articles/dasar-pengembangan-web.md?raw";
import pengembanganAplikasiMd from "@/contents/articles/pengembangan-aplikasi-mobile.md?raw";
import versionControlMd from "@/contents/articles/pentingnya-version-control.md?raw";
import { images } from "@/constants/images";
import type { Article, ArticleCategory } from "@/types";

export const articleList: Article[] = [
  {
    slug: "dasar-pengembangan-web-modern",
    title: "Memahami Dasar-Dasar Pengembangan Web Modern",
    prologue:
      "Pengembangan web modern tidak hanya soal tampilan, tetapi juga arsitektur, performa, dan skalabilitas aplikasi.",
    description: pengembanganWebMd,
    thumbnailImage: images.articles.dasarPengembanganWeb,
    categories: [{ name: "Website", color: "text-gray-400" }],
    uploadedAt: new Date("2025-12-17"),
    author: {
      name: "Admin",
      avatar: images.profile.about,
    },
  },

  {
    slug: "pengenalan-pengembangan-aplikasi-mobile",
    title: "Pengenalan Pengembangan Aplikasi Mobile",
    prologue:
      "Aplikasi mobile telah menjadi bagian penting dalam kehidupan digital modern di berbagai sektor.",
    description: pengembanganAplikasiMd,
    thumbnailImage: images.articles.pengembanganAplikasiMobile,
    categories: [{ name: "Mobile", color: "text-blue-400" }],
    uploadedAt: new Date("2025-12-17"),
    author: {
      name: "Admin",
      avatar: images.profile.about,
    },
  },

  {
    slug: "pentingnya-version-control",
    title: "Pentingnya Version Control dalam Dunia Programming",
    prologue:
      "Version control membantu programmer mengelola perubahan kode secara rapi dan kolaboratif.",
    description: versionControlMd,
    thumbnailImage: images.articles.versionControl,
    categories: [{ name: "Git", color: "text-orange-400" }],
    uploadedAt: new Date("2025-12-17"),
    author: {
      name: "Admin",
      avatar: images.profile.about,
    },
  },
] as const;

export const articleCategories: ArticleCategory[] = [
  {
    name: "JavaScript",
    color: "text-yellow-400",
  },
  {
    name: "Website",
    color: "text-gray-400",
  },
  {
    name: "CSS",
    color: "text-cyan-400",
  },
  {
    name: "HTML",
    color: "text-orange-400",
  },
  {
    name: "React JS",
    color: "text-blue-400",
  },
  {
    name: "Next JS",
    color: "text-black",
  },
  {
    name: "TypeScript",
    color: "text-blue-600",
  },
  {
    name: "Node JS",
    color: "text-green-400",
  },
  {
    name: "Tailwind CSS",
    color: "text-sky-400",
  },
  {
    name: "Bootstrap",
    color: "text-indigo-400",
  },
];
