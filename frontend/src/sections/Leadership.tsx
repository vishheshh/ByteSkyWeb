import { motion } from "framer-motion"
import { LeadershipCard } from "../components/LeadershipCard";
import { useInView } from "react-intersection-observer";

export const Leadership = () => {
    const [sectionRef, sectionInView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  
    return (
      <section id="leadership" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            ref={sectionRef}
            className="text-5xl font-bodoni font-bold text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Our Leadership
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <LeadershipCard name="Abhiraj Anil" role="Chairman" delay={0.2} />
            <LeadershipCard name="Kaustubh Kumar" role="Operations" delay={0.3} />
            <LeadershipCard
              name="B.V.S.S. Vidya Charan"
              role="Operations"
              delay={0.4}
            />
            <LeadershipCard
              name="Anshika Srivastava"
              role="CEO, ByteAI"
              delay={0.5}
            />
            <LeadershipCard name="John Doe" role="CTO" delay={0.6} />
          </div>
        </div>
      </section>
    );
  };