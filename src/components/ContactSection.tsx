import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
  service: z.string().min(1, "Please select a service"),
});

type ContactForm = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
    service: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactForm;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c3e4d1f9-3595-4d00-9b12-35ae83f3be4b",
          name: result.data.name,
          email: result.data.email,
          service: result.data.service,
          message: result.data.message,
        }),
      });

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.message || "Failed to submit form");
      }

      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      setForm({ name: "", email: "", message: "", service: "" });
    } catch (error) {
      console.error(error);
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Get in Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Let's Build Something{" "}
            <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="text-muted-foreground">
            Ready to start a project? We respond to inquiries within 24 hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6 p-8 rounded-2xl bg-card border border-border"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="bg-secondary border-border"
              />
              {errors.name && <p className="text-destructive text-xs">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="bg-secondary border-border"
              />
              {errors.email && <p className="text-destructive text-xs">{errors.email}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Service Interested In</Label>
            <Select value={form.service} onValueChange={(v) => handleChange("service", v)}>
              <SelectTrigger className="bg-secondary border-border">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-design">Web Design & Development</SelectItem>
                <SelectItem value="branding">Branding & Graphic Design</SelectItem>
                <SelectItem value="social-media">Social Media Management</SelectItem>
              </SelectContent>
            </Select>
            {errors.service && <p className="text-destructive text-xs">{errors.service}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your project..."
              rows={5}
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="bg-secondary border-border resize-none"
            />
            {errors.message && <p className="text-destructive text-xs">{errors.message}</p>}
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full py-6 text-base font-semibold rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.6)] transition-all duration-300"
          >
            {loading ? <Loader2 className="animate-spin mr-2" size={18} /> : <Send className="mr-2" size={18} />}
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
