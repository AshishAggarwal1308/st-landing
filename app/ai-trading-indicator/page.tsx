'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
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

// Declare fbq function for TypeScript
declare global {
    interface Window {
        fbq: (action: string, event: string, data?: any) => void;
    }
}


const topics = [
    {
        bold: 'Master AI-Powered Indicators:',
        description: 'Learn to use advanced AI indicators for NIFTY and Stock Options trading',
    },
    {
        bold: 'Maximize Your Accuracy & Profit:',
        description: 'Discover proven AI strategies that increase trading accuracy and profitability',
    },
    {
        bold: 'Learn, Trade & Earn:',
        description: 'Get hands-on experience with live trading sessions and real market applications',
    },
    {
        bold: 'AI-Powered Risk Management:',
        description: 'Learn AI-driven risk management techniques for consistent returns',
    },
    {
        bold: 'Live Trading Sessions:',
        description: 'Participate in live trading sessions with expert guidance',
    },
    {
        bold: 'Stay Ahead with AI:',
        description: 'Learn how to leverage AI technology for better trading decisions',
    },
    {
        bold: '',
        description: 'Which AI indicators work best for NIFTY options?',
    },
    {
        bold: '',
        description: 'How to combine multiple AI signals for higher accuracy?',
    },
    {
        bold: '',
        description: 'AI-driven position sizing and risk management',
    },
    {
        bold: '',
        description: 'Real-time market scanning with AI tools',
    },
    {
        bold: '',
        description: 'Backtesting and optimizing AI strategies',
    },
];

const whatyoulearn = [
    {
        icon: <PiPencilSimpleLineBold className="text-blue-500" size={30} />,
        title: 'Struggling with Traditional Indicators?',
        description: "Are you finding it hard to get consistent signals from traditional technical indicators?",
    },
    {
        icon: <PiArrowCircleDownBold className="text-blue-500" size={30} />,
        title: 'Low Accuracy in Trading?',
        description: 'Facing losses due to false signals and poor entry/exit timing?',
    },
    {
        icon: <PiSmileySadBold className="text-blue-500" size={30} />,
        title: 'Overwhelmed by Market Data?',
        description: 'Too much information and conflicting signals making trading decisions difficult?',
    },
    {
        icon: <PiChartBarBold className="text-blue-500" size={30} />,
        title: 'Poor Risk Management?',
        description: 'Not sure how to manage position sizes and set proper stop losses?',
    },
    {
        icon: <PiBracketsSquareBold className="text-blue-500" size={30} />,
        title: 'Missing Trading Opportunities?',
        description: 'Unable to identify high-probability trades in NIFTY and Stock Options?',
    },
];
const benefits = [
    {
        icon: <PiClipboardTextBold className="text-blue-500" size={28} />,
        title: 'Maximize Your Accuracy & Profit:',
        description: 'Learn AI-powered strategies that significantly improve trading accuracy and profitability in NIFTY and Stock Options',
    },
    {
        icon: <PiBookBookmarkBold className="text-blue-500" size={28} />,
        title: 'Learn, Trade & Earn:',
        description: 'Get hands-on experience with live trading sessions and real market applications using AI indicators',
    },
    {
        icon: <PiTargetBold className="text-blue-500" size={28} />,
        title: 'Live Trading Sessions:',
        description:
            'Participate in live trading sessions with expert guidance to see AI indicators in action',
    },
    {
        icon: <PiMonitorPlayBold className="text-blue-500" size={28} />,
        title: 'AI-Powered Indicators:',
        description:
            'Access advanced AI indicators that provide high-probability signals for NIFTY and Stock Options trading.',
    },
];

const faqs = [
    {
        question: "What are AI Indicator Trading Strategies?",
        answer: "AI Indicator Trading Strategies use artificial intelligence and machine learning algorithms to analyze market data and generate trading signals with higher accuracy than traditional indicators.",
    },
    {
        question: "Who should register to this advisory service?",
        answer: "This service is ideal for traders who want to leverage AI technology for better trading decisions, from beginners to experienced traders looking to enhance their strategies.",
    },
    {
        question: "How accurate are the AI-generated signals?",
        answer: "Our AI indicators are designed to provide high-probability signals with reduced false positives, though past performance doesn't guarantee future results.",
    },
    {
        question: "What markets do you cover with these strategies?",
        answer: "We cover Nifty, Bank Nifty, and individual stock options trading using our AI indicator strategies.",
    },
    {
        question: "Do you provide ongoing support and updates?",
        answer: "Yes, we provide continuous support and regular updates to our AI indicators to adapt to changing market conditions.",
    }
];
const aiIndicatorPoints = [
    {
        number: 1,
        text: (
            <>
                Master <span className="text-orange-500 font-semibold">AI-powered technical indicators</span> for precise market analysis and signal generation.
            </>
        ),
    },
    {
        number: 2,
        text: (
            <>
                Learn to <span className="text-orange-500 font-semibold">combine multiple AI signals</span> for higher accuracy and reduced false signals.
            </>
        ),
    },
    {
        number: 3,
        text: (
            <>
                Implement <span className="text-orange-500 font-semibold">AI-driven risk management</span> including dynamic stop-loss and position sizing.
            </>
        ),
    },
    {
        number: 4,
        text: (
            <>
                Backtest strategies using <span className="text-orange-500 font-semibold">historical data and optimize AI parameters</span> for maximum returns.
            </>
        ),
    },
    {
        number: 5,
        text: (
            <>
                Access <span className="text-orange-500 font-semibold">real-time market scanning tools</span> that identify opportunities across multiple timeframes.
            </>
        ),
    },
    {
        number: 6,
        text: (
            <>
                Build a <span className="text-orange-500 font-semibold">diversified portfolio using AI indicators</span> across Nifty, Bank Nifty, and individual stocks.
            </>
        ),
    },
];

const strugglingIn = [
    {
        number: 1,
        text: (
            <>
                Struggling to <span className="text-orange-500 font-semibold">identify high-probability trades using traditional indicators</span>?
            </>
        ),
    },
    {
        number: 2,
        text: (
            <>
                Finding it hard to <span className="text-orange-500 font-semibold">manage multiple timeframes and conflicting signals</span>?
            </>
        ),
    },
    {
        number: 3,
        text: (
            <>
                Confused by <span className="text-orange-500 font-semibold">overwhelming market data and too many indicators</span>?
            </>
        ),
    },
    {
        number: 4,
        text: (
            <>
                Don't know how to <span className="text-orange-500 font-semibold">set optimal entry and exit points for maximum profits</span>?
            </>
        ),
    },
    {
        number: 5,
        text: (
            <>
                Facing issues in <span className="text-orange-500 font-semibold">risk management and position sizing for consistent returns</span>?
            </>
        ),
    },
    {
        number: 6,
        text: (
            <>
                Unsure which <span className="text-orange-500 font-semibold">AI indicators work best for Nifty and Stock Options</span>?
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
    const router = useRouter();

    React.useEffect(() => {
        const apiUrl = "https://script.google.com/macros/s/AKfycby-TiE4gLk4bUC-mSYaT_lDwyOU1T6JTMNw2pIeYQ59qJ2Mk0x9jk_6x47QR5ASCcdasQ/exec?q=prabhu";

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormErrors({});

        const formData = {
            name: UserName.trim(),
            email: UserEmail.trim(),
            phone: UserPhone.trim(),
        };

        let isValid = true;
        const errors: typeof formErrors = {};

        if (!formData.name) {
            errors.name = "Name is required.";
            isValid = false;
        }

        if (!isValidEmail(formData.email)) {
            errors.email = "Invalid email address.";
            isValid = false;
        }

        if (!isValidPhone(formData.phone)) {
            errors.phone = "Invalid phone number.";
            isValid = false;
        }

        if (!isValid) {
            setFormErrors(errors);
            return;
        }

        setIsSubmitting(true);

        const urlParams = new URLSearchParams(window.location.search);
        const hostname = window.location.hostname;

        let redirectUrl = "";

        if (hostname.includes("chahataggrawal.in")) {
            redirectUrl = "https://stocktutor.chahataggrawal.in/ai-trading-indicator/thankyou";
        } else {
            redirectUrl = "https://stocktutor.co/ai-trading-indicator/thankyou";
        }

        const data = {
            submittedAt: timestamp(),
            ...formData,
            CampeignName: campName,
            WorkShopTime: wDateTime,
            WorkShopDate: wDate,
            utm_source: urlParams.get("utm_source"),
            utm_medium: urlParams.get("utm_medium"),
            utm_campaign: urlParams.get("utm_campaign"),
            utm_adgroup: urlParams.get("utm_adgroup"),
            utm_content: urlParams.get("utm_content"),
            utm_term: urlParams.get("utm_term"),
            adsetName: urlParams.get("adset name"),
            adName: urlParams.get("ad name"),
            landingPageUrl: window.location.href,
        };


        try {
            const response = await fetch(`https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTY4MDYzMzA0M2Q1MjZjNTUzZDUxMzMi_pc`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }



            window.location.href = redirectUrl;

        } catch (error: any) {
            console.error("Submission error:", error.message);
            alert("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };



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
fbq('init', '1834827303964862');
fbq('track', 'PageView');

        `}
            </Script>
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src="https://www.facebook.com/tr?id=1834827303964862&ev=PageView&noscript=1"

                />
            </noscript>
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=AW-17081559506"
            />
            <Script id="google-ads" strategy="afterInteractive">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17081559506');

        `}
            </Script>


            <title>⭐⭐⭐⭐⭐ (4.9/5) - Join Free AI Trading Masterclass</title>
            <meta
                name="description"
                content="AI Indicator Trading Strategies for NIFTY and Stock Options. Learn from Prabhu Selvaraj Sir, NISM Certified Expert with 12+ years experience. Join 48k+ students in this free masterclass."
            ></meta>


            <main>
                <div className="w-full text-black">

                    <section className="w-full flex flex-col items-center px-4 py-2 md:py-12 bg-white" id="form">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-1 md:gap-10 items-center">
                            {/* Left Content */}

                            <div className="order-2 lg:order-1 space-y-2 md:space-y-2" >
                                <Image
                                    src="https://stocktutor.com/_next/image?url=https%3A%2F%2Fst-staticimg.s3.ap-south-1.amazonaws.com%2Fassets%2Flogo.png&w=256&q=75"
                                    alt="Mastering Intraday Trading"
                                    width={1920}
                                    height={1080}
                                    className=" object-contain h-10 w-full rounded-lg order-1 lg:order-2 "
                                />
                                {/* <h2 className="text-2xl md:text-4xl font-bold text-black">
                                                        Masterclass on <span className="text-yellow-500">No Code Algo Trading</span>
                                                    </h2> */}
                                {/* <p className="text-lg text-gray-700">
                                                                            Over <span className="font-semibold text-yellow-500">100k learners</span> already enrolled in the masterclass.
                                                                        </p> */}
                                <div>
                                    <form className="space-y-2 w-full" onSubmit={handleSubmit} >
                                        <div>
                                            <label className="block mb-1 text-gray-700">Name</label>
                                            <input
                                                name="name"
                                                placeholder="Enter Name"
                                                onChange={(e) => setUserName(e.target.value)}
                                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                                required
                                            />
                                        </div>
                                        {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}

                                        <div>
                                            <label className="block mb-1 text-gray-700">Email</label>
                                            <input
                                                name="email"
                                                onChange={(e) => setUserEmail(e.target.value)}
                                                type="email"
                                                placeholder="Enter Email"
                                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                                required
                                            />
                                        </div>
                                        {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}

                                        <div>
                                            <label className="block mb-1 text-gray-700">Phone</label>
                                            <div className="flex">
                                                <span className="flex items-center px-4 bg-gray-200 border border-r-0 rounded-l-md text-gray-700">
                                                    IND
                                                </span>
                                                <input
                                                    name="phone"
                                                    placeholder="Enter Phone"
                                                    onChange={(e) => setUserPhone(e.target.value)}
                                                    className="w-full px-4 py-2 border border-l-0 rounded-r-md focus:outline-none focus:ring-2 focus:ring-black"
                                                    required
                                                />
                                            </div>
                                            {formErrors.phone && <p className="text-red-500">{formErrors.phone}</p>}
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full py-2 rounded-md transition text-xl text-white
                                                        ${isSubmitting
                                                    ? "bg-gray-400 cursor-not-allowed"
                                                    : "bg-gradient-to-r from-orange-400 to-orange-600 cursor-pointer"
                                                }`}
                                        >
                                            {isSubmitting ? "Submitting..." : "Submit"}
                                        </button>
                                    </form>
                                </div>

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
                                    src="/ai-indicator-cover.jpg"
                                    alt="AI Indicator Trading Strategies"
                                    width={1920}
                                    height={1080}
                                    className="w-full object-cover h-fit rounded-lg order-1 lg:order-2 "
                                />

                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto p-4">
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


                        {/* Footer Text */}
                        <div className="mt-10 max-w-7xl bg-orange-50 border border-orange-200 px-6 py-4 rounded-xl text-center">
                            <p className="text-lg text-gray-700">
                                Learn from <span className="font-semibold text-black">Prabhu Selvaraj Sir</span>, NISM Certified Expert with <span className="font-semibold text-yellow-500">12+ years of experience</span> and <span className="font-semibold text-yellow-500">11,000+ students trained</span> in AI-powered trading strategies.
                            </p>
                        </div>
                    </section>



                    <section className="bg-[#001d36] text-white py-16 px-4">
                        <div className="max-w-6xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-12">
                                What Will You <span className="text-orange-500">Learn?</span>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {aiIndicatorPoints.map((point) => (
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
                            <Link href="#form">
                                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition">
                                    Register Now For Free
                                </button>
                            </Link>

                        </div>
                    </section>


                    <section className="w-full px-4 py-16 bg-white">
                        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">

                            {/* Tutors Image */}
                            <div className="w-full md:w-1/2">
                                <img
                                    src="/ai-indicator-cover.jpg"
                                    alt="Prabhu Selvaraj Sir - AI Trading Expert"
                                    className="w-full h-auto rounded-xl object-cover"
                                />
                            </div>

                            {/* About Section */}
                            <div className="w-full md:w-1/2">
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our <span className="text-orange-500">AI Trading </span>Expert</h2>

                                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                    Prabhu Selvaraj Sir is a NISM Certified Expert with 12+ years of experience in trading. He has empowered over 11,000+ students with AI-powered trading techniques and proven strategies for Nifty and Stock Options trading. His expertise in AI indicators and systematic approach to trading has helped thousands of traders achieve consistent profitability in the markets.
                                </p>

                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <div className="bg-orange-50 p-4 rounded-lg">
                                        <h3 className="font-semibold text-orange-600">11,000+ Students Trained</h3>
                                    </div>
                                    <div className="bg-orange-50 p-4 rounded-lg">
                                        <h3 className="font-semibold text-orange-600">NISM Certified Expert</h3>
                                    </div>
                                    <div className="bg-orange-50 p-4 rounded-lg">
                                        <h3 className="font-semibold text-orange-600">12+ Years Experience</h3>
                                    </div>
                                    <div className="bg-orange-50 p-4 rounded-lg">
                                        <h3 className="font-semibold text-orange-600">Proven AI Strategies</h3>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>


                    <section className="py-16 px-4 bg-[#001d36]">
                        <div className="max-w-6xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
                                Are You <span className="text-orange-500">Struggling in?</span>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {strugglingIn.map((point) => (
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
                            <Link href="#form">
                                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition">
                                    Register Now For Free
                                </button>
                            </Link>
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

                                <Link href="#form">
                                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition">
                                        Register Now For Free
                                    </button>
                                </Link>

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
                            <Link href="#form">
                                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition">
                                    Register Now For Free
                                </button>
                            </Link>

                        </div>
                    </div>

                </div>
            </main>


        </>

    );
}

export default Page;