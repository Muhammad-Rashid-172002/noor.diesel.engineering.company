
export interface Product {
  id: string;
  name: string;
  category: 'Generator' | 'Battery' | 'Spare Part' | 'Service';
  description: string;
  imageUrl: string;
  specs: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  feedback: string;
  rating: number;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}
