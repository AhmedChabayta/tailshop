import { Bars4Icon } from '@heroicons/react/24/solid';
import { Typography } from '@src/components';
import Flex from '@src/components/Flex';
import { useLayoutStore } from '@src/store/LayoutStore';
import { useStore } from '@src/store/useDataStore';
import uuid from 'react-uuid';

const HeaderNav = () => {
  const { setSidebar } = useLayoutStore();
  const { categories } = useStore();
  return (
    <Flex className="w-full space-x-4 border-gray-200 py-4 text-gray-900 dark:text-gray-300">
      <Bars4Icon
        onClick={() => setSidebar(true)}
        className="w-5 cursor-pointer"
      />
      {categories.map((category) => (
        <Typography className="capitalize" key={uuid()}>
          {category}
        </Typography>
      ))}
    </Flex>
  );
};
export default HeaderNav;
