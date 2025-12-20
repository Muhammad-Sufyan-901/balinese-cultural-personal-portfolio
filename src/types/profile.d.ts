import type { Picture } from "./picture";
import type { Statistic } from "./statistics";

export interface Profile {
  name: string;
  region: string;
  major: string;
  divisions: string[];
  CV: string;
  descriptions: ProfileDescription;
  pictures: ProfilePicture;
  statistics: Statistic[];
}

export interface ProfileDescription {
  home: string;
  about: string;
}

export interface ProfilePicture {
  home: Picture;
  about: Picture;
}
