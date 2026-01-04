import React from "react";
import { motion } from "framer-motion";
import { FaXTwitter, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const siteMapLinks = [
    { label: "Homepage", href: "/", isActive: true },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Resources & News", href: "#resources" },
    { label: "Careers", href: "#careers" },
    { label: "Contact Us", href: "#contact" },
    { label: "Portal", href: "#portal" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Services", href: "#terms" },
    { label: "Lawyer's Corners", href: "#lawyers" },
  ];

  const socialLinks = [
    { icon: FaXTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaFacebookF, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="relative mt-auto">
      {/* CTA Section */}
      <div className="bg-gray-100 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Shield Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                className="text-white"
              >
                {/* Shield shape */}
                <path
                  d="M25 5L10 12L10 25C10 35 15 42 25 45C35 42 40 35 40 25L40 12L25 5Z"
                  fill="currentColor"
                />
                {/* Star/Sparkle inside */}
                <path
                  d="M25 18L27 24L33 24L28 28L30 34L25 30L20 34L22 28L17 24L23 24L25 18Z"
                  fill="#00C2FF"
                />
              </svg>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
          >
            Book An Appointment Today
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto"
          >
            Book an appointment with our handpicked software development experts
            whenever or wherever you want!
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary hover:bg-[#00B0E6] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <span>Book Appointment</span>
            <FaArrowRight className="text-lg" />
          </motion.button>
        </div>
      </div>

      {/* Main Footer Container */}
      <div className="relative bg-primary rounded-t-3xl border-2 border-secondary/20 overflow-hidden">
        {/* Background Geometric Lines */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 400"
            preserveAspectRatio="none"
          >
            {[...Array(8)].map((_, i) => (
              <line
                key={i}
                x1={100 + i * 150}
                y1="0"
                x2={200 + i * 150}
                y2="400"
                stroke="#00C2FF"
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Section */}
            <div className="space-y-6">
              {/* Logo and Company Name */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary rounded-sm flex items-center justify-center transform rotate-45 shadow-lg">
                  <div className="w-7 h-7 bg-white rounded-sm transform -rotate-45 flex items-center justify-center">
                    <span className="text-primary font-bold text-base">E</span>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">
                  ElifStack
                </h2>
              </div>

              {/* Company Description */}
              <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-md">
                Empowering businesses with advanced software solutions to improve
                operations and drive digital transformation.
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4 pt-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="text-lg" />
                    </motion.a>
                  );
                })}
              </div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-3 border border-white/30 rounded-md text-white text-sm font-medium uppercase tracking-wider hover:bg-secondary hover:border-secondary transition-all duration-300 flex items-center gap-2"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 15l-6-6-6 6" />
                </svg>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 15l-6-6-6 6" />
                </svg>
                Back to Top
              </motion.button>
            </div>

            {/* Right Section - Two Columns */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Site Map Column */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Site Map</h3>
                <ul className="space-y-3">
                  {siteMapLinks.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className={`text-white/80 hover:text-secondary transition-colors duration-300 text-sm ${
                          link.isActive ? "underline" : ""
                        }`}
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Column */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
                <ul className="space-y-3">
                  {legalLinks.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-white/80 hover:text-secondary transition-colors duration-300 text-sm"
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="bg-secondary text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-center font-medium">
            Copyright © {new Date().getFullYear()}, elifstack.com, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
