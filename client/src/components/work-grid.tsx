import { motion } from "framer-motion";
import project1 from "@assets/generated_images/avant-garde_fashion_editorial_shot.png";
import project2 from "@assets/generated_images/brutalist_architecture_shot.png";
import project3 from "@assets/generated_images/abstract_digital_art_glitch.png";

const projects = [
  {
    id: 1,
    title: "Vogue Future",
    category: "Editorial",
    image: project1,
    size: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: 2,
    title: "Concrete Dreams",
    category: "Architecture",
    image: project2,
    size: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "Neon Nexus",
    category: "Digital Art",
    image: project3,
    size: "col-span-1 md:col-span-1 row-span-1",
  }
];

export function WorkGrid() {
  return (
    <section id="work" className="py-24 bg-background px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter">
            Selected<br/>Works
          </h2>
          <span className="hidden md:block text-muted-foreground font-mono text-sm">(2024-2025)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`group relative overflow-hidden rounded-lg ${project.size}`}
            >
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-multiply" />
              
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
              />
              
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-primary font-mono text-sm uppercase tracking-wider mb-2">{project.category}</span>
                <h3 className="text-3xl font-display font-bold text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
