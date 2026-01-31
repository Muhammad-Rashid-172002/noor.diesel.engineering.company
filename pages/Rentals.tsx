
import React from 'react';

const Rentals: React.FC = () => {
  return (
    <div className="pt-24">
      <div className="bg-brand-orange text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Generator Rental Services</h1>
        <p className="text-xl opacity-90">Reliable temporary power solutions for any duration.</p>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Flexible Rental Options</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>Noor Diesel understands that permanent power isn't always the immediate answer. We offer a comprehensive fleet of mobile and skid-mounted generators for rent.</p>
                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                  <div className="bg-brand-grey p-6 rounded border-l-4 border-brand-orange">
                    <h3 className="font-bold text-brand-navy mb-2">Short Term</h3>
                    <p className="text-sm">Ideal for events, weekend projects, or emergency breakdowns.</p>
                  </div>
                  <div className="bg-brand-grey p-6 rounded border-l-4 border-brand-orange">
                    <h3 className="font-bold text-brand-navy mb-2">Long Term</h3>
                    <p className="text-sm">Cost-effective monthly plans for construction sites and remote projects.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrjRe7RqNtVJWRvFnm9gGdGmei8hQQKkg3yw&s=80&w=800" alt="Rental Unit at Site" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-center mb-12 text-brand-navy">Our Rental Fleet In Action</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrNg1nBfmCik8T_t3-ERlmD4r6bBgZkWzMCw&s=80&w=600" className="rounded-lg h-64 w-full object-cover" alt="Site 1" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkL8T3UZGOt2LPIsYmb8zdPqO76qjCJSRPdA&s=80&w=600" className="rounded-lg h-64 w-full object-cover" alt="Site 2" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBfLgvp7LG_tPP52J68g4xt3-yNqMDhaOgQ&s=80&w=600" className="rounded-lg h-64 w-full object-cover" alt="Site 3" />
          </div>

          <div className="mt-20 bg-brand-navy text-white p-12 rounded-2xl flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold mb-4">Request a Rental Quote</h2>
              <p className="text-gray-400">Our engineers will help determine the exact kVA requirement for your project.</p>
            </div>
            <a href="#/contact" className="bg-brand-yellow text-brand-navy px-10 py-4 font-bold rounded-full hover:bg-white transition-all whitespace-nowrap">
              CONTACT RENTAL TEAM
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rentals;
