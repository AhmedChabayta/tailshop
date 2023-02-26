import { Box, Dropdown, Flex, Input, Typography } from '@src/components';
import { formBg } from '@src/assets/form';

const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const RequestForm = () => (
  <Flex
    className="relative my-4 h-[446px] w-full justify-between overflow-hidden rounded-md"
    style={{
      backgroundImage: `url(${formBg.src})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}
  >
    <Flex className="z-30 max-w-md flex-col p-8 ">
      <Typography className="text-3xl text-gray-50">
        An easy way to send requests to all suppliers
      </Typography>
      <Typography className="text-base text-gray-50">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt.
      </Typography>
    </Flex>
    <form className="z-30 m-4 hidden max-w-[491px] flex-1 flex-col justify-between space-y-2 bg-white/60 p-4 backdrop-blur-md lg:flex">
      <Typography className="text-xl text-gray-900 dark:text-gray-900" as="h1">
        Send quote to suppliers
      </Typography>
      <Input
        className="border bg-white py-1 px-2 capitalize text-gray-900 placeholder:text-sm focus:outline-none"
        placeholder="what item you need?"
      />
      <textarea
        className="min-h-[73px] appearance-none border border-gray-300 outline-none focus:outline-none"
        placeholder="Type more details"
      />
      <Flex>
        <Dropdown label="quantity" items={quantity} />
        <Dropdown label="pcs" items={quantity} />
      </Flex>
    </form>
    <Box className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-blue-400/80 to-blue-300/80" />
  </Flex>
);
export default RequestForm;
