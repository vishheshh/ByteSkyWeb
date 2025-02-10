import { motion } from "framer-motion";
import { socialLinks } from "../constants/home.constants";

export const Footer = () => {
    return (
      <motion.footer
        className="bg-[#E2F0F4] py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-8 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} hover:scale-110 transition-transform`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.5,
                }}
                whileHover={{ scale: 1.2 }}
              >
                <social.icon size={32} strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>
  
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <p className="text-gray-800 text-sm">
              © 2025 Bytesky Group, All Rights Reserved
            </p>
          </motion.div>
        </div>
      </motion.footer>
    );
  };