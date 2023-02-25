import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';
import useClickOutside from '@src/hooks/useClickOutside/useClickOutside';
import Box from '../Box/Box';
import { AnimatePresence, motion } from 'framer-motion';
import Flex from '../Flex/Flex';

const Dropdown = ({ items, label }: { items: any[]; label: string }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const clickOutsideRef = useClickOutside(() => setIsOpen(false));

  const handleMenuItemClick = (url: string) => {
    setIsOpen(false);
    router.push(url);
  };

  return (
    <motion.div ref={clickOutsideRef} className="relative w-full">
      <Button
        type="button"
        className="inline-flex w-full items-center justify-center px-4 py-2 font-medium hover:bg-amber-300 dark:hover:bg-blue-600"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Typography className="whitespace-nowrap text-2xl capitalize">
          {label}
        </Typography>
        <ChevronDownIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
      </Button>

      <motion.div
        layout
        animate={{ y: isOpen ? 0 : -3, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      >
        <AnimatePresence>
          <motion.div
            initial={{
              height: 0,
            }}
            animate={{ height: '100%' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4 }}
            className={`${
              isOpen ? 'block' : 'hidden'
            } inset-x-0 z-50 max-h-[350px] w-full min-w-max max-w-[400px] origin-top overflow-hidden overflow-y-scroll`}
          >
            {items?.map((item) => (
              <Button
                key={item}
                type="button"
                className={`block w-full px-4 text-start text-sm hover:bg-amber-300 dark:hover:bg-blue-600`}
                onClick={() => handleMenuItemClick(item)}
              >
                <Typography className="w-full flex-1 whitespace-nowrap p-3 text-xl capitalize">
                  {item}
                </Typography>
              </Button>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Dropdown;
