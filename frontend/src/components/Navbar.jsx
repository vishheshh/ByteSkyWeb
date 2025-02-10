import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineNotifications, MdOutlinePerson } from "react-icons/md";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const menuItems = [
    { name: "About Us", id: "about-us" },
    { name: "Subsidiaries", id: "subsidiaries" },
    { name: "Leadership", id: "leadership" },
    { name: "Offices", id: "offices" },
    { name: "News", id: "news" },
    { name: "FAQ", id: "faq" },
    { name: "Contact Us", id: "contact-us" },
  ];

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close the mobile menu after clicking a link
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full mt-3 flex h-auto items-center justify-between px-6 py-4 rounded-t-3xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-32 h-fit rounded-3xl dp"
        >
          <img
            src="./logo.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <div className="flex gap-4">
          <div className="hidden md:flex items-center space-x-1 bg-gray-100 rounded-3xl shadow-md gap-4">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <button
                  onClick={() => handleScrollToSection(item.id)}
                  className="text-lg transition-colors duration-300 px-4 py-4 rounded-3xl hover:bg-blue-100 font-semibold dp"
                >
                  {item.name}
                </button>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden md:flex items-center bg-gray-100 rounded-3xl px-4 shadow-md dp hover:bg-blue-100"
            >
              <IoSettingsOutline className="text-lg" />
              <span className="py-4 px-2 font-semibold">Settings</span>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="hidden md:flex items-center bg-gray-100 rounded-full shadow-md dp hover:bg-blue-100"
            >
              <span className="py-4 px-4">
                <MdOutlineNotifications className="text-lg" />
              </span>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="hidden md:flex items-center bg-gray-100 rounded-full shadow-md dp hover:bg-blue-100"
            >
              <span className="py-4 px-4">
                <MdOutlinePerson className="text-lg" />
              </span>
            </motion.button>

            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Sliding Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 w-2/3 h-screen bg-white shadow-lg"
      >
        <div className="p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full float-right"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="clear-both pt-8 space-y-4">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                onClick={() => handleScrollToSection(item.id)}
              >
                {item.name}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};