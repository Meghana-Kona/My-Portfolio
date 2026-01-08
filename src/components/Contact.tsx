import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ----------------------------------------------------------------------
  // 📧 EMAIL SETUP: Using FormSubmit (Free Email Service)
  // Replace 'YOUR_EMAIL@example.com' below with your actual email address
  // ----------------------------------------------------------------------

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('idle');

    const form = e.target as HTMLFormElement;
    const formDataToSend = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Form error:', error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative bg-section-contact" ref={ref}>
      {/* Plain background - no animation */}

      <div className="max-w-4xl mx-auto relative px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
            Contact Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Feel free to reach out for collaborations, opportunities, or just to say hi!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 md:p-10 text-left max-w-2xl mx-auto"
        >
          {/* Status Messages */}
          {formStatus === 'success' ? (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-600 dark:text-green-400 relative">
              <button
                onClick={() => setFormStatus('idle')}
                className="absolute top-2 right-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <p className="font-medium">Message sent successfully!</p>
              <p className="text-sm mt-1">Your message has been delivered.</p>
            </div>
          ) : formStatus === 'error' && (
            <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-xl text-center text-destructive">
              <p>Failed to send message. Please try again or contact directly via email.</p>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            action="https://formsubmit.co/konameghana0517@gmail.com"
            method="POST"
            className="space-y-6"
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium ml-1">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary/50 outline-none transition-all placeholder:text-muted-foreground/50"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium ml-1">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary/50 outline-none transition-all placeholder:text-muted-foreground/50"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary/50 outline-none transition-all resize-none placeholder:text-muted-foreground/50"
                placeholder="How can I help you?"
                required
              />
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full btn-cinematic mt-4">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;