// Constants for the website - centralized configuration
export const SITE_CONFIG = {
  description:
    "Passionate Full-Stack Developer creating modern web applications",
  email: "hello@aydinthefirst.com",
  location: "Turkiye",
  name: "Halil Aydın",
  title: "Full-Stack Developer"
} as const;

export const SOCIAL_LINKS = [
  {
    href: "https://github.com/AydinTheFirst",
    icon: "lucide:github",
    name: "GitHub",
    username: "AydinTheFirst"
  },
  {
    href: "https://linkedin.com/in/aydinthefirst",
    icon: "lucide:linkedin",
    name: "LinkedIn",
    username: "aydinthefirst"
  },
  {
    href: "https://x.com/aydnhalil0",
    icon: "lucide:twitter",
    name: "Twitter",
    username: "aydinthefirst"
  },
  {
    href: "https://instagram.com/aydinthefirst",
    icon: "lucide:instagram",
    name: "Instagram",
    username: "aydinthefirst"
  }
] as const;

export const NAVIGATION_LINKS = [
  {
    href: "/",
    name: "Home"
  },
  {
    href: "/about",
    name: "About"
  },
  {
    href: "/projects",
    name: "Projects"
  },
  {
    href: "/contact",
    name: "Contact"
  }
] as const;

export const SKILLS = [
  {
    icon: "logos:react",
    name: "React"
  },
  {
    icon: "logos:typescript-icon",
    name: "TypeScript"
  },
  {
    icon: "logos:nodejs-icon",
    name: "Node.js"
  },
  {
    icon: "logos:nestjs",
    name: "Nest.js"
  },
  {
    icon: "logos:tailwindcss-icon",
    name: "TailwindCSS"
  },
  {
    icon: "logos:postgresql",
    name: "PostgreSQL"
  },
  {
    icon: "logos:flutter",
    name: "Flutter"
  },
  {
    icon: "logos:docker-icon",
    name: "Docker"
  },
  {
    icon: "logos:aws",
    name: "AWS"
  }
] as const;

export const SERVICES = [
  {
    description: "Full-stack web applications with modern technologies",
    features: [
      "React/Next.js",
      "TypeScript",
      "API Development",
      "Database Design"
    ],
    icon: "lucide:code",
    title: "Web Development"
  },
  {
    description: "Cross-platform mobile applications",
    features: [
      "Flutter",
      "Native APIs",
      "App Store Deployment",
      "Play Store Deployment"
    ],
    icon: "lucide:smartphone",
    title: "Mobile Development"
  },
  {
    description: "Modern and user-friendly interface design",
    features: [
      "Figma",
      "Responsive Design",
      "User Experience",
      "Design Systems"
    ],
    icon: "lucide:palette",
    title: "UI/UX Design"
  }
] as const;
