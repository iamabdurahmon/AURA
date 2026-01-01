import { Link } from "wouter";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-sm mix-blend-difference"
    >
      <Link href="/">
        <a className="text-2xl font-bold font-display tracking-tighter text-white hover:text-primary transition-colors">
          AURA
        </a>
      </Link>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#work" className="text-sm font-medium text-white/80 hover:text-primary transition-colors uppercase tracking-widest">Work</a>
        <a href="#services" className="text-sm font-medium text-white/80 hover:text-primary transition-colors uppercase tracking-widest">Services</a>
        <a href="#about" className="text-sm font-medium text-white/80 hover:text-primary transition-colors uppercase tracking-widest">About</a>
        <Link href="/contact">
          <a className="px-6 py-2 border border-white/20 rounded-full text-sm font-medium text-white hover:bg-primary hover:text-black hover:border-primary transition-all uppercase tracking-widest">
            Start Project
          </a>
        </Link>
      </div>
    </motion.nav>
  );
}
