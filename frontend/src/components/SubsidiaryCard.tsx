import { motion} from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
export default function SubsidiaryCard({ title, description, delay }) {
    const [ref, inView] = useInView({
      triggerOnce: true, // Trigger animation only once
      threshold: 0.1, // Trigger when 10% of the element is visible
    });
  
    return (
      <motion.div
        ref={ref}
        className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay }}
      >
        <h3 className="text-4xl text-center font-bodoni font-bold mb-4 text-[#1E3A8A]">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    );
  };