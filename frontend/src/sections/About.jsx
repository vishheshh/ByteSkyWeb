import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function AboutSection() {
    const [headerRef, headerInView] = useInView({
      threshold: 0.1,
      triggerOnce: true,
    });
    const [graphRef1, graphInView1] = useInView({
      threshold: 0.3,
      triggerOnce: true,
    });
    const [graphRef2, graphInView2] = useInView({
      threshold: 0.3,
      triggerOnce: true,
    });
    const [graphRef3, graphInView3] = useInView({
      threshold: 0.3,
      triggerOnce: true,
    });
    const [hrRef, hrInView] = useInView({
      threshold: 0.1,
      triggerOnce: true,
    });
  
    return (
      <section id="about-us" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <motion.div
            ref={headerRef}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl font-bodoni font-bold mb-4">About Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how ByteSky Group is revolutionizing technology across
              multiple sectors
            </p>
            <motion.hr
              ref={hrRef}
              className="w-0 border-t-2 border-gray-400 mt-4 mx-auto"
              initial={{ opacity: 0, width: 0 }}
              animate={hrInView ? { opacity: 1, width: "80%" } : {}}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            />
          </motion.div>
  
          {/* Graph Sections */}
          <div className="space-y-32 rounded-3xl">
            {/* First Graph Section */}
            <div
              ref={graphRef1}
              className="flex flex-col lg:flex-row items-center gap-12"
            >
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={graphInView1 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gray-50 rounded-xl p-8 h-80 flex items-center justify-center">
                  {/* Place for your first SVG graph */}
                  <p className="text-gray-400">Graph 1 Space</p>
                </div>
              </motion.div>
  
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={graphInView1 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-4xl font-bold mb-4 text-[#BEDBE9] font-bodoni">
                  AI Technology Impact
                </h3>
                <p className="text-gray-600 mb-4">
                  Our AI solutions have transformed multiple industries,
                  delivering measurable improvements in efficiency and innovation.
                  Through advanced machine learning algorithms and neural
                  networks, we've helped businesses achieve unprecedented growth.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#BEDBE9] rounded-full mr-2"></span>
                    85% improvement in process efficiency
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#BEDBE9] rounded-full mr-2"></span>
                    40% reduction in operational costs
                  </li>
                </ul>
              </motion.div>
            </div>
  
            {/* Second Graph Section */}
            <div
              ref={graphRef2}
              className="flex flex-col-reverse lg:flex-row items-center gap-12"
            >
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={graphInView2 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-4xl font-bodoni font-bold mb-4 text-[#BEDBE9]">
                  Healthcare Innovation Metrics
                </h3>
                <p className="text-gray-600 mb-4">
                  Our healthcare solutions have revolutionized patient care and
                  medical procedures, leading to improved outcomes and more
                  efficient healthcare delivery systems.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#BEDBE9] rounded-full mr-2"></span>
                    93% accuracy in diagnostic assistance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#BEDBE9] rounded-full mr-2"></span>
                    60% faster patient processing
                  </li>
                </ul>
              </motion.div>
  
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={graphInView2 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gray-50 rounded-xl p-8 h-80 flex items-center justify-center">
                  {/* Place for your second SVG graph */}
                  <p className="text-gray-400">Graph 2 Space</p>
                </div>
              </motion.div>
            </div>
  
            {/* Third Graph Section */}
            <div
              ref={graphRef3}
              className="flex flex-col lg:flex-row items-center gap-12"
            >
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={graphInView3 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gray-50 rounded-xl p-8 h-80 flex items-center justify-center">
                  {/* Place for your third SVG graph */}
                  <p className="text-gray-400">Graph 3 Space</p>
                </div>
              </motion.div>
  
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={graphInView3 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-4xl font-bodoni font-bold mb-4 text-[#BEDBE9]">
                  Educational Impact Analysis
                </h3>
                <p className="text-gray-600 mb-4">
                  Our educational technology solutions have transformed learning
                  experiences, making education more accessible and engaging for
                  students worldwide.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#BEDBE9] rounded-full mr-2"></span>
                    75% increase in student engagement
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#BEDBE9] rounded-full mr-2"></span>
                    50% improvement in learning outcomes
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  };