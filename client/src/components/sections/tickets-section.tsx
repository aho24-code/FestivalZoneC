import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { ticketTiers } from '@/lib/festivalData';

const TicketsSection = () => {
  return (
    <section id="tickets" className="py-20 bg-gradient-to-b from-black to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-secondary blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-lg text-accent font-body uppercase tracking-wider mb-2">Join the experience</h4>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">GET YOUR TICKETS</h2>
          <div className="w-16 h-1 bg-secondary mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ticketTiers.map((tier, index) => (
            <motion.div 
              key={index}
              className={`bg-gradient-to-br ${tier.colorClass} border border-white/10 rounded-xl p-6 transform transition-all hover:scale-105 ${tier.popular ? '-translate-y-4 md:-translate-y-6 relative border-2' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-0 right-0 text-center">
                  <span className="bg-secondary text-white text-xs font-heading px-4 py-1 rounded-full">MOST POPULAR</span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-heading text-white mb-2">{tier.name}</h3>
                <div className="text-3xl font-heading text-accent mb-2">{tier.price}</div>
                <p className="text-sm text-white/70">{tier.description}</p>
              </div>
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <Check className="text-secondary mr-2 h-4 w-4" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
                {tier.unavailableFeatures?.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <X className="text-white/50 mr-2 h-4 w-4" />
                    <span className="text-white/50">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <motion.a 
                  href="#" 
                  className={`inline-block px-6 py-3 ${tier.buttonClass} font-heading text-sm rounded-full transition-colors w-full`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  BUY TICKET
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-white/70 text-sm mb-6">All tickets are subject to a 5% service fee. Tickets are non-refundable but can be transferred up to 14 days before the event.</p>
          <a href="#" className="text-secondary hover:text-white transition-colors">View our full ticket policy →</a>
        </motion.div>
      </div>
    </section>
  );
};

export default TicketsSection;
