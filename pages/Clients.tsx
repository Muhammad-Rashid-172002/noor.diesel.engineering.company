
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Clients: React.FC = () => {
  return (
    <div className="pt-24">
      <div className="bg-brand-navy text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Our Clients & Reviews</h1>
        <p className="text-xl text-gray-400">The trust of our customers is our greatest asset.</p>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Success Stories</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">See how we've helped businesses across Islamabad and beyond maintain continuous power.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[...TESTIMONIALS, 
              {
                id: 't3',
                name: 'Bilal Malik',
                company: 'Grand Marquee Events',
                feedback: 'Rental service is exceptional. They deliver on time, and their technicians stay during the entire event to ensure no interruptions. Highly recommended.',
                rating: 5,
                imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
              },
              {
                id: 't4',
                name: 'Zainab Hussain',
                company: 'TechValley Islamabad',
                feedback: 'Bought a 50kVA silent generator for our office. The installation was neat, and the after-sales support has been very proactive with scheduled maintenance.',
                rating: 5,
                imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400'
              }
            ].map(t => (
              <div key={t.id} className="bg-brand-grey p-10 rounded-2xl relative">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <svg className="w-20 h-20 text-brand-navy" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.899 14.899 16 16.017 16H19V14H15.017C14.464 14 14.017 13.552 14.017 13V10C14.017 9.448 14.464 9 15.017 9H19V7H14.017V5H19.017C20.121 5 21.017 5.895 21.017 7V16.32C21.017 17.218 20.303 18.15 19.483 18.52L17.77 19.332C17.662 19.774 17.474 20.18 17.217 20.542L15.42 21H14.017ZM3.017 21L3.017 18C3.017 16.899 3.899 16 5.017 16H8V14H4.017C3.464 14 3.017 13.552 3.017 13V10C3.017 9.448 3.464 9 4.017 9H8V7H3.017V5H8.017C9.121 5 10.017 5.895 10.017 7V16.32C10.017 17.218 9.303 18.15 8.483 18.52L6.77 19.332C6.662 19.774 6.474 20.18 6.217 20.542L4.42 21H3.017Z" /></svg>
                </div>
                <div className="flex text-brand-yellow mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-xl text-brand-navy mb-8 leading-relaxed font-medium">"{t.feedback}"</p>
                <div className="flex items-center">
                  <img src={t.imageUrl} alt={t.name} className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-white shadow-lg" />
                  <div>
                    <h4 className="text-lg font-bold text-brand-navy">{t.name}</h4>
                    <p className="text-sm text-brand-orange uppercase font-bold">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24">
            <h3 className="text-2xl font-bold text-center mb-12 text-brand-navy">Trusted By Industry Leaders</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 items-center grayscale opacity-60">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTrvDHz1V0LQeWn4RXgqlyWqlQ1MA5b_aNUA&s=80&w=200" alt="Logo 1" className="mx-auto" />
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLaGdy1NFHq4Ae_I-Sfahr0DPFXmaaZRDdw&s=80&w=200" alt="Logo 2" className="mx-auto" />
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6_Xj5MIIthHSnnoHRM6_fzLp1tny-OfVi3w&s=80&w=200" alt="Logo 3" className="mx-auto" />
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4pI7R1KRwK-Y-W4k2_p-jfLcuoBBuWveFYA&s=80&w=200" alt="Logo 4" className="mx-auto" />
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIt7Lgw2qLRf5n3wiv0h_xKfaED5-1xcCGQ&s=80&w=200" alt="Logo 5" className="mx-auto" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
