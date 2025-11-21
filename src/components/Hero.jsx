import React from "react";

export default function Hero() {
  return (
    <section className="bg-hero-pattern px-6 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-7">
          <div className="text-brandGreen font-semibold mb-3">HIRE DEDICATED</div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">DEVELOPERS</h1>
          <p className="text-gray-600 max-w-2xl mb-6">
            Top 1% Pre-Vetted, In-House & Dedicated Software Programmers. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <div className="flex gap-4">
            {/* BABY PINK BUTTON */}
            <button className="px-6 py-3 bg-[#FFB6C1] text-white font-semibold rounded-md shadow">
              View More
            </button>

            <button className="px-6 py-3 border border-gray-800 rounded-md">
              Get In Touch
            </button>
          </div>
        </div>

        {/* FORM RIGHT SIDE */}
        <div className="lg:col-span-5">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Create Your Team</h3>
            <p className="text-sm text-gray-500 mb-4">
              Share a quick brief and we’ll match you with top developers.
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input placeholder="Full Name" className="border rounded p-2" />
              <input placeholder="Email Address" className="border rounded p-2" />
              <input placeholder="Phone No" className="border rounded p-2" />
              <input placeholder="Country" className="border rounded p-2" />
              <textarea
                placeholder="Project Brief"
                className="border rounded p-2 md:col-span-2 h-28"
              />

              {/* BABY PINK BUTTON + BOLD TEXT */}
              <button
                type="button"
                className="md:col-span-2 bg-[#FFB6C1] text-white font-bold py-3 rounded-md"
              >
                Hire Software Developer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
