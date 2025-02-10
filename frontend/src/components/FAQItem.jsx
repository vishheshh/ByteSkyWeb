import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"

export const FAQItem = ({ question, answer }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
  
    return (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 rounded-2xl shadow-lg dp"
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-500 mb-4">
            {question}
          </h3>
          <p className="text-gray-600 text-lg">{answer}</p>
        </motion.div>
    );
  };