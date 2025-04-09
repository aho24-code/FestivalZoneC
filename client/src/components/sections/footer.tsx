import { motion } from 'framer-motion';
import Logo from '@/components/ui/logo';
import { 
  Instagram, 
  Facebook, 
  Twitter,
  Youtube,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Logo />
            <p className="text-white/60 mt-4 mb-6">
              The ultimate cultural explosion where music, art, and innovation collide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                <svg 
                  viewBox="0 0 24 24" 
                  width="20" 
                  height="20" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M9 12A3 3 0 1 0 9 6 3 3 0 0 0 9 12M15 12A3 3 0 1 0 15 6 3 3 0 0 0 15 12M9 18A3 3 0 1 0 9 12 3 3 0 0 0 9 18M15 18A3 3 0 1 0 15 12 3 3 0 0 0 15 18" />
                </svg>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-heading text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/60 hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#lineup" className="text-white/60 hover:text-secondary transition-colors">Lineup</a></li>
              <li><a href="#artists" className="text-white/60 hover:text-secondary transition-colors">Artists</a></li>
              <li><a href="#tickets" className="text-white/60 hover:text-secondary transition-colors">Tickets</a></li>
              <li><a href="#info" className="text-white/60 hover:text-secondary transition-colors">Practical Info</a></li>
              <li><a href="#about" className="text-white/60 hover:text-secondary transition-colors">About</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-heading text-white mb-4">Info</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-secondary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-white/60 hover:text-secondary transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-white/60 hover:text-secondary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-secondary transition-colors">Accessibility</a></li>
              <li><a href="#" className="text-white/60 hover:text-secondary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white/60 hover:text-secondary transition-colors">Press</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-heading text-white mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="text-secondary mr-2 mt-1 h-5 w-5" />
                <span className="text-white/60">
                  123 Festival Avenue<br />
                  Cityville, CV 12345
                </span>
              </li>
              <li className="flex">
                <Mail className="text-secondary mr-2 mt-1 h-5 w-5" />
                <a href="mailto:info@festivalzonec.com" className="text-white/60 hover:text-secondary transition-colors">
                  info@festivalzonec.com
                </a>
              </li>
              <li className="flex">
                <Phone className="text-secondary mr-2 mt-1 h-5 w-5" />
                <a href="tel:+15551234567" className="text-white/60 hover:text-secondary transition-colors">
                  +1 555 123 4567
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Festival Zone C. All rights reserved.
            </p>
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className="h-6 w-20 bg-white/10 rounded flex items-center justify-center text-xs text-white/30 hover:opacity-100 transition-opacity"
                >
                  SPONSOR
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
