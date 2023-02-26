import { Dropdown, Typography } from '@src/components';
import useClickOutside from '@src/hooks/useClickOutside/useClickOutside';
import React from 'react';
import { useLayoutStore } from '@src/store/LayoutStore';
import { AnimatePresence, motion } from 'framer-motion';
import _categories from '../Header/constants/cat.json';

const { categories } = _categories;
const category = categories.map((cat) => cat.category);

const Sidebar = () => {
  const { sidebar, setSidebar } = useLayoutStore();

  const clickOutsideRef = useClickOutside(() => setSidebar(false));

  return (
    <AnimatePresence>
      {sidebar && (
        <motion.div
          initial={{
            x: -400,
          }}
          animate={{ x: 0 }}
          exit={{ x: -400 }}
          transition={{ type: 'tween' }}
          ref={clickOutsideRef}
          className="fixed inset-y-0 left-0 z-50 flex-col space-y-2 overflow-x-hidden overflow-y-scroll bg-gray-100 p-4 text-start shadow-2xl dark:bg-gray-900 lg:max-w-[30vw]"
        >
          <Typography className="text-4xl font-black">Sidebar</Typography>
          <Dropdown label="All Categories" items={category} />
          {categories.map((cat) => (
            <Dropdown
              items={cat.subcategories}
              key={cat.category}
              label={cat.category}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Sidebar;
