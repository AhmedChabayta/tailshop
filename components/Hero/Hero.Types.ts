import { StaticImageData } from 'next/image';
export interface HeroPropsInterface {}

export type SelectedState = {
  image: StaticImageData;
  title: string;
};