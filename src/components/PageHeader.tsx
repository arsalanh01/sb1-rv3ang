import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description: string;
  image: string;
}

export default function PageHeader({ title, description, image }: PageHeaderProps) {
  return (
    <div className="relative h-[40vh] min-h-[400px] flex items-center bg-gradient-to-br from-primary/90 to-primary/80">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl opacity-90">{description}</p>
        </motion.div>
      </div>
    </div>
  );
}