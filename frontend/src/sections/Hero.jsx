import { useScroll, useTransform , motion} from "framer-motion";
import MovingBackground from "../components/MovingBackground";
import Typewriter from "typewriter-effect";
import Navbar from "../components/Navbar";

export function Hero() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  
    return (
      <div className="w-full flex flex-col items-center relative">
        <MovingBackground />
        <div className="w-full h-auto flex flex-col justify-end">
          <Navbar />
          {/* Center Text */}
          <motion.div
            style={{ opacity, scale }}
            className="text-center px-4 my-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-[5rem]  font-bold mb-4 text-gray-800 font-bodoni"
            >
              <Typewriter
                options={{
                  strings: ["Bytesky Group"],
                  autoStart: true,
                  loop: false,
                  cursor: "",
                  deleteSpeed: 999999999,
                }}
              />
            </motion.div>
  
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-3xl text-gray-600 -mt-6 font-serif italic"
            >
              Innovating Tomorrow, Today
            </motion.p>
          </motion.div>
          {/* scroll down button */}
          <motion.div
            style={{ opacity: useTransform(scrollY, [0, 300], [0, 1]) }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </motion.div>
        </div>
        {/* Three cards section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-20 relative w-full h-full px-4 bg-opacity-70">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ opacity: useTransform(scrollY, [0, 300], [1, 0]) }}
            className="bg-white shadow-lg rounded-3xl w-full sm:w-1/4  h-[50vh] flex items-center justify-center text-center p-6 transition-transform bg-opacity-70 dp"
          >
            Left card content goes here.
          </motion.div>
  
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: -20 }}
            transition={{ duration: 1, delay: 0.7 }}
            style={{ opacity: useTransform(scrollY, [0, 300], [1, 0]) }}
            className="bg-white shadow-lg rounded-3xl w-full sm:w-1/4  h-[60vh] flex items-center justify-center text-center p-6 transition-transform bg-opacity-70 dp"
          >
            Middle card content goes here.
          </motion.div>
  
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            style={{ opacity: useTransform(scrollY, [0, 300], [1, 0]) }}
            className="bg-white shadow-lg rounded-3xl w-full sm:w-1/4  h-[50vh] flex items-center justify-center text-center p-6 transition-transform bg-opacity-70 dp2"
          >
            Right card content goes here.
          </motion.div>
        </div>
      </div>
    );
  };