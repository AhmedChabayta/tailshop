import { HeroPropsInterface, SelectedState } from './Hero.Types';
import Flex from '../../src/components/Flex';
import image from '../../src/assets/AdobeStock_446073302.jpeg';
import image2 from '../../src/assets/people1.webp';
import React from 'react';
import HeroImage from './HeroImage';
import HeroList from './HeroList';
import HeroWidgets from './HeroWidgets';

const heroList = [
  { title: 'Automobiles', image: image },
  { title: 'Clothes and wear', image: image2 },
  { title: 'home interiors', image: image },
  { title: 'computer tech', image: image2 },
  { title: 'tools, equipment', image: image },
  { title: 'sports and outdoor', image: image2 },
  { title: 'animals and pets', image: image },
  { title: 'mechinary', image: image2 },
  { title: 'more', image: image },
];

const Hero = (props: HeroPropsInterface) => {
  const [selected, setSelected] = React.useState<SelectedState>({
    image: heroList[0].image,
    title: heroList[0].title,
  });
  return (
    <Flex className="my-4 w-full items-center justify-between rounded-md bg-white p-2 dark:bg-gray-900 lg:space-x-12">
      <HeroList selected={selected} setSelected={setSelected} list={heroList} />
      <HeroImage src={selected.image} alt={selected.title} />
      <HeroWidgets />
    </Flex>
  );
};
export default Hero;
