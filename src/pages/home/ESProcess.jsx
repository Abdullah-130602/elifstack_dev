import React from "react";
import { motion } from "framer-motion";
import {
  FaRegCommentDots,
  FaDraftingCompass,
  FaProjectDiagram,
  FaCode,
  FaVial,
  FaRocket,
} from "react-icons/fa";

/**
 * CompanyProcessTimeline.jsx
 *
 * Responsive, alternating timeline-style "Our Process" section inspired by the design you provided.
 * - Uses icons instead of images
 * - Alternates steps left / right on wider screens
 * - Simple entrance animation via framer-motion
 * - Tailwind utility classes (adjust color tokens like `primary` / `secondary` to match your theme)
 *
 * Usage:
 *   import CompanyProcessTimeline from "./CompanyProcessTimeline";
 *   <CompanyProcessTimeline />
 */

const steps = [
  {
    id: 1,
    title: "Listen & Discover",
    desc:
      "We start by understanding your business objectives, target users, and technical requirements. Through discussions and research, we turn ideas into clear product goals.",
    Icon: FaRegCommentDots,
    color: "bg-yellow-400 text-gray-900", // circle color
  },
  {
    id: 2,
    title: "UI/UX Design",
    desc:
      "Our designers create intuitive user flows, wireframes, and visual designs that focus on usability and clarity. We validate designs with you before moving into development.",
    Icon: FaDraftingCompass,
    color: "bg-blue-500 text-white",
  },
  {
    id: 3,
    title: "Technical Planning",
    desc:
      "We define the system architecture, technology stack, APIs, and data flow. This step ensures performance, security, and scalability from day one.",
    Icon: FaProjectDiagram,
    color: "bg-indigo-600 text-white",
  },
  {
    id: 4,
    title: "Development",
    desc:
      "Our engineers build the product using clean, maintainable code. We develop in iterations, share progress regularly, and adapt based on your feedback.",
    Icon: FaCode,
    color: "bg-emerald-500 text-white",
  },
  {
    id: 5,
    title: "Testing & Quality Assurance",
    desc:
      "We test across devices and environments to ensure reliability, performance, and security. Every feature is reviewed and refined before release.",
    Icon: FaVial,
    color: "bg-rose-500 text-white",
  },
  {
    id: 6,
    title: "Launch & Ongoing Support",
    desc:
      "After deployment, we monitor, maintain, and enhance the product. As your business grows, we help scale and improve your technology.",
    Icon: FaRocket,
    color: "bg-primary text-white", // replace `bg-primary` with your theme color if defined
  },
];

const ESProcess = () => {
  return (
    <section id="our-process" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Our Process With Clients
          </h2>
          <p className="mt-3 text-gray-600">
            At Elifstack, we follow a collaborative and technically sound process that keeps you involved while ensuring every product is built to
            scale, perform, and evolve.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-10">
          {steps.map((step, index) => {
            const isEven = index % 2 === 1; // for alternating layout on md+
            const Icon = step.Icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative"
              >
                <div
                  className={`flex flex-col md:flex-row items-center md:items-start gap-6
                    ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  {/* icon circle (left on odd, right on even on md+) */}
                  <div className="flex-shrink-0 md:w-28 md:relative">
                    <div
                      className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-md
                        ${step.color}`}
                      aria-hidden="true"
                    >
                      <Icon className="text-2xl md:text-3xl" />
                    </div>
                  </div>

                  {/* bubble */}
                  <div className="flex-1">
                    <div
                      className={`relative bg-white border border-gray-100 p-6 md:p-8 rounded-3xl shadow-sm`}
                      aria-label={`Step ${step.id} - ${step.title}`}
                    >
                      {/* Number badge positioned on the side opposite the icon for visual balance */}
                      <div
                        className={`hidden md:flex absolute top-1/2 -translate-y-1/2 ${
                          isEven ? "-right-8" : "-left-8"
                        }`}
                        aria-hidden="true"
                      >
                        <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center text-lg font-semibold shadow">
                          {step.id}
                        </div>
                      </div>

                      {/* Mobile number badge above bubble */}
                      <div className="md:hidden absolute -top-6 left-6">
                        <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold shadow">
                          {step.id}
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                      <p className="mt-3 text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ESProcess;