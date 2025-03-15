export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  liveLink?: string;
}

export interface HeroSectionProps {
  name: string;
  title: string;
  company: string;
  description: string;
  companyLink?: string;
}
