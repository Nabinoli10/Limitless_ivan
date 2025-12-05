// src/pages/About.jsx
import React from "react";
import pfp from "../assets/pfp.jpg";
import logoAsset from "../assets/Logo2.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#050509] to-black text-white">

      {/* HEADER (Matches all pages) */}
      <header className="sticky top-0 z-40 bg-black/90 border-b border-yellow-500/40 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <img
              src={logoAsset}
              alt="Limitless Ivan Logo"
              className="h-10 w-24 object-contain rounded-sm"
            />
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-gray-400">
                Mindset & Identity Coaching
              </p>
              <h1 className="text-sm sm:text-base font-semibold tracking-[0.14em]">
                Limitless <span className="text-yellow-400">IVAN</span>
              </h1>
            </div>
          </div>

          {/* NAV LINKS */}
          <nav className="flex gap-6 text-sm font-medium">
            <a href="/" className="text-gray-300 hover:text-yellow-300 transition-colors">
              Home
            </a>
            <a href="/packages" className="text-gray-300 hover:text-yellow-300 transition-colors">
              Coaching
            </a>
            <a href="/about" className="text-yellow-300 font-semibold transition-colors">
              About
            </a>
          </nav>

        </div>
      </header>

      {/* PAGE HEADER */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pt-20 pb-10">
        <h1 className="text-3xl md:text-4xl font-semibold mb-3">About Me</h1>
        <p className="text-[11px] uppercase tracking-[0.28em] text-gray-400">
          My Story • Purpose • Mission
        </p>
      </section>

      {/* MAIN ABOUT SECTION */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-16 grid md:grid-cols-2 gap-10 items-center">
        
        {/* IMAGE */}
        <div className="flex justify-center md:justify-start">
          <img
            src={pfp}
            alt="Coach"
            className="w-full max-w-xs rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] object-cover mt-4 md:mt-0"
          />
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
            I’m Ivan — a mindset and identity coach driven by one mission: 
            helping people break the mental and emotional limits that have held 
            them back for years.
          </p>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
            My journey hasn’t been simple. I grew up dealing with health conditions,
            physical limitations, insecurity, and the pressure of feeling “behind”
            in life. The world expected less from me — and for a long time, I did too.
          </p>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
            But everything changed when I stopped living by the identity society gave me 
            and rebuilt a new one from the ground up. Today at 29, I coach people across 
            the world — helping them rewrite their story, rebuild confidence, and show up 
            as the strongest version of themselves.
          </p>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            If my story proves anything, it’s this: your limits are not real — they’re 
            learned. And once you change who you believe you are, everything else follows.
          </p>
        </div>

      </section>

      {/* SIGNUP / CONTACT FORM */}
      <section className="max-w-xl mx-auto px-4 md:px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-6 text-center">Work With Me</h2>

        <form
          action="mailto:hello@example.com"
          method="POST"
          encType="text/plain"
          className="bg-[#0f0f12] border border-yellow-500/20 p-6 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.85)] space-y-5"
        >
          <div>
            <label className="text-sm text-gray-300">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 w-full bg-black/40 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full bg-black/40 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Tell me briefly what you need help with</label>
            <textarea
              name="message"
              rows="4"
              required
              className="mt-1 w-full bg-black/40 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 outline-none focus:border-yellow-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-2.5 rounded-xl hover:bg-yellow-300 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-yellow-500/20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row 
                        items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-300">
              High-touch 1:1 coaching for people who know they’re meant for more.
            </p>
            <p className="text-[11px] text-gray-500 mt-2">
              © {new Date().getFullYear()} Limitless Ivan. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <a
              href="https://www.instagram.com/limitless_ivan"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-yellow-300"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-yellow-300"
            >
              YouTube
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}