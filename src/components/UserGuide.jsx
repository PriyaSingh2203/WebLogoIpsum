import React, { useState } from "react";

const tabs = [
  "Benefits Of Hiring Developers",
  "Key Factors To Consider While Hiring",
  "Defining Your Project Requirements",
  "Choosing The Right Development Model",
  "Typical Challenges For Hiring Developers",
  "Hiring Freelancers Vs. Dedicated Developers",
  "Communication With Remote Developers"
];

// Dummy content for each tab
const content = {
  "Benefits Of Hiring Developers": {
    title: "Benefits Of Hiring Developers",
    desc: "Hire experienced developers who fit your project needs and timelines.",
    points: [
      "Client-Centric Approach",
      "Best-in-Class Project Management",
      "Global Quality Standards",
      "Time-Zone Compatibility",
      "Cutting-Edge Infrastructure",
      "Agile Adaptability"
    ]
  },
  "Key Factors To Consider While Hiring": {
    title: "Key Factors To Consider While Hiring",
    desc: "Important points to evaluate before hiring developers.",
    points: ["Skill Expertise", "Communication Skills", "Experience", "Portfolio Review"]
  },
  "Defining Your Project Requirements": {
    title: "Defining Your Project Requirements",
    desc: "Clearly define goals, timelines, and expectations before development begins.",
    points: ["Project Scope", "Tech Stack", "Timeline", "Budget Estimation"]
  },
  "Choosing The Right Development Model": {
    title: "Choosing The Right Development Model",
    desc: "Pick a model that suits your goals and budget.",
    points: ["Dedicated Team", "Fixed Cost", "Time & Material"]
  },
  "Typical Challenges For Hiring Developers": {
    title: "Typical Challenges",
    desc: "Understand what obstacles you might face.",
    points: ["Skill Gap", "Delayed Delivery", "Poor Communication"]
  },
  "Hiring Freelancers Vs. Dedicated Developers": {
    title: "Freelancers vs Dedicated Developers",
    desc: "Evaluate which option fits your business needs.",
    points: ["Cost Flexibility", "Reliability", "Long-term Alignment"]
  },
  "Communication With Remote Developers": {
    title: "Communication With Remote Developers",
    desc: "Ensure proper communication channels.",
    points: ["Daily Standups", "Tracking Tools", "Clear Documentation"]
  }
};

export default function UserGuide() {
  const [activeTab, setActiveTab] = useState("Benefits Of Hiring Developers");

  const activeContent = content[activeTab];

  return (
    <section className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          User Guide To Hire Dedicated Software Developers
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* LEFT SIDE TABS */}
          <div className="col-span-1 space-y-1">
            {tabs.map((t) => (
              <div
                key={t}
                className={`p-3 border-l-4 cursor-pointer 
                  ${activeTab === t 
                    ? "border-green-600 bg-green-50 font-semibold" 
                    : "border-gray-200 text-gray-700"}`}
                onClick={() => setActiveTab(t)}
              >
                {t}
              </div>
            ))}
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="md:col-span-2 bg-gray-50 p-6 rounded">
            <h3 className="font-semibold mb-3">{activeContent.title}</h3>
            <p className="text-gray-600 mb-4">{activeContent.desc}</p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
              {activeContent.points.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
