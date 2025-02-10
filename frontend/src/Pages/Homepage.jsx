import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typewriter from "typewriter-effect";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import { Mail, Phone, Calendar,
  Twitter, 
  Linkedin, 
  Github, 
  Instagram, 
  Facebook } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const MovingBackground = () => {
  const { scrollY } = useScroll();

  // Parallax effect for floating elements (but no fading)
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -300]);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Strong static gradient (fades from blue to white naturally) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #BAD9E8 0%, #E6F4F1 50%, #ffffff 100%)",
        }}
      />

      {/* Parallax Floating Elements (No fading) */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 right-20 w-96 h-96 bg-white/40 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-white/40 rounded-full blur-3xl"
      />

      {/* Grid (No fading) */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-40" />
    </div>
  );
};

const Hero = () => {
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

const AboutSection = () => {
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
const SubsidiaryCard = ({ title, description, delay }) => {
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

// Subsidiaries Section
const Subsidiaries = () => {
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
const LeadershipCard = ({ name, role, delay }) => {
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

// Leadership Section
const Leadership = () => {
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

const FAQ = () => {
  const faqData = [
    {
      question: "What is ByteSky Group?",
      answer:
        "ByteSky Group is a technology conglomerate focused on driving innovation across artificial intelligence, healthcare, and education. We develop scalable solutions designed to transform industries and improve lives.",
    },
    {
      question: "What subsidiaries does ByteSky Group operate?",
      answer:
        "We currently operate ByteAl—a fully launched AI platform—with ByteHealth and ByteSchool set to launch soon. Each subsidiary is focused on a distinct industry: AI, healthcare, and education, respectively.",
    },
    {
      question: "What sets ByteAl apart from other AI platforms?",
      answer:
        "ByteAl streamlines the complete machine learning lifecycle by enabling efficient model building, deployment, and management. Its robust financial performance, advanced technology, and strategic location in California help position it as a leader in AI innovation.",
    },
    {
      question: "When will ByteHealth and ByteSchool be launched?",
      answer:
        "Both ByteHealth and ByteSchool are in the final phases of development and will be launched soon. We encourage you to check our 'News & Insights' section or subscribe to our updates for the latest launch information.",
    },
    {
      question: "How can I receive updates about upcoming launches and news?",
      answer:
        "Stay informed by visiting our 'News & Insights' section regularly or by subscribing to our newsletter. You can also follow our social media channels for real-time updates on our latest initiatives.",
    },
    {
      question: "What sectors does ByteSky Group focus on?",
      answer:
        "ByteSky Group focuses on three main sectors: Artificial Intelligence (through ByteAl), Healthcare Technology (with ByteHealth), and Education Technology (with ByteSchool).",
    },
    {
      question: "Who are the key leaders at ByteSky Group?",
      answer:
        "Our leadership team includes Abhiraj Anil (Chairman), Kaustubh Kumar (Operations), and B.V.S.S. Vidya Charan (Operations). Each subsidiary is spearheaded by specialized leaders, such as ByteAl's CEO, Anshika Srivastava.",
    },
    {
      question: "How is ByteSky Group scaling its global operations?",
      answer:
        "With headquarters in Delhi NCR, India, and strategic operations in California, USA, ByteSky Group leverages global talent and localized expertise to innovate, expand, and deliver tailored solutions across key markets.",
    },
    {
      question: "Can I partner with ByteSky Group on technology initiatives?",
      answer:
        "Absolutely. We welcome collaborations and partnership inquiries. Please contact us via email at namaste@bytesky.cloud to discuss potential opportunities.",
    },
    {
      question: "How does ByteAl contribute to advancements in AI?",
      answer:
        "ByteAl plays a crucial role by streamlining the machine learning process, from development to deployment. This efficiency accelerates innovation and helps businesses and researchers harness AI technology more effectively.",
    },
  ];

  return (
    <div className="bg-[#E2F0F4] py-20 rounded-3xl" id="faq">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bodoni md:text-5xl font-bold text-center mb-12 text-gray-800">
          Frequently Asked Questions (FAQ)
        </h2>

        <div className="space-y-8">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
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


const Contact = () => {
  const { scrollYProgress } = useScroll();
  
  const scaleAnimation = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacityAnimation = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  const contactDetails = [
    {
      icon: Mail,
      title: 'Email',
      content: 'namaste@bytesky.cloud',
      link: 'mailto:namaste@bytesky.cloud',
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      title: 'Contact Numbers',
      content: [
        'Anshika: +91 1234567890',
        'Abhiraj: +91 9876543210', 
        'Vidya: +91 1122334455'
      ],
      color: 'text-green-500'
    },
    {
      icon: Calendar,
      title: 'Calendly',
      content: 'Schedule a Meeting',
      link: 'https://calendly.com',
      color: 'text-purple-500'
    }
  ];

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
const Footer = () => {
  const socialLinks = [
    {
      icon: Twitter,
      url: "https://twitter.com/byteskycloud",
      color: "text-blue-400",
    },
    {
      icon: Linkedin,
      url: "https://linkedin.com/company/bytesky",
      color: "text-blue-600",
    },
    { icon: Github, url: "https://github.com/bytesky", color: "text-gray-800" },
    {
      icon: Instagram,
      url: "https://instagram.com/bytesky.cloud",
      color: "text-pink-500",
    },
    {
      icon: Facebook,
      url: "https://facebook.com/byteskycloud",
      color: "text-blue-700",
    },
  ];

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
const Homepage = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <AboutSection />
      <Subsidiaries />
      <Leadership />
      <FAQ/>
      <Contact />
      <Footer/>
    </div>
  );
};

export default Homepage;
