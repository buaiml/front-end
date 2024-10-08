import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link ref="icon" href="/icon/favicon.ico"/>
        <link ref="shortcut icon" href="/icon/favicon.ico"/>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"/>
      </Head>
      <body className="antialiased">
      <Main/>
      <NextScript/>
      </body>
    </Html>
  );
}
