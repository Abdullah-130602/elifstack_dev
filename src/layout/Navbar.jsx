import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Drawer, Button } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const navItems = [
    { label: "The Code Behind Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Work", href: "/our-work" },
    { label: "Why Us", href: "/why-us" },
    { label: "Contact Us", href: "/contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsDrawerOpen(false);

    // Check if it's a hash link (starts with #)
    if (href.startsWith("#")) {
      // If we're on the home page, just scroll
      if (location.pathname === "/") {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to home first, then scroll
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    } else {
      // Regular route navigation
      navigate(href);
      // Scroll to top when navigating to a new page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : location.pathname === "/"
            ? "bg-transparent backdrop-blur-none"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-xl md:text-2xl font-bold text-primary hover:opacity-80 transition-opacity duration-300"
              >
                ElifStack
              </Link>
            </motion.div>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{
                    y: -3,
                    scale: 1.08,
                    transition: { duration: 0.15, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.95, y: 0 }}
                >
                  <Link
                    to={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-primary font-medium text-sm relative px-3 py-2 rounded-md transition-colors duration-150 group hover:text-secondary block"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Action Button - Right */}
            <div className="hidden md:flex items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="primary"
                  className="bg-secondary border-secondary hover:bg-[#00B0E6] hover:border-[#00B0E6] text-white font-semibold px-6 h-9 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Get Quotation
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors duration-300"
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDrawerOpen(true)}
            >
              <MenuOutlined className="text-2xl" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white"
              >
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-primary">ElifStack</span>
          </div>
        }
        placement="right"
        onClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
        closeIcon={<CloseOutlined className="text-primary" />}
        className="custom-drawer"
        styles={{
          body: {
            padding: 0,
          },
          header: {
            borderBottom: "1px solid #f0f0f0",
            padding: "20px 24px",
          },
        }}
      >
        <div className="flex flex-col">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 10 }}
            >
              <Link
                to={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-6 py-4 text-primary font-medium text-lg border-b border-gray-100 hover:bg-secondary/10 hover:text-secondary transition-all duration-300 block"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navItems.length * 0.1 }}
            className="px-6 py-6"
          >
            <Button
              type="primary"
              block
              size="large"
              className="bg-secondary border-secondary hover:bg-[#00B0E6] hover:border-[#00B0E6] text-white font-semibold h-12 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
            >
              Get Quotation
            </Button>
          </motion.div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
