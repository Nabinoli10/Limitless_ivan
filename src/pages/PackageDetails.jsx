// src/pages/PackageDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCollection } from "../payloadClient";

// Assets
import YTCover from "../assets/yt-cover.jpg";

// ------------------ FALLBACK DESCRIPTIONS ------------------
const fallbackBySlug = {
  starter: {
    name: "Starter Package — Self-Discovery Kickstart",
    duration: "4 Weeks",
    price: "$1,000",
    sessions: "4 x 1:1 calls",
    focus: "Self-Discovery Kickstart",
    who: "This is for people who already understand mindset, habits, and growth, but lately feel off track, low-energy, or disconnected from their vision.",
    transformation:
      "You’ll get back into flow — reconnecting with clarity, motivation, confidence, and daily alignment.",
    features: [
      "4 weekly 1:1 sessions",
      "Identity reset work",
      "Emotional clarity + grounding tools",
      "Journaling + visualization guidance",
      "90-day clarity roadmap",
    ],
  },

  pro: {
    name: "Pro Package — Confidence Breakthrough",
    duration: "8 Weeks",
    price: "$2,500",
    sessions: "8 x 1:1 calls",
    focus: "Confidence Breakthrough",
    who: "This is for people who know mindset but are stuck emotionally — they understand the ‘how,’ but inner resistance blocks action.",
    transformation:
      "You break emotional blocks, rebuild inner confidence, and create natural consistency instead of forcing motivation.",
    features: [
      "8 weekly 1:1 sessions",
      "Deep emotional rewiring",
      "Nervous system regulation practices",
      "Accountability + momentum systems",
      "Voice-note support Mon–Fri",
    ],
  },

  elite: {
    name: "Elite Package — Limitless Mindset Coaching",
    duration: "12 Weeks",
    price: "$4,500",
    sessions: "Weekly deep-dive calls + support",
    focus: "Limitless Mindset Coaching Program",
    who: "This is for people who want deep, permanent transformation — identity, emotions, habits, confidence, purpose.",
    transformation:
      "You’ll step into your Future Self — not just change habits, but completely shift who you are and how you show up.",
    features: [
      "12 deep-dive 1:1 sessions",
      "Identity + emotional mastery",
      "Relationship + self-belief rebuilding",
      "Weekly custom practices",
      "Priority high-touch support",
    ],
  },
};

export default function PackageDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [pkg, setPkg] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await getCollection(
          "packages",
          `?where[slug][equals]=${slug}`
        );

        const docs = res?.docs || res;
        const found = docs && docs.length ? docs[0] : null;

        setPkg(found || fallbackBySlug[slug]);
      } catch {
        setPkg(fallbackBySlug[slug]);
      }
    })();
  }, [slug]);

  if (!pkg) {
    return (
      <div className="min-h-screen bg-black text-gray-200 flex items-center justify-center">
        Loading…
      </div>
    );
  }

  const {
    name,
    duration,
    price,
    sessions,
    focus,
    who,
    transformation,
    features = [],
    promoVideo,   // ⭐ from Payload
  } = pkg;

  const promoURL = promoVideo?.url;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#050509] to-black text-white">

      {/* TOP BANNER */}
      <div className="relative w-full h-[30vh] md:h-[25vh] overflow-hidden">
        <img
          src={YTCover}
          alt="Coaching Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* MAIN CONTENT */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 pt-10 pb-10">

        <button
          onClick={() => navigate(-1)}
          className="text-xs uppercase tracking-[0.18em] text-gray-400 hover:text-yellow-300 mb-6"
        >
          ← Back
        </button>

        <p className="text-[11px] uppercase tracking-[0.28em] text-yellow-300 mb-3">
          {focus}
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold mb-3">{name}</h1>

        <div className="flex flex-wrap gap-6 text-sm text-gray-300 mb-6">
          <span>{duration}</span>
          <span className="text-gray-400 border-l border-gray-700 pl-4">
            {sessions}
          </span>
        </div>

        <p className="text-lg font-semibold text-yellow-400 mb-10">{price}</p>

        {/* GRID: TEXT LEFT — VIDEO RIGHT */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <div>
              <h2 className="text-sm uppercase tracking-[0.18em] text-gray-400 mb-2">
                Who this is for
              </h2>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                {who}
              </p>
            </div>

            <div>
              <h2 className="text-sm uppercase tracking-[0.18em] text-gray-400 mb-2">
                What changes when we’re done
              </h2>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                {transformation}
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-sm uppercase tracking-[0.18em] text-gray-400 mb-3">
                What you get
              </h3>
              <ul className="space-y-3 text-sm text-gray-200">
                {features.map((f, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-[6px] h-2 w-2 rounded-full bg-yellow-400"></span>
                    <span>{f.item || f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE — VIDEO FROM PAYLOAD */}
          <div className="flex justify-center items-start">
            {promoURL ? (
              <video
                src={promoURL}
                autoPlay
                loop
                controls
                playsInline
                className="
                  rounded-2xl shadow-xl object-cover
                  w-full max-w-[340px] md:max-w-[380px]
                  h-[420px] md:h-[460px]
                "
              />
            ) : (
              <div className="text-gray-500 text-sm">Video unavailable</div>
            )}
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="border-t border-yellow-500/20 pt-12 pb-14">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6">

            <div>
              <h3 className="text-lg font-medium text-yellow-300">
                How do the weekly sessions work?
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                Calls happen on Zoom. Each session includes mindset work, emotional
                rewiring, and identity-level upgrades.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-yellow-300">
                Do I need to prepare anything?
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                No — everything is guided. You just show up honestly and ready to grow.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-yellow-300">
                What happens after the program ends?
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                You leave with identity tools, emotional mastery, and a 90-day
                roadmap so your results continue long term.
              </p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-yellow-500/20 pt-10 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <p className="text-sm text-gray-300 mb-1">
              Ready to make the shift?
            </p>
            <p className="text-xs text-gray-500">
              Tell me your situation — I’ll reply with next steps.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="mailto:hello@example.com?subject=Coaching%20Application"
              className="inline-flex items-center rounded-full bg-yellow-400 px-7 py-2.5 text-sm font-semibold text-black hover:bg-yellow-300"
            >
              Apply for this package
            </a>
            <a
              href="https://www.instagram.com/limitless_ivan"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-300 hover:text-yellow-300"
            >
              DM me →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-yellow-500/20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-300 text-sm">
            High-touch 1:1 coaching for people ready for their next chapter.
          </p>
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Limitless Ivan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
