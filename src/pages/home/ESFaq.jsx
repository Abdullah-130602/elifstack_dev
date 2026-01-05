import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

/**
 * ESFaq.jsx
 *
 * Accessible, animated FAQ / accordion section that matches the site's modern aesthetic.
 * - Uses a single-open accordion (click to open; clicking another item closes the previous)
 * - Respects prefers-reduced-motion (disables animations)
 * - Keyboard accessible (Enter/Space to toggle, ArrowUp/ArrowDown to navigate)
 * - Simple, clean styling built with Tailwind utility classes to match previous sections
 *
 * Usage:
 *   import ESFaq from "./ESFaq";
 *   <ESFaq />
 */

const faqs = [
  {
    q: "What services does Elifstack provide?",
    a:
      "Elifstack offers end-to-end digital services including web and mobile application development, SaaS product development, UI/UX and graphic design, technical support, SEO, and digital marketing. Our solutions are designed to scale with your business.",
  },
  {
    q: "What industries do you work with?",
    a:
      "We work with startups, growing companies, and established businesses across various industries including technology, e-commerce, healthcare, fintech, logistics, and enterprise solutions.",
  },
  {
    q: "Do you work with startups and early-stage products?",
    a:
      "Yes. We frequently partner with startups to build MVPs, validate ideas, and scale products. Our team helps shape the product from concept to launch and beyond.",
  },
  {
    q: "How do you ensure code quality and scalability?",
    a:
      "We follow clean code practices, modular architecture, and industry-standard design patterns. Every project goes through code reviews, testing, and performance optimization to ensure long-term reliability.",
  },
  {
    q: "Can you work with our existing system or team?",
    a:
      "Absolutely. We can integrate with your existing codebase, improve legacy systems, or collaborate closely with your in-house team to accelerate development.",
  },
  {
    q: "How involved will we be during the project?",
    a:
      "You stay involved throughout the process. We share regular updates, demos, and progress reports, and we actively incorporate your feedback at every stage.",
  },
  {
    q: "What technologies do you use?",
    a:
      "We work with modern and proven technologies including React, Node.js, cloud platforms, mobile frameworks, and scalable backend architectures. Technology choices are always based on project requirements.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a:
      "Yes. We offer ongoing maintenance, technical support, performance monitoring, and feature enhancements to ensure your product remains stable and secure.",
  },
  {
    q: "How long does a typical project take?",
    a:
      "Project timelines depend on scope and complexity. Smaller projects may take a few weeks, while larger platforms or SaaS products may take several months.",
  },
  {
    q: "How do we get started?",
    a:
      "You can contact us through our website or book a consultation. We’ll discuss your requirements, suggest the best approach, and outline the next steps.",
  },
];

const ESFaq = () => {
  // index of open item; null => all closed
  const [openIndex, setOpenIndex] = useState(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = (e) => setReduceMotion(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  // Toggle accordion item
  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  // Keyboard navigation (ArrowUp / ArrowDown)
  const onKeyDown = (e, i) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(i);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = i + 1 < faqs.length ? i + 1 : 0;
      const node = document.querySelector(`#faq-button-${next}`);
      node?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = i - 1 >= 0 ? i - 1 : faqs.length - 1;
      const node = document.querySelector(`#faq-button-${prev}`);
      node?.focus();
    }
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-lg bg-white shadow-sm border border-gray-100">
            <FaQuestionCircle className="text-2xl text-primary" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-1">
              Common questions about working with Elifstack — if you don't see your question, feel free to contact us.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                <div className="flex items-center">
                  <button
                    id={`faq-button-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => toggle(i)}
                    onKeyDown={(e) => onKeyDown(e, i)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-sky-300"
                  >
                    <div className="flex items-start gap-4">
                      {/* small numeric-ish pill for visual structure (optional) */}
                      <div className="hidden sm:flex items-center justify-center w-9 h-9 rounded-md bg-primary/10 text-primary font-medium">
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      <div>
                        <div className="text-md font-medium text-gray-900">{item.q}</div>
                        <div className="text-sm text-gray-500 mt-0.5 hidden sm:block">Click to reveal the answer</div>
                      </div>
                    </div>

                    <span
                      className={`flex-shrink-0 rounded-full p-2 transition-transform ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      aria-hidden="true"
                    >
                      <FaChevronDown className="text-gray-500" />
                    </span>
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-button-${i}`}
                      initial={reduceMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                      animate={reduceMotion ? { opacity: 1, height: "auto" } : { opacity: 1, height: "auto" }}
                      exit={reduceMotion ? { opacity: 0, height: 0 } : { opacity: 0, height: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeInOut" }}
                      className="px-5 pb-5 text-sm text-gray-700"
                    >
                      <div className="pt-1 leading-relaxed">{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ESFaq;