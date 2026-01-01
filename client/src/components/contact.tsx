import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message is too short"),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-background px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
            Let's build<br />
            <span className="text-primary">something</span><br />
            iconic.
          </h2>
          <p className="text-xl text-muted-foreground font-mono mb-12">
            Ready to elevate your brand? Drop us a line and let's start the conversation.
          </p>
          
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground font-mono uppercase mb-1">Email</span>
              <a href="mailto:hello@aura.studio" className="text-2xl hover:text-primary transition-colors">hello@aura.studio</a>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground font-mono uppercase mb-1">Socials</span>
              <div className="flex gap-4 text-lg">
                <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card p-8 rounded-2xl border border-white/5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className="bg-background/50 border-white/10 h-12 focus:border-primary" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} className="bg-background/50 border-white/10 h-12 focus:border-primary" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your project..." 
                        {...field} 
                        className="bg-background/50 border-white/10 min-h-[150px] focus:border-primary resize-none" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full h-12 bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-widest text-sm">
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
