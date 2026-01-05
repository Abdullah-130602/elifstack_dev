import React from "react";
import { motion } from "framer-motion";
import { Button } from "antd";
import {
  FaCheckCircle,
  FaMobileAlt,
  FaCloud,
  FaShieldAlt,
  FaCode,
  FaRegHandshake,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { GrOptimize } from "react-icons/gr";

const container = {
  hidden: { opacity: 0, y: 10 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, delayChildren: 0.12 * i },
  }),
};

const item = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.45 },
  },
};

const ESIntro = () => {
  return (
    <section className="relative py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid lg:grid-cols-2 gap-10 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {/* Left: Text */}
          <motion.div variants={item} className="space-y-6">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-gray-100 text-sm font-medium w-max">
              <FaCheckCircle className="text-secondary" />
              <span className="text-gray-700">About Elifstack</span>
            </div>

            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl font-semibold text-gray-900"
            >
              Building reliable, scalable software that grows with your business
            </motion.h2>

            <motion.p variants={item} className="text-gray-600 leading-relaxed">
              Elifstack is a software development company focused on building
              scalable, reliable, and high‑quality digital solutions for modern
              businesses. We specialize in web applications, mobile solutions,
              and SaaS products that are designed to perform, scale, and grow
              with your business.
            </motion.p>

            <motion.p variants={item} className="text-gray-600 leading-relaxed">
              At Elifstack, we believe great software is built with clean code,
              thoughtful architecture, and a deep understanding of real‑world
              problems. Our goal is simple — to turn ideas into powerful,
              user‑friendly products that deliver long‑term value. Whether
              you’re a startup or an established business, we work closely with
              you to build technology that supports your vision and drives
              results.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-3 mt-2"
            >
              <Button
                type="primary"
                size="large"
                className="bg-secondary border-secondary hover:bg-[#00B0E6] hover:border-[#00B0E6] text-white font-semibold px-8 h-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 "
              >
                Contact Us
              </Button>
              <Link to="/services" className="inline-flex">
                <Button
                  size="large"
                  className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 h-12 rounded-lg transition-all duration-300"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Simple animated features card */}
          <motion.div
            variants={item}
            className="relative bg-gradient-to-br from-gray-50 to-white border rounded-2xl p-6 shadow-sm"
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-9"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <FaCloud className="text-lg" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">
                    Scalable Architecture
                  </div>
                  <div className="text-sm text-gray-500">
                    Design patterns and infrastructure for growth.
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <FaShieldAlt className="text-lg" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">
                    Reliable & Secure
                  </div>
                  <div className="text-sm text-gray-500">
                    Engineering-first approach with security best practices.
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <FaMobileAlt className="text-lg" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">
                    Mobile & SaaS Expertise
                  </div>
                  <div className="text-sm text-gray-500">
                    High-performance apps and SaaS platforms with great UX.
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <FaCode className="text-lg" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">
                    Clean Code & Maintainability
                  </div>
                  <div className="text-sm text-gray-500">
                    Readable, testable, and future-proof codebases.
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <GrOptimize className="text-lg" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">
                    Performance & Optimization
                  </div>
                  <div className="text-sm text-gray-500">
                    Speed, efficiency, and smooth user interactions.
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <FaRegHandshake className="text-lg" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">
                    Client-Centric Collaboration
                  </div>
                  <div className="text-sm text-gray-500">
                    Transparent communication at every stage.
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Trusted process · thoughtful delivery · long-term value
                </div>
                <div className="text-xs text-secondary font-medium">
                  Learn how →
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ESIntro;
