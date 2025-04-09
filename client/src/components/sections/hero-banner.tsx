import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { festivalDates } from '@/lib/festivalData';

const HeroBanner = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Festival crowd" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-3xl">
          <motion.h4 
            className="text-lg md:text-xl font-body text-secondary mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {festivalDates.start}-{festivalDates.end}, {festivalDates.year}
          </motion.h4>
          <motion.h1 
            className="text-4xl md:text-7xl font-heading font-bold text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            FESTIVAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              ZONE C
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-body text-white/80 mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Experience the ultimate cultural explosion where music, art, and innovation collide.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a 
              href="#tickets" 
              className="inline-block px-8 py-4 bg-secondary hover:bg-pink-600 text-white font-heading text-lg rounded-full transition-all transform hover:scale-105 text-center"
            >
              GET TICKETS
            </a>
            <a 
              href="#lineup" 
              className="inline-block px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white font-heading text-lg rounded-full transition-all transform hover:scale-105 text-center"
            >
              VIEW LINEUP
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-6 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <motion.a 
          href="#lineup" 
          className="text-white text-4xl"
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut" 
          }}
        >
          <ChevronDown />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
