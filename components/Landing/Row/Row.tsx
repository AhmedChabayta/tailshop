import { Box, Button, Flex, Grid, Typography } from '@src/components';
import { CardDataInterface } from '@src/store/dataStoreTypes';

import Image, { StaticImageData } from 'next/image';

const Row = ({
  list,
  main,
  className,
}: {
  list: CardDataInterface[];
  main: {
    image: StaticImageData;
    title: string;
  };
  className?: string;
}) => (
  <Flex className={className}>
    <Flex className="relative hidden lg:flex">
      <Image
        width={500}
        height={250}
        className="h-full min-w-[280px] object-fill brightness-75"
        src={main.image}
        alt="home"
      />
      <Flex className="absolute top-0 flex-col space-y-4 p-4">
        <Typography
          className="w-[132px] text-xl font-[600] dark:text-gray-900"
          as="h3"
        >
          {main.title}
        </Typography>
        <Button className="rounded-md bg-white p-1 text-base capitalize dark:bg-gray-900">
          source now
        </Button>
      </Flex>
    </Flex>

    <Box className="flex w-screen snap-x snap-mandatory overflow-x-scroll md:grid md:grid-cols-3 lg:w-full lg:snap-none lg:grid-cols-4">
      {list.map((product) => (
        <Grid.Item
          className="flex min-h-full w-full max-w-[230px] shrink-0 snap-center items-center justify-between overflow-hidden border p-2 md:min-w-full md:shrink"
          key={product.title}
        >
          <Flex className="flex-col text-gray-900 dark:text-gray-900">
            <Typography className="block max-w-[70px]  truncate dark:text-gray-900 lg:max-w-[110px]">
              {product.title}
            </Typography>
            <Typography className="block text-gray-700 dark:text-gray-700">
              from {product.price}$
            </Typography>
          </Flex>
          <Image
            width={98}
            height={98}
            className="object-contain"
            src={product?.image}
            alt={product.title}
          />
        </Grid.Item>
      ))}
    </Box>
  </Flex>
);
export default Row;
