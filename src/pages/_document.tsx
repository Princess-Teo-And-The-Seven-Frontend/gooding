import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

const META_DATA = {
  title: '구딩',
  description: '내 구독 관리의 시작, 이제는 구딩에서!',
  author: 'Princess-Teo-And-The-Seven-Frontend',
  image: 'gooding_logo.png',
};

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta name="robots" content="follow, index" />
          <meta name="description" content={META_DATA.description} />
          <meta name="keyword" content="구딩, 구독" />
          <meta name="author" content={META_DATA.author} />
          <meta property="og:site_name" content={META_DATA.title} />
          <meta property="og:description" content={META_DATA.description} />
          <meta property="og:title" content={META_DATA.title} />
          <meta property="og:image" content={META_DATA.image} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
