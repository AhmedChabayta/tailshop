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
}) => {
  return (
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

      <Box className="flex w-full items-center overflow-x-scroll lg:grid lg:grid-cols-4">
        {list.map((product) => (
          <Grid.Item
            className="flex h-[130px] min-w-[200px] shrink-0 justify-between border p-2"
            key={product.title}
          >
            <Flex className="shrink-0 flex-col text-gray-900 dark:text-gray-900">
              <Typography className="block max-w-[140px] truncate dark:text-gray-900">
                {product.title}
              </Typography>
              <Typography className="block text-gray-700 dark:text-gray-700">
                from {product.price}$
              </Typography>
            </Flex>
            <Image
              width={50}
              height={50}
              className="object-contain"
              src={product?.image}
              alt={product.title}
            />
          </Grid.Item>
        ))}
      </Box>
    </Flex>
  );
};
export default Row;
