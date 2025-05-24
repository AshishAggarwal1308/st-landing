import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">NoCodeAlgo</h1>
          <a href="#register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Register Now
          </a>
        </div>
      </nav>

      <main className="pt-24 space-y-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-24 px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">No Code Algo Trading Masterclass</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Unlock the power of algorithmic trading in the Indian stock market — without writing a single line of code!
          </p>
          <a href="#register" className="bg-white text-blue-700 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">
            Register Now
          </a>
        </section>

        {/* About Section */}
        <section className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Why Attend This Masterclass?</h3>
          <p className="text-lg text-gray-700 mb-6">
            Algo trading is revolutionizing the Indian stock market. With easy-to-use tools and step-by-step guidance, you’ll learn to deploy your own profitable algos without writing a single line of code.
          </p>
          <a href="#register" className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 transition">
            Register Now
          </a>
        </section>

        {/* Who is this for */}
        <section className="bg-gray-100 py-20 px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Who Should Attend?</h3>
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'Beginner traders',
              'Retail investors',
              'Working professionals',
              'Students & freshers',
              'Freelancers',
              'Anyone curious about automation'
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded shadow">
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
          <a href="#register" className="mt-8 inline-block bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 transition">
            Register Now
          </a>
        </section>

        {/* Benefits */}
        <section className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Top Benefits</h3>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              "Eliminate emotional trading",
              "Trade while you sleep",
              "No programming required",
              "Build your own strategies",
              "Free backtesting tools",
              "Lifetime access to templates"
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded shadow">
                <h4 className="font-semibold text-lg">{item}</h4>
              </div>
            ))}
          </div>
          <a href="#register" className="mt-8 inline-block bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 transition">
            Register Now
          </a>
        </section>

        {/* Curriculum */}
        <section className="bg-gray-100 py-20 px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">What You’ll Learn</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-6xl mx-auto">
            {[
              "Intro to Algo Trading",
              "No-Code Tools Overview",
              "Building Trading Signals",
              "Live Algo Deployment",
              "Backtesting Techniques",
              "Position Sizing & Risk Management",
              "Live Market Strategy Demo",
              "Integration with Brokers",
              "Performance Tracking & Optimization"
            ].map((item, i) => (
              <div key={i} className="p-5 bg-white rounded shadow">
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
          <a href="#register" className="mt-10 inline-block bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 transition">
            Register Now
          </a>
        </section>

        {/* Mentors */}
        <section className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Meet Your Mentors</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "Anuj Verma", desc: "10+ years in algo trading, ex-Zerodha partner" },
              { name: "Riya Shah", desc: "Educator & Strategy Developer, Fintech expert" }
            ].map((mentor, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded shadow w-64">
                <h4 className="font-semibold text-lg">{mentor.name}</h4>
                <p className="text-sm mt-2 text-gray-600">{mentor.desc}</p>
              </div>
            ))}
          </div>
          <a href="#register" className="mt-10 inline-block bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 transition">
            Register Now
          </a>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-100 py-20 px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">What Students Say</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              "I built my first algo without code in just 2 days. Super empowering!",
              "Loved the clarity, examples, and support community!",
              "Finally I understand how algo trading works — and can do it myself!"
            ].map((quote, i) => (
              <blockquote key={i} className="bg-white p-6 rounded shadow italic">
                “{quote}”
              </blockquote>
            ))}
          </div>
          <a href="#register" className="mt-8 inline-block bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 transition">
            Register Now
          </a>
        </section>

        {/* FAQ */}
        <section className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Frequently Asked Questions</h3>
          <div className="space-y-6 text-left">
            {[
              ["Do I need coding knowledge?", "No! This course is 100% no-code based."],
              ["Is it suitable for beginners?", "Absolutely. We start from scratch."],
              ["Will I get recordings?", "Yes, all sessions will be recorded for lifetime access."],
              ["Which platforms are used?", "Free tools like TradingView, AlgoTest & broker integrations."]
            ].map(([q, a], i) => (
              <div key={i} className="bg-gray-100 p-5 rounded shadow">
                <p className="font-semibold">{q}</p>
                <p className="text-gray-700 mt-2">{a}</p>
              </div>
            ))}
          </div>
          <a href="#register" className="mt-10 inline-block bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 transition">
            Register Now
          </a>
        </section>

        {/* Registration CTA */}
        <section id="register" className="py-24 px-4 bg-blue-700 text-white text-center">
          <h3 className="text-4xl font-bold mb-4">Start Your Algo Trading Journey Today!</h3>
          <p className="text-lg mb-6">Grab your seat now and learn how to automate your trades effortlessly.</p>
          <a
            href="https://example.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-700 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
          >
            Register Now
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800 text-white text-sm">
        © {new Date().getFullYear()} NoCodeAlgo Masterclass. All rights reserved.
      </footer>
    </div>
  );
}
