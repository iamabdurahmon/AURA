import { motion } from "framer-motion";
import heroVideo from "@assets/generated_videos/abstract_liquid_chrome_hero_background.mp4";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter text-white leading-[0.9] mb-8">
            DIGITAL<br />
            <span className="text-transparent text-stroke hover:text-primary transition-colors duration-500">ALCHEMY</span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg md:text-xl text-white/60 max-w-xl mx-auto font-mono"
        >
          We craft immersive digital experiences for brands that dare to break the mold.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
