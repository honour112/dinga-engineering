export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  benefits: string[];
}

export interface NavLink {
  label: string;
  path: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
}