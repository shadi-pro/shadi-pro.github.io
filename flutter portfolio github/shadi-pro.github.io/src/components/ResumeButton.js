import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaFilePdf } from 'react-icons/fa';

const ResumeButton = () => {
  const handleDownload = () => {
    // Replace with your actual resume PDF URL
    const resumeUrl = '/shadi.pdf'; // Place your PDF in public folder
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'ShadiCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      className="btn btn-success btn-custom d-flex align-items-center"
      onClick={handleDownload}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <FaFilePdf className="me-2" />
      Download Resume
      <FaDownload className="ms-2" />
    </motion.button>
  );
};

export default ResumeButton;