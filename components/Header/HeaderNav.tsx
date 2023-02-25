import { Bars4Icon } from '@heroicons/react/24/solid';
import Flex from '@src/components/Flex';
import { useLayoutStore } from '@src/store/LayoutStore';

const HeaderNav = () => {
  const { sidebar, setSidebar } = useLayoutStore();
  console.log(sidebar);
  return (
    <Flex className="w-full border-gray-200 py-4 text-gray-900 dark:text-gray-300">
      <Bars4Icon
        onClick={() => setSidebar(true)}
        className="w-5 cursor-pointer"
      />
    </Flex>
  );
};
export default HeaderNav;
