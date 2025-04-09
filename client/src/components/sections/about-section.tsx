import React from 'react';
import { motion } from 'framer-motion';
import { aboutStats, aboutGalleryImages } from '@/lib/festivalData';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-lg text-accent font-body uppercase tracking-wider mb-2">Our story</h4>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">ABOUT THE FESTIVAL</h2>
            <div className="w-16 h-1 bg-secondary mb-8"></div>
            
            <div className="space-y-6 text-white/80">
              <p>
                Festival Zone C was born out of a passion for creating a space where music, art, and innovation collide to create unforgettable experiences. Since our first edition in 2018, we've grown from a small gathering to one of the most anticipated cultural events in the region.
              </p>
              <p>
                Our mission is to push boundaries, showcase diverse talents, and create a community where everyone feels welcome. Each year, we curate a lineup that blends established stars with emerging artists across multiple genres.
              </p>
              <p>
                Beyond the music, Festival Zone C is a celebration of creativity in all its forms - from immersive art installations to cutting-edge technology experiences and culinary adventures.
              </p>
              <p>
                Join us as we continue to evolve, bringing together people from all walks of life in a celebration of what makes us human: our love for connection, expression, and shared experiences.
              </p>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-4 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {aboutStats.map((stat, index) => (
                <div key={index} className="flex items-center">
                  {index > 0 && <div className="w-px h-12 bg-white/20 mx-2"></div>}
                  <div className="flex flex-col items-center">
                    <div className="text-3xl font-heading font-bold text-secondary">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-4">
              <motion.img 
                src={aboutGalleryImages[0]}
                alt="Festival crowd" 
                className="w-full h-48 object-cover rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img 
                src={aboutGalleryImages[1]}
                alt="DJ performance" 
                className="w-full h-64 object-cover rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="space-y-4 mt-8">
              <motion.img 
                src={aboutGalleryImages[2]}
                alt="Festival lights" 
                className="w-full h-64 object-cover rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img 
                src={aboutGalleryImages[3]}
                alt="Festival stage" 
                className="w-full h-48 object-cover rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
