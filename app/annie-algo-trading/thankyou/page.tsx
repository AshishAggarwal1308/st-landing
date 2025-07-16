'use client';
import React, { useState } from 'react';
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { formatDate_, timestamp } from '@/lib/masterclass_functions/formatDate';
import Script from 'next/script';
import Head from 'next/head';

const ConfirmationPage = () => {
    const [wDateTime, setwDateTime] = useState("");
    const [offerEnd, setOfferEnd] = useState("");
    const [wAurl, setWAurl] = useState('');
    React.useEffect(() => {
        const apiUrl = "https://script.google.com/macros/s/AKfycby-TiE4gLk4bUC-mSYaT_lDwyOU1T6JTMNw2pIeYQ59qJ2Mk0x9jk_6x47QR5ASCcdasQ/exec?q=vibhor";

        fetch(apiUrl)
            .then(response => response.json()).then(data => {
                const wDate = new Date(data.wDateTime);
                let wDateTime = formatDate_(wDate);
                setwDateTime(wDateTime)
                setWAurl(data.wAurl);
                //   setInterval("updateTimer()", 1000);
            }
            );

        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'December'];
        var tomorrow = new Date();
        tomorrow.setTime(tomorrow.getTime());

        setOfferEnd(months[tomorrow.getMonth()] + " " + tomorrow.getDate() + ", " + tomorrow.getFullYear())
    }, [])

    return (
        <>
            <Head>
                <script type="text/javascript" dangerouslySetInnerHTML={{
                    __html: `
          window._tfa = window._tfa || [];
          window._tfa.push({notify: 'event', name: 'page_view', id: 1855234});
          !function (t, f, a, x) {
            if (!document.getElementById(x)) {
              t.async = 1;t.src = a;t.id=x;f.parentNode.insertBefore(t, f);
            }
          }(document.createElement('script'),
          document.getElementsByTagName('script')[0],
          '//cdn.taboola.com/libtrc/unip/1855234/tfa.js',
          'tb_tfa_script');
        ` }} />
            </Head>

            <Script id="meta-pixel" strategy="afterInteractive">
                {`
          !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '10041111282577074');
fbq('track', 'PageView');

        `}
            </Script>
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src="https://www.facebook.com/tr?id=10041111282577074&ev=PageView&noscript=1"

                />
            </noscript>

            <title>Stock Tutor - Thankyou</title>
            <meta
                name="description"
                content="Learn about StockTutor mission, values, and dedication to providing top-notch stock market education. Discover how we help traders and investors achieve success in the stock market."
            ></meta>
            <main>
                <div className="min-h-screen bg-gradient-to-br from-teal-400 to-teal-300 flex flex-col justify-between items-center px-4 py-10">
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4">
                            <span className="text-white">Congrats!</span> <span className="text-black">You’re In!</span> <span className="text-3xl">🎉</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-center text-black mb-6">
                            You have <span className="font-semibold">successfully reserved your seat</span> for the Masterclass.
                        </p>
                    </div>
                    <div className="w-full max-w-3xl bg-white rounded-md shadow-md border-t-4 border-yellow-400">
                        <div className="flex justify-center p-6">
                            <Link href={wAurl}>
                                <div className="w-full sm:w-auto bg-green-400 hover:bg-green-500 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center text-xl cursor-pointer">
                                    <FaWhatsapp className="w-8 h-8 mr-3" />
                                    Join WhatsApp Group
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full max-w-2xl bg-white rounded-md shadow-md mt-8 border-t-4 border-blue-600">
                        <div className="flex flex-col sm:flex-row items-center justify-center p-4 gap-2 text-lg">
                            <div className="flex items-center gap-2">
                                <span role="img" aria-label="calendar">📅</span>
                                <span>{wDateTime}</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-md sm:text-lg text-center text-gray-800 mt-6">
                        Click on the button above to join the WhatsApp group.
                    </p>
                    <p className="text-xl sm:text-2xl font-bold text-white text-center mt-2">
                        Do Not Forget to Join Whatsapp Group Before <br className="sm:hidden" />
                        Jumping into the Masterclass
                    </p>
                </div>
            </main>

        </>

    );
};

export default ConfirmationPage;
