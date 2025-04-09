import { motion } from 'framer-motion';
import { MapPin, Hotel, Bus, ShieldCheck } from 'lucide-react';
import { festivalLocation } from '@/lib/festivalData';

const InfoSection = () => {
  return (
    <section id="info" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-lg text-accent font-body uppercase tracking-wider mb-2">Plan your visit</h4>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">PRACTICAL INFO</h2>
          <div className="w-16 h-1 bg-secondary mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-heading text-white mb-4 flex items-center">
                <MapPin className="text-secondary mr-2" /> LOCATION
              </h3>
              <div className="bg-background/50 border border-white/10 rounded-lg overflow-hidden">
                <div className="aspect-video bg-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src={festivalLocation.mapUrl}
                      alt="Festival grounds aerial view" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-secondary/90 text-white px-3 py-1 rounded-full text-sm font-heading">{festivalLocation.name}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-white/80 mb-2">
                    <strong>{festivalLocation.name}</strong><br />
                    {festivalLocation.address}<br />
                    {festivalLocation.city}
                  </p>
                  <a href="#" className="text-secondary hover:text-white text-sm">Get directions →</a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-2xl font-heading text-white mb-4 flex items-center">
                <Hotel className="text-secondary mr-2" /> ACCOMMODATION
              </h3>
              <div className="bg-background/50 border border-white/10 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-heading text-white mb-2">Festival Camping</h4>
                    <p className="text-white/70 text-sm mb-3">Stay on the festival grounds with our premium camping options.</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start text-sm">
                        <span className="text-accent mt-1 mr-2">✓</span>
                        <span className="text-white/80">Tent pitches from $49/person</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="text-accent mt-1 mr-2">✓</span>
                        <span className="text-white/80">Glamping pods from $199/night</span>
                      </li>
                    </ul>
                    <a href="#" className="text-secondary hover:text-white text-sm">Book camping →</a>
                  </div>
                  <div>
                    <h4 className="text-lg font-heading text-white mb-2">Partner Hotels</h4>
                    <p className="text-white/70 text-sm mb-3">Stay in comfort with our partner hotels with shuttle service.</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start text-sm">
                        <span className="text-accent mt-1 mr-2">✓</span>
                        <span className="text-white/80">Downtown Cityville (2 miles)</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="text-accent mt-1 mr-2">✓</span>
                        <span className="text-white/80">Special festivalgoer rates</span>
                      </li>
                    </ul>
                    <a href="#" className="text-secondary hover:text-white text-sm">View hotels →</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-heading text-white mb-4 flex items-center">
                <Bus className="text-secondary mr-2" /> GETTING THERE
              </h3>
              <div className="bg-background/50 border border-white/10 rounded-lg p-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <h4 className="text-lg font-heading text-white mb-2">By Public Transport</h4>
                    <p className="text-white/70 text-sm mb-3">The most sustainable way to reach the festival.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start text-sm">
                        <span className="text-accent mt-1 mr-2">🚆</span>
                        <span className="text-white/80"><strong>Train:</strong> Cityville Central Station (2 miles from venue, festival shuttle available)</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="text-accent mt-1 mr-2">🚌</span>
                        <span className="text-white/80"><strong>Bus:</strong> Festival shuttle buses run from downtown (included in ticket)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-heading text-white mb-2">By Car</h4>
                    <p className="text-white/70 text-sm mb-3">Limited parking available, must be pre-booked.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start text-sm">
                        <span className="text-accent mt-1 mr-2">🅿️</span>
                        <span className="text-white/80"><strong>Parking:</strong> $25/day, must be purchased in advance</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="text-accent mt-1 mr-2">🚗</span>
                        <span className="text-white/80"><strong>Carpool:</strong> Dedicated app to connect with other attendees</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-2xl font-heading text-white mb-4 flex items-center">
                <ShieldCheck className="text-secondary mr-2" /> SAFETY & ACCESSIBILITY
              </h3>
              <div className="bg-background/50 border border-white/10 rounded-lg p-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <h4 className="text-lg font-heading text-white mb-2">Your Wellbeing</h4>
                    <p className="text-white/70 text-sm mb-3">Your safety is our priority at Festival Zone C.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start text-sm">
                        <span className="text-accent mt-1 mr-2">❤️</span>
                        <span className="text-white/80">Medical stations throughout the grounds</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="text-accent mt-1 mr-2">😊</span>
                        <span className="text-white/80">Welfare team available 24/7</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="text-accent mt-1 mr-2">💧</span>
                        <span className="text-white/80">Free water refill stations</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-heading text-white mb-2">Accessibility</h4>
                    <p className="text-white/70 text-sm mb-3">We strive to make our festival accessible to everyone.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start text-sm">
                        <span className="text-accent mt-1 mr-2">♿</span>
                        <span className="text-white/80">Accessible viewing platforms at all stages</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="text-accent mt-1 mr-2">🚻</span>
                        <span className="text-white/80">Accessible toilets and facilities</span>
                      </li>
                      <li className="flex items-start text-sm">
                        <span className="text-accent mt-1 mr-2">👐</span>
                        <span className="text-white/80">BSL interpreters available (pre-booking required)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="#" className="inline-block px-8 py-3 border-2 border-primary hover:bg-primary text-white font-heading rounded-full transition-all">
            DOWNLOAD INFO PACK
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InfoSection;
