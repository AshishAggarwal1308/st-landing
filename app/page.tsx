import Image from "next/image";
import Script from "next/script";
import React from 'react';
import { BarChart2, ArrowRight, BookOpen, Brain, Target, Users, Video, LineChart, Check } from 'lucide-react';

const features = [
  {
    icon: <LineChart className="h-8 w-8 text-blue-600" />,
    title: "Real-Time Market Analysis",
    description: "Access live market data, advanced charting tools, and real-time trading simulations that mirror actual market conditions."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-blue-600" />,
    title: "Comprehensive Curriculum",
    description: "From basic concepts to advanced trading strategies, our structured learning path guides you through every aspect of stock trading."
  },
  {
    icon: <Brain className="h-8 w-8 text-blue-600" />,
    title: "AI-Powered Insights",
    description: "Our advanced AI analyzes market trends, identifies patterns, and provides personalized recommendations to improve your trading decisions."
  },
  {
    icon: <Target className="h-8 w-8 text-blue-600" />,
    title: "Risk Management Tools",
    description: "Learn to protect your investments with sophisticated risk management techniques and portfolio diversification strategies."
  }
];

const benefits = [
  "Interactive learning modules adapted to your pace",
  "Real-world case studies from successful traders",
  "Live market simulation with virtual trading",
  "Personal progress tracking and analytics",
  "Expert-led webinars and workshops",
  "24/7 access to learning resources"
];

const testimonials = [
  {
    quote: "StockTutor transformed my understanding of the stock market. The practical approach and real-time simulations gave me the confidence to start trading successfully.",
    author: "Sarah Johnson",
    role: "Independent Trader"
  },
  {
    quote: "The AI-powered insights and comprehensive curriculum helped me develop a solid trading strategy. I've seen consistent growth in my portfolio since completing the program.",
    author: "Michael Chen",
    role: "Day Trader"
  }
];
export default function Home() {
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

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <BarChart2 className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">StockTutor</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#benefits" className="text-gray-600 hover:text-blue-600 transition-colors">Benefits</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
            </nav>

          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Master the Art of Stock Trading
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join over 50,000 students who have transformed their trading journey with our comprehensive learning platform. Get access to real-time market data, expert-led courses, and AI-powered insights.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-medium transition-colors shadow-lg hover:shadow-xl inline-flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <p className="mt-6 text-sm text-blue-200">No credit card required • 14-day free trial • Cancel anytime</p>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Everything You Need to Succeed in the Stock Market
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-500 transition-all hover:shadow-lg">
                  <div className="h-16 w-16 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose StockTutor?
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Our platform combines cutting-edge technology with expert knowledge to provide you with the most comprehensive stock trading education available.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-6">Learning Statistics</h3>
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <div className="text-3xl font-bold text-blue-600">50,000+</div>
                    <div className="text-gray-600">Active Students</div>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <div className="text-3xl font-bold text-blue-600">92%</div>
                    <div className="text-gray-600">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">1,000+</div>
                    <div className="text-gray-600">Video Lessons</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Success Stories from Our Students
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                  <p className="text-lg mb-6">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-blue-200">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Trading Journey?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of successful traders who started their journey with StockTutor.
            </p>

            <p className="mt-6 text-sm text-gray-400">Start learning today with our risk-free 14-day trial</p>
          </div>
        </section>

        {/* Footer */}

      </div>
    </>
  );
}
