import { Service, Testimonial, CaseStudy } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Website Design',
    description: 'Custom websites engineered for maximum conversion and user engagement',
    icon: 'Globe',
    benefits: ['Responsive architecture', 'SEO optimization', 'Performance analytics', 'Mobile-first design']
  },
  {
    id: '2',
    title: 'AI Chatbot',
    description: 'Intelligent conversation systems that qualify leads and engage users 24/7',
    icon: 'MessageCircle',
    benefits: ['24/7 availability', 'Lead qualification', 'Natural language processing', 'CRM integration']
  },
  {
    id: '3',
    title: 'Lead Capture',
    description: 'Advanced forms and landing pages optimized for maximum conversion rates',
    icon: 'Target',
    benefits: ['Smart form logic', 'A/B testing', 'Real-time validation', 'Analytics tracking']
  },
  {
    id: '4',
    title: 'Appointment System',
    description: 'Automated booking platform with calendar sync and reminder protocols',
    icon: 'Calendar',
    benefits: ['Calendar integration', 'Automated reminders', 'Timezone handling', 'Payment processing']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    company: 'TechStart Inc.',
    rating: 5,
    text: 'Their AI chatbot increased our lead generation by 300%. The team is incredibly professional and delivers exactly what they promise.'
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    company: 'Growth Labs',
    rating: 5,
    text: 'The website they built for us is not just beautiful - it converts. Our booking rates went up 150% in the first month.'
  },
  {
    id: '3',
    name: 'Emily Foster',
    company: 'Digital Dynamics',
    rating: 5,
    text: 'Outstanding work! The lead capture system they implemented has revolutionized our sales process. Highly recommended.'
  },
  {
    id: '4',
    name: 'David Kim',
    company: 'Innovate Solutions',
    rating: 5,
    text: 'Professional, responsive, and results-driven. They transformed our online presence completely.'
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'E-commerce Revolution',
    client: 'RetailMax',
    description: 'Complete website redesign with AI chatbot integration',
    results: ['300% increase in conversions', '50% reduction in bounce rate', '24/7 customer support'],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    quote: 'They transformed our business completely. The results speak for themselves.'
  },
  {
    id: '2',
    title: 'SaaS Lead Generation',
    client: 'CloudTech',
    description: 'Advanced lead capture system with automated nurturing',
    results: ['500% increase in qualified leads', '80% faster response time', '90% client satisfaction'],
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
    quote: 'Our lead quality has never been better. The system pays for itself.'
  },
  {
    id: '3',
    title: 'Professional Services',
    client: 'ConsultPro',
    description: 'Appointment booking system with calendar integration',
    results: ['200% more bookings', '70% less admin work', '95% booking accuracy'],
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
    quote: 'The booking system has streamlined our entire operation.'
  }
];