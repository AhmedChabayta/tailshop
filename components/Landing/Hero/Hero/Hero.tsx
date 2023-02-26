import React from 'react';
import Flex from '@src/components/Flex';
import { HeroPropsInterface, SelectedState } from '../Hero.Types';
import image from '../../../../src/assets/AdobeStock_446073302.jpeg';
import image2 from '../../../../src/assets/people1.webp';
import HeroImage from '../HeroImage/HeroImage';
import HeroList from '../HeroList/HeroList';
import HeroWidgets from '../HeroWidgets/HeroWidgets';

const heroList = [
  { title: 'Automobiles', image },
  { title: 'Clothes and wear', image: image2 },
  { title: 'home interiors', image },
  { title: 'computer tech', image: image2 },
  { title: 'tools, equipment', image },
  { title: 'sports and outdoor', image: image2 },
  { title: 'animals and pets', image },
  { title: 'mechinary', image: image2 },
  { title: 'more', image },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Hero = (props: HeroPropsInterface) => {
  const [selected, setSelected] = React.useState<SelectedState>({
    image: heroList[0].image,
    title: heroList[0].title,
  });
  return (
    <Flex className="my-4 w-full items-center justify-between rounded-md bg-white p-2 dark:bg-gray-900 lg:space-x-12">
      <HeroList selected={selected} setSelected={setSelected} list={heroList} />
      <HeroImage src={selected.image} />
      <HeroWidgets />
    </Flex>
  );
};
export default Hero;
