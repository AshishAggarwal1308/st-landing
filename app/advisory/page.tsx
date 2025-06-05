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
import { PiHandWavingBold, PiPhoneCallBold, PiArrowRightBold } from "react-icons/pi";


const topics = [
    {
        bold: 'Get Actionable Stock Recommendations:',
        description: 'Receive well-researched buy/sell/hold calls on high-potential stocks across different sectors.',
    },
    {
        bold: 'Personalized Investment Ideas:',
        description: 'Get stock suggestions based on your risk appetite, investment goals, and market behavior.',
    },
    {
        bold: 'Short-Term & Long-Term Picks:',
        description: 'Access curated stock ideas for both quick gains and long-term wealth creation.',
    },
    {
        bold: 'Fundamental & Technical Analysis:',
        description: 'Recommendations backed by detailed research, including earnings, valuation, and chart analysis.',
    },
    {
        bold: 'Smart Entry & Exit Levels:',
        description: 'Know the best price points to buy or exit with predefined targets and stop-loss levels.',
    },
    {
        bold: 'Stay Updated with Market Trends:',
        description: 'Stay ahead of key market movements, sectoral shifts, and economic events.',
    },
    {
        bold: '',
        description: 'Which stocks are likely to outperform in the current market?',
    },
    {
        bold: '',
        description: 'How to manage your portfolio during volatile conditions?',
    },
    {
        bold: '',
        description: 'How to access premium stock recommendations at no cost?',
    },
    {
        bold: '',
        description: 'Strategies to identify multibagger stocks early.',
    },
    {
        bold: '',
        description: 'Earnings season: How to pick winners and avoid risky bets.',
    },
];


const whatyoulearn = [
    {
        icon: <PiPencilSimpleLineBold className="text-blue-500" size={30} />,
        title: 'Clueless About What Stocks To Buy?',
        description: "Struggling to identify fundamentally strong and high-growth potential stocks?",
    },
    {
        icon: <PiArrowCircleDownBold className="text-blue-500" size={30} />,
        title: 'Losing Money Despite Tips?',
        description: 'Following random tips from social media without proper analysis costing you money?',
    },
    {
        icon: <PiSmileySadBold className="text-blue-500" size={30} />,
        title: 'Overwhelmed By Too Much Information?',
        description: 'Confused by financial jargon, multiple apps, and conflicting advice?',
    },
    {
        icon: <PiChartBarBold className="text-blue-500" size={30} />,
        title: 'Unsure When To Buy Or Sell?',
        description: 'Don’t know the right entry/exit points or how to set targets and stop losses?',
    },
    {
        icon: <PiBracketsSquareBold className="text-blue-500" size={30} />,
        title: 'Missing Out On Market Trends?',
        description: 'Feel like you’re always a step behind in spotting market opportunities?',
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

const packages = [
    {
        name: "Welcome Package",
        price: "₹ 25k + GST",
        capital: "Capital 50k return 80k - 1 lakh",
        features: [
            "Daily 1 or 2 trade minimum provide in all segment",
            "Proper research team support",
            "Proper technical support",
            "Personal research analyst support",
            "Only one research alert per day"
        ],
    },
    {
        name: "Silver Package",
        price: "₹ 50k + GST",
        capital: "Capital minimum 1 lakh return 1 lakh to 1.5 lakh",
        features: [
            "Daily 1 or 2 trade minimum provide in all segment",
            "Proper research team support",
            "Proper technical support",
            "Personal research analyst support"
        ],
    },
    {
        name: "Golden Package",
        price: "₹ 1 Lakh + GST",
        capital: "Minimum 3 lakh capital required",
        features: [
            "Return 2.5 lakh to 3 lakh",
            "Daily 1 or 2 trade given",
            "Proper research team support",
            "Personal research analyst support",
            "Only one research alert per day"
        ],
    },
];

const faqs = [
    {
        question: "What type of stock recommendations will I receive?",
        answer: "You will receive high-conviction positional, intraday, and options trade recommendations backed by in-depth research and analysis."
    },
    {
        question: "Who is this subscription best suited for?",
        answer: "It’s ideal for retail traders, HNIs, and anyone looking to trade with confidence using expert-backed recommendations."
    },
    {
        question: "How will I receive the recommendations?",
        answer: "Recommendations are shared via WhatsApp, email, or app notifications with real-time updates and trade levels."
    },
    {
        question: "Is there any free trial available?",
        answer: "We offer limited-time trial access during select periods. Please check with our team for current availability."
    },
    {
        question: "Will I get support if I have doubts or questions?",
        answer: "Yes, our advisory team is available to assist you with trade-related queries and provide ongoing support."
    }
];


const advisoryPoints = [
    {
        number: 1,
        text: (
            <>
                Get <span className="text-orange-500 font-semibold">personalized stock recommendations</span> based on in-depth market research.
            </>
        ),
    },
    {
        number: 2,
        text: (
            <>
                Receive <span className="text-orange-500 font-semibold">daily trade alerts</span> with clear entry, exit, and stop loss levels.
            </>
        ),
    },
    {
        number: 3,
        text: (
            <>
                Understand <span className="text-orange-500 font-semibold">why a stock is recommended</span> — with detailed technical and fundamental insights.
            </>
        ),
    },
    {
        number: 4,
        text: (
            <>
                Benefit from <span className="text-orange-500 font-semibold">timely updates</span> during market hours to manage trades confidently.
            </>
        ),
    },
    {
        number: 5,
        text: (
            <>
                Access <span className="text-orange-500 font-semibold">dedicated research analyst support</span> for any trade-related queries.
            </>
        ),
    },
    {
        number: 6,
        text: (
            <>
                Get <span className="text-orange-500 font-semibold">capital-to-return guidance</span> to align trades with your financial goals.
            </>
        ),
    },
];


const strugglingin = [
    {
        number: 1,
        text: (
            <>
                Struggling to <span className="text-orange-500 font-semibold">find accurate stock recommendations</span> you can trust?
            </>
        ),
    },
    {
        number: 2,
        text: (
            <>
                Unsure how to <span className="text-orange-500 font-semibold">manage trades with proper entry, exit, and stop loss levels</span>?
            </>
        ),
    },
    {
        number: 3,
        text: (
            <>
                Confused by <span className="text-orange-500 font-semibold">too much market noise and conflicting tips</span>?
            </>
        ),
    },
    {
        number: 4,
        text: (
            <>
                Struggling to <span className="text-orange-500 font-semibold">stay updated during market hours</span> and miss key moves?
            </>
        ),
    },
    {
        number: 5,
        text: (
            <>
                Tired of <span className="text-orange-500 font-semibold">inconsistent results and emotional trading decisions</span>?
            </>
        ),
    },
    {
        number: 6,
        text: (
            <>
                Don’t know which <span className="text-orange-500 font-semibold">stocks, segments, or strategies</span> are right for your capital and goals?
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
            redirectUrl = "https://stocktutor.chahataggrawal.in/advisory/thankyou";
        } else {
            redirectUrl = "https://stocktutor.co/advisory/thankyou";
        }

        window.location.href = redirectUrl;

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
            const response = await fetch(`https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTY4MDYzZjA0MzI1MjY4NTUzNjUxMzMi_pc`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
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
            {/* <Script id="meta-pixel" strategy="afterInteractive">
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
            </noscript> */}
            <title>Advisory Subscription</title>
            <meta
                name="description"
                content="Learn about StockTutor mission, values, and dedication to providing top-notch stock market education. Discover how we help traders and investors achieve success in the stock market."
            ></meta>


            <main>
                <div className="w-full">

                    <section className="w-full flex flex-col items-center px-4 py-2 md:py-12 bg-white">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-1 md:gap-10 items-center">
                            {/* Left Content */}

                            <div className="order-2 lg:order-1 space-y-2 md:space-y-2" >
                                <Image
                                    src="https://stocktutor.com/_next/image?url=https%3A%2F%2Fst-staticimg.s3.ap-south-1.amazonaws.com%2Fassets%2Flogo.png&w=256&q=75"
                                    alt="Mastering Intraday Trading"
                                    width={1920}
                                    height={1080}
                                    className=" object-contain h-16 w-full rounded-lg order-1 lg:order-2 "
                                />
                                {/* <h2 className="text-2xl md:text-4xl font-bold text-black">
                                    Unlock Profitable Stock Ideas with <span className="text-yellow-500">Our Advisory Plan</span>
                                </h2> */}
                                {/* <p className="text-lg text-gray-700">
                                    Over <span className="font-semibold text-yellow-500">100k learners</span> already enrolled in the masterclass.
                                </p> */}
                                <div>
                                    <form className="space-y-1 w-full" onSubmit={handleSubmit} >
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
                                            className="mt-4 w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold">
                                            Subscribe Now
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
                                    src="/chahat.png"
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
                                Led by <span className="font-semibold text-black">Chahat Aggarwal</span>, a seasoned market expert with <span className="font-semibold text-yellow-500">12+ years of experience</span>, our advisory services have empowered over 2,000+ clients — including HNIs, retail investors, and institutions — with trusted stock recommendations and real-time insights.
                            </p>

                        </div>
                    </section>



                    <section className="bg-[#001d36] text-white py-16 px-4">
                        <div className="max-w-6xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-12">
                                What Will You <span className="text-orange-500">Get?</span>
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {advisoryPoints.map((point) => (
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
                                    Subscribe Now
                                </button>
                            </Link>

                        </div>
                    </section>

                    <section className="py-16 px-4 bg-white">
                        <div className="max-w-6xl mx-auto text-center">
                            <h2 className="text-4xl font-bold mb-2">Our Packages</h2>
                            <p className="text-lg text-gray-700 mb-12">
                                <span className="text-orange-500 font-semibold">Grow Your</span>{" "}
                                <span className="text-blue-800 font-semibold">Profit</span>
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {packages.map((pkg, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-50 border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col justify-between transition hover:shadow-xl"
                                    >
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-1">{pkg.name}</h3>
                                            <p className="text-lg font-bold text-red-600">{pkg.price}</p>


                                            <p className="mt-4 text-sm text-gray-600 font-medium">{pkg.capital}</p>

                                            <ul className="mt-6 space-y-3 text-sm text-gray-700 text-left">
                                                {pkg.features.map((feature, i) => (
                                                    <li key={i} className="border-b pb-2 last:border-b-0">
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mt-6">
                                            <Link href="#form">
                                                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-sm text-blue-700 font-medium rounded-lg hover:bg-gray-200 transition">
                                                    Enquiry Now <PiArrowRightBold />
                                                </button>
                                            </Link>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>


                    <section className="w-full px-4 py-16 bg-white">
                        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">

                            {/* Tutors Image */}
                            <div className="w-full md:w-1/2">
                                <img
                                    src="/chahataggrawal.png" // Replace with your actual group photo
                                    alt="Our Expert Tutors"
                                    className="w-full max-h-[300px] rounded-xl object-contain"
                                />
                            </div>

                            {/* About Section */}
                            <div className="w-full md:w-1/2">
                                <h2 className="text-4xl font-bold text-gray-900 mb-1">Meet Our <span className="text-orange-500">SEBI Registered RA</span></h2>
                                <p className="text-gray-700 text-lg leading-relaxed mb-2">SEBI Registered Research Analyst (INH000018577)</p>
                                <p className="text-gray-700 text-md leading-relaxed">With a client base of over 2000+ individuals—including HNIs, retail investors, and institutions—our advisory services have built a strong reputation for delivering actionable, research-backed insights.Our expertise spans AI-powered tools for sentiment analysis, signal generation, and portfolio optimization.Recognized for our deep market insights and compliance-first approach, we’re also active speakers in trading webinars and investor education programs.</p>
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
                            <Link href="#form">
                                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition">
                                    Subscribe Now
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
                                        Subscribe Now
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

                    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white inset-shadow-sm px-4 py-2 md:py-4 shadow-md border-t border-gray-200">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-1 md:gap-4 max-w-6xl mx-auto">
                            <div className="text-center md:text-left">
                                <span className="text-lg md:text-2xl font-bold text-black block">
                                    Join Our Premium Stock Advisory
                                </span>
                                <span className="text-gray-700 block">
                                    Get expert trade recommendations, real-time updates & full support
                                </span>
                            </div>
                            <Link href="#form">
                                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition">
                                    Subscribe Now
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