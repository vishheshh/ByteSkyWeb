import { useScroll, useTransform, motion } from "framer-motion";
import { contactDetails } from "../constants/home.constants";

export const Contact = () => {
    const { scrollYProgress } = useScroll();
    
    const scaleAnimation = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const opacityAnimation = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  
    return (
      <motion.div 
        id="contact-us" 
        className="bg-gradient-to-br from-gray-50 to-gray-100 py-20"
        style={{
          scale: scaleAnimation,
          opacity: opacityAnimation
        }}
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-bodoni tracking-tight">
              Connect With Us
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
              We're here to support your journey. Reach out and let's explore possibilities together.
            </p>
          </motion.div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {contactDetails.map((contact, index) => (
              <motion.div
                key={contact.title}
                className="bg-white shadow-lg rounded-xl p-8 text-center transition-all duration-300 hover:shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                <contact.icon 
                  className={`mx-auto mb-4 ${contact.color}`} 
                  size={48} 
                  strokeWidth={1.5}
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {contact.title}
                </h3>
                {Array.isArray(contact.content) ? (
                  <ul className="text-gray-600 space-y-2">
                    {contact.content.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <a 
                    href={contact.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${contact.color} hover:underline`}
                  >
                    {contact.content}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };