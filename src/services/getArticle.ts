import { articleList } from "@/constants";
import type { Article } from "@/types";

export function getArticleBySlug(slug: string): Article | null {
  return articleList.find((article) => article.slug === slug) || null;
}

export function getOtherArticlesBySlug(slug: string): Article[] {
  return articleList.filter((article) => article.slug !== slug);
}
