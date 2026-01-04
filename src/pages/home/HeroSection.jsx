import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "antd";
import { ArrowRightOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { FaCode, FaRocket, FaBrain, FaShieldAlt } from "react-icons/fa";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingIcons = [
    { icon: FaCode, delay: 0, position: "top-20 left-10" },
    { icon: FaRocket, delay: 0.2, position: "top-40 right-20" },
    { icon: FaBrain, delay: 0.4, position: "bottom-40 left-20" },
    { icon: FaShieldAlt, delay: 0.6, position: "bottom-20 right-10" },
  ];

  const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "10+", label: "Years Experience" },
    { value: "50+", label: "Expert Team" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/5 to-primary/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />

        {/* Floating Code Snippets */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 0.3, 0],
              y: [100, -100],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear",
            }}
            className="absolute text-primary/10 font-mono text-sm"
            style={{
              left: `${(i * 15) % 80}%`,
              top: `${(i * 20) % 60}%`,
            }}
          >
            {`<code>${["div", "const", "function", "return", "import", "export"][i]}</code>`}
          </motion.div>
        ))}

        {/* Floating Icons */}
        {floatingIcons.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut",
              }}
              className={`absolute ${item.position} text-secondary/30`}
              style={{
                transform: `translate(${mousePosition.x * (index + 1) * 0.1}px, ${mousePosition.y * (index + 1) * 0.1}px)`,
              }}
            >
              <Icon className="text-4xl md:text-6xl" />
            </motion.div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-12 pb-20 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full"
            >
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-primary">
                Trusted by 500+ Companies Worldwide
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-primary">Transform Your</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                Digital Vision
              </span>
              <br />
              <span className="text-primary">Into Reality</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl"
            >
              We craft cutting-edge software solutions that drive innovation,
              boost productivity, and transform businesses. From web applications
              to mobile apps, we bring your ideas to life.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                type="primary"
                size="large"
                className="bg-secondary border-secondary hover:bg-[#00B0E6] hover:border-[#00B0E6] text-white font-semibold px-8 h-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                Get Started
                <ArrowRightOutlined />
              </Button>
              <Button
                size="large"
                className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 h-12 rounded-lg transition-all duration-300 flex items-center gap-2"
                icon={<PlayCircleOutlined className="text-xl" />}
              >
                Watch Demo
              </Button>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative h-[500px] md:h-[600px] flex items-center justify-center"
          >
            {/* Main Visual Card */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-md"
            >
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-2xl transform scale-110" />

              {/* Main Card */}
              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-gray-200">
                {/* Code Preview */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-4 text-sm text-gray-500 font-mono">
                      app.jsx
                    </span>
                  </div>

                  <div className="space-y-2 font-mono text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-purple-600">import</span>
                      <span className="text-gray-700">React</span>
                      <span className="text-purple-600">from</span>
                      <span className="text-green-600">'react'</span>
                    </div>
                    <div className="text-gray-400">{"{"}</div>
                    <div className="ml-4">
                      <span className="text-blue-600">const</span>{" "}
                      <span className="text-yellow-600">App</span>{" "}
                      <span className="text-gray-700">=</span>{" "}
                      <span className="text-gray-700">()</span>{" "}
                      <span className="text-gray-700">{"=>"}</span>{" "}
                      <span className="text-gray-400">{"{"}</span>
                    </div>
                    <div className="ml-8">
                      <span className="text-purple-600">return</span>{" "}
                      <span className="text-gray-700">(</span>
                    </div>
                    <div className="ml-12 text-green-600">
                      {"<div>Hello World</div>"}
                    </div>
                    <div className="ml-8 text-gray-700">)</div>
                    <div className="ml-4 text-gray-400">{"}"}</div>
                    <div className="text-gray-400">{"}"}</div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 bg-secondary text-white p-3 rounded-lg shadow-lg"
                >
                  <FaRocket className="text-2xl" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -bottom-4 -left-4 bg-primary text-white p-3 rounded-lg shadow-lg"
                >
                  <FaCode className="text-2xl" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
