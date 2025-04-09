import { useState } from 'react';
import { motion } from 'framer-motion';
import { dayLineups } from '@/lib/festivalData';

const LineupSection = () => {
  const [activeDay, setActiveDay] = useState(0);

  const handleDayChange = (dayIndex: number) => {
    setActiveDay(dayIndex);
  };

  return (
    <section id="lineup" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-lg text-accent font-body uppercase tracking-wider mb-2">Three days of magic</h4>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">LINEUP / PROGRAM</h2>
          <div className="w-16 h-1 bg-secondary mx-auto"></div>
        </motion.div>
        
        {/* Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {dayLineups.map((day, index) => (
            <button 
              key={index}
              className={`px-6 py-3 font-body ${
                activeDay === index 
                  ? 'bg-primary text-white' 
                  : 'bg-background border border-primary text-white/70'
              } ${index === 0 ? 'rounded-tl-lg rounded-bl-lg' : ''} ${
                index === dayLineups.length - 1 ? 'rounded-tr-lg rounded-br-lg' : ''
              }`}
              onClick={() => handleDayChange(index)}
            >
              {day.day}
            </button>
          ))}
        </motion.div>
        
        {/* Day Schedule */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          key={activeDay} // This key forces a re-render and animation when day changes
        >
          {dayLineups[activeDay].stages.map((stage, stageIndex) => (
            <div key={stageIndex} className="bg-background/50 border border-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-accent text-secondary mb-4">{stage.name}</h3>
              <ul className="space-y-6">
                {stage.schedule.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex">
                    <div className="w-16 text-center">
                      <span className="block text-accent text-lg font-heading">{item.time}</span>
                    </div>
                    <div className="flex-1 ml-4">
                      <h4 className="text-xl font-heading text-white">{item.artist}</h4>
                      <p className="text-white/60 text-sm">{item.genre}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#" className="inline-block px-8 py-3 border-2 border-primary hover:bg-primary text-white font-heading rounded-full transition-all">
            DOWNLOAD FULL PROGRAM
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LineupSection;
