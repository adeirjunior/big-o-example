import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <title>Big O Notation</title>

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Big O Notation Explained" />
        <meta
          property="og:description"
          content="Learn about different algorithm complexities."
        />
        <meta property="og:image" content="https://example.com/big-o.jpg" />
        <meta property="og:url" content="https://example.com/big-o-notation" />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Big O Notation Explained" />
        <meta
          name="twitter:description"
          content="Learn about different algorithm complexities."
        />
        <meta name="twitter:image" content="https://example.com/big-o.jpg" />

        <link rel="stylesheet" href="/styles.css" />
        <link rel="canonical" href="https://example.com/big-o-notation" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
