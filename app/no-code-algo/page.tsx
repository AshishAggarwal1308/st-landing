'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';
import { FaLanguage } from 'react-icons/fa';
import { LuHourglass } from 'react-icons/lu';
import {
    PiPencilSimpleLineBold,
    PiArrowCircleDownBold,
    PiSmileySadBold,
    PiChartBarBold,
    PiBracketsSquareBold,
} from 'react-icons/pi';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {
    PiClipboardTextBold,
    PiBookBookmarkBold,
    PiTargetBold,
    PiMonitorPlayBold,
} from 'react-icons/pi';

import { formatDate_, timestamp } from '@/lib/masterclass_functions/formatDate';
import Script from 'next/script';
import PopupModal from '../components/FormPopup';


const topics = [
    {
        bold: 'Master Forex Basics:',
        description: 'Understand currency pairs, pips, and how the Forex market works',
    },
    {
        bold: 'Trade with Confidence:',
        description: 'Learn how to analyze market trends and make smart trading decisions',
    },
    {
        bold: 'Minimize Risks, Maximize Profits:',
        description: 'Get strategies for managing risk and protecting your investments',
    },
    {
        bold: 'Trade Management:',
        description:
            'Learn the fundamentals of entering, exiting, holding, stop loss, and setting targets to build a profitable trading strategy.',
    },
    {
        bold: 'Trade Efficiently:',
        description: 'Discover how to trade in just 15 minutes a day without complex indicators.',
    },
    {
        bold: 'Stay Ahead of the Game:',
        description: 'Learn how to keep up with global financial news and market changes.',
    },
    {
        bold: '',
        description: 'Which currency pair to trade?',
    },
    {
        bold: '',
        description: 'What time zone to select while trading?',
    },
    {
        bold: '',
        description: 'How to get free access to prop firms/funded accounts',
    },
    {
        bold: '',
        description: 'Bank zone strategy',
    },
    {
        bold: '',
        description: 'News-based trading',
    },
];

const whatyoulearn = [
    {
        icon: <PiPencilSimpleLineBold className="text-blue-500" size={30} />,
        title: 'Feeling Stuck In The 9–To–5 Grind?',
        description: "Do you lack time for trading due to the Indian Stock Market's Timing (9:15 AM to 3:30 PM)?",
    },
    {
        icon: <PiArrowCircleDownBold className="text-blue-500" size={30} />,
        title: 'Emotional Trading Leading To Losses?',
        description: 'Letting fear and greed define your trades?',
    },
    {
        icon: <PiSmileySadBold className="text-blue-500" size={30} />,
        title: 'Confused By Technical Terms?',
        description: 'Pips, lot sizes, candlesticks—do they sound overwhelming?',
    },
    {
        icon: <PiChartBarBold className="text-blue-500" size={30} />,
        title: 'Struggling With Entry And Exit Points?',
        description: 'Not sure when to jump in or get out of a trade?',
    },
    {
        icon: <PiBracketsSquareBold className="text-blue-500" size={30} />,
        title: 'Overwhelmed By Market News?',
        description: 'Unsure how to filter and use financial news to your advantage?',
    },
];
const benefits = [
    {
        icon: <PiClipboardTextBold className="text-blue-500" size={28} />,
        title: 'Control Your Emotions:',
        description: 'Develop A Trading Psychology That Helps You Maintain Control, Stick To Your Plan, And Achieve A Flow State While Trading',
    },
    {
        icon: <PiBookBookmarkBold className="text-blue-500" size={28} />,
        title: 'Gain Confidence In Your Trading',
        description: 'Learn The Strategies That Professional Traders Use So You Can Make Informed Decisions And Trade With Confidence',
    },
    {
        icon: <PiTargetBold className="text-blue-500" size={28} />,
        title: 'Strategic Mastery:',
        description:
            'Learn Winning Strategies That Guide Your Entry, Exit, And Trade Management For Consistent Success And Maximum Returns',
    },
    {
        icon: <PiMonitorPlayBold className="text-blue-500" size={28} />,
        title: 'Imagine Earning Money Anytime, Anywhere:',
        description:
            'With Forex, The Market Is Open 24 Hours A Day, Allowing You To Trade Whenever It Fits Your Schedule.',
    },
];

const faqs = [
    {
        question: "Can I use these strategies for Forex Trading?",
        answer: "Yes, these strategies are designed to be applicable to Forex trading as well."
    },
    {
        question: "Who should take this Masterclass?",
        answer: "Anyone interested in mastering Forex trading, from beginners to intermediate traders."
    },
    {
        question: "Is it a live masterclass?",
        answer: "Yes, it is a live interactive session led by expert traders."
    },
    {
        question: "Is this free of cost, or do I have to pay anything extra for this?",
        answer: "This masterclass is currently offered for ₹499 FREE, no additional cost involved."
    },
    {
        question: "Will we get recordings of the sessions?",
        answer: "Yes, recordings will be provided after the sessions for future reference."
    }
];
export const noCodeAlgoPoints = [
    {
        number: 1,
        text: (
            <>
                Understand the <span className="text-orange-500 font-semibold">basics of algorithmic trading</span> and how no-code platforms simplify it.
            </>
        ),
    },
    {
        number: 2,
        text: (
            <>
                Learn to <span className="text-orange-500 font-semibold">design and build trading strategies</span> without writing a single line of code.
            </>
        ),
    },
    {
        number: 3,
        text: (
            <>
                Use drag-and-drop tools to <span className="text-orange-500 font-semibold">automate entry, exit, and risk management</span> rules.
            </>
        ),
    },
    {
        number: 4,
        text: (
            <>
                Backtest your strategies with <span className="text-orange-500 font-semibold">historical data</span> to optimize performance.
            </>
        ),
    },
    {
        number: 5,
        text: (
            <>
                Deploy your algorithms on live markets using <span className="text-orange-500 font-semibold">integrated broker APIs</span> securely.
            </>
        ),
    },
    {
        number: 6,
        text: (
            <>
                Monitor and improve strategies in real time with <span className="text-orange-500 font-semibold">built-in analytics and alerts</span>.
            </>
        ),
    },
];

const strugglingin = [
  {
    number: 1,
    text: (
      <>
        Struggling to <span className="text-orange-500 font-semibold">turn your trading ideas into automated strategies</span> without coding?
      </>
    ),
  },
  {
    number: 2,
    text: (
      <>
        Finding it hard to <span className="text-orange-500 font-semibold">test your strategies</span> before risking real money?
      </>
    ),
  },
  {
    number: 3,
    text: (
      <>
        Confused by <span className="text-orange-500 font-semibold">complex trading platforms and tools</span> that require coding knowledge?
      </>
    ),
  },
  {
    number: 4,
    text: (
      <>
        Don't know how to <span className="text-orange-500 font-semibold">set up automated buy/sell signals</span> effectively?
      </>
    ),
  },
  {
    number: 5,
    text: (
      <>
        Facing issues in <span className="text-orange-500 font-semibold">managing risk and stop losses</span> in your algo systems?
      </>
    ),
  },
  {
    number: 6,
    text: (
      <>
        Unsure which tools or platforms are best for <span className="text-orange-500 font-semibold">no-code algo trading</span>?
      </>
    ),
  },
];



function Page() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [UserName, setUserName] = useState("");
    const [UserPhone, setUserPhone] = useState("");
    const [UserEmail, setUserEmail] = useState("");
    const [wDateTime, setwDateTime] = useState("");
    const [wDate, setwDate] = useState("");
    const [campName, setCampName] = useState("");
    const [offerEnd, setOfferEnd] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPhone = (phone: string) => /^[0-9]{10}$/.test(phone);
    const toggle = (index: number) => { setActiveIndex(activeIndex === index ? null : index) };
    const [isModalOpen, setIsModalOpen] = useState(false);

    React.useEffect(() => {
        const apiUrl = "https://script.google.com/macros/s/AKfycby-TiE4gLk4bUC-mSYaT_lDwyOU1T6JTMNw2pIeYQ59qJ2Mk0x9jk_6x47QR5ASCcdasQ/exec?q=generic";

        fetch(apiUrl)
            .then(response => response.json()).then(data => {
                const wDatetime = new Date(data.wDateTime);
                const workDate = new Date(data.wDate);
                const campName = (data.code);
                let wDateTime = formatDate_(wDatetime);
                let wDate = formatDate_(workDate);
                setwDateTime(wDateTime)
                setwDate(wDate)
                setCampName(campName)

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
fbq('init', '1690170988281403');
fbq('track', 'PageView');


        `}
            </Script>
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src="https://www.facebook.com/tr?id=1690170988281403&ev=PageView&noscript=1"

                />
            </noscript>
            <title>Free Masterclass: Learn No-Code Algo Trading</title>
            <meta
                name="description"
                content="Learn about StockTutor mission, values, and dedication to providing top-notch stock market education. Discover how we help traders and investors achieve success in the stock market."
            ></meta>


            <main>
                <div className="w-full">

                    <section className="w-full flex flex-col items-center px-4 py-2 md:py-12 bg-white">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-1 md:gap-10 items-start">
                            {/* Left Content */}

                            <div className="order-2 lg:order-1 space-y-2 md:space-y-2" >
                                <Image
                                    src="https://stocktutor.com/_next/image?url=https%3A%2F%2Fst-staticimg.s3.ap-south-1.amazonaws.com%2Fassets%2Flogo.png&w=256&q=75"
                                    alt="Mastering Intraday Trading"
                                    width={1920}
                                    height={1080}
                                    className=" object-contain h-10 w-full rounded-lg order-1 lg:order-2 "
                                />
                                <h2 className="text-2xl md:text-4xl font-bold text-black">
                                    Masterclass on <span className="text-yellow-500">No Code Algo Trading</span>
                                </h2>
                                <p className="text-lg text-gray-700">
                                    Over <span className="font-semibold text-yellow-500">100k learners</span> already enrolled in the masterclass.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-orange-50 border border-orange-200 p-4 rounded-xl">
                                        <p className="text-sm text-gray-600">Masterclass Date</p>
                                        <p className="text-sm md:text-lg font-semibold text-black">{wDateTime}</p>
                                    </div>
                                    <div className="bg-orange-50 border border-orange-200 p-4 rounded-xl">
                                        <p className="text-sm text-gray-600">Offer End</p>
                                        <p className="text-sm md:text-lg font-semibold text-black">{offerEnd}</p>
                                    </div>
                                    <div className="bg-orange-50 border border-orange-200 p-4 rounded-xl">
                                        <p className="text-sm text-gray-600">Language</p>
                                        <p className="text-sm md:text-lg font-semibold text-black">Hindi</p>
                                    </div>
                                    <div className="bg-orange-50 border border-orange-200 p-4 rounded-xl">
                                        <p className="text-sm text-gray-600">Duration</p>
                                        <p className="text-sm md:text-lg font-semibold text-black">2+ Hours</p>
                                    </div>
                                </div>

                                <button onClick={() => setIsModalOpen(true)} className="mt-4 w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold">
                                    Register Now For Free
                                </button>
                                <PopupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                                {/* User Avatars and Ratings */}
                                <div className="flex items-center mt-4 space-x-3">
                                    <div className="flex -space-x-2">
                                        <Image src="/user1.jpg" alt="user1" width={32} height={32} className="rounded-full border-2 border-white" />
                                        <Image src="/user2.jpg" alt="user2" width={32} height={32} className="rounded-full border-2 border-white" />
                                        <Image src="/user3.jpg" alt="user3" width={32} height={32} className="rounded-full border-2 border-white" />
                                    </div>
                                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-sm font-medium">48k+ Students</span>
                                    <span className="text-sm text-gray-600">14k+ reviews (4.9 of 5)</span>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="w-full relative">

                                <Image
                                    src="/all.png"
                                    alt="Mastering Intraday Trading"
                                    width={1920}
                                    height={1080}
                                    className="w-full object-cover h-fit rounded-lg order-1 lg:order-2 "
                                />
                                
                            </div>
                        </div>

                        {/* Footer Text */}
                        <div className="mt-10 max-w-7xl bg-orange-50 border border-orange-200 px-6 py-4 rounded-xl text-center">
                            <p className="text-lg text-gray-700">
                                Learn from <span className="font-semibold text-black">highly experienced tutors</span> expertise in trading, having taught over 10,000+ students and accumulated <span className="font-semibold text-yellow-500">13+ years of experience.</span>
                            </p>
                        </div>
                    </section>

                    <section className="bg-[#001d36] text-white py-16 px-4">
                        <div className="max-w-6xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-12">
                                What Will You <span className="text-orange-500">Learn?</span>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {noCodeAlgoPoints.map((point) => (
                                    <div
                                        key={point.number}
                                        className="bg-white text-black flex items-start gap-4 p-5 rounded-xl shadow-md"
                                    >
                                        <span className="bg-orange-100 text-orange-600 font-semibold px-3 py-1 rounded-md">
                                            {point.number}
                                        </span>
                                        <p className="text-left text-sm sm:text-base">{point.text}</p>
                                    </div>
                                ))}
                            </div>

                            <button onClick={() => setIsModalOpen(true)} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition">
                                Register Now For Free
                            </button>
                            <PopupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                        </div>
                    </section>


                    <section className="w-full px-4 py-16 bg-white">
                        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">

                            {/* Tutors Image */}
                            <div className="w-full md:w-1/2">
                                <img
                                    src="/alltutors.png" // Replace with your actual group photo
                                    alt="Our Expert Tutors"
                                    className="w-full h-auto rounded-xl object-cover"
                                />
                            </div>

                            {/* About Section */}
                            <div className="w-full md:w-1/2">
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our No-Code Algo Trading Mentors</h2>

                                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                    Our team of tutors comprises experienced algorithmic traders, financial engineers, and educators who are passionate about democratizing algo trading. With a focus on **no-code platforms**, they empower traders of all backgrounds—whether you're a beginner or an active investor—to build powerful trading strategies without writing a single line of code.
                                </p>

                                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                    Every mentor on our team brings practical market knowledge, platform expertise, and a commitment to simplifying the complex. Through hands-on workshops, real-time simulations, and ongoing support, they ensure that learners not only understand the theory but can confidently apply it in live market conditions.
                                </p>
                            </div>
                        </div>
                    </section>


                    <section className="py-16 px-4">
                        <div className="max-w-6xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-12">
                                Are You <span className="text-orange-500">Struggling in?</span>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {strugglingin.map((point) => (
                                    <div
                                        key={point.number}
                                        className="bg-white text-black flex items-start gap-4 p-5 rounded-xl shadow-md"
                                    >
                                        <span className="bg-orange-100 text-orange-600 font-semibold px-3 py-1 rounded-md">
                                            {point.number}
                                        </span>
                                        <p className="text-left text-sm sm:text-base">{point.text}</p>
                                    </div>
                                ))}
                            </div>

                            <button onClick={() => setIsModalOpen(true)} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition">
                                Register Now For Free
                            </button>
                            <PopupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                        </div>
                    </section>

                    <section className="bg-[#001d36] text-white py-16 px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-4xl font-bold text-center mb-10 leading-snug">
                                Frequently Asked <span className="text-yellow-400">Questions</span>
                            </h2>

                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        className="bg-white text-black rounded-xl overflow-hidden shadow-lg transition-all duration-300"
                                    >
                                        <button
                                            onClick={() => toggle(index)}
                                            className="w-full flex items-center justify-between p-5 text-left font-semibold text-lg hover:bg-gray-100 transition-colors"
                                        >
                                            <span>{faq.question}</span>
                                            {activeIndex === index ? (
                                                <FiChevronUp className="text-xl" />
                                            ) : (
                                                <FiChevronDown className="text-xl" />
                                            )}
                                        </button>
                                        {activeIndex === index && (
                                            <div className="p-5 border-t bg-gray-50 text-gray-700 text-base">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-12">

                                <button onClick={() => setIsModalOpen(true)} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition">
                                    Register Now For Free
                                </button>
                                <PopupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

                            </div>
                        </div>
                    </section>

                    <div className="bg-white pt-10 pb-40  px-4">
                        <div className="max-w-5xl mx-auto">
                            <p className="text-center text-sm text-gray-700 leading-relaxed">
                                All content on this site is for educational purposes only and does not constitute financial advice.
                                Investing in stocks involves risks, including the loss of principal. Past performance is not indicative
                                of future results and is influenced by market conditions. Conduct your own research or consult a
                                financial advisor before making any investment decisions. The author is not responsible for any financial
                                losses or gains resulting from the use of this information.
                                <br /><br />
                                This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, this site is NOT endorsed
                                by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc.
                                <br /><br />
                                As stipulated by law, we can not and do not make any guarantees about your ability to get results or earn
                                any money with our ideas, information, tools or strategies. We just want to help you by giving great content,
                                direction and strategies that worked well for us and our students and that we believe can move you forward.
                                <br /><br />
                                All of our terms, privacy policies, and disclaimers for this program and website can be accessed via the link above.
                                We feel transparency is important and we hold ourselves and you to a high standard of integrity.
                                <br /><br />
                                Thanks for stopping by. We hope this training and content brings you a lot of value.
                            </p>
                        </div>
                    </div>

                    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white  inset-shadow-sm px-4 py-2 md:py-4">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-1 md:gap-4 max-w-6xl mx-auto">
                            <div className="text-center md:text-left">
                                <span className="text-lg md:text-2xl font-bold text-black block"><span className="line-through">₹499</span> FREE!!</span>
                                <span className="text-gray-700 block">Offer ends on : {offerEnd}</span>
                            </div>
                            <button onClick={() => setIsModalOpen(true)} className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-1 px-3 md:px-6 md:py-3 rounded-md shadow-lg transition">
                                Register Now For Free
                            </button>
                            <PopupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

                        </div>
                    </div>

                </div>
            </main>


        </>

    );
}

export default Page;