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
        question: "Is this Masterclass only for Forex trading?",
        answer: "Yes, this Masterclass is dedicated to helping learners understand and trade effectively in the Forex market.",
    },
    {
        question: "Who is this Masterclass for?",
        answer: "Anyone who wants to learn Forex trading—from beginners with no background to traders looking to sharpen their skills.",
    },
    {
        question: "Is it a live or recorded session?",
        answer: "It is a live and interactive session led by experienced Forex traders.",
    },
    {
        question: "Is there any cost involved?",
        answer: "This Masterclass is offered for just ₹499 and currently being promoted as FREE. You won’t pay anything extra.",
    },
    {
        question: "Will I get a recording after the session?",
        answer: "Yes, the session recording will be shared with all participants for future reference.",
    }
];
const noCodeAlgoPoints = [
    {
        number: 1,
        text: (
            <>
                Get a clear understanding of the <span className="text-orange-500 font-semibold">Forex market structure</span> and currency pairs.
            </>
        ),
    },
    {
        number: 2,
        text: (
            <>
                Learn how to <span className="text-orange-500 font-semibold">read charts and identify trends</span> in real time.
            </>
        ),
    },
    {
        number: 3,
        text: (
            <>
                Master essential tools like <span className="text-orange-500 font-semibold">support, resistance, indicators, and price action</span>.
            </>
        ),
    },
    {
        number: 4,
        text: (
            <>
                Discover <span className="text-orange-500 font-semibold">risk management strategies</span> to protect your capital.
            </>
        ),
    },
    {
        number: 5,
        text: (
            <>
                Learn when to enter and exit trades using <span className="text-orange-500 font-semibold">high-probability setups</span>.
            </>
        ),
    },
    {
        number: 6,
        text: (
            <>
                Get <span className="text-orange-500 font-semibold">real-world examples</span> from pro traders with live case studies.
            </>
        ),
    },
];

const strugglingIn = [
    {
        number: 1,
        text: (
            <>
                Struggling to <span className="text-orange-500 font-semibold">understand how the Forex market works</span>?
            </>
        ),
    },
    {
        number: 2,
        text: (
            <>
                Unsure how to <span className="text-orange-500 font-semibold">analyze charts and spot trade opportunities</span>?
            </>
        ),
    },
    {
        number: 3,
        text: (
            <>
                Losing money due to <span className="text-orange-500 font-semibold">poor risk management and overtrading</span>?
            </>
        ),
    },
    {
        number: 4,
        text: (
            <>
                Don't know when to <span className="text-orange-500 font-semibold">enter or exit a trade</span>?
            </>
        ),
    },
    {
        number: 5,
        text: (
            <>
                Feeling overwhelmed by <span className="text-orange-500 font-semibold">too many technical indicators and tools</span>?
            </>
        ),
    },
    {
        number: 6,
        text: (
            <>
                Tired of following tips and signals without <span className="text-orange-500 font-semibold">understanding the logic</span> behind them?
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
        const redirectUrl = "https://stocktutor.co/forex/thankyou";

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
            <title>Free Masterclass: Learn Forex Trading</title>
            <meta
                name="description"
                content="Learn about StockTutor mission, values, and dedication to providing top-notch stock market education. Discover how we help traders and investors achieve success in the stock market."
            ></meta>


            <main>
                <div className="w-full">

                    <section className="w-full flex flex-col items-center px-4 py-2 md:py-12 bg-white">
                        <div id="form" className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-1 md:gap-10 items-center" >
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
                                    Masterclass on <span className="text-yellow-500">Forex Trading</span>
                                </h2>
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
                                            Register Now For Free
                                        </button>
                                    </form>
                                </div>
                                <Link href="#form">

                                </Link>

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
                                    src="/forex.jpg"
                                    alt="Mastering Intraday Trading"
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
                                    src="/forex.jpg" // Replace with your actual group photo
                                    alt="Our Expert Tutors"
                                    className="w-full h-auto rounded-xl object-cover"
                                />
                            </div>

                            {/* About Section */}
                            <div className="w-full md:w-1/2">
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our <span className="text-orange-500">Forex Trading </span>Mentors</h2>

                                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                    Shivansh Kush Sir is a seasoned Forex trader and mentor with years of hands-on experience in the global currency markets. Known for his clear teaching style and practical approach, he has helped thousands of students understand the core principles of Forex trading—from chart reading and technical analysis to real-time trade execution and risk management. Whether you're a complete beginner or someone looking to improve your trading consistency, Shivansh Sir makes complex concepts easy to grasp and apply.
                                </p>

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