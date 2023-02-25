import { useEffect, useState } from 'react';
import Flex from '../Flex/Flex';
import Box from '../Box/Box';

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setRemainingTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const { days, hours, minutes, seconds } = remainingTime;

  return (
    <Flex className="space-x-2 px-2">
      <Flex className="h-[50px] w-[50px] items-center justify-center rounded bg-gray-400 p-2 text-center">
        {days.toString().padStart(2, '0')} Days
      </Flex>
      <Flex className="h-[50px] w-[50px] items-center justify-center rounded bg-gray-400 p-2 text-center">
        {hours.toString().padStart(2, '0')} Hour
      </Flex>
      <Flex className="h-[50px] w-[50px] items-center justify-center rounded bg-gray-400 p-2 text-center">
        {minutes.toString().padStart(2, '0')} Min
      </Flex>
      <Flex className="h-[50px] w-[50px] items-center justify-center rounded bg-gray-400 p-2 text-center">
        {seconds.toString().padStart(2, '0')} Sec
      </Flex>
    </Flex>
  );
};

export default Countdown;
