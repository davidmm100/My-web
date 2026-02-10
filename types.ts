
export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  impact: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'Core' | 'Developing' | 'Analytics';
}

export interface Language {
  name: string;
  proficiency: string;
  percentage: number;
}
