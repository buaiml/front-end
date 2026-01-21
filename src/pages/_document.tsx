import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/icon/favicon.ico"/>
        <link rel="shortcut icon" href="/icon/favicon.ico"/>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"/>

        {/* Open Graph meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="BU AI Society" />
        <meta property="og:description" content="Boston University's AI Society - Learn, build, and explore artificial intelligence with us." />
        <meta property="og:image" content="https://buaisociety.org/images/logo.png" />
        <meta property="og:url" content="https://buaisociety.org" />
        <meta property="og:site_name" content="BU AI Society" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BU AI Society" />
        <meta name="twitter:description" content="Boston University's AI Society - Learn, build, and explore artificial intelligence with us." />
        <meta name="twitter:image" content="https://buaisociety.org/images/logo.png" />

        {/* General meta tags */}
        <meta name="description" content="Boston University's AI Society - Learn, build, and explore artificial intelligence with us." />
      </Head>
      <body className="antialiased">
      <Main/>
      <NextScript/>
      </body>
    </Html>
  );
}
