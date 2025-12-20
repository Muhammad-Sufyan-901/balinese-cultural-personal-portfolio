import { icons } from "@/constants";
import type { Experience } from "@/types";

export const experienceList: Experience[] = [
  {
    title: "Mobile Developer",
    companyName: "Global Digital Verse",
    years: "Februari 2024 - Agustus 2025",
    jobStatus: "Full Time",
    jobDescription:
      "Saya pernah berkontribusi atas pengembangan aplikasi mobile seperti Tampang.com, Waktu Sholat Indonesia, Dinul, Absensoft dan masih banyak lainnya. Bertanggung jawab pada pembuatan tampilan antarmuka pengguna, implementasi fungsi aplikasi serta integrasi ke API supaya datanya dinamis.",
    techStack: [
      icons.flutter,
      icons.dart,
      icons.firebase,
      icons.reactNative,
      icons.typescript,
    ],
    appHandled: ["Tampang.com", "Waktu Sholat Indonesia", "Dinul", "Absensoft"],
  },
  {
    title: "Fullstack Website Developer",
    companyName: "Global Digital Verse",
    years: "Mei 2023 - Agustus 2025",
    jobStatus: "Full Time",
    jobDescription:
      "Saya pernah berkontribusi atas pengembangan platform website seperti FinDW, Litani, Permata Sukses Abadi, Absensoft dan masih banyak lainnya. Bertanggung jawab pada pembuatan tampilan antarmuka pengguna, implementasi fungsi pada website serta integrasi pada database agar datanya dinamis.",
    techStack: [icons.laravel, icons.bootstrap, icons.mysql, icons.php],
    appHandled: ["FinDW", "Litani", "Permata Sukses Abadi", "Absensoft"],
  },
  {
    title: "Frontend Website Developer",
    companyName: "ZettaByte Pte Ltd",
    years: "Januari 2022 - April 2022",
    jobStatus: "Internship",
    jobDescription:
      "Saya pernah berkontribusi atas pengembangan fitur pada platform ADMTC yaitu sebuah platform ERP (Enterprise Resource Planning) yang berfokus pada pengelolaan pendidikan di berbagai sekolah. Bertanggung jawab pada pembuatan beberapa fitur seperti Search Filter dan Form Validation.",
    techStack: [icons.angular, icons.typescript, icons.graphql],
    appHandled: ["ADMTC", "EDH"],
  },
  {
    title: "Quality Assurance",
    companyName: "ZettaByte Pte Ltd",
    years: "Januari 2022 - April 2022",
    jobStatus: "Internship",
    jobDescription:
      "Saya pernah berkontribusi atas debugging beberapa fitur di platform ADMTC dan EDH seperti Form Validation, Search Filter dan Send Verification Email. Bertanggung jawab pada debug fitur yang dibuat oleh tim developer.",
    techStack: [icons.jira, icons.docs],
    appHandled: ["ADMTC", "EDH"],
  },
] as const;
