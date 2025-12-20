import type { Achievement } from "@/types";

export const achievementList: Achievement[] = [
  {
    achievement: "Peringkat 5 Lomba Web Design",
    place: "UNBI",
    years: "September 2023",
  },
  {
    achievement: "Menyelesaikan ZettaCamp Frontend Bootcamp",
    place: "Zettabyte Pte Ltd",
    years: "April 2022",
  },
  {
    achievement: "Menyelesaikan ZettaCamp Angular Bootcamp",
    place: "Zettabyte Pte Ltd",
    years: "Januari 2022",
  },
] as const;
