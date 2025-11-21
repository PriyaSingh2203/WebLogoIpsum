import React from "react";

export default function Trust() {
  return (
    <section className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img src="/src/assets/trust-illus.png" alt="trusted" className="w-full max-w-sm mx-auto" />
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-4">Top Companies Trust Us For Hiring Software Developers</h3>
          <p className="text-gray-600 mb-6">We follow enterprise-grade processes and deliver consistent results.</p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
            <li>• Client-Centric Approach</li>
            <li>• Global Quality Standards</li>
            <li>• Cutting-Edge Infrastructure</li>
            <li>• Best-in-Class Project Management</li>
            <li>• Time-Zone Compatibility</li>
            <li>• Agile Adaptability</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
