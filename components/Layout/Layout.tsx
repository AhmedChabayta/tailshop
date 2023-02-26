import Head from 'next/head';
import { Box } from '@src/components';
import { Header, Sidebar } from 'components/Landing';
import { LayoutProps } from './Layout.Types';

const Layout = (props: LayoutProps) => {
  const { children, title } = props;
  return (
    <>
      <Head>
        <title>{title || 'Layout'}</title>
      </Head>

      <Header />
      <Sidebar />
      <Box className="container mx-auto max-w-7xl overflow-x-hidden bg-blue-50 dark:bg-gray-900">
        <main className="min-h-screen w-full">{children}</main>
      </Box>
    </>
  );
};
export default Layout;
