
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <div className="bg-brand-navy text-white py-20 relative">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">About Noor Diesel</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Dedicated to providing unmatched power solutions for industries, commercial buildings, and residences in Islamabad.</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-brand-navy">Our Background & Mission</h2>
              <div className="w-20 h-2 bg-brand-yellow mb-8"></div>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in Islamabad, Noor Diesel Engineering Company has grown from a local workshop into a premier provider of industrial power solutions. We recognized early on that businesses in Pakistan need more than just a generator—they need a reliable power partner.
                </p>
                <p>
                  Our mission is to empower our clients by providing robust diesel generators, genuine spare parts, and world-class maintenance services that ensure continuity in their operations.
                </p>
                <p>
                  We specialize in internationally recognized brands including Perkins, Cummins, Caterpillar, and Denyo, ensuring that our customers receive only the most durable equipment available on the market.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCo_Ysg22isEhWV7ygV8u2dH1l8xV9xsARUw&s=80&w=800" 
                alt="Our Workshop" 
                className="rounded-lg shadow-xl"
              />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400" alt="Team at Work" className="rounded-lg h-40 object-cover" />
                <img src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=400" alt="Generator Setup" className="rounded-lg h-40 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-brand-grey">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Technical Integrity',
                desc: 'Our engineering team follows strict protocols for installation and repair, ensuring safety and efficiency at every step.',
                img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400'
              },
              {
                title: 'Customer Satisfaction',
                desc: 'We build long-term relationships based on trust, transparency, and responsive after-sales support.',
                img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400'
              },
              {
                title: 'Operational Excellence',
                desc: 'From our sales floor to our onsite rental support, we aim for excellence in every interaction.',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRIkdZ0FMLfdUzUnkj2r_dQ5pxW5DEXkyQLQ&s=80&w=400'
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm">
                <img src={value.img} alt={value.title} className="w-full h-48 object-cover rounded mb-6" />
                <h3 className="text-xl font-bold mb-4 text-brand-navy">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
