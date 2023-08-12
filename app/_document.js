import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <script src="https://earthengine.googleapis.com/api/apps/embed" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}