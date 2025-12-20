import { icons } from "./icons";
import type { QuickContact } from "@/types";

export const quickContactList: QuickContact[] = [
  {
    title: "Whatsapp",
    contactVia: "+62 8991622164",
    contactLink: "https://wa.me/628991622164",
    cardIcon: icons.whatsapp,
  },
  {
    title: "Gmail",
    contactVia: "muhammadsufyann09@gmail.com",
    contactLink:
      "https://mail.google.com/mail/u/0/?fs=1&to=muhammadsufyann09@gmail.com&su=Your%20Subject&body=Your%20Messages&tf=cm",
    cardIcon: icons.gmail,
  },
  {
    title: "Telegram",
    contactVia: "+62 8991622164",
    contactLink: "https://t.me/+628991622164",
    cardIcon: icons.telegram,
  },
] as const;
