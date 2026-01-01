export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="text-2xl font-display font-bold tracking-tighter text-white">AURA</h2>
        
        <p className="text-muted-foreground text-sm font-mono">
          © {new Date().getFullYear()} Aura Studio. All rights reserved.
        </p>
        
        <div className="flex gap-6 text-sm text-muted-foreground font-mono">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
