import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const features = [
  {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
    title: "Global Network",
    description: "Connecting businesses worldwide through our extensive logistics network",
    link: "/services",
    color: "from-blue-900/80"
  },
  {
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80",
    title: "Innovation Hub",
    description: "Leveraging cutting-edge technology to revolutionize logistics solutions",
    link: "/about",
    color: "from-purple-900/80"
  },
  {
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80",
    title: "Sustainability",
    description: "Committed to environmental responsibility in our operations",
    link: "/about",
    color: "from-green-900/80"
  }
];

export default function FeaturedGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Daken Logistics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how we're shaping the future of logistics and supply chain management
          </p>
        </motion.div>

        <div className="space-y-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[21/9] overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} to-transparent flex items-center`}>
                <div className="container mx-auto px-4">
                  <div className="max-w-2xl ml-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                    >
                      <h3 className="text-4xl font-bold text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-xl text-white/90 mb-8">
                        {feature.description}
                      </p>
                      <button className="flex items-center text-white group/btn bg-white/10 px-6 py-3 backdrop-blur-sm hover:bg-white/20 transition-colors">
                        <span className="mr-2">Learn More</span>
                        <ArrowRight size={20} className="transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}