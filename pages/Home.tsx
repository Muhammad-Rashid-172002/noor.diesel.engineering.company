
import React from 'react';
import { FEATURED_PRODUCTS, TESTIMONIALS, PHONE } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQM6-7nS0wc7EFToGHsWzrOH3nzWQ7HRtMNw&s=80&w=1920" 
            alt="Power Station" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <span className="bg-brand-yellow text-brand-navy px-4 py-1 font-bold text-sm uppercase tracking-widest mb-4 inline-block">
              Since 2012
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Reliable Generator & Power Backup Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Noor Diesel Engineering Company provides high-quality diesel generators, industrial batteries, and expert maintenance services across Pakistan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#/contact" className="bg-brand-yellow text-brand-navy px-8 py-4 font-bold rounded text-center hover:bg-white transition-all transform hover:-translate-y-1">
                GET A QUOTE
              </a>
              <a href="#/rentals" className="bg-transparent border-2 border-white text-white px-8 py-4 font-bold rounded text-center hover:bg-white hover:text-brand-navy transition-all transform hover:-translate-y-1">
                RENTAL SERVICES
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-navy">Professional Power Infrastructure Expertise</h2>
              <div className="w-20 h-2 bg-brand-yellow mb-8"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Noor Diesel Engineering Company stands as a beacon of reliability in the energy sector of Pakistan. Based in Blue Area, Islamabad, we specialize in the sales, rental, and maintenance of premium diesel generators.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team consists of certified technicians who ensure that your power backup systems are always ready to perform, minimizing downtime and maximizing productivity.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-4 border-brand-yellow pl-4">
                  <span className="block text-2xl font-bold text-brand-navy">10+ Years</span>
                  <span className="text-sm text-gray-500 uppercase">Experience</span>
                </div>
                <div className="border-l-4 border-brand-yellow pl-4">
                  <span className="block text-2xl font-bold text-brand-navy">24/7 Support</span>
                  <span className="text-sm text-gray-500 uppercase">Emergency Service</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" 
                alt="Engine Maintenance" 
                className="rounded-lg shadow-2xl border-b-8 border-brand-yellow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-brand-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">Featured Power Products</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We supply only the highest quality industrial-grade power solutions and genuine spare parts.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {FEATURED_PRODUCTS.map(product => (
              <div key={product.id} className="bg-white group overflow-hidden shadow-lg rounded-lg border border-gray-100 transition-all hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <span className="text-brand-orange font-bold text-xs uppercase tracking-widest">{product.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-4 text-brand-navy">{product.name}</h3>
                  <p className="text-gray-600 mb-6 text-sm">{product.description}</p>
                  <ul className="space-y-2 mb-8">
                    {product.specs.slice(0, 3).map(spec => (
                      <li key={spec} className="text-xs text-gray-500 flex items-center">
                        <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full mr-2"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <a href="#/products" className="text-brand-blue font-bold text-sm hover:text-brand-orange inline-flex items-center">
                    VIEW DETAILS <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rentals Banner */}
      <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full opacity-10 hidden lg:block">
           <img src="https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&q=80&w=800" alt="Generator Pattern" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Need Immediate Power?</h2>
            <p className="text-xl text-gray-400 mb-8">
              We offer flexible generator rental services for construction sites, hospitals, events, and offices. Range from 10kVA to 1000kVA.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#/rentals" className="bg-brand-yellow text-brand-navy px-8 py-3 font-bold rounded hover:bg-white transition-colors">
                RENTAL OPTIONS
              </a>
              <div className="flex items-center ml-4">
                <span className="text-gray-500 mr-2">Call Now:</span>
                <span className="text-xl font-bold text-brand-yellow">{PHONE}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">Why Noor Diesel?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Our commitment to engineering excellence and customer satisfaction.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Genuine Parts', text: 'We only use and sell authentic engine components and filters.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA3XNhH37zfKbBGmthSdpkVgKLzFJj3WDWdg&s=80&w=400' },
              { title: 'Expert Rental', text: 'Reliable fleet maintained by in-house engineers.', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400' },
              { title: 'Top Technicians', text: 'Certified crew with deep knowledge of Perkins, Cummins, and Denyo.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxycuj4LhcQNTVXU4X64yqjUj9o2k5cAsVg&s=80&w=400' },
              { title: 'Quick Support', text: 'Rapid response team for onsite emergency repairs.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTVsWtA10YfP7EEJN3OTon66bCZ8VWF2CNQ&s=80&w=400' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="h-48 rounded-lg overflow-hidden mb-6">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-brand-navy">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-brand-grey">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
             <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">Client Feedback</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {TESTIMONIALS.map(t => (
                <div key={t.id} className="bg-white p-8 rounded-xl shadow-md border-t-4 border-brand-yellow">
                  <div className="flex mb-4 text-brand-yellow">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="italic text-gray-600 mb-6 leading-relaxed">"{t.feedback}"</p>
                  <div className="flex items-center">
                    <img src={t.imageUrl} alt={t.name} className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-brand-yellow" />
                    <div>
                      <h4 className="font-bold text-brand-navy">{t.name}</h4>
                      <p className="text-xs text-brand-orange uppercase">{t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-blue py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Power Supply?</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">Get in touch with our engineering team for a free consultation and customized quote.</p>
          <a href="#/contact" className="bg-brand-yellow text-brand-navy px-12 py-4 font-bold rounded-full hover:bg-white transition-all">
            CONTACT US TODAY
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
