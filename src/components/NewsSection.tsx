import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const news = [
  {
    image: "https://images.unsplash.com/photo-1565017228318-023dc0577c2c?auto=format&fit=crop&q=80",
    date: "March 1, 2024",
    title: "Expanding Our Global Network",
    description: "Daken Logistics announces new international partnerships enhancing our global reach."
  },
  {
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80",
    date: "February 28, 2024",
    title: "Sustainability Initiative Launch",
    description: "New eco-friendly logistics solutions reducing carbon footprint across operations."
  },
  {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    date: "February 25, 2024",
    title: "Digital Transformation Success",
    description: "Implementation of advanced tracking systems enhances shipment visibility."
  }
];

export default function NewsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest News
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with our latest developments and initiatives
            </p>
          </div>
          <button className="hidden md:flex items-center text-primary hover:text-primary-dark group">
            <span className="mr-2">View All News</span>
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white group cursor-pointer"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-500">{item.date}</time>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <button className="flex items-center text-primary group/btn">
                  <span className="mr-2">Read More</span>
                  <ArrowRight size={20} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="md:hidden w-full mt-8 flex items-center justify-center text-primary hover:text-primary-dark group"
        >
          <span className="mr-2">View All News</span>
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>
    </section>
  );
}