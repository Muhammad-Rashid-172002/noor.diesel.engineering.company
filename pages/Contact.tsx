
import React, { useState } from 'react';
import { ADDRESS, PHONE, WHATSAPP, EMAIL, COMPANY_NAME } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-24">
      <div className="bg-brand-navy text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-gray-400">Get a free quote or schedule a maintenance visit.</p>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-8">Get In Touch</h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="bg-brand-grey p-4 rounded-full mr-6 text-brand-orange">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-brand-navy">Head Office</h4>
                    <p className="text-gray-600">{ADDRESS}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-grey p-4 rounded-full mr-6 text-brand-orange">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-brand-navy">Call Support</h4>
                    <p className="text-gray-600">Mobile: {PHONE}</p>
                    <p className="text-gray-600">WhatsApp: {WHATSAPP}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-grey p-4 rounded-full mr-6 text-brand-orange">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-brand-navy">Email Inquiry</h4>
                    <p className="text-gray-600">{EMAIL}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg h-64">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsCUsv7_wVNIq57Vp45zd3IZAA8OKCNHifw&s=80&w=800" alt="Islamabad Workshop" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="bg-brand-grey p-8 md:p-12 rounded-2xl">
              <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">Inquiry Form</h3>
              {submitted ? (
                <div className="bg-green-100 text-green-800 p-8 rounded-lg text-center font-bold">
                  Thank you! Your message has been sent. Our team will contact you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label className="text-xs font-bold uppercase text-gray-500 mb-2">Full Name</label>
                      <input required type="text" className="bg-white border-b-2 border-gray-200 p-3 focus:border-brand-yellow focus:outline-none transition-colors" />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-xs font-bold uppercase text-gray-500 mb-2">Company Name</label>
                      <input type="text" className="bg-white border-b-2 border-gray-200 p-3 focus:border-brand-yellow focus:outline-none transition-colors" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label className="text-xs font-bold uppercase text-gray-500 mb-2">Phone Number</label>
                      <input required type="tel" className="bg-white border-b-2 border-gray-200 p-3 focus:border-brand-yellow focus:outline-none transition-colors" />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-xs font-bold uppercase text-gray-500 mb-2">Inquiry Type</label>
                      <select className="bg-white border-b-2 border-gray-200 p-3 focus:border-brand-yellow focus:outline-none transition-colors">
                        <option>Generator Sales</option>
                        <option>Generator Rental</option>
                        <option>Spare Parts</option>
                        <option>Maintenance Service</option>
                        <option>Battery Inquiry</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs font-bold uppercase text-gray-500 mb-2">Message</label>
                    <textarea required rows={4} className="bg-white border-b-2 border-gray-200 p-3 focus:border-brand-yellow focus:outline-none transition-colors"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-brand-navy text-white font-bold py-4 rounded hover:bg-brand-blue transition-colors">
                    SEND INQUIRY
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
