import { Box, Button, Flex, Typography } from '@src/components';
import { StaticImageData } from 'next/image';

const HeroImage = ({ src }: { src: StaticImageData }) => (
  <Flex
    style={{
      backgroundImage: `url(${src.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    }}
    className="relative h-[400px] w-screen items-center justify-center transition-shadow duration-300 hover:shadow-[0px_0px_20px_0px_#000] lg:max-w-[666px]"
  >
    <Box className="absolute inset-0 h-full w-full bg-gray-300/40 transition-all duration-75 ease-linear hover:backdrop-blur-sm">
      <Typography className="m-6 max-w-[200px] text-3xl font-bold text-gray-900 dark:text-blue-600">
        Latest Trending
        <Typography
          as="span"
          className="ml-2 font-black text-amber-700 dark:text-gray-900"
        >
          Electronic Items
        </Typography>
      </Typography>
      <Button className="m-6 rounded bg-amber-300 p-2 transition-shadow duration-500 ease-in-out hover:shadow-[0px_0px_20px_1px_rgb(252,211,77)] active:scale-105 dark:bg-blue-600 dark:hover:shadow-[0px_0px_20px_1px_rgb(37,99,235)]">
        Learn more
      </Button>
    </Box>
  </Flex>
);
export default HeroImage;
