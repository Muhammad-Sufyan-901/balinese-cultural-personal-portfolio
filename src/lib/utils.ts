import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date, locale: string = "id-ID"): string {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;

  return text.slice(0, maxLength) + "...";
}

export function capitalizeFirstLetter(text: string): string {
  if (text.length === 0) return text;

  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w]+/g, "") // Remove all non-word chars
    .replace(/-+/g, "-"); // Replace multiple - with single -
}

export function deserializeJSON<T>(jsonString: string, defaultValue: T): T {
  try {
    return JSON.parse(jsonString) as T;
  } catch {
    return defaultValue;
  }
}

export function serializeJSON<T>(data: T): string {
  return JSON.stringify(data);
}

export function truncateList<T>(list: T[], maxItems: number): T[] {
  if (list.length <= maxItems) return list;

  return list.slice(0, maxItems);
}

export function boldWordsToReact(
  text: string,
  wordsToHighlight: string[]
): React.ReactNode[] {
  if (!text || wordsToHighlight.length === 0) {
    return [text];
  }

  const sortedWords = [...wordsToHighlight].sort((a, b) => b.length - a.length);

  const escapedWords = sortedWords.map((word) =>
    word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const pattern = escapedWords.join("|");
  const regex = new RegExp(`\\b(${pattern})\\b`, "gi");

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    parts.push(React.createElement("b", { key: match.index }, match[0]));

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

export function boldWordsCustom(
  text: string,
  wordsToHighlight: string[],
  openTag: string = "**",
  closeTag: string = "**"
): string {
  if (!text || wordsToHighlight.length === 0) {
    return text;
  }

  let result = text;
  const sortedWords = [...wordsToHighlight].sort((a, b) => b.length - a.length);

  sortedWords.forEach((word) => {
    if (!word) return;
    const escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`\\b(${escapedWord})\\b`, "gi");
    result = result.replace(regex, `${openTag}$1${closeTag}`);
  });

  return result;
}

export function openMobileMenu(): void {
  window.dispatchEvent(new Event("openMobileMenu"));
}
