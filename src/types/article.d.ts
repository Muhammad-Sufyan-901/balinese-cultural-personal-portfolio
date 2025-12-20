export interface Author {
  name: string;
  role?: string;
  avatar: string;
}

export interface ArticleCategory {
  name: string;
  color: string;
}

export interface Article {
  title: string;
  slug: string;
  prologue: string;
  description: string;
  thumbnailImage: string;
  categories: ArticleCategory[];
  uploadedAt: Date | string;
  author: Author;
}
