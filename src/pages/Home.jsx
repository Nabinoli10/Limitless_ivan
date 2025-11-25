import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ivanLogo from "../assets/ivan.jpg";
import pfp from "../assets/pfp.jpg";
import oip from "../assets/oip.jpg";
import em from "../assets/em.jpg";
import menu from "../assets/menu.jpg";
import confi from "../assets/confi.jpg";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tools = [
    { title: "Identity Reset", desc: "Redefine who you are and rewrite your story.", bg: oip },
    { title: "Emotional Rewiring", desc: "Master emotional control and resilience.", bg: em },
    { title: "Motivation Menu", desc: "Build daily rituals that fuel growth.", bg: menu },
    { title: "Confidence Bank", desc: "Build unshakable belief in yourself.", bg: confi },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* HEADER */}
      <header
        className={`w-full flex items-center justify-between px-6 md:px-14 py-4 sticky top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-gray-800/90 shadow-lg backdrop-blur-sm border-b border-yellow-500/30" : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-3">
          <motion.img
            src={ivanLogo}
            alt="Limitless Ivan Logo"
            className="h-16 w-32 object-cover rounded-lg border-2 border-yellow-500 shadow-xl"
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          />
          <div>
            <h2 className="text-xl font-semibold text-white tracking-wide leading-tight">
              <span className="text-white">Limitless</span>{" "}
              <span className="text-yellow-400 font-bold">Ivan</span>
            </h2>
            <p className="text-xs text-yellow-300 uppercase tracking-widest">Mindset Coach</p>
          </div>
        </div>

        <nav className="flex gap-6 text-lg font-medium">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/packages" className="hover:text-yellow-400 transition">Packages</Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative bg-gray-900 px-10 py-28 flex flex-col-reverse md:flex-row items-center gap-10">
        <motion.img
          src={pfp}
          alt="Ivan Profile"
          className="w-80 h-[24rem] object-cover rounded-xl border-[6px] border-yellow-500 shadow-xl"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05, y: -5 }}
        />
        <motion.div
          className="max-w-xl text-center md:text-left"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-yellow-400 drop-shadow-[0_0_12px_rgba(255,255,0,0.6)]">
            Unleash Your Limitless Self
          </h1>

          <h2 className="text-3xl md:text-4xl mt-4 font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            Discipline. Mindset. Motivation.
          </h2>

          <h3 className="text-2xl md:text-3xl text-yellow-300 font-semibold mt-2 drop-shadow-[0_0_8px_rgba(255,255,0,0.7)]">
            Remember—Stay Limitless.
          </h3>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            The journey from limited to limitless begins within.  
            Shift your identity to unlock your full potential.
          </p>

          <Link
            to="/packages"
            className="inline-block mt-8 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-500"
          >
            Begin Your Transformation
          </Link>
        </motion.div>
      </section>

      {/* TRANSFORMATION TOOLS */}
      <section className="w-full px-8 md:px-14 py-16 bg-gray-800 text-center border-t border-yellow-500/20">
        <h2 className="text-5xl font-extrabold text-yellow-400 drop-shadow-[0_0_14px_rgba(255,255,0,0.7)] mb-4">
          Stop Surviving, Start Thriving
        </h2>

        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
          Rewire your identity, emotions, and mindset for lasting success.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              className="relative p-6 rounded-3xl shadow-xl border border-yellow-500/10 hover:border-yellow-500/40 transition-all duration-500 group h-64 flex flex-col justify-end"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${tool.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <h4 className="text-xl font-bold text-yellow-400 drop-shadow-[0_0_10px_rgba(255,255,0,0.7)]">
                {tool.title}
              </h4>
              <p className="text-gray-300 text-sm">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WATCH / YouTube Section */}
      <section className="px-8 md:px-14 py-14 bg-[#1A1A1A] text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8">

          {/* Left: Description Box */}
          <div className="md:w-4/12 bg-[#222222] border border-yellow-500/30 shadow-xl rounded-xl p-6 flex flex-col justify-center min-h-[520px]">
            <div className="inline-block w-fit bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full shadow-md text-lg tracking-wide mb-3 drop-shadow-[0_0_10px_rgba(255,255,0,0.7)]">
              WATCH
            </div>

            <p className="text-base leading-relaxed">
              <span className="text-yellow-400 font-semibold">Stop trying to fix your life — start transforming your mindset.</span><br/>
              <span className="text-gray-300">Real change happens when you shift who you are, not just what you do.</span><br/>
              <span className="text-yellow-300 font-medium">I will guide you from a limited identity to a limitless one, so you can break old patterns and step into your highest self.</span><br/>
              <span className="text-white">Start your Limitless Journey today.</span>
            </p>
          </div>

          {/* Right: YouTube Video */}
          <div className="md:w-8/12 flex justify-center">
            <div className="rounded-2xl shadow-2xl border-4 border-yellow-500/60 overflow-hidden hover:scale-105 transition w-full h-[520px]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/BFn1ilXVPvs"
                title="Journey to Being Limitless"
                allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </section>

      {/* LET'S CONNECT SECTION */}
      <section className="px-8 md:px-14 py-14 bg-[#1A1A1A] text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

          {/* Left Side: Text Box */}
          <div className="md:w-1/2 bg-[#222222] border border-yellow-500/30 shadow-xl rounded-xl p-6 flex flex-col justify-center">
            <div className="inline-block w-fit bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full shadow-md text-lg tracking-wide mb-3 drop-shadow-[0_0_10px_rgba(255,255,0,0.8)]">
              LET'S CONNECT
            </div>

            <p className="text-base leading-relaxed mb-3">
              <span className="text-yellow-400 font-semibold">Don’t just change your actions — transform who you are becoming.</span><br/>
              <span className="text-gray-300">Join the Limitless community and get mindset rewiring insights, identity-level breakthroughs, and tools that help you evolve from limited to unstoppable.</span><br/>
              <span className="text-yellow-300 font-medium">Continue your transformation journey with mindset tips, identity insights, and exclusive content.</span>
            </p>

            <div className="flex flex-col gap-3">
              <a href="mailto:info@limitlessivan.com" className="flex items-center gap-3 text-yellow-400 hover:text-yellow-300 transition">
                <img src="https://cdn-icons-png.flaticon.com/512/888/888853.png" className="w-5 h-5" alt="gmail" />
                info@limitlessivan.com
              </a>

              <a href="https://www.instagram.com/limitless_ivan/" target="_blank" className="flex items-center gap-3 text-yellow-400 hover:text-yellow-300 transition">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="w-5 h-5" alt="instagram" />
                @limitless_ivan
              </a>
            </div>
          </div>

          {/* Right: Video */}
          <div className="md:w-1/2 flex justify-center">
            <div className="rounded-2xl shadow-2xl border-4 border-yellow-500/60 overflow-hidden hover:scale-105 transition w-full h-[520px]">
              <video
                src="/combined.mp4"
                autoPlay
                loop
                controls
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1A1A1A] text-white px-6 md:px-14 py-10 border-t border-yellow-500/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-yellow-400 font-bold text-lg mb-2">Limitless Ivan</h4>
            <p className="text-gray-400 text-sm">Elevating mindset, identity, and emotional mastery for life transformation.</p>
          </div>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/limitless_ivan/" className="text-yellow-400 hover:text-yellow-300 transition">Instagram</a>
            <a href="https://www.youtube.com/@limitlessivan" className="text-yellow-400 hover:text-yellow-300 transition">YouTube</a>
          </div>
        </div>
        <p className="text-gray-500 text-xs mt-6 text-center">
          © {new Date().getFullYear()} Limitless Ivan. All rights reserved.
        </p>
      </footer>

    </div>
  );
}
