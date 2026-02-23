
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface Presentation {
  title: string;
  description: string;
  videoUrl?: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
