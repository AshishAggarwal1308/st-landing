'use client';
import React, { useState } from 'react';
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { formatDate_, timestamp } from '@/lib/masterclass_functions/formatDate';
import Script from 'next/script';

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
            {/* <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=AW-17066906976"
            />
            <Script id="google-ads" strategy="afterInteractive">
                {`
             window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-17066906976');

            `}
            </Script> */}
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
                            <span>Starts: {wDateTime}</span>
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
        </>

    );
};

export default ConfirmationPage;
