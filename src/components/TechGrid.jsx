import React from "react";

const cards = [
  { title: "Backend Development", desc: ".NET • Java • Django • Node • Python" },
  { title: "Frontend Development", desc: "React • Vue • Angular • Next.js" },
  { title: "Mobile Development", desc: "React Native • Flutter • Swift" },
  { title: "Blockchain, AI/ML", desc: "ML • Python • TensorFlow" },
  { title: "DevOps & Low-Code", desc: "Docker • Kubernetes • CI/CD" },
  { title: "E-commerce & CMS", desc: "Shopify • Magento • WordPress" }
];

export default function TechGrid() {
  return (
    <section className="py-16 px-6 lg:px-12 bg-gradient-to-r from-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-3">Our Diverse Technology Competency</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">We work across a broad stack to build modern apps.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(c => (
            <div key={c.title} className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold mb-2">{c.title}</h4>
              <p className="text-sm text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
