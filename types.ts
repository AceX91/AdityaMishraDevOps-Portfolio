export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  techStack?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string[];
  techStack: string[];
  link?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer?: string;
  year?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period?: string;
  coursework?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}