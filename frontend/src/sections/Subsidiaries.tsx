import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import SubsidiaryCard from "../components/SubsidiaryCard";
import React from "react";

export function Subsidiaries() {
    const [sectionRef, sectionInView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  
    return (
      <section id="subsidiaries" className="py-20 bg-[#BAD9E8]/10">
        <div className="container mx-auto px-4">
          <motion.h2
            ref={sectionRef}
            className="text-5xl font-bodoni font-bold text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Our Subsidiaries
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SubsidiaryCard
              title="ByteAI"
              description="ByteAI is our flagship, fully launched platform that streamlines the entire machine learning lifecycle. With robust financial performance (FY 2024-25 revenue of $7.07M, 61.2% EBITDA margin, and a net profit of $3.03M), ByteAI is positioned as a leader in advanced AI solutions and operates from its current office in California, United States."
              delay={0.2}
            />
            <SubsidiaryCard
              title="ByteHealth"
              description="ByteHealth is our upcoming venture aimed at revolutionizing healthcare management. Designed to optimize operations in clinics and hospitals, it will offer scalable software solutions that enhance efficiency, reduce losses, and ensure compliance with regulatory standards. ByteHealth’s innovative approach is set to bring next-generation technology to the healthcare sector, with further details and launch updates to follow.
  "
              delay={0.4}
            />
            <SubsidiaryCard
              title="ByteSchool"
              description=" Unifying Education Technology (Launching Soon)
  ByteSchool is set to become a comprehensive platform for the education sector. By integrating key systems such as a Learning Management System (LMS), School Management Information System (SMIS), HRMS, dynamic website creation, LiDAR-based virtual mapping, and an alumni portal, ByteSchool aims to bridge administrative and educational gaps. This all-in-one solution will streamline processes and elevate the overall efficiency of schools and coaching institutes.
  "
              delay={0.6}
            />
          </div>
        </div>
      </section>
    );
  };