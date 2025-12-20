import { images, IMAGE_BASE_PATH } from "@/constants";

export const getProjectImage = (projectNumber: number): string => {
  const key = `project${projectNumber}` as keyof typeof images.projects;
  return (
    images.projects[key] ||
    `${IMAGE_BASE_PATH}/project-${String(projectNumber).padStart(2, "0")}.webp`
  );
};

// Helper function untuk mendapatkan article image by number
export const getArticleImage = (articleNumber: number): string => {
  const key = `article${articleNumber}` as keyof typeof images.articles;
  return (
    images.articles[key] ||
    `${IMAGE_BASE_PATH}/article-${String(articleNumber).padStart(2, "0")}.webp`
  );
};
