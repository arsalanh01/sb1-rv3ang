import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  delay?: number;
}

export default function ServiceCard({ icon: Icon, title, description, image, delay = 0 }: ServiceCardProps) {
  return (
    <Link to="/services" className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="relative group overflow-hidden h-[400px] rounded-lg shadow-lg"
      >
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>
        
        <div className="absolute inset-0 p-6 flex flex-col justify-start text-white">
          <div className="flex items-center mb-4">
            <Icon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-white/90 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}