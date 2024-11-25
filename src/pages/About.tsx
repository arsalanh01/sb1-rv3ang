import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Shield, Users, Target } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: 'Reliability',
      description: 'We pride ourselves on consistent, dependable service delivery.'
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: 'Customer Focus',
      description: 'Your success is our priority, driving everything we do.'
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our operations.'
    }
  ];

  return (
    <main>
      <PageHeader
        title="About Us"
        description="Your trusted partner in logistics since 2020"
        image="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Established in November 2020, Daken Logistics Services EST. has quickly become a leading provider of logistics solutions in Saudi Arabia and selected Arab countries.
              </p>
              <p className="text-gray-600 mb-4">
                We pride ourselves on each partnership we have established with the customers we serve. We understand business needs and will recommend a logistics solution that will ultimately fulfill the customer's objective.
              </p>
              <p className="text-gray-600">
                With operations throughout Saudi Arabia and selected Arab countries, we offer a full range of Freight Forwarding, Logistics & Warehousing services solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px]"
            >
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80"
                alt="Logistics Operations"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          </div>

          <div className="mt-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary text-center mb-12"
            >
              Our Values
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6"
                >
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}