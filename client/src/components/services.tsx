import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Brand Strategy",
    description: "Defining the soul of your business through research and insight."
  },
  {
    title: "Visual Identity",
    description: "Crafting logos, typography, and color systems that speak volumes."
  },
  {
    title: "Web Development",
    description: "Building fast, responsive, and immersive digital experiences."
  },
  {
    title: "Motion Design",
    description: "Bringing static assets to life with fluid animation and 3D."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background px-6 border-t border-white/5">
      <div className="container mx-auto">
        <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-16">Our Expertise</h2>
        
        <div className="grid grid-cols-1">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-b border-white/10 py-12 flex flex-col md:flex-row md:items-center justify-between hover:bg-white/5 transition-colors px-4 cursor-pointer"
            >
              <h3 className="text-3xl md:text-5xl font-display font-bold text-white group-hover:text-primary transition-colors flex items-center gap-4">
                <span className="text-sm font-mono text-muted-foreground opacity-50">0{index + 1}</span>
                {service.title}
              </h3>
              
              <div className="flex items-center gap-8 mt-4 md:mt-0">
                <p className="text-muted-foreground max-w-xs font-mono text-sm">{service.description}</p>
                <ArrowUpRight className="w-6 h-6 text-white group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
