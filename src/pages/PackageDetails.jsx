import React from "react"; 
import { useParams, Link, useNavigate } from "react-router-dom";
import { plans } from "./Packages";
import ytImage from "../assets/YT.jpg";

// Background images
import timeImg from "../assets/time.jpg";
import targetImg from "../assets/target.jpg";
import focusImg from "../assets/focus.jpg";

export default function PackageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const plan = plans.find((p) => p.id === id);

  if (!plan) {
    return (
      <div className="min-h-screen bg-[#1A1A1A] text-white flex flex-col items-center justify-center p-10">
        <p className="text-lg mb-4">Package not found.</p>
        <button
          onClick={() => navigate("/packages")}
          className="px-6 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-[#141414] to-[#1A1A1A] text-white">

      {/* Header */}
      <header className="p-6 bg-black/70 backdrop-blur-lg flex justify-between px-10 items-center shadow-lg border-b border-yellow-400/30 sticky top-0 z-50">
        <h1 className="text-xl font-bold tracking-wider">
          <span className="text-white">LIMITLESS</span>{" "}
          <span className="text-yellow-400">IVAN</span>
        </h1>
        <Link
          to="/packages"
          className="text-gray-300 hover:text-yellow-400 hover:scale-110 transition-all duration-300"
        >
          ← Back to Packages
        </Link>
      </header>

      {/* Hero */}
      <div className="relative w-full overflow-hidden mt-6 rounded-3xl shadow-[0_0_40px_rgba(255,204,0,0.3)] border border-yellow-500/30 max-h-[450px]">
        <img src={ytImage} alt="Transformation Journey" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center"></div>
      </div>

      {/* Program Overview */}
      <section className="px-6 md:px-16 py-20 text-center">
        <h2 className="inline-block px-6 py-3 text-white bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300
          rounded-full text-3xl md:text-4xl font-bold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 mb-12">
          Overview
        </h2>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Duration Card */}
          <div
            className="relative p-6 rounded-3xl overflow-hidden shadow-xl group transition-all duration-500 border border-yellow-500/20 bg-cover bg-center"
            style={{ backgroundImage: `url(${timeImg})` }}
          >
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Duration</h3>
              <p className="text-gray-300 text-lg font-medium">{plan.duration}</p>
            </div>
          </div>

          {/* Sessions Card */}
          <div
            className="relative p-6 rounded-3xl overflow-hidden shadow-xl group transition-all duration-500 border border-yellow-500/20 bg-cover bg-center"
            style={{ backgroundImage: `url(${targetImg})` }}
          >
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Sessions</h3>
              <p className="text-gray-300 text-lg font-medium">{plan.sessions}</p>
            </div>
          </div>

          {/* Focus Card */}
          <div
            className="relative p-6 rounded-3xl overflow-hidden shadow-xl group transition-all duration-500 border border-yellow-500/20 bg-cover bg-center"
            style={{ backgroundImage: `url(${focusImg})` }}
          >
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">Primary Focus</h3>
              <p className="text-gray-300 text-lg font-medium">{plan.focus}</p>
            </div>
          </div>
        </div>

        {/* Video + Motivational Description */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 justify-center items-start px-6 md:px-0">

          {/* Description / Motivational Copy */}
          <div className="flex-1 text-left max-w-xl md:max-w-none order-1 md:order-1">
            <h3 className="inline-block px-4 py-2 mb-6 text-3xl md:text-4xl font-extrabold 
              bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              {plan.name}
            </h3>
            <div className="text-gray-300 space-y-5 text-lg leading-relaxed">
              {plan.id === "starter" && (
                <p>
                  Over four weeks, the Starter Program empowers you to unlock clarity, resilience, and unwavering self-belief. 
                  Through carefully designed sessions, you will gain awareness of your vision, reset limiting beliefs, 
                  release emotional barriers, and transform challenges into opportunities. 
                  Step into the journey ready to grow and become the best version of yourself.
                </p>
              )}
              {plan.id === "pro" && (
                <p>
                  The Pro Program spans eight weeks of focused transformation. You’ll break free from self-doubt, 
                  strengthen your confidence, and cultivate sustainable motivation. Each step is designed to elevate 
                  your mindset, ignite action, and help you achieve extraordinary results in all areas of life.
                </p>
              )}
              {plan.id === "elite" && (
                <p>
                  The Elite Program is a twelve-week journey to fully embody your future self. 
                  You will master your mindset, emotions, and identity to create lasting success. 
                  Through advanced strategies and transformative practices, you will rise above limitations 
                  and step confidently into your highest potential.
                </p>
              )}

              {/* Package-specific motivational quotes */}
              <p className="italic text-yellow-400 font-semibold mt-4">
                {plan.id === "starter" && `"Small consistent steps build unstoppable confidence. Your journey starts now."`}
                {plan.id === "pro" && `"Step beyond your limits and discover your true potential. Momentum creates results."`}
                {plan.id === "elite" && `"Elite results require elite commitment. Embody the person you aspire to be."`}
              </p>
            </div>
          </div>

          {/* Video */}
          <div className="flex-1 flex justify-center order-2 md:order-2">
            <div className="relative w-full md:w-[500px] h-[320px] md:h-[500px] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,204,0,0.5)] border-4 border-yellow-500/60 transition-transform hover:scale-[1.02] duration-300">
              <video controls className="w-full h-full object-cover bg-black rounded-3xl">
                <source src={plan.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 md:px-16 py-20 text-center bg-gradient-to-t from-[#101010] via-[#121212] to-[#101010] shadow-inner">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">Ready to Break Limits?</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Book a free consultation and let’s create your transformation roadmap together.
        </p>
        <button
          onClick={() => alert("Booking functionality coming soon!")}
          className="px-10 py-4 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 text-black font-semibold rounded-full shadow-lg
            hover:scale-110 transition-transform duration-300"
        >
          Book Free Consultation →
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-[#101010] text-white px-6 md:px-12 py-10 border-t border-yellow-500/20 mt-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-yellow-400 font-bold text-lg mb-2">Limitless Ivan</h4>
            <p className="text-gray-400 text-sm">Empowering transformation through mindset, identity, and emotional mastery.</p>
          </div>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/limitless_ivan/" className="hover:text-yellow-400 transition">Instagram</a>
            <a href="https://www.youtube.com/@limitlessivan" className="hover:text-yellow-400 transition">YouTube</a>
          </div>
        </div>
        <p className="text-gray-500 text-xs mt-6 text-center">© {new Date().getFullYear()} Limitless Ivan. All rights reserved.</p>
      </footer>

    </div>
  );
}
