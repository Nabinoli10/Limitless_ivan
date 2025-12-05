// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { getGlobal, getCollection } from "../payloadClient";
import logoAsset from "../assets/Logo2.jpg";
import Oip from "../assets/Oip.jpg";
import em from "../assets/em.jpg";
import menu from "../assets/menu.jpg";
import confi from "../assets/confi.jpg";

// ---------- FALLBACK CONTENT ----------
const loadingState = {
  title: "Limitless Mindset Coaching",
  heroHeadline: "You’re one identity shift away from a completely different life.",
  heroSubheadline:
    "We rebuild your self-concept, emotional wiring and daily behavior so results become inevitable.",
  heroDescription:
    "No more hype, no more falling off after a big burst of motivation. We work at the level of who you are, how you feel and what you do every single day.",
  heroButtonText: "View coaching programs",
  heroBackground: null,
  pillars: [
    {
      title: "Identity Reset",
      description:
        "We strip away the old story, rebuild self-image and install a new standard for how you see yourself.",
      image: null,
    },
    {
      title: "Emotional Rewiring",
      description:
        "You’ll learn how to regulate, process and redirect emotions so they fuel you instead of blocking you.",
      image: null,
    },
    {
      title: "Execution Systems",
      description:
        "Simple daily structures so you stop second-guessing, start doing and stack real wins every week.",
      image: null,
    },
  ],
  watchTitle: "What coaching with Ivan actually looks like",
  watchDescription:
    "A behind-the-scenes breakdown of how sessions work, what we focus on and what changes for you after a few weeks of doing this properly.",
  watchVideoUrl: "",
  connectTitle: "Tell me where you’re stuck. I’ll show you what’s possible.",
  connectDescription:
    "Whether you’re building a career, content or a new chapter of your life – we’ll look at the identity, emotions and habits underneath it all.",
  connectEmail: "hello@example.com",
  connectInstagram: "limitless_ivan",
  footerText:
    "High-touch 1:1 coaching for people who know they’re meant for more.",
  footerInstagram: "https://www.instagram.com/limitless_ivan",
  footerYouTube: "https://www.youtube.com/",
};

const samplePackages = [
  {
    id: "starter",
    slug: "starter",
    name: "Starter Package",
    shortName: "Starter",
    duration: "4 Weeks",
    price: "$1,000",
    sessions: "4 x 1:1 calls",
    focus: "Self-belief foundation",
    who: "Perfect if you’re clear that your mindset is in the way and you want to rebuild confidence fast.",
  },
  {
    id: "pro",
    slug: "pro",
    name: "Pro Package",
    shortName: "Pro",
    duration: "8 Weeks",
    price: "$2,500",
    sessions: "8 x 1:1 calls",
    focus: "Confidence + momentum",
    who: "Best for creators, performers and high-achievers who want consistency and emotional control.",
  },
  {
    id: "elite",
    slug: "elite",
    name: "Elite Package",
    shortName: "Elite",
    duration: "12 Weeks",
    price: "$4,500",
    sessions: "Weekly deep-dive calls + support",
    focus: "Deep identity work",
    who: "For the person who is done playing small and wants to redesign how they see themselves entirely.",
  },
];

export default function Home() {
  const [homepage, setHomepage] = useState(null);
  const [packages, setPackages] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // HEADER SHADOW SCROLL EFFECT
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // CMS LOAD
  useEffect(() => {
    (async () => {
      try {
        const [hpRes, pkgRes] = await Promise.all([
          getGlobal("homepage"),
          getCollection("packages", "?limit=6&sort=-createdAt"),
        ]);

        const hpDoc = hpRes?.doc || hpRes;
        const pkgDocs = pkgRes?.docs || pkgRes;

        setHomepage({ ...loadingState, ...hpDoc });
        setPackages(pkgDocs?.length ? pkgDocs : samplePackages);
      } catch (err) {
        console.error("CMS error, using fallback content:", err);
        setHomepage(loadingState);
        setPackages(samplePackages);
      }
    })();
  }, []);

  if (!homepage) {
    return (
      <div className="min-h-screen bg-black text-gray-200 flex items-center justify-center">
        Loading...
      </div>
    );
  }

  // ---------- EXTRACT DATA ----------
  const {
    title,
    subtitle,
    connectTitle,
    connectDescription,
    connectEmail,
    connectInstagram,
    footerText,
    footerInstagram,
    footerYouTube,
  } = homepage;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#050509] to-[#050509] text-white flex flex-col">

      {/* HEADER */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 border-b ${
          scrolled
            ? "bg-black/90 border-yellow-500/40 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoAsset} alt="Limitless Ivan Logo" className="h-10 w-24 object-contain rounded-sm" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-gray-400">{subtitle}</p>
              <h1 className="text-sm sm:text-base font-semibold tracking-[0.14em]">
                {title} <span className="text-yellow-400">IVAN</span>
              </h1>
            </div>
          </div>

          <nav className="flex gap-6 text-sm font-medium">
            <Link to="/" className="text-gray-300 hover:text-yellow-300 transition-colors">Home</Link>
            <Link to="/packages" className="text-gray-300 hover:text-yellow-300 transition-colors">Coaching</Link>
            <Link to="/about" className="text-gray-300 hover:text-yellow-300 transition-colors">About</Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <iframe
            id="heroVideo"
            src="https://www.youtube.com/embed/BFn1ilXVPvs?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=BFn1ilXVPvs&enablejsapi=1&iv_load_policy=3&playsinline=1"
            className="w-full h-full pointer-events-none"
            style={{ objectFit: "cover" }}
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>

        <button
          id="unmuteBtn"
          onClick={() => {
            const player = document.getElementById("heroVideo").contentWindow;
            player.postMessage(JSON.stringify({ event: "command", func: "unMute", args: [] }), "*");
            player.postMessage(JSON.stringify({ event: "command", func: "setVolume", args: [100] }), "*");
            document.getElementById("unmuteBtn").style.display = "none";
          }}
          className="absolute bottom-6 right-6 bg-yellow-400 text-black px-3 py-2 rounded-full text-xs font-semibold shadow-md hover:bg-yellow-300 transition"
        >
          🔊 Unmute
        </button>
      </section>

      {/* PILLARS */}
      <section className="bg-[#050509] border-b border-yellow-500/20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-14">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.28em] text-gray-400 mb-2">The work we do</p>
            <h3 className="text-2xl md:text-3xl font-semibold">Coaching that goes deeper than motivation or hacks.</h3>
            <p className="text-sm md:text-base text-gray-300">
              We work at the level of identity, emotions and daily behavior so your results are built on something real.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
            <Pillar img={Oip} num="01" title="Identity Reset" desc="Redefine who you are and rewrite your story." />
            <Pillar img={em} num="02" title="Emotional Rewiring" desc="Master emotional control and resilience." />
            <Pillar img={menu} num="03" title="Motivation Menu" desc="Build unstoppable daily habits." />
            <Pillar img={confi} num="04" title="Execution Systems" desc="Action plans that make results automatic." />
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-[#050509] border-b border-yellow-500/20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-14">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-gray-400 mb-2">Coaching programs</p>
              <h3 className="text-2xl md:text-3xl font-semibold">Choose the level that matches where you are.</h3>
            </div>

            <button onClick={() => navigate("/packages")} className="text-sm font-semibold text-yellow-300 hover:text-yellow-200">
              View all details →
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {packages.slice(0, 3).map((pkg) => (
              <div
                key={pkg.id || pkg.slug}
                className="rounded-2xl border border-yellow-500/25 bg-gradient-to-b from-[#15151f] to-[#050509] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.85)] flex flex-col"
              >
                <p className="text-xs text-yellow-300 uppercase tracking-[0.18em] mb-2">{pkg.shortName}</p>
                <h4 className="text-lg font-semibold mb-1">{pkg.name}</h4>
                <p className="text-sm text-gray-300 mb-2">{pkg.duration}</p>
                <p className="text-sm text-gray-400 mb-3">{pkg.sessions}</p>
                <p className="text-xs text-gray-300 mb-4 line-clamp-3">{pkg.who}</p>
                <p className="text-lg font-bold text-yellow-400 mb-4">{pkg.price}</p>
                <button
                  onClick={() => navigate(`/package/${pkg.slug}`)}
                  className="mt-auto text-sm font-semibold text-yellow-300 hover:text-yellow-100 text-left"
                >
                  View program →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECT */}
      <section className="bg-[#050509] border-b border-yellow-500/20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-14 flex flex-col md:flex-row gap-10 items-start">

          <div className="md:w-1/2 space-y-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-gray-400">Ready to talk?</p>

            <h3 className="text-2xl md:text-3xl font-semibold">{connectTitle}</h3>

            <p className="text-sm md:text-base text-gray-300 leading-relaxed">{connectDescription}</p>

            <div className="space-y-2 pt-2">
              {connectEmail && (
                <a href={`mailto:${connectEmail}`} className="block text-sm text-yellow-300 hover:text-yellow-200">
                  {connectEmail}
                </a>
              )}

              {connectInstagram && (
                <a
                  href={`https://www.instagram.com/${connectInstagram}`}
                  className="block text-sm text-yellow-300 hover:text-yellow-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  @{connectInstagram}
                </a>
              )}
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <video
              src="/combined.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[600px] object-cover rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-300">{footerText}</p>
            <p className="text-[11px] text-gray-500 mt-2">© {new Date().getFullYear()} Limitless Ivan. All rights reserved.</p>
          </div>

          <div className="flex gap-6 text-sm">
            {footerInstagram && (
              <a href={footerInstagram} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-yellow-300">
                Instagram
              </a>
            )}
            {footerYouTube && (
              <a href={footerYouTube} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-yellow-300">
                YouTube
              </a>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper Component
function Pillar({ img, num, title, desc }) {
  return (
    <div className="relative rounded-2xl bg-gradient-to-b from-[#181823] to-[#050509] border border-yellow-500/20 overflow-hidden min-h-[260px] shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
      <img src={img} className="absolute inset-0 w-full h-full object-cover opacity-30" alt="" />
      <div className="relative p-5 space-y-2">
        <p className="text-[11px] uppercase tracking-[0.28em] text-yellow-300/90">Pillar {num}</p>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
