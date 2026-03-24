import React from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      className="theme-toggle btn btn-outline-secondary"
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid var(--border-color)",
        background: "var(--bg-secondary)", // Changed from var(--bg-color)
        color: "var(--text-color)",
        transition: "all 0.3s ease",
      }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
