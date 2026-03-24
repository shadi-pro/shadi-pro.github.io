import React from 'react';
import { motion } from 'framer-motion';
import { Card } from 'react-bootstrap';

const AnimatedCard = ({ children, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.2 }
      }}
    >
      <Card className="project-card h-100">
        {children}
      </Card>
    </motion.div>
  );
};

export default AnimatedCard;