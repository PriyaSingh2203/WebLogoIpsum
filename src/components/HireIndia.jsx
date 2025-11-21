import React from "react";

export default function HireIndia() {
  return (
    <section className="py-16 px-6 lg:px-12 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Why Hire Software Developers In India?</h2>
          <p className="text-gray-200 mb-6">India offers a strong talent pool with cost advantages and proven engineering capabilities.</p>

          <ul className="space-y-3">
            <li>• English speaking programmers</li>
            <li>• Flexible work hours</li>
            <li>• Rapid onboarding process</li>
            <li>• Expertise in top technologies</li>
            <li>• Reliable partner credentials</li>
          </ul>
        </div>

        <div>
          <img src="public/hire-india-illus.png" alt="hire india" className="w-full max-w-md mx-auto" />
        </div>
      </div>
    </section>
  );
}
