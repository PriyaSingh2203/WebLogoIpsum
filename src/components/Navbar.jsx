import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT LOGO AREA */}
        <div className="flex items-center gap-3">
          {/* LOGO IMAGE */}
          <img 
            src="public/logo.png"   // ← replace with your actual logo file path
            alt="Logo"
            className="w-10 h-10 object-contain"
          />

          <div className="text-lg font-semibold">LogoIpsum</div>
        </div>

        {/* NAV LINKS */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-600 items-center">
          <div className="cursor-pointer">Software Team</div>
          <div className="cursor-pointer">Services</div>
          <div className="cursor-pointer">Technologies</div>
          <div className="cursor-pointer">Resources</div>
          <div className="cursor-pointer">Company</div>
        </nav>

        {/* BUTTON */}
        <div>
          <button className="px-4 py-2 border border-brandGreen text-brandGreen rounded-md hover:bg-brandGreen hover:text-white transition">
            Get In Touch
          </button>
        </div>
      </div>
    </header>
  );
}
