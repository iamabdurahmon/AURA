import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WorkGrid } from "@/components/work-grid";
import { Services } from "@/components/services";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <WorkGrid />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
