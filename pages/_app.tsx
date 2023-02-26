import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { RecoilRoot } from 'recoil';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class">
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  </ThemeProvider>
);

export default MyApp;
