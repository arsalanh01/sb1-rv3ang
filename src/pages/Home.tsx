import Hero from '../components/Hero';
import FeaturedGrid from '../components/FeaturedGrid';
import NewsSection from '../components/NewsSection';
import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';
import { Truck, Package, Shield, Users, Warehouse, Wrench, Car, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  const services = [
    {
      icon: Truck,
      title: 'Freight Forwarding',
      description: 'Daken Logistics Services is a highly experienced international freight forwarder offering reliable and efficient shipping solutions worldwide.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80'
    },
    {
      icon: Package,
      title: 'Customs Clearance',
      description: 'DLS specializes in efficient customs clearance solutions, ensuring swift and accurate processing of shipments while adhering to regulations.',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80'
    },
    {
      icon: Warehouse,
      title: 'Warehouse Services',
      description: 'Daken Logistics Services offers flexible and efficient warehousing solutions, catering to businesses of all sizes.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80'
    },
    {
      icon: Shield,
      title: 'Transport Services',
      description: 'DLS offers a comprehensive range of cost-effective transport services, continuously improving its market share through superior service delivery.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80'
    },
    {
      icon: Settings,
      title: 'Rental Equipment',
      description: 'DLS plays a significant role in Saudi Arabia\'s business environment by providing specialized rental equipment to enhance operational efficiency.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80'
    },
    {
      icon: Wrench,
      title: 'Services & Maintenance',
      description: 'DLS prioritizes customer satisfaction by providing customized maintenance solutions for reliable and productive rental equipment.',
      image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64926?auto=format&fit=crop&q=80'
    },
    {
      icon: Car,
      title: 'Taxi Services',
      description: 'DLS provides a diverse range of tailored services, including a reliable and professional taxi service for service-sensitive clients.',
      image: 'https://images.unsplash.com/photo-1511527844068-006b95d162c2?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <main>
      <Hero />
      <FeaturedGrid />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Comprehensive logistics solutions designed to meet your business needs
            </p>
          </motion.div>

          <div className="relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView="auto"
              navigation={{
                prevEl: '.services-prev',
                nextEl: '.services-next',
              }}
              className="services-slider"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index} className="!w-[300px]">
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    image={service.image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="services-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white shadow-lg text-primary rounded-full hover:bg-gray-50 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button className="services-next absolute right-0 top-1/2 z-10 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white shadow-lg text-primary rounded-full hover:bg-gray-50 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      <NewsSection />
    </main>
  );
}