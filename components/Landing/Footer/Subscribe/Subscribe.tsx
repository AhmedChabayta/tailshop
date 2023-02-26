import { Button, Flex, Input, Typography } from '@src/components';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { subscribeConstants } from './Subscribe.constants';

const Subscribe = () => (
  <Flex className="my-8 min-h-[190px] w-screen flex-col items-center justify-center space-y-4 rounded-md bg-white text-center">
    <Flex className="flex-col capitalize">
      <Typography className="text-xl font-[600]">
        {subscribeConstants.subscripe_text}
      </Typography>
      <Typography className="text-base">
        {subscribeConstants.subscribe_desc}
      </Typography>
    </Flex>
    <Flex className="space-x-2">
      <Flex className="bg-white">
        <EnvelopeIcon className="mr-2 w-5" />
        <Input
          placeholder="email"
          className="h-[40px] appearance-none bg-transparent placeholder:capitalize focus:outline-none"
        />
      </Flex>
      <Button
        className="rounded-md bg-amber-500 py-2 px-3 text-base font-[600] capitalize dark:bg-blue-500"
        type="button"
      >
        {subscribeConstants.subscribe_button}
      </Button>
    </Flex>
  </Flex>
);
export default Subscribe;
