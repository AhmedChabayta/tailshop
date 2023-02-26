interface FooterMenu {
  heading: string;
  links: FooterLink[];
}

interface FooterLink {
  label: string;
  url: string;
}

export const footerMenus: FooterMenu[] = [
  {
    heading: 'About',
    links: [
      {
        label: 'About Us',
        url: '/about-us',
      },
      {
        label: 'Find Us',
        url: '/find-us',
      },
      {
        label: 'Categories',
        url: '/categories',
      },
      {
        label: 'Blogs',
        url: '/blogs',
      },
    ],
  },
  {
    heading: 'Partners',
    links: [
      {
        label: 'About Our Partners',
        url: '/partners',
      },
      {
        label: 'About Us',
        url: '/about-us',
      },
      {
        label: 'Become a Partner',
        url: '/become-partner',
      },
      {
        label: 'Support',
        url: '/support',
      },
    ],
  },
  {
    heading: 'Information',
    links: [
      {
        label: 'Help Center',
        url: '/help-center',
      },
      {
        label: 'Support',
        url: '/support',
      },
      {
        label: 'Terms of Use',
        url: '/terms-of-use',
      },
      {
        label: 'Privacy Policy',
        url: '/privacy-policy',
      },
    ],
  },
];

export const footerText = {
  desc: 'Best information about the company gies here but now lorem ipsum is',
  rights: 'All rights reserved © 2023 | Get Our App',
};
