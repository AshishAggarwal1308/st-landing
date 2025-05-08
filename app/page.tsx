import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
<>
        <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=AW-16491466128"
            />
            <Script id="google-ads" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16491466128');
        `}
            </Script>
</>
  );
}
