import { FaLinkedin } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"

export const LeadershipCard = ({ name, role, delay }) => {
    const [ref, inView] = useInView({
      triggerOnce: true, // Trigger animation only once
      threshold: 0.1, // Trigger when 10% of the element is visible
    });
  
    return (
      <motion.div
        ref={ref}
        className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay }}
      >
        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[#BAD9E8]"></div>
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{role}</p>
        <a href="#" className="text-[#1E3A8A] hover:text-[#BAD9E8]">
          <FaLinkedin className="w-6 h-6 mx-auto" />
        </a>
      </motion.div>
    );
  };