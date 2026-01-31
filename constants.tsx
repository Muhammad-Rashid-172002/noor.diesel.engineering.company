
import { NavItem, Product, Testimonial } from './types';

export const COMPANY_NAME = "Noor Diesel Engineering Company";
export const ADDRESS = "Blue Area, Islamabad, Pakistan";
export const PHONE = "+92 333 5132538";
export const WHATSAPP = "+92 310 1515192";
export const EMAIL = "noordiesel@gmail.com";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#/' },
  { label: 'About Us', href: '#/about' },
  { label: 'Products', href: '#/products' },
  { label: 'Rentals', href: '#/rentals' },
  { label: 'Spare Parts', href: '#/spare-parts' },
  { label: 'Clients', href: '#/clients' },
  { label: 'Why Choose Us', href: '#/why-choose-us' },
  { label: 'Contact', href: '#/contact' },
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'gen-1',
    name: 'Industrial Diesel Generator 100kVA',
    category: 'Generator',
    description: 'High-performance diesel generator for industrial backup and primary power.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    specs: ['100kVA Output', 'Silent Enclosure', 'Automatic Transfer Switch', 'Fuel Efficient']
  },
  {
    id: 'bat-1',
    name: 'Deep Cycle Industrial Battery',
    category: 'Battery',
    description: 'Reliable UPS and solar industrial batteries with long cycle life.',
    imageUrl: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=800',
    specs: ['200Ah Capacity', 'Sealed Lead Acid', 'Maintenance Free', 'High Discharge Rate']
  },
  {
    id: 'part-1',
    name: 'Engine Oil Filters (Genuine)',
    category: 'Spare Part',
    description: 'Premium grade filters for diesel engines ensuring longevity.',
    imageUrl: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80&w=800',
    specs: ['Precision Filtration', 'OEM Certified', 'High Pressure Resistance']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ahmed Khan',
    company: 'Capital Construction Co.',
    feedback: 'Noor Diesel has been our primary power partner for 5 years. Their generators are reliable and their response time for maintenance is unmatched in Islamabad.',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 't2',
    name: 'Sardar Ali',
    company: 'Islamabad Medical Center',
    feedback: 'A hospitals backup power is critical. Noor Diesel installed our 250kVA setup and provided excellent training for our staff.',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  }
];
