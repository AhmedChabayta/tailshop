import React from 'react';
import Flex from '@src/components/Flex';

import HeaderForm from '../HeaderForm/HeaderForm';
import PersonalLinks from '../constants/PersonalLinks';
import HeaderNav from '../HeaderNav/HeaderNav';
import { HeaderLogo } from '../HeaderLogo';

const Header = () => (
  <Flex className="flex-col items-center bg-white px-4 dark:bg-gray-900">
    <Flex className="container max-w-7xl flex-col">
      <Flex className=" flex w-full  flex-col items-center justify-between border-b border-gray-200 py-4 text-gray-900 dark:text-gray-300 lg:flex-row">
        <HeaderLogo />
        <HeaderForm />
        <PersonalLinks />
      </Flex>
      <HeaderNav />
    </Flex>
  </Flex>
);
export default Header;
