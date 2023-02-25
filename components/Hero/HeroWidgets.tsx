import { Button, Flex, Typography } from '@src/components';
import Avatar from '@src/components/Avatar/Avatar';

const HeroWidgets = () => {
  return (
    <Flex className="hidden flex-col space-y-2 lg:flex">
      <Flex className="flex-col items-center justify-center space-y-2 rounded-md bg-blue-300/50 p-2 backdrop-blur-sm dark:bg-gray-700 ">
        <Flex className="h-20 w-full max-w-[180px] items-center space-x-3 ">
          <Avatar className="w-12" />
          <Typography className="whitespace-normal">
            HI user lets get farted
          </Typography>
        </Flex>
        <Button className="w-full rounded-md bg-blue-300 py-2 hover:bg-blue-400 active:scale-95 dark:bg-orange-800 dark:hover:bg-orange-900">
          Join now
        </Button>
        <Button className="w-full rounded-md bg-orange-300 py-2 hover:bg-orange-400 active:scale-95 dark:bg-blue-600 dark:hover:bg-blue-700">
          Login
        </Button>
      </Flex>
      <hr />
      <Flex className="widgets bg-lime-300 before:bg-purple-300  after:bg-purple-300 dark:bg-lime-700 dark:before:bg-purple-700 dark:after:bg-purple-700 dark:hover:bg-lime-800">
        <Typography className="text-[16px]">
          Get US $10 off with a new supplier
        </Typography>
      </Flex>
      <Flex className="widgets bg-purple-300 before:bg-lime-300 after:bg-lime-300 dark:bg-purple-700 dark:before:bg-lime-700 dark:after:bg-lime-700 dark:hover:bg-purple-800">
        <Typography className="text-[16px]">
          Send quotes with supplier preferences
        </Typography>
      </Flex>
    </Flex>
  );
};
export default HeroWidgets;
