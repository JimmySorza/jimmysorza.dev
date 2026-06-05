import {
  BriefcaseBusiness,
  Code2,
  Database,
  Mail,
  MessageSquare,
  PanelsTopLeft,
  Smartphone,
  Users,
  Wrench,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  icon: LucideIcon
}

export interface Highlight {
  metric: string
  label: string
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  description: string
  bullets: string[]
}

export interface Service {
  title: string
  description: string
  icon: LucideIcon
}

export interface Project {
  title: string
  status: string
  description: string
  problem?: string
  solution?: string
  liveUrl?: string
  repositoryUrl?: string
  stack: string[]
  featured?: boolean
}

export interface TechnologyGroup {
  title: string
  items: string[]
}

export interface PortfolioData {
  name: string
  fullName: string
  role: string
  location: string
  email: string
  linkedIn: string
  github: string
  intro: string
  heroSupport: string
  aboutTitle: string
  about: string[]
  contactTitle: string
  contactText: string
  nav: NavItem[]
  socials: SocialLink[]
  highlights: Highlight[]
  experience: ExperienceItem[]
  services: Service[]
  projects: Project[]
  technologies: TechnologyGroup[]
  entrepreneurial: {
    title: string
    description: string
    points: string[]
  }
}

export const portfolio: PortfolioData = {
  name: 'Jimmy Sorza',
  fullName: 'Jimmy Esteban Sorza',
  role: 'Full-Stack Developer focused on React, React Native, and business software.',
  location: 'Colombia / Remote',
  email: 'hello@jimmysorza.dev',
  linkedIn: 'https://linkedin.com/in/jimmysorza',
  github: 'https://github.com/jimmysorza',
  intro:
    '7+ years of experience building products, mobile apps, and business software for companies in the United States, Mexico, and Colombia.',
  heroSupport:
    'I combine frontend engineering, mobile development, technical leadership, IT management, and business ownership experience to build practical software that solves real operational problems.',
  aboutTitle: 'Building software where product detail meets business reality.',
  about: [
    "I'm a Full-Stack Developer focused on frontend development, mobile applications, and business software.",
    "Over the last 7+ years, I've worked with companies in the United States, Mexico, and Colombia, building customer-facing products, internal platforms, mobile apps, and long-term software solutions.",
    'My background combines software development, technical leadership, IT management, and business ownership experience. This allows me to understand both the technical side of a project and the operational needs behind it.',
    'I focus on building reliable, maintainable, and practical solutions that help businesses improve workflows, serve their users better, and turn ideas into working software.',
  ],
  contactTitle: "Let's build something useful together.",
  contactText:
    "Looking for a developer to build, improve, or maintain your web or mobile application? Let's talk.",
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ],
  socials: [
    { label: 'Email', href: 'mailto:hello@jimmysorza.dev', icon: Mail },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/jimmysorza', icon: BriefcaseBusiness },
    { label: 'GitHub', href: 'https://github.com/jimmysorza', icon: Code2 },
  ],
  highlights: [
    { metric: '7+ years', label: 'Software development experience' },
    { metric: '3 countries', label: 'Worked with companies in the US, Mexico, and Colombia' },
    { metric: 'React + React Native', label: 'Web and mobile product development' },
    { metric: 'Tech Lead + IT Manager', label: 'Technical and operational leadership' },
    { metric: 'Business owner background', label: 'Firsthand understanding of small business operations' },
  ],
  experience: [
    {
      company: 'Sorza Tools',
      role: 'Software Developer',
      period: '2024 - Present',
      location: 'Colombia',
      description: 'Business software, ERP workflows, and customer communication integrations.',
      bullets: [
        'Developing business software focused on inventory management, workshop operations, and electronic invoicing.',
        'Leading the development of a WhatsApp integration module for FacturaScripts.',
        'Building integrations that connect ERP workflows with customer communication channels.',
      ],
    },
    {
      company: 'Fullmind',
      role: 'Frontend Developer',
      period: 'Sep 2022 - May 2025',
      location: 'New York (Remote)',
      description: 'React and TypeScript platform work for online education workflows.',
      bullets: [
        'Maintained and improved a React/TypeScript educational platform used in the U.S. K-12 sector.',
        'Built and supported user-facing features for online learning workflows.',
        'Collaborated with distributed teams across product, design, backend, and QA.',
        'Worked on production support, bug fixing, and feature delivery in an agile environment.',
      ],
    },
    {
      company: 'Moons',
      role: 'Full-Stack Developer',
      period: 'Jan 2020 - Mar 2022',
      location: 'Mexico City',
      description: 'Web and mobile product development for customer-facing workflows.',
      bullets: [
        'Developed and maintained web applications with React.',
        'Built mobile interfaces using React Native for customer-facing workflows.',
        'Implemented UI features connected to backend services and internal workflows.',
        'Collaborated with product and design teams to improve user experience and usability.',
      ],
    },
    {
      company: 'iVoy',
      role: 'Full-Stack Developer / Tech Lead',
      period: 'May 2019 - Dec 2019',
      location: 'Mexico City',
      description: 'Frontend leadership for logistics and delivery applications.',
      bullets: [
        'Served as Tech Lead, coordinating frontend development and guiding implementation decisions.',
        'Maintained and extended an AngularJS-based application while introducing React for new modules.',
        'Built frontend features for logistics and delivery web applications.',
        'Integrated frontend views with APIs and improved application usability.',
      ],
    },
    {
      company: 'Imaginamos',
      role: 'Junior Software Developer',
      period: 'Aug 2018 - May 2019',
      location: 'Bogota',
      description: 'Web, mobile, admin, backend, and cloud support work.',
      bullets: [
        'Built web and mobile applications using ReactJS and React Native.',
        'Worked with backend services using LoopBack.',
        'Created admin panels with react-admin.',
        'Managed servers and Ubuntu instances on AWS.',
      ],
    },
    {
      company: 'Imaginamos',
      role: 'Apprentice',
      period: 'Feb 2018 - Jul 2018',
      location: 'Bogota',
      description: 'Foundation in modern web, mobile, backend, and cloud development.',
      bullets: [
        'Learned and practiced ReactJS, React Native, LoopBack, server management, and AWS Ubuntu instances.',
        'Supported development tasks while building a foundation in modern web and mobile development.',
      ],
    },
    {
      company: 'Comercializadora Sorza S.A.S.',
      role: 'IT Manager',
      period: 'Jan 2016 - Dec 2017',
      location: 'Colombia',
      description: 'Technology operations and internal process support for a family-owned business.',
      bullets: [
        'Managed technology operations for a family-owned business.',
        'Administered Google Workspace and supported digital tools, business systems, and internal processes.',
        'Helped systematize sales and repair processes through digital tools and technical support.',
      ],
    },
    {
      company: 'Sorza Print + Design',
      role: 'Owner / General Manager / Designer',
      period: 'Aug 2009 - Jan 2016',
      location: 'Colombia',
      description: 'Founder and operator of a digital printing and advertising business.',
      bullets: [
        'Founded and managed a digital printing and advertising business for more than six years.',
        'Handled design, printing, sales, finance, billing, and customer service.',
        'Managed daily operations and client relationships.',
      ],
    },
  ],
  services: [
    {
      title: 'Custom Web Applications',
      description: 'Business-focused applications built from the ground up.',
      icon: PanelsTopLeft,
    },
    {
      title: 'React Development',
      description: 'Modern frontend development with React, TypeScript, and JavaScript.',
      icon: Code2,
    },
    {
      title: 'Mobile App Development',
      description:
        'Cross-platform React Native applications with thoughtful UX and production-minded architecture.',
      icon: Smartphone,
    },
    {
      title: 'Business Software',
      description:
        'Internal tools, dashboards, admin panels, operational systems, and process management platforms.',
      icon: Database,
    },
    {
      title: 'Integrations & Automation',
      description:
        'Connecting systems, APIs, ERP workflows, and customer communication channels.',
      icon: Wrench,
    },
    {
      title: 'Maintenance & Support',
      description: 'Improving, debugging, and maintaining existing web and mobile applications.',
      icon: Users,
    },
  ],
  projects: [
    {
      title: 'WhatsApp Integration Module for FacturaScripts',
      status: 'In Development',
      description:
        'A business messaging module that connects FacturaScripts workflows with WhatsApp communication for faster customer operations.',
      problem:
        'Businesses using FacturaScripts need a way to communicate with customers directly from their ERP workflows.',
      solution:
        'Development of a WhatsApp integration module that allows users to send and manage customer communications from within FacturaScripts.',
      stack: ['PHP', 'MySQL', 'WhatsApp APIs', 'FacturaScripts Plugin Architecture', 'Business Software'],
      featured: true,
    },
    {
      title: 'Business Dashboard Demo',
      status: 'Planned',
      description: 'A modern dashboard for managing customers, orders, inventory, and business operations.',
      stack: ['React', 'TypeScript', 'Tailwind CSS', 'Business Software'],
    },
    {
      title: 'Personal Portfolio Website',
      status: 'Live',
      description:
        'This website was built using React, TypeScript, Tailwind CSS, Framer Motion, and Vercel.',
      repositoryUrl: 'https://github.com/JimmySorza/jimmysorza.dev',
      stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    },
  ],
  technologies: [
    {
      title: 'Frontend',
      items: ['React', 'TypeScript', 'JavaScript', 'React Native', 'HTML', 'CSS', 'Tailwind CSS', 'AngularJS'],
    },
    {
      title: 'Backend & APIs',
      items: ['Node.js', 'LoopBack', 'REST APIs', 'PHP'],
    },
    {
      title: 'Databases',
      items: ['MySQL', 'PostgreSQL'],
    },
    {
      title: 'Tools & Platforms',
      items: ['Git', 'GitHub', 'Vercel', 'AWS', 'react-admin', 'Google Workspace'],
    },
  ],
  entrepreneurial: {
    title: 'Entrepreneurial engineering',
    description:
      'Before becoming a full-time software developer, I founded and managed a digital printing and advertising business for more than six years.',
    points: [
      'That experience gave me a practical understanding of sales, operations, customer service, billing, finance, and the daily challenges small businesses face.',
      'Today, I bring that business perspective into software development, building solutions that are not only technically solid but also useful, practical, and aligned with real operational needs.',
    ],
  },
}

export const sectionIntro = {
  about: 'Profile',
  highlights: 'Snapshot',
  experience: 'Experience',
  services: 'Services',
  projects: 'Selected work',
  technologies: 'Stack',
  entrepreneurial: 'Perspective',
  contact: 'Contact',
} as const

export const iconMap = {
  briefcase: BriefcaseBusiness,
  message: MessageSquare,
  panels: PanelsTopLeft,
}
