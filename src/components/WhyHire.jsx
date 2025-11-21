import React from "react";

export default function WhyHire() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* MAIN TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Why Hire Developers From Our Name
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          It has been the industry's standard dummy text ever since.
        </p>

        {/* SECTION 1 → IMAGE LEFT, TEXT RIGHT */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src="public/illustration-dev-right.png"
              className="w-full max-w-md"
              alt="Developer Illustration"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">High Quality / Cost Ratio</h3>

            <ul className="space-y-5 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">●</span>
                <p>
                  Hire Silicon Valley Caliber At Half The Cost <br />
                  <span className="text-sm text-gray-500">
                    Hire the top 1% of 1.5M+ developers from 150+ countries.
                  </span>
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl">●</span>
                <p>
                  100+ Skills Available <br />
                  <span className="text-sm text-gray-500">
                    Backend, frontend, cloud, mobile & more specializations.
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 2 → TEXT LEFT, IMAGE RIGHT */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT TEXT */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Rigorous Vetting</h3>

            <ul className="space-y-5 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">●</span>
                <p>
                  5+ Hours of Tests & Interviews <br />
                  <span className="text-sm text-gray-500">
                    Only elite developers make it through.
                  </span>
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl">●</span>
                <p>
                  Seniority Tests <br />
                  <span className="text-sm text-gray-500">
                    Ensuring skill depth from junior to senior.
                  </span>
                </p>
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="public/illustration-dev-left.png"
              className="w-full max-w-md"
              alt="Right Developer Illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}