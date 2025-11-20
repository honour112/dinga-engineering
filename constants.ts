import { ServiceItem, NavLink } from './types';

export const COMPANY_NAME = "DINGA ENGINEERINGS";
export const TAGLINE = "Engineering Excellence, Built to Last.";
export const PHONE_NUMBER = "+265 888 261 522";
export const WHATSAPP_LINK = "https://wa.me/265888261522";
export const EMAIL = "info@dingaengineerings.com";
export const ADDRESS = "Lilongwe, Malawi";

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

// Images placed in `public/` — URL-encoded paths for safe usage in JSX
export const PUBLIC_IMAGES: string[] = [
  '/WhatsApp%20Image%202025-11-18%20at%2013.19.54_aceb695b.jpg',
  '/WhatsApp%20Image%202025-11-18%20at%2013.19.55_1ca993d7.jpg',
  '/WhatsApp%20Image%202025-11-18%20at%2013.19.55_5e6d0df8.jpg',
  '/WhatsApp%20Image%202025-11-18%20at%2013.19.56_338e0883.jpg',
  '/WhatsApp%20Image%202025-11-18%20at%2013.19.58_7df99e5a.jpg',
  '/WhatsApp%20Image%202025-11-18%20at%2013.19.59_13d77c99.jpg',
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'civil-engineering',
    title: 'Civil Engineering',
    shortDescription: 'Expert design and execution of infrastructure projects ensuring durability and safety.',
    fullDescription: 'Our Civil Engineering department focuses on the design, construction, and maintenance of the physical and naturally built environment. From roads and bridges to canals and dams, we ensure that every infrastructure project meets the highest standards of safety and sustainability. We leverage modern technology and rigorous testing to guarantee longevity.',
    imageUrl: PUBLIC_IMAGES[0],
    benefits: ['Structural Integrity Analysis', 'Sustainable Material Sourcing', 'Regulatory Compliance', 'Large-scale Infrastructure Management']
  },
  {
    id: 'structural-engineering',
    title: 'Structural Engineering',
    shortDescription: 'Ensuring the stability and strength of buildings and structures.',
    fullDescription: 'We provide comprehensive structural analysis and design services. Our engineers calculate loads and stresses to ensure that buildings can withstand environmental conditions and daily use. Whether it is a skyscraper or a residential home, we design the bones of the building to last for generations.',
    imageUrl: PUBLIC_IMAGES[1],
    benefits: ['Seismic Resistance Design', 'Load Bearing Calculations', 'Material Strength Testing', 'Advanced Modeling']
  },
  {
    id: 'building-construction',
    title: 'Building Construction',
    shortDescription: 'From residential homes to commercial complexes, we build with precision.',
    fullDescription: 'Our core service involves end-to-end building construction. We manage the entire lifecycle of a project, from ground-breaking to the final coat of paint. Our team coordinates architects, laborers, and suppliers to deliver projects on time and within budget, without compromising on quality.',
    imageUrl: PUBLIC_IMAGES[2],
    benefits: ['Project Management', 'Quality Craftsmanship', 'Timely Delivery', 'Cost-effective Solutions']
  },
  {
    id: 'renovations',
    title: 'Renovations',
    shortDescription: 'Breathing new life into old structures with modern aesthetics and functionality.',
    fullDescription: 'We specialize in transforming existing spaces. Whether it is a historical restoration or a modern office upgrade, our renovation team carefully assesses the existing structure to improve functionality and aesthetics while maintaining structural integrity.',
    imageUrl: PUBLIC_IMAGES[3],
    benefits: ['Modernization', 'Space Optimization', 'Structural Reinforcement', 'Value Addition']
  },
  {
    id: 'electrical-engineering',
    title: 'Electrical Engineering',
    shortDescription: 'Safe and efficient electrical systems for industrial and residential needs.',
    fullDescription: 'Our electrical engineering division handles the design and installation of complex electrical systems. We ensure energy efficiency and safety in wiring, lighting, and power distribution for both residential complexes and industrial plants.',
    imageUrl: PUBLIC_IMAGES[4],
    benefits: ['Power Distribution', 'Lighting Design', 'Safety Inspections', 'Energy Efficiency']
  },
  {
    id: 'plumbing',
    title: 'Plumbing',
    shortDescription: 'Advanced plumbing solutions for water supply and waste management.',
    fullDescription: 'Water systems are the lifeline of any building. We design and install robust plumbing systems for water supply, drainage, and waste management. Our focus is on leak prevention, pressure management, and long-term durability.',
    imageUrl: PUBLIC_IMAGES[5],
    benefits: ['System Design', 'Leak Detection', 'Waste Management', 'High-quality Piping']
  },
  {
    id: 'site-planning',
    title: 'Site Planning',
    shortDescription: 'Strategic land use planning for optimal project layout.',
    fullDescription: 'Before a single brick is laid, proper site planning is essential. We analyze topography, soil conditions, and environmental factors to create the optimal layout for your project, ensuring efficiency and compliance with zoning laws.',
    imageUrl: PUBLIC_IMAGES[0],
    benefits: ['Topographical Analysis', 'Zoning Compliance', 'Environmental Impact Assessment', 'Master Planning']
  },
  {
    id: 'building-inspections',
    title: 'Building Inspections',
    shortDescription: 'Thorough assessments to ensure safety and compliance.',
    fullDescription: 'Our certified inspectors provide detailed reports on the condition of properties. Whether for purchase, sale, or maintenance, we identify potential structural issues, safety hazards, and code violations.',
    imageUrl: PUBLIC_IMAGES[1],
    benefits: ['Safety Audits', 'Code Compliance', 'Defect Identification', 'Maintenance Reporting']
  },
  {
    id: 'consultancy',
    title: 'Consultancy',
    shortDescription: 'Professional advice for complex engineering challenges.',
    fullDescription: 'Leverage our expertise for your projects. We offer consultancy services for feasibility studies, technical audits, and project management strategies to help other developers and owners achieve their goals.',
    imageUrl: PUBLIC_IMAGES[2],
    benefits: ['Feasibility Studies', 'Technical Audits', 'Risk Management', 'Strategic Planning']
  },
];