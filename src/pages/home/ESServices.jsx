import React from "react";
import { motion } from "framer-motion";
import { Button } from "antd";

/**
 * CompanyServices.jsx
 *
 * Improved services section:
 * - All service cards use an overlapping image circle placed consistently (top-left).
 * - Clean modern card layout with gradient accent, subtle hover lift, and improved spacing.
 * - Responsive grid (1 → 2 → 3 columns).
 * - Framer Motion entrance + hover micro-interaction.
 *
 * Replace the example image imports with your real assets (square images work best).
 */

/* === Replace these with real image imports === */
import webImg from "../../assets/services/web-webapp.jpg";
import mobileImg from "../../assets/services/web-webapp.jpg";
import saasImg from "../../assets/services/web-webapp.jpg";
import designImg from "../../assets/services/web-webapp.jpg";
import supportImg from "../../assets/services/web-webapp.jpg";
import seoImg from "../../assets/services/web-webapp.jpg";
import marketingImg from "../../assets/services/web-webapp.jpg";

const services = [
  {
    key: "web",
    title: "Web Application Development",
    desc:
      "Secure, scalable, high-performance web applications using modern frameworks and clean architecture—designed for reliability and long-term growth.",
    img: webImg,
    tags: ["Scalable", "Secure"],
  },
  {
    key: "mobile",
    title: "Mobile App Development",
    desc:
      "Fast, reliable mobile apps with intuitive UX. Optimized for performance, scalability, and cross-platform consistency.",
    img: mobileImg,
    tags: ["Performance", "Intuitive"],
  },
  {
    key: "saas",
    title: "SaaS Product Development",
    desc:
      "SaaS platforms with multi-tenant architectures, robust APIs and scalable infrastructure to grow with your business.",
    img: saasImg,
    tags: ["Multi-tenant", "APIs"],
  },
  {
    key: "design",
    title: "UI/UX & Graphic Design",
    desc:
      "User-focused UI/UX and polished visual assets that strengthen brand identity and improve product engagement.",
    img: designImg,
    tags: ["Human-centered", "Brand"],
  },
  {
    key: "support",
    title: "Technical Support & Maintenance",
    desc:
      "Ongoing monitoring, performance tuning and regular updates to ensure your software remains stable and secure.",
    img: supportImg,
    tags: ["Monitoring", "Reliable"],
  },
  {
    key: "seo",
    title: "SEO & Performance Optimization",
    desc:
      "Technical SEO, on-page optimization, and speed improvements to increase visibility and deliver faster experiences.",
    img: seoImg,
    tags: ["Visibility", "Speed"],
  },
  {
    key: "marketing",
    title: "Digital Marketing",
    desc:
      "Data-driven marketing: content, paid campaigns and analytics focused on measurable growth and conversions.",
    img: marketingImg,
    tags: ["Growth", "ROI"],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 12, scale: 0.995 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

const ESServices = () => {
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Our Services</h2>
          <p className="mt-4 text-gray-600">
            At Elifstack, we deliver end-to-end digital services backed by strong engineering, modern design, and data-driven strategies. Our services help
            businesses scale, perform, and stay competitive in a digital-first world.
          </p>
        </div>

        {/* Services grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
        >
          {services.map((s, idx) => (
            <motion.article
              key={s.key}
              variants={item}
              whileHover={{ y: -8, boxShadow: "0 12px 30px rgba(16,24,40,0.08)" }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="relative bg-white border border-gray-100 rounded-2xl p-6 pt-10 overflow-visible"
              aria-labelledby={`service-${s.key}-title`}
            >
              {/* Consistent overlapping image circle (top-left corner) */}
              {/* <div className="absolute -top-8 -left-6">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg ring-2 ring-white">
                  <img src={s.img} alt={`${s.title} preview`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div> */}

              {/* Decorative accent stripe on the left for identity (subtle) */}
              <div className="absolute left-0 top-6 bottom-6 w-1 rounded-l-2xl bg-gradient-to-b from-primary/80 to-secondary/60 opacity-40 hidden sm:block" />

              <div className="ml-2 md:ml-8">
                <h3 id={`service-${s.key}-title`} className="text-lg font-semibold text-gray-800">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{s.desc}</p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      aria-hidden="true"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <Button
                    type="link"
                    size="small"
                    className="text-sky-600 hover:bg-sky-50 px-2 py-1 rounded"
                    aria-label={`Learn more about ${s.title}`}
                  >
                    Learn more →
                  </Button>

                  <div className="text-xs text-gray-400">Trusted approach</div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-12 flex items-center justify-center">
          <div className="max-w-2xl text-center">
            <p className="text-gray-700">
              Want to discuss a project or explore which service fits you best? We’ll help you choose the right approach and roadmap.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Button type="primary" size="large" className="bg-secondary border-secondary hover:bg-[#00B0E6] hover:border-[#00B0E6] text-white font-semibold px-8 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Talk to an Expert
              </Button>
              <Button size="large" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 h-12 rounded-full transition-all duration-300">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESServices;