// src/pages/Packages.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCollection } from "../payloadClient";

import YTbanner from "../assets/YT.jpg"; 

const fallbackPackages = [
  {
    id: "starter",
    slug: "starter",
    name: "Starter Package",
    duration: "4 Weeks",
    price: "$1,000",
    sessions: "4 × 1:1 calls",
    focus: "Self-Discovery Kickstart",
    who: "If you feel stuck in your own head and want to rebuild confidence quickly, this 4-week reset helps you realign, regain focus and rebuild momentum fast.",
  },
  {
    id: "pro",
    slug: "pro",
    name: "Pro Package",
    duration: "8 Weeks",
    price: "$2,500",
    sessions: "8 × 1:1 calls",
    focus: "Confidence Breakthrough",
    who: "Perfect if you’ve started building something but your inconsistency and emotions keep getting in the way. We break the resistance and rebuild unshakable momentum.",
  },
  {
    id: "elite",
    slug: "elite",
    name: "Elite Package",
    duration: "12 Weeks",
    price: "$4,500",
    sessions: "Weekly deep-dive calls + support",
    focus: "Limitless Mindset Transformation",
    who: "For the person who is done playing small and wants to redesign how they see themselves at every level — identity, habits, emotional mastery, and purpose.",
  },
];

export default function Packages() {
  const [packages, setPackages] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await getCollection("packages", "?limit=12&sort=price");
        const docs = res?.docs || res;
        setPackages(docs?.length ? docs : fallbackPackages);
      } catch (err) {
        console.error("packages fetch error — using fallback", err);
        setPackages(fallbackPackages);
      }
    })();
  }, []);

  if (!packages) {
    return (
      <div className="min-h-screen bg-black text-gray-200 flex items-center justify-center">
        Loading programs...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#050509] to-black text-white">

      {/* HERO BANNER WITH YT.jpg */}
      <div className="relative w-full h-[30vh] md:h-[25vh] overflow-hidden">
        <img
          src={YTbanner}
          alt="Coaching Banner"
          className="w-full h-full object-cover object-center"

        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* PAGE INTRO */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 pt-12 pb-12 text-center">
        <p className="text-[11px] uppercase tracking-[0.28em] text-gray-400 mb-3">
          Coaching Programs
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight">
          Three ways to work together — same depth, different intensity.
        </h1>

        <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
          Every program is built around identity, emotional mastery, and execution.  
          The difference is how deep you go and how supported you are.  
          Choose the level that matches where you are right now.
        </p>
      </section>

      {/* PACKAGE CARDS */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 pb-20 grid gap-8 md:grid-cols-3">
        {packages.map((pkg) => (
          <div
            key={pkg.id || pkg.slug}
            className="relative flex flex-col rounded-2xl bg-gradient-to-b from-[#181820] to-[#050509]
                       border border-yellow-500/20 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.85)]
                       transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_40px_100px_rgba(0,0,0,0.9)]"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-yellow-300 mb-3">
              {pkg.focus}
            </p>

            <h2 className="text-xl font-semibold mb-2">{pkg.name}</h2>
            <p className="text-sm text-gray-300 mb-1">{pkg.duration}</p>
            <p className="text-sm text-gray-400 mb-3">{pkg.sessions}</p>

            <p className="text-xs text-gray-300 leading-relaxed mb-5 flex-grow">
              {pkg.who}
            </p>

            <p className="text-2xl font-bold text-yellow-400 mb-6">{pkg.price}</p>

            {/* FIXED BUTTON */}
            <button
              onClick={() => navigate(`/package/${pkg.slug || pkg.id}`)}
              className="mt-auto inline-flex items-center text-sm font-semibold 
                         text-yellow-300 hover:text-yellow-100 transition-colors"
            >
              View full breakdown →
            </button>
          </div>
        ))}
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
