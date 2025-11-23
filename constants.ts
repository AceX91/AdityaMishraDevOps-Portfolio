import { ExperienceItem, ProjectItem, SkillCategory, Certification, SocialLink, EducationItem } from './types';

export const PERSONAL_INFO = {
  name: "Aditya Mishra",
  title: "Software Engineer | Cloud & DevOps Specialist",
  location: "Kolkata, IN",
  phone: "+91 (706)-147-9277",
  email: "adityamishra16302@gmail.com",
  linkedin: "linkedin.com/in/acex91",
  summary: "Experienced Software Engineer with a strong background in Cloud (AWS), DevOps, and System Optimization. Proven track record at Wipro (Aviva PLC, Intel) in reducing costs by 67%, automating workflows, and optimizing system performance. Skilled in Linux, Python, C++, and Docker."
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "wipro-aviva-1",
    company: "Wipro Limited - Aviva PLC",
    role: "Galahad | AWS, DevOps Engineer",
    period: "2023 – 2025",
    location: "Kolkata, IN",
    description: [
      "Fixed over 30 user-facing features (e.g., secure password policy, smart pricing), merging more than 85 pull requests.",
      "Implemented a pricing context model that drove a 67% reduction in overall cost.",
      "Enhanced operational efficiency by deploying AWS Lambda functions, SQL Scripts and building internal tools."
    ],
    techStack: ["AWS", "Git", "Docker", "Linux", "Jenkins", "Oracle SQL", "Datadog"]
  },
  {
    id: "wipro-aviva-2",
    company: "Wipro Limited - Aviva PLC (Parallel Project)",
    role: "FL-Admin | Linux & Automation Engineer",
    period: "2024 – 2025",
    location: "Hyderabad, IN",
    description: [
      "Developed a Password reset utility based on UNIX and Informix DB which reduced 1200+ monthly password reset requests.",
      "Identified unused servers and implemented auto scale-down using ASG, saving £4600 monthly.",
      "Automated manual tasks using shell scripts and Python which reduced IT work by 40%."
    ],
    techStack: ["Linux", "Informix", "Shell Scripting", "Python", "ServiceNow", "Jira"]
  },
  {
    id: "wipro-intel",
    company: "Wipro Limited - Intel Technologies",
    role: "Performance and Processor Optimization Engineer",
    period: "2021 – 2023",
    location: "Bengaluru, India",
    description: [
      "Engineered an automated performance profiling tool integrating simpleperf and omnilab to generate HTML reports.",
      "Optimized two key System-on-Chip (SoC) image processing translators by 61.3% and 20% respectively.",
      "Contributed 21 merged changelists and 5k+ lines of code to resolve bottlenecks."
    ],
    techStack: ["C++", "Python", "Linux", "Git", "Performance Profiling"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "xv6",
    title: "xv6 OS Enhancements",
    subtitle: "Operating Systems Coursework",
    period: "Mar 2024 - Jun 2024",
    description: [
      "Enhanced process management by implementing system calls for priority adjustment.",
      "Developed a Completely Fair Scheduler (CFS) leading to a 40% improvement in process fairness.",
      "Added support for virtual memory management, page fault handling, and LRU page replacement."
    ],
    techStack: ["C", "xv6", "Operating Systems", "Algorithms"]
  },
  {
    id: "drone",
    title: "Mission Drone",
    subtitle: "Hardware & Software Integration",
    period: "Jul 2020 - Oct 2020",
    description: [
      "Designed and developed a drone using Arduino and Ardupilot.",
      "Presented as a working model in TATA TechFest 2020."
    ],
    techStack: ["C++", "Python", "Arduino", "Ardupilot"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Jharkhand University of Technology",
    degree: "Diploma in Computer Science & Engineering",
    coursework: "Networking, Programming in C, Computer Graphics, Operating Systems, Data Structures, Algorithms, Cyber Security"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages & Scripting",
    items: ["Python", "C/C++", "SQL", "Bash/Shell", "HTML/CSS"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Jenkins", "Ansible", "Terraform", "VMWare"]
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Jira", "ServiceNow", "Datadog", "AppDynamics", "Splunk"]
  },
  {
    category: "Databases & OS",
    items: ["Oracle SQL", "Informix", "Linux (Debian/RHEL)", "Windows"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Oracle Certified Foundations Associate - OCI 2023" },
  { name: "Red Hat Delivery Specialist - Automation" },
  { name: "Wipro Project Management Professional" },
  { name: "The Brainiac Award - Wipro Limited" }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/acex91", iconName: "linkedin" },
  { platform: "Email", url: "mailto:adityamishra16302@gmail.com", iconName: "mail" },
  { platform: "Phone", url: "tel:+917061479277", iconName: "phone" }
];