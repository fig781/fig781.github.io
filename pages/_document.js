import { Html, Head, Main, NextScript } from 'next/document';

//used for global head info
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='shortcut icon' type='image/jpg' href='/Images/html.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
