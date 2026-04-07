export default function Head() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

      <link rel="icon" href="/logovmp.jpg" />
      <link rel="apple-touch-icon" href="/logovmp.jpg" />
      <link rel="manifest" href="/manifest.json" />

      <meta property="og:title" content="Portfolio" />
      <meta
        property="og:description"
        content="Discover the projects of Vanessa, developer and creative designer"
      />
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content="https://votresite.com" />
      <meta property="og:image" content="/og-image.png" /> */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Portfolio" />
      <meta
        name="twitter:description"
        content="Discover the projects of Vanessa, developer and creative designer"
      />
      {/* <meta name="twitter:image" content="/og-image.png" /> */}
    </>
  );
}
