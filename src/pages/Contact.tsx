import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: 'Saudi Arabia'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: '+966 XX XXX XXXX'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'info@dakenlogistics.com'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Working Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM'
    }
  ];

  return (
    <main>
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team for any inquiries"
        image="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-8">Get in Touch</h2>
              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-primary">{info.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-gray-600">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-[600px] bg-gray-100 rounded-lg overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14485.021267865654!2d46.6333!3d24.7333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1635959876543!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}