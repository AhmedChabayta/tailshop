import { ButtonGroup, DynamicWrapper, Typography } from '@src/components';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import {
  UserIcon,
  ChatBubbleLeftIcon,
  HeartIcon,
  ShoppingCartIcon,
  Bars4Icon,
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/solid';

const links = [
  {
    icons: UserIcon,
    title: 'profile',
  },
  {
    icons: ChatBubbleLeftIcon,
    title: 'message',
  },
  {
    icons: HeartIcon,
    title: 'orders',
  },
  {
    icons: ShoppingCartIcon,
    title: 'my cart',
  },
];

const PersonalLinks = () => {
  const { theme, setTheme } = useTheme();
  return (
    <ButtonGroup className="mt-4 text-gray-500 lg:mt-0">
      {links.map((button) => (
        <Link key={button.title} href="/">
          <Typography className="px-2">
            <button.icons className="w-5 text-gray-900 dark:text-gray-300" />
          </Typography>
        </Link>
      ))}
      <DynamicWrapper ssr={false}>
        {theme === 'light' ? (
          <Typography className="cursor-pointer">
            <MoonIcon
              className="w-5 text-amber-700 active:scale-110"
              onClick={() => setTheme('dark')}
            />
          </Typography>
        ) : (
          <Typography className="cursor-pointer">
            <SunIcon
              className="w-5 text-amber-500 active:scale-110"
              onClick={() => setTheme('light')}
            />
          </Typography>
        )}
      </DynamicWrapper>
    </ButtonGroup>
  );
};
export default PersonalLinks;
