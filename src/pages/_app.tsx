import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';

import { reset } from '@/styles/Reset';
import { RecoilRoot } from 'recoil';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <Global styles={reset} />
    <Component {...pageProps} />
  </RecoilRoot>
);

export default MyApp;
