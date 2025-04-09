import { useState } from 'react';
import { motion } from 'framer-motion';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address')
});

type EmailFormData = z.infer<typeof emailSchema>;

const NewsletterSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: ''
    }
  });

  const onSubmit = async (data: EmailFormData) => {
    setIsSubmitting(true);
    
    try {
      await apiRequest('POST', '/api/subscribe', data);
      toast({
        title: "Successfully subscribed!",
        description: "You'll now receive our latest updates and offers.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-64 h-64 rounded-full bg-primary blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full bg-accent blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto bg-background/60 backdrop-blur-md border border-white/10 rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">STAY UPDATED</h2>
            <p className="text-white/70">Subscribe to our newsletter for the latest news and exclusive offers.</p>
          </div>
          
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-black/50 border border-white/20 text-white px-4 py-3 rounded-full focus:outline-none focus:border-secondary"
              required
              {...form.register('email')}
            />
            <motion.button 
              type="submit" 
              className="bg-secondary hover:bg-pink-600 text-white font-heading px-6 py-3 rounded-full transition-colors disabled:opacity-70"
              disabled={isSubmitting}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
            </motion.button>
          </form>
          
          {form.formState.errors.email && (
            <p className="text-red-400 text-xs mt-2 ml-3">{form.formState.errors.email.message}</p>
          )}
          
          <p className="text-white/50 text-xs text-center mt-4">
            By subscribing, you agree to our privacy policy and consent to receive updates from Festival Zone C.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
