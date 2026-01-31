
import React from 'react';

const SpareParts: React.FC = () => {
  const parts = [
    { name: 'Fuel & Oil Filters', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwP855SQakSvMDGYr8tMras2D0XBvTbuPhw&s=80&w=600' },
    { name: 'Alternators', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHR9DS154Yv4jOuIfv59YGndaBPKR9DLU2Q&s=80&w=600' },
    { name: 'Control Panels', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMk8XXx-zBNYEvb6n4Lx19JAmtKuNMF909oA&s=80&w=600' },
    { name: 'Engines & Pistons', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQbebxJt68w-eJCzku4brI22la8ZAVd6AUug&s=80&w=600' },
    { name: 'Radiators & Cooling', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVlbaEyqiT6zPc3E1xClx14ZL7Zuju0RoCFQ&s=80&w=600' },
    { name: 'Electrical Components', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQglJgYRoXYdY6mSQWn0nGfXvkj7OjTc0LkTg&s=80&w=600' }
  ];

  return (
    <div className="pt-24">
      <div className="bg-brand-navy text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Genuine Spare Parts</h1>
        <p className="text-xl text-gray-400">Maximize the life of your generator with authentic components.</p>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {parts.map((part, i) => (
              <div key={i} className="group border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <div className="h-64 overflow-hidden">
                  <img src={part.img} alt={part.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-brand-navy">{part.name}</h3>
                  <div className="w-10 h-1 bg-brand-yellow mx-auto mt-3"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 border-2 border-dashed border-gray-200 p-12 text-center rounded-xl bg-brand-grey">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">Don't see the part you need?</h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">We stock thousands of items for Perkins, Cummins, Denyo and more. Provide us with your engine model and we will source the part for you.</p>
            <a href="#/contact" className="text-brand-orange font-bold border-b-2 border-brand-orange pb-1 hover:text-brand-navy hover:border-brand-navy transition-all">
              INQUIRE ABOUT SPECIFIC PARTS
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpareParts;
