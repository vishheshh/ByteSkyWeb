import { useScroll, useTransform , motion } from "framer-motion";


export default function MovingBackground() {
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