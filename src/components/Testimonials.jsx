import React from "react";
import { Play, Star } from "lucide-react";

const clients = [
  {
    name: "Krish Bruynson",
    role: "Director, Storloft",
    img: "/mnt/data/55ac6783-fb44-4597-bbe3-b48e082b64e8.png" // replace with actual image
  },
  {
    name: "Krish Bruynson",
    role: "Director, Storloft",
    img: "/mnt/data/55ac6783-fb44-4597-bbe3-b48e082b64e8.png"
  },
  {
    name: "Krish Bruynson",
    role: "Director, Storloft",
    img: "/mnt/data/55ac6783-fb44-4597-bbe3-b48e082b64e8.png"
  },
  {
    name: "Krish Bruynson",
    role: "Director, Storloft",
    img: "/mnt/data/55ac6783-fb44-4597-bbe3-b48e082b64e8.png"
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-6 lg:px-12 bg-gradient-to-r from-green-50 to-pink-50">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-2">
          What Our Clients Have To Say About Us
        </h2>
        <p className="text-gray-600 text-sm mb-10">
          Take A Look At Our Simple And Straightforward Process To Hire Software
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-8">
          {clients.map((c, i) => (
            <div key={i} className="text-left">
              
              {/* Image Container (with play button) */}
              <div className="relative w-full h-56 rounded-xl overflow-hidden shadow">
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-full h-full object-cover"
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer">
                    <Play size={28} className="text-brandGreen" />
                  </div>
                </div>
              </div>

              {/* Name */}
              <h3 className="font-semibold mt-4">{c.name}</h3>
              <p className="text-sm text-gray-500">{c.role}</p>

              {/* Star Rating */}
              <div className="flex gap-1 mt-2 text-brandGreen">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#1ec26b" stroke="#1ec26b" />
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
