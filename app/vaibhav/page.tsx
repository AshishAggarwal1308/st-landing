'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaBookOpen, FaChartLine, FaCheckCircle, FaClipboardCheck, FaCogs, FaPenNib, FaProjectDiagram } from 'react-icons/fa';
import Link from 'next/link';
import { FaLanguage } from 'react-icons/fa';
import { LuHourglass } from 'react-icons/lu';
import { PiPencilSimpleLineBold, PiArrowCircleDownBold, PiSmileySadBold, PiChartBarBold, PiBracketsSquareBold, } from 'react-icons/pi';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { PiClipboardTextBold, PiBookBookmarkBold, PiTargetBold, PiMonitorPlayBold, } from 'react-icons/pi';

import { formatDate_, timestamp } from '@/lib/masterclass_functions/formatDate';
import Script from 'next/script';

const learningPoints = [
    {
        icon: <FaPenNib className="text-blue-600 text-2xl" />,
        text: (
            <>
                Get A Solid Foundation In <strong>Stock Market Essentials</strong> And Build Confidence In Trading.
            </>
        ),
    },
    {
        icon: <FaChartLine className="text-blue-600 text-2xl" />,
        text: (
            <>
                Catch The <strong>Perfect Entry/Exit</strong> Points Like A Professional Trader.
            </>
        ),
    },
    {
        icon: <FaBookOpen className="text-blue-600 text-2xl" />,
        text: (
            <>
                Trade In <strong>Multiple Option Strikes</strong> By Spending Less Than 10 Minutes Of Your Time.
            </>
        ),
    },
    {
        icon: <FaClipboardCheck className="text-blue-600 text-2xl" />,
        text: (
            <>
                <strong>Live Algo Deployment:</strong> Watch As We Set Up A Real Algo Trading System
            </>
        ),
    },
    {
        icon: <FaProjectDiagram className="text-blue-600 text-2xl" />,
        text: (
            <>
                Learn How To Set Up And Automate Your Trading Strategies In Less Than 10 Minutes Without Any Coding Knowledge.
            </>
        ),
    },
    {
        icon: <FaCogs className="text-blue-600 text-2xl" />,
        text: (
            <>
                Automate Your Options Strategies With 10x Accuracy To Ensure Maximum Profitability.
            </>
        ),
    },
];

const topics = [
    {
        bold: '',
        description: 'Trade smarter and get rid of emotional trading',
    },
    {
        bold: '',
        description: 'Let algorithms work for you 24/7 while you enjoy your quality family time.',
    },
    {
        bold: '',
        description: 'Catch more profitable stocks and choose precise entry/exit points with 10x accuracy.',
    },
    {
        bold: '',
        description: 'Boost your profits with smart optimization techniques.',
    },
    {
        bold: '',
        description: 'Achieve consistent high returns without worrying about losses.',
    },
];

const painPoints = [
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
            'With Algo, The Market Is Open 24 Hours A Day, Allowing You To Trade Whenever It Fits Your Schedule.',
    },
];

const faqs = [
    {
        question: "Can I use these strategies for Algo Trading?",
        answer: "Yes, these strategies are designed to be applicable to Algo trading as well."
    },
    {
        question: "Who should take this Masterclass?",
        answer: "Anyone interested in mastering Algo trading, from beginners to intermediate traders."
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

function Page() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [UserName, setUserName] = useState("");
    const [UserPhone, setUserPhone] = useState("");
    const [UserEmail, setUserEmail] = useState("");
    const [wDateTime, setwDateTime] = useState("");
    const [campName, setCampName] = useState("");
    const [offerEnd, setOfferEnd] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPhone = (phone: string) => /^[0-9]{10}$/.test(phone);
    const toggle = (index: number) => { setActiveIndex(activeIndex === index ? null : index) };

    React.useEffect(() => {
        const apiUrl = "https://script.google.com/macros/s/AKfycby-TiE4gLk4bUC-mSYaT_lDwyOU1T6JTMNw2pIeYQ59qJ2Mk0x9jk_6x47QR5ASCcdasQ/exec?q=vaibhav";

        fetch(apiUrl)
            .then(response => response.json()).then(data => {
                const wDate = new Date(data.wDateTime);
                const campName = (data.code);
                let wDateTime = formatDate_(wDate);
                setwDateTime(wDateTime)
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
            redirectUrl = "https://stocktutor.chahataggrawal.in/vaibhav/thankyou";
        } else {
            redirectUrl = "https://stocktutor.co/vaibhav/thankyou";
        }

        window.location.href = redirectUrl;

        const data = {
            submittedAt: timestamp(),
            ...formData,
            CampeignName: campName,
            WorkShopTime: wDateTime,
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
            const response = await fetch(`https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTY4MDYzMzA0M2Q1MjZjNTUzZDUxMzAi_pc`, {
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
          fbq('init', '1769144873815738');
          fbq('track', 'PageView');
        `}
            </Script>
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src="https://www.facebook.com/tr?id=1769144873815738&ev=PageView&noscript=1"
                />
            </noscript>
            <title>Stock Tutor Bootcamp - Vaibhav Batra</title>
            <meta
                name="description"
                content="Learn about StockTutor mission, values, and dedication to providing top-notch stock market education. Discover how we help traders and investors achieve success in the stock market."
            ></meta>

            <main>
                <div className="w-full">
                    <div className="bg-yellow-500 py-4">
                        <p className="text-center text-xl md:text-2xl">Join Our No Code Algo Trading Masterclass & Learn…..</p>
                    </div>

                    <div className="bg-white py-4 md:py-12 px-4 sm:px-6 lg:px-12 flex flex-col items-center space-y-2 md:space-y-10">
                        <p className="text-2xl sm:text-3xl md:text-5xl text-center font-bold leading-7 md:leading-snug max-w-6xl">
                            Learn How To{' '}
                            <span className="text-blue-500">Automate Trades</span> And{' '}
                            <span className="text-blue-500">Get Maximum Returns</span> On Investment By Spending{' '}
                            <span className="text-blue-500">Less Than 10 Minutes</span> On Screen With{' '}
                            <span className="text-blue-500">Algo-Trading.</span>
                        </p>

                        <p className="text-base sm:text-lg text-center font-semibold max-w-xl leading-snug">
                            NO NEED TO WRITE A SINGLE LINE OF CODE
                        </p>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 w-full py-4 md:py-12 bg-cover bg-no-repeat bg-center bg-opacity-10 bg-[url('https://img.freepik.com/free-vector/abstract-background-with-monochrome-low-poly-design_1048-14453.jpg?t=st=1744112073~exp=1744115673~hmac=7998e425d4dcf5321bb513a0a2e987b8505e748ea5cfce72c5d8b78bbd2f03f5&w=1060')]">
                            {/* Left: Vaibhav Batra Info */}
                            <div className="flex flex-col items-center">
                                <Image
                                    src="/vaibhav.webp"
                                    alt="Vaibhav Batra"
                                    height={300}
                                    width={300}
                                    className="h-[250px] w-[250px] md:h-[300px] md:w-[300px] rounded-full object-cover"
                                />
                                <div className="flex flex-col w-full items-center p-4 shadow-2xl rounded-2xl mt-4">
                                    <span className="text-xl md:text-2xl font-bold text-blue-500">Vaibhav Batra</span>
                                    <span className="text-sm md:text-base font-semibold">Founder of the FIRE Community</span>
                                    <span className="text-sm">6+ Years of Experience</span>
                                </div>
                            </div>

                            {/* Right: Form */}
                            <div className="w-full max-w-md" id="form">
                                <div className='flex flex-col space-y-4 py-4 items-center'>
                                    <div className="flex justify-center">
                                        <Image
                                            src="https://stocktutor.com/_next/image?url=https%3A%2F%2Fst-staticimg.s3.ap-south-1.amazonaws.com%2Fassets%2Flogo.png&w=256&q=75"
                                            alt="StockTutor Logo"
                                            height={60}
                                            width={200}
                                            className="h-[60px] w-auto"
                                        />
                                    </div>
                                    <p className='text-xl font-bold text-center'>Register Now For<span className='text-blue-500'> FREE MASTERCLASS</span></p>
                                </div>
                                <form className="space-y-4 w-full" onSubmit={handleSubmit} >
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
                                        className={`w-full py-2 rounded-md transition 
                                    ${isSubmitting
                                                ? "bg-gray-700 text-white cursor-not-allowed"
                                                : "bg-black hover:bg-gray-800 text-white cursor-pointer"
                                            }`}
                                    >
                                        {isSubmitting ? "Submitting..." : "Submit"}
                                    </button>

                                    <p className="text-center text-sm text-gray-500 mt-2">
                                        By continuing, you agree to our{' '}
                                        <Link href="https://stocktutor.com/terms-and-conditions" className="text-blue-600 underline">
                                            Terms of Service
                                        </Link>{' '}
                                        and{' '}
                                        <Link href="https://stocktutor.com/privacy-policy#privacy" className="text-blue-600 underline">
                                            Privacy Policy
                                        </Link>.
                                    </p>
                                </form>
                            </div>
                        </div>
                        <div className="max-w-6xl px-4 py-6 flex flex-col items-center space-y-4">
                            {/* Date and Time */}
                            <div className="bg-white shadow-md w-full px-6 py-4 rounded-xl text-center font-semibold text-lg sm:text-xl">
                                {wDateTime}
                            </div>

                            {/* Info Boxes */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                {/* Language Box */}
                                <div className="flex items-center gap-3 bg-white shadow-md rounded-xl px-6 py-4 min-w-[260px]">
                                    <FaLanguage className="text-[#1c274c]" size={28} />
                                    <div>
                                        <p className="text-sm text-gray-500">Language</p>
                                        <p className="font-bold text-[#1c274c] text-lg">Hindi + English</p>
                                    </div>
                                </div>
                                {/* Duration Box */}
                                <div className="flex items-center gap-3 bg-white shadow-md rounded-xl px-6 py-4 min-w-[260px]">
                                    <LuHourglass className="text-[#1c274c]" size={28} />
                                    <div>
                                        <p className="text-sm text-gray-500">LIVE Masterclass</p>
                                        <p className="font-bold text-[#1c274c] text-lg">2+ Hour</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="w-full px-4 py-12 bg-white flex flex-col items-center text-center">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-4xl mb-10">
                                Do You Want To…
                            </h2>

                            <div className="max-w-3xl w-full text-left space-y-5">
                                {topics.map((topic, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-start gap-3 ${index >= 6 ? ' pt-4' : ''
                                            }`}
                                    >
                                        <FaCheckCircle className="text-blue-500 mt-1 min-w-[1.2rem]" size={20} />
                                        <p className="text-base sm:text-lg leading-snug">
                                            {topic.bold && <strong>{topic.bold} </strong>}
                                            {topic.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <Link href="#form">
                                <button className="mt-10 bg-yellow-400 hover:bg-yellow-500 text-black  py-3 px-6 rounded-full transition-all text-lg sm:text-xl">
                                    BECOME A ALGO TRADING PRO!
                                </button>
                            </Link>

                        </section>
                        <section className="py-6 px-4 md:px-8 lg:px-20">
                            {/* Title */}
                            <h2 className="text-center text-2xl md:text-3xl font-bold mb-4">
                                Do These Sound Familiar?
                            </h2>
                            <div className="w-12 h-1 mx-auto bg-green-500 rounded-full mb-10"></div>

                            {/* Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                                {painPoints.map((point, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-4 p-6 md:p-10 rounded-2xl shadow-xl bg-white"
                                    >
                                        <div>{point.icon}</div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-1">{point.title}</h3>
                                            <p className="text-gray-600 text-sm">{point.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <section className="py-12 px-4 md:px-8 lg:px-20 bg-white text-center">
                            {/* Title */}
                            <h2 className="text-2xl md:text-3xl font-bold mb-10">
                                Why This Masterclass is a Game-Changer:
                            </h2>

                            {/* Benefits List */}
                            <div className="space-y-6 max-w-4xl mx-auto text-left">
                                {benefits.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="mt-1">{item.icon}</div>
                                        <div>
                                            <p className="font-semibold">{item.title}</p>
                                            <p className="text-sm text-gray-700">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Note */}
                            <p className="mt-10 text-gray-800 font-medium max-w-2xl mx-auto text-sm md:text-base">
                                Don't Miss This Chance To Elevate Your ALGO Trading Skills. Spaces Are Limited,
                                And They're Filling Up Fast!
                            </p>

                            {/* CTA Button */}
                            <Link href="#form">
                                <button className="mt-10 bg-yellow-400 hover:bg-yellow-500 text-black  py-3 px-6 rounded-full transition-all text-lg sm:text-xl">
                                    Register for Masterclass Now!
                                </button>
                            </Link>
                        </section>
                    </div>
                    <section className="px-4 py-12 flex justify-center md:px-16 bg-white text-center">
                        <div className='max-w-6xl flex flex-col items-center'>
                            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
                                Here’s What You Will Learn in the Masterclass
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8 text-left">
                                {learningPoints.map((point, index) => (
                                    <div key={index} className="flex items-start gap-4 border-b pb-6">
                                        <div>{point.icon}</div>
                                        <p className="text-gray-800 text-lg">{point.text}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10">
                                <Link href="#form">
                                    <button className="mt-10 bg-yellow-400 hover:bg-yellow-500 text-black  py-3 px-6 rounded-full transition-all text-lg sm:text-xl">
                                        Register for Masterclass Now!
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </section>

                    <section className="bg-[#03344F] text-white py-16 px-6 md:px-12">
                        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                            {/* Image and Name */}
                            <div className="flex flex-col items-center">
                                <div className="relative w-[280px] h-[360px] md:w-[300px] md:h-[400px]">
                                    <Image
                                        src="/vaibhav.webp"
                                        alt="Vaibhav Batra"
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {/* Name Badge */}
                                <div className="mt-4 bg-white text-center py-3 px-6 rounded-xl shadow-md">
                                    <p className="text-[#1D4ED8] font-bold text-lg">Vaibhav Batra</p>
                                    <p className="text-gray-700 text-sm">6 Years of Trading & Training Experience</p>
                                    <p className="text-gray-700 text-sm">Founder of the FIRE Community</p>
                                </div>
                            </div>


                            {/* Text Content */}
                            <div className="flex-1">
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center lg:text-left">
                                    Know Your Mentor
                                </h2>

                                <div className="space-y-6 text-sm md:text-base">
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Meet Vaibhav Batra</h3>
                                        <p>
                                            Vaibhav Batra is a passionate trader and trainer with over 6 years of hands-on experience in the trading world. He specializes in positional swing trading and algorithmic trading, two areas that can seem complex but are made simple through his teaching methods. Vaibhav believes that anyone can learn to trade effectively, whether you're just starting or have some experience under your belt.
                                        </p>
                                        <p>As the founder of the FIRE Community, he has trained more than 2,000 students and conducted over 100 corporate training sessions. His approach focuses on practical strategies and real-world applications, ensuring his students can apply what they learn right away. Vaibhav takes pride in making trading approachable and relatable, using clear examples and engaging lessons to inspire confidence in his students</p>
                                        <p>When you learn with Vaibhav, you're not just gaining knowledge; you're joining a supportive community where you can grow and thrive as a trader. His dedication to helping others succeed in the trading world is evident in every session he conducts. If you're looking to sharpen your trading skills and make informed decisions in the market, Vaibhav is here to guide you every step of the way.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-[#03344F] text-white py-10 px-4">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>

                            <div className="bg-white text-black rounded-md shadow-md space-y-2 p-2">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border rounded-md overflow-hidden">
                                        <button
                                            onClick={() => toggle(index)}
                                            className="w-full flex items-center justify-between p-4 text-left font-medium text-base hover:bg-gray-100 transition"
                                        >
                                            <span>{faq.question}</span>
                                            {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                                        </button>
                                        {activeIndex === index && (
                                            <div className="p-4 border-t bg-gray-50 text-sm text-gray-700">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-8">
                                <Link href="#form">
                                    <button className="mt-10 bg-yellow-400 hover:bg-yellow-500 text-black  py-3 px-6 rounded-full transition-all text-lg sm:text-xl">
                                        Become a Algo Trading Pro!
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

                    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 shadow-md px-4 py-4">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-6xl mx-auto">
                            <div className="text-center md:text-left">
                                <span className="text-2xl font-bold text-black block"><span className="line-through">₹499</span> FREE!!</span>
                                <span className="text-gray-700 block">Offer ends on : {offerEnd}</span>
                            </div>
                            <Link href="#form">
                                <button className="bg-yellow-500 text-white py-2 px-8 md:px-12 rounded-md font-semibold hover:bg-yellow-600 transition w-full md:w-auto">
                                    Register Now
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