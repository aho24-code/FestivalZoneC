import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  const handleClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          className="md:hidden bg-background border-t border-white/10 absolute w-full shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <motion.a 
                href="#home" 
                className="text-white hover:text-secondary transition-colors font-body py-2" 
                onClick={handleClick}
                variants={itemVariants}
              >
                Home
              </motion.a>
              <motion.a 
                href="#lineup" 
                className="text-white hover:text-secondary transition-colors font-body py-2" 
                onClick={handleClick}
                variants={itemVariants}
              >
                Lineup
              </motion.a>
              <motion.a 
                href="#artists" 
                className="text-white hover:text-secondary transition-colors font-body py-2" 
                onClick={handleClick}
                variants={itemVariants}
              >
                Artists
              </motion.a>
              <motion.a 
                href="#tickets" 
                className="text-white hover:text-secondary transition-colors font-body py-2" 
                onClick={handleClick}
                variants={itemVariants}
              >
                Tickets
              </motion.a>
              <motion.a 
                href="#info" 
                className="text-white hover:text-secondary transition-colors font-body py-2" 
                onClick={handleClick}
                variants={itemVariants}
              >
                Info
              </motion.a>
              <motion.a 
                href="#about" 
                className="text-white hover:text-secondary transition-colors font-body py-2" 
                onClick={handleClick}
                variants={itemVariants}
              >
                About
              </motion.a>
              <motion.a 
                href="#tickets" 
                className="inline-block px-6 py-2 bg-secondary hover:bg-pink-600 text-white font-heading text-sm rounded-full transition-all transform hover:scale-105 w-full text-center" 
                onClick={handleClick}
                variants={itemVariants}
              >
                GET TICKETS
              </motion.a>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
