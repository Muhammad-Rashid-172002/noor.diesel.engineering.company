
import React from 'react';

const WhyChooseUs: React.FC = () => {
  const points = [
    { title: 'Trusted Power Provider', desc: 'Over a decade of proven excellence in Islamabad\'s energy sector.', img: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=400' },
    { title: 'Quality Products', desc: 'Authorized supplier of internationally recognized generator brands.', img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400' },
    { title: 'Genuine Parts', desc: 'We never compromise on the authenticity of engine components.', img: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80&w=400' },
    { title: 'Professional Setup', desc: 'Safe and efficient installation by certified industrial engineers.', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=400' },
    { title: 'After-Sales Care', desc: 'Proactive maintenance plans to avoid costly emergency repairs.', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=400' },
    { title: 'Customer First', desc: 'Solutions tailored specifically to your load requirements.', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400' }
  ];

  return (
    <div className="pt-24">
      <div className="bg-brand-navy text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Why Noor Diesel?</h1>
        <p className="text-xl text-gray-400">Our values define our commitment to your power needs.</p>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {points.map((p, i) => (
              <div key={i} className="flex flex-col bg-brand-grey p-8 rounded-lg shadow-sm border border-transparent hover:border-brand-yellow transition-all">
                <div className="h-48 rounded overflow-hidden mb-6">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col lg:flex-row gap-12 items-center bg-brand-navy text-white p-12 rounded-2xl">
             <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Engineering Standards</h2>
                <ul className="space-y-4">
                   <li className="flex items-start">
                      <span className="text-brand-yellow font-bold mr-4">01.</span>
                      <p>Adherence to IEEE and local safety standards for all installations.</p>
                   </li>
                   <li className="flex items-start">
                      <span className="text-brand-yellow font-bold mr-4">02.</span>
                      <p>Thorough load testing before commissioning any project.</p>
                   </li>
                   <li className="flex items-start">
                      <span className="text-brand-yellow font-bold mr-4">03.</span>
                      <p>Detailed documentation and warranty certificates for every sale.</p>
                   </li>
                </ul>
             </div>
             <div className="lg:w-1/2 h-64 w-full rounded-lg overflow-hidden">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyxfjiMEyMIQ6eoEcRneFPJEFDfiIsVxDmA&s=80&w=800" className="w-full h-full object-cover" alt="Engineering" />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
