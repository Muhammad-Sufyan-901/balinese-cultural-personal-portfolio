export const IMAGE_BASE_PATH = "/images";

export const images = {
  // Profile Images
  profile: {
    about: `${IMAGE_BASE_PATH}/about-profile.png`,
    home: `${IMAGE_BASE_PATH}/home-profile.webp`,
  },

  // Article Images
  articles: {
    article1: `${IMAGE_BASE_PATH}/article-01.webp`,
    article2: `${IMAGE_BASE_PATH}/article-02.webp`,
    article3: `${IMAGE_BASE_PATH}/article-03.webp`,
    dasarPengembanganWeb: `${IMAGE_BASE_PATH}/dasar-pengembangan-web.jpg`,
    pengembanganAplikasiMobile: `${IMAGE_BASE_PATH}/pengembangan-aplikasi-mobile.jpg`,
    versionControl: `${IMAGE_BASE_PATH}/version-control.png`,
  },

  // Project Images
  projects: {
    project1: `${IMAGE_BASE_PATH}/project-01.webp`,
    project2: `${IMAGE_BASE_PATH}/project-02.webp`,
    project3: `${IMAGE_BASE_PATH}/project-03.webp`,
    project4: `${IMAGE_BASE_PATH}/project-04.webp`,
    project5: `${IMAGE_BASE_PATH}/project-05.webp`,
    project6: `${IMAGE_BASE_PATH}/project-06.webp`,
    project7: `${IMAGE_BASE_PATH}/project-07.webp`,
    project8: `${IMAGE_BASE_PATH}/project-08.webp`,
    project9: `${IMAGE_BASE_PATH}/project-09.webp`,
    project10: `${IMAGE_BASE_PATH}/project-10.webp`,
    project11: `${IMAGE_BASE_PATH}/project-11.webp`,
    project12: `${IMAGE_BASE_PATH}/project-12.webp`,
    project13: `${IMAGE_BASE_PATH}/project-13.webp`,
    project14: `${IMAGE_BASE_PATH}/project-14.webp`,
    project15: `${IMAGE_BASE_PATH}/project-15.webp`,
    project16: `${IMAGE_BASE_PATH}/project-16.webp`,
    project17: `${IMAGE_BASE_PATH}/project-17.webp`,
  },
} as const;

// Type-safe keys
export type ProfileImageKey = keyof typeof images.profile;
export type ArticleImageKey = keyof typeof images.articles;
export type ProjectImageKey = keyof typeof images.projects;
