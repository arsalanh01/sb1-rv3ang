import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
    title: "Delivering Excellence In Logistics",
    description: "Your trusted partner for seamless transportation and warehousing needs",
    bulletText: "Excellence"
  },
  {
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80",
    title: "Global Reach, Local Expertise",
    description: "Connecting businesses across borders with efficient logistics solutions",
    bulletText: "Global"
  },
  {
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80",
    title: "Innovation in Motion",
    description: "Leveraging cutting-edge technology to optimize your supply chain",
    bulletText: "Innovation"
  }
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative h-screen">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}"><span>${slides[index].bulletText}</span></span>`;
          },
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div className="absolute inset-0">
                <motion.div
                  initial={{ scale: 1.2 }}
                  animate={{ scale: activeIndex === index ? 1 : 1.2 }}
                  transition={{ duration: 6 }}
                  className="h-full"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '50% 50%' }}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-black/50" />
              </div>
              
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: activeIndex === index ? 1 : 0, y: activeIndex === index ? 0 : 20 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="max-w-3xl text-white"
                  >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-8">
                      {slide.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-primary text-white px-8 py-4 rounded-none font-medium hover:bg-primary-dark transition-colors"
                    >
                      Learn More
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="swiper-button-prev absolute left-4 top-1/2 z-10 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-colors">
        <ChevronLeft size={24} />
      </button>
      <button className="swiper-button-next absolute right-4 top-1/2 z-10 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-colors">
        <ChevronRight size={24} />
      </button>
    </div>
  );
}