export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  rating: number;
  text: string;
  avatar?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  description: string;
  results: string[];
  image: string;
  quote: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

export interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  businessType: string;
  message: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}