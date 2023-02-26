import { HeaderLogo as HeaderLogoSVG } from '@src/assets';
import { Box } from '@src/components';
import Link from 'next/link';

const HeaderLogo = () => (
  <Box className="invert dark:invert-0">
    <Link href="/">
      <HeaderLogoSVG />
    </Link>
  </Box>
);
export default HeaderLogo;
