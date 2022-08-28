import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { reset } from '@/styles/Reset';
import { RecoilRoot } from 'recoil';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="gooding_favicon_logo.png" />
      <title>구딩</title>
      <meta name="description" content="내 구독 관리의 시작, 이제는 구딩에서!" />
    </Head>
    <Global styles={reset} />
    <Component {...pageProps} />
  </RecoilRoot>
);

export default MyApp;
