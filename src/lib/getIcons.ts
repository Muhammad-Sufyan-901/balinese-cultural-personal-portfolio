import {
  icons,
  techStackIcons,
  type IconKey,
  type TechCategory,
} from "@/constants";

export const getIcon = (name: IconKey): string => {
  return icons[name];
};

// Helper to get all icons in a category
export const getIconsByCategory = (category: TechCategory) => {
  return techStackIcons[category];
};
