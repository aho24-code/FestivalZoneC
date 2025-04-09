import { motion } from 'framer-motion';
import { featuredArtists } from '@/lib/festivalData';

const ArtistsSection = () => {
  return (
    <section id="artists" className="py-20 bg-gradient-to-b from-background to-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-lg text-accent font-body uppercase tracking-wider mb-2">Meet the talent</h4>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">FEATURED ARTISTS</h2>
          <div className="w-16 h-1 bg-secondary mx-auto"></div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {featuredArtists.map((artist, index) => (
            <motion.div 
              key={index}
              className="artist-card group bg-black/40 border border-white/10 overflow-hidden rounded-lg transition-all hover:border-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity"></div>
                <motion.div 
                  className="absolute bottom-4 left-0 right-0 text-center opacity-0 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <a href="#" className="inline-block px-4 py-2 bg-secondary text-white font-heading text-sm rounded-full">View Profile</a>
                </motion.div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-heading text-white mb-1">{artist.name}</h3>
                <p className="text-sm text-accent mb-2">{artist.genre}</p>
                <p className="text-sm text-white/70">{artist.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#" className="inline-block px-8 py-3 border-2 border-primary hover:bg-primary text-white font-heading rounded-full transition-all">
            VIEW ALL ARTISTS
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ArtistsSection;
