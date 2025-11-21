import React from "react";
import { ArrowRight } from "lucide-react";
import { User, Code, Users, TrendingUp } from "lucide-react";

const steps = [
  { id: 1, title: "INQUIRY", Icon: User },
  { id: 2, title: "SELECT DEVELOPERS", Icon: Code },
  { id: 3, title: "TEAM INTEGRATION", Icon: Users },
  { id: 4, title: "TEAM SCALING", Icon: TrendingUp }
];

export default function HiringProcess() {
  return (
    <section className="py-16 px-6 lg:px-12 bg-gradient-to-r from-green-50 to-pink-50">
      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-4xl font-bold mb-2">Our Hiring Process</h2>
        <p className="text-gray-500 mb-14 text-sm">
          Take A Look At Our Simple And Straightforward Process To Hire Software Developers.
        </p>

        {/* STEPS */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center relative">

              {/* PINK NUMBER BADGE */}
              <div className="absolute -top-3 right-5 w-8 h-8 bg-pink-400 text-white text-sm rounded-full 
                              flex items-center justify-center font-bold shadow">
                {step.id}
              </div>

              {/* GREEN CIRCLE WITH ICON */}
              <div className="w-32 h-32 border-4 border-green-500 rounded-full flex items-center justify-center mb-4">
                <step.Icon size={45} className="text-green-600" />
              </div>

              {/* LABEL */}
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-gray-500 text-sm w-40 mt-2">
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
              </p>

              {/* ARROW (except last card) */}
              {index !== steps.length - 1 && (
                <ArrowRight className="hidden md:block text-gray-400 absolute -right-20 top-14" size={30} />
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
