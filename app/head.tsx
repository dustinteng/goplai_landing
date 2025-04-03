// app/head.tsx
import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>GOPLAI - AI-Powered Sports Community</title>
      <meta
        name="description"
        content="GOPLAI is the first AI-powered sports community for amateur athletes. Track your performance, prove your skill, and relive every game with AI-powered highlights."
      />
      <link rel="icon" href="/favicon.ico" />

      {/* ✅ Google Tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-S40VTSYZH8"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S40VTSYZH8');
          `,
        }}
      />
    </>
  );
}
