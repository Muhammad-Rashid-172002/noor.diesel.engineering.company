
import React from 'react';

const Products: React.FC = () => {
  const categories = [
    {
      title: 'Diesel Generators',
      description: 'Reliable primary and backup power for every scale.',
      items: [
        { name: 'Industrial Generators', specs: ['100kVA - 2500kVA', 'Weatherproof Silencer', 'Remote Monitoring Capability'], img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNLTwy_TuA8vfAqwg_dxxlMaVtGuAGBpCjEA&s=80&w=600' },
        { name: 'Commercial Generators', specs: ['10kVA - 60kVA', 'Low Noise Output', 'Compact Design'], img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyxcnzSEoZgXIUHpOqqLgvjdn0psVJF_dPhw&s=80&w=600' }
      ]
    },
    {
      title: 'Industrial Batteries',
      description: 'Superior energy storage solutions for critical systems.',
      items: [
        { name: 'UPS Batteries', specs: ['High Discharge Rates', '5-10 Year Life Expectancy', 'VRLA Technology'], img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlciH10zZHyhz_S0Uf_2NNuavfTeJ-fBcB5g&s=80&w=600' },
        { name: 'Industrial Gel Batteries', specs: ['Deep Cycle Capability', 'Maintenance Free', 'Heat Resistant'], img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQANzHCwqXHaV_X4ABfq1ubzZl_bV6bDvi3jg&s=80&w=600' }
      ]
    },
    {
      title: 'Services & Support',
      description: 'Professional engineering services to keep you powered.',
      items: [
        { name: 'Onsite Maintenance', specs: ['24/7 Response', 'Qualified Engineers', 'Detailed Diagnostic Reports'], img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=600' },
        { name: 'Installation', specs: ['Foundation Work', 'ATS/AMF Panel Wiring', 'Load Testing'], img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600' }
      ]
    }
  ];

  return (
    <div className="pt-24">
      <div className="bg-brand-navy text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Products & Services</h1>
        <p className="text-gray-400">Top-tier power solutions and engineering expertise.</p>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="mb-20 last:mb-0">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b-2 border-gray-100 pb-6">
                <div>
                  <h2 className="text-3xl font-bold text-brand-navy mb-2">{cat.title}</h2>
                  <p className="text-gray-500">{cat.description}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                {cat.items.map((item, i) => (
                  <div key={i} className="flex flex-col lg:flex-row bg-brand-grey rounded-lg overflow-hidden group shadow-sm hover:shadow-xl transition-all">
                    <div className="lg:w-1/2 h-64 overflow-hidden">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="p-8 lg:w-1/2 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-brand-navy mb-4">{item.name}</h3>
                      <ul className="space-y-2">
                        {item.specs.map(spec => (
                          <li key={spec} className="text-sm text-gray-600 flex items-center">
                            <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full mr-3"></span>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
