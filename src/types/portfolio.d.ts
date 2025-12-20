import type { Technology } from "./technology";

export interface Portfolio {
  title: string;
  imageThumbnail: string;
  description: string;
  livePreviewURL: string | null;
  repositoryURL: string | null;
  techStack: Technology[];
}
