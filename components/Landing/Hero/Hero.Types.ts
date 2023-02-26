import { StaticImageData } from 'next/image';

export interface HeroPropsInterface {
  className?: string;
}

export type SelectedState = {
  image: StaticImageData;
  title: string;
};
