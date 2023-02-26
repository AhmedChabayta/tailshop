import { suppliesData } from '@src/assets/suppliers';
import { Box, Grid, Typography } from '@src/components';
import Image from 'next/image';

const Suppliers = () => (
  <>
    <Typography className="mt-6 mb-8 self-start text-3xl">
      Supplies by region
    </Typography>
    <Box className="flex w-full grid-rows-2 flex-row overflow-x-scroll lg:grid lg:grid-cols-5 lg:overflow-hidden">
      {suppliesData.map((supplier) => (
        <Grid.Item
          className="ml-12 flex w-full items-center justify-start gap-x-4 text-start"
          key={supplier.abr}
        >
          <Image
            className="h-[28px] w-[28px] object-contain"
            alt=""
            src={supplier.flag}
          />
          <Box className="">
            <Typography as="h3" className="block">
              {supplier.region}
            </Typography>
            <Typography className="text-[13px] text-gray-700 dark:text-gray-400">
              {supplier.website}
            </Typography>
          </Box>
        </Grid.Item>
      ))}
    </Box>
  </>
);
export default Suppliers;
