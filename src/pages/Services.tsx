import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';
import { Truck, Package, Shield, Users, Warehouse, Wrench, Car, Settings } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Truck,
      title: 'Freight Forwarding',
      description: 'International freight forwarding with expertise in all modes of transport, ensuring reliable and efficient shipping solutions worldwide.'
    },
    {
      icon: Package,
      title: 'Customs Clearance',
      description: 'Efficient customs clearance solutions for air, sea, and land shipments, ensuring swift and accurate processing while adhering to regulations.'
    },
    {
      icon: Warehouse,
      title: 'Warehouse Services',
      description: 'Flexible warehousing solutions with state-of-the-art facilities, supporting businesses of all sizes with their storage needs.'
    },
    {
      icon: Shield,
      title: 'Transport Services',
      description: 'Comprehensive transport solutions with a well-maintained fleet, ensuring on-time performance and superior service delivery.'
    },
    {
      icon: Settings,
      title: 'Rental Equipment',
      description: 'Specialized rental equipment services enhancing operational efficiency for businesses across Saudi Arabia.'
    },
    {
      icon: Wrench,
      title: 'Services & Maintenance',
      description: 'Customized maintenance solutions ensuring reliable and productive equipment performance with 24/7 support.'
    },
    {
      icon: Car,
      title: 'Taxi Services',
      description: 'Professional taxi services for service-sensitive clients, featuring high-quality vehicles and reliable transportation.'
    },
    {
      icon: Users,
      title: 'Customer Support',
      description: '24/7 dedicated customer support ensuring seamless logistics operations and client satisfaction.'
    }
  ];

  return (
    <main>
      <PageHeader
        title="Our Services"
        description="Comprehensive logistics solutions tailored to your business needs"
        image="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}