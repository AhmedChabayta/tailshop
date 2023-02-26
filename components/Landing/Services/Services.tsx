import { services } from '@src/assets/services';
import { Box, Card, Flex, Typography } from '@src/components';
import uuid from 'react-uuid';

const Services = () => (
  <Flex className="space-x-6 overflow-x-scroll px-2">
    {services.map((service) => (
      <Card
        className="relative min-h-[200px] w-full min-w-[280px] rounded-md bg-white"
        key={uuid()}
      >
        <Box className="relative">
          <Card.Image
            className="w-full"
            height={120}
            width={280}
            src={service.image}
          />
          <Box className="absolute inset-0 bg-black/50" />
        </Box>
        <Card.Details className="text-gray-900">
          <service.Icon className="absolute right-3 top-1/2 w-[55px] min-w-[55px] translate-y-[-20%] rounded-full border border-white bg-sky-100 p-4" />
          <Typography className="max-w-[175px] self-center p-2 capitalize ">
            {service.title}
          </Typography>
        </Card.Details>
      </Card>
    ))}
  </Flex>
);
export default Services;
