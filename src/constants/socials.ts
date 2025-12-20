import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaDiscord,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import type { SocialMedia } from "@/types";

export const socialMediaList: SocialMedia[] = [
  {
    SocialMediaIcon: FaFacebookF,
    link: "https://web.facebook.com/profile.php?id=100048861012103",
  },
  {
    SocialMediaIcon: FaInstagram,
    link: "https://www.instagram.com/lastwolfxd",
  },
  {
    SocialMediaIcon: FaTiktok,
    link: "https://tiktok.com/@sangpengejarskom",
  },
  {
    SocialMediaIcon: FaGithub,
    link: "https://github.com/Muhammad-Sufyan-901",
  },
  {
    SocialMediaIcon: FaDiscord,
    link: "https://discord.com/users/865796356241096704",
  },
] as const;

export const shareToSocialMediaList: SocialMedia[] = [
  {
    SocialMediaIcon: FaFacebook,
    link: `https://www.facebook.com/sharer/sharer.php?u=${
      import.meta.env.VITE_PUBLIC_BASE_URL
    }`,
  },
  {
    SocialMediaIcon: FaInstagram,
    link: `https://www.instagram.com/?url=${
      import.meta.env.VITE_PUBLIC_BASE_URL
    }`,
  },
  {
    SocialMediaIcon: FaWhatsapp,
    link: `https://wa.me/?text=${import.meta.env.VITE_PUBLIC_BASE_URL}`,
  },
] as const;
