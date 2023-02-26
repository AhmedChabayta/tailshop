// eslint-disable-next-line import/no-extraneous-dependencies
import { SocialIcon } from 'react-social-icons';
import { HeaderLogo } from '@src/assets';
import { Flex, Typography } from '@src/components';
import uuid from 'react-uuid';
import { footerMenus, footerText } from '../Footer.constants';

const About = () => (
  <Flex className="my-16 ml-12 flex-col items-start space-y-12 lg:ml-0 lg:flex-row lg:items-center lg:justify-evenly lg:space-y-0">
    <Flex className="max-w-[247px] flex-col space-y-6">
      <HeaderLogo />
      <Typography>{footerText.desc}</Typography>
      <Flex className="space-x-3">
        <SocialIcon
          style={{ width: 32, height: 32, objectFit: 'contain' }}
          url="https://www.instagram.com/salatinata/"
        />
        <SocialIcon
          style={{ width: 32, height: 32, objectFit: 'contain' }}
          url="https://github.com/AhmedChabayta"
        />
        <SocialIcon
          style={{ width: 32, height: 32, objectFit: 'contain' }}
          url="https://facebook.com"
        />
        <SocialIcon
          style={{ width: 32, height: 32, objectFit: 'contain' }}
          url="https://youtube.com"
        />
        <SocialIcon
          style={{ width: 32, height: 32, objectFit: 'contain' }}
          url="https://www.linkedin.com/in/ahmed-chabayta-810267253/"
        />
      </Flex>
    </Flex>
    {footerMenus.map((list) => (
      <ul key={uuid()}>
        <li className="font-black">{list.heading}</li>
        {list.links.map((link) => (
          <li key={uuid()}>{link.label}</li>
        ))}
      </ul>
    ))}
  </Flex>
);
export default About;
