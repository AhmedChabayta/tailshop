import { Box, Flex, Typography } from '@src/components';
import Countdown from '@src/components/Countdown/Countdown';
import uuid from 'react-uuid';
import Image from 'next/image';
import { CardDataInterface } from '@src/store/dataStoreTypes';

interface Props {
  data?: CardDataInterface[];
}
const Deals = (props: Props) => {
  const targetDate = new Date('2023-03-01T00:00:00');
  const { data } = props;
  return (
    <Flex className="my-6 mx-auto w-full flex-col rounded-md bg-white p-4 text-gray-900 md:flex-row">
      <Flex className="flex-col items-center justify-start lg:items-start">
        <Typography className="text-[20px]">Deals and Offers</Typography>
        <Typography as="small" className="text-[16px]">
          Hygiene and Equipments
        </Typography>
        <Box className="my-4">
          <Countdown targetDate={targetDate} />
        </Box>
      </Flex>
      <Flex className="overflow-x-scroll lg:overflow-auto">
        {data?.map((deals) => (
          <Flex
            className="mx-auto shrink-0 flex-col items-center py-4 px-2 "
            key={uuid()}
          >
            <Image
              className="h-44 w-44 object-contain"
              width={100}
              height={100}
              src={deals.image}
              alt={deals.title}
            />
            <Typography>{deals.category}</Typography>
            <Box>
              <Typography className="rounded-full bg-pink-400/40 p-2 text-sm text-red-900">
                %{deals.price}
              </Typography>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
export default Deals;
