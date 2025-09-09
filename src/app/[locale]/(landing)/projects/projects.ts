interface Project {
  category: string;
  description: string;
  featured?: boolean;
  keywords: string[];
  liveDemo?: string;
  name: string;
  sourceCode?: string;
  year?: number;
}

export const PROJECTS: Project[] = [
  {
    category: "Web Development",
    description:
      "A modern, responsive magazine website built with Next.js and Tailwind CSS.",
    featured: true,
    keywords: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
    liveDemo: "https://haloidergisi.com",
    name: "Halo Magazine",
    sourceCode: "https://github.com/AydinTheFirst/haloidergisi",
    year: 2024,
  },
  {
    category: "Developer Tools",
    description:
      "A modern, fast, and user-friendly QR code generator built with React Router 7, ShadCN UI, and Tailwind CSS. Create QR codes for URLs, text, contact information, and Wi-Fi networks with ease.",
    featured: true,
    keywords: ["React Router", "ShadCN UI", "Tailwind CSS", "QR Code", "PWA"],
    liveDemo: "https://qrmaker.aydinthefirst.com",
    name: "QR Maker",
    sourceCode: "https://github.com/AydinTheFirst/qrmaker",
    year: 2024,
  },
  {
    category: "Backend Development",
    description:
      "A modern, production-ready NestJS template with authentication, authorization, and Google OAuth integration.",
    featured: true,
    keywords: ["NestJS", "TypeScript", "Authentication", "OAuth", "Template"],
    name: "NestJS Template",
    sourceCode: "https://github.com/AydinTheFirst/nestjs-template",
    year: 2024,
  },
  {
    category: "Real-time Communication",
    description:
      "Dactoly is a powerful real-time chat application written in TypeScript with modern web technologies.",
    featured: true,
    keywords: ["Real-time", "Chat", "WebSocket", "TypeScript", "Communication"],
    name: "Dactoly Chat",
    sourceCode: "https://github.com/AydinTheFirst/dactoly",
    year: 2023,
  },
  {
    category: "Internationalization",
    description:
      "Internationalization solution for JS applications focusing on scalability. Make your JavaScript/TypeScript application multilingual.",
    keywords: ["i18n", "Internationalization", "TypeScript", "Localization"],
    name: "Intlayer",
    sourceCode: "https://github.com/AydinTheFirst/intlayer",
    year: 2024,
  },
  {
    category: "Developer Tools",
    description:
      "A module for interacting with the Easypanel API, simplifying server management and deployment processes.",
    keywords: ["API", "Easypanel", "Node.js", "SDK", "DevOps"],
    name: "Easypanel.js",
    sourceCode: "https://github.com/AydinTheFirst/easypanel.js",
    year: 2023,
  },
  {
    category: "Mobile Development",
    description:
      "Mobile application for Halo Magazine built with Flutter, providing a seamless reading experience on mobile devices.",
    keywords: ["Flutter", "Mobile App", "Dart", "Cross-platform"],
    name: "Haloide Mobile",
    sourceCode: "https://github.com/AydinTheFirst/haloide-mobile",
    year: 2024,
  },
  {
    category: "Web Development",
    description:
      "Advanced React Router template with modern web development tools and best practices for scalable applications.",
    keywords: ["React Router", "TypeScript", "Template", "Modern Stack"],
    name: "React Router Template Advanced",
    sourceCode: "https://github.com/AydinTheFirst/rr-template-adv",
    year: 2024,
  },
  {
    category: "Web Development",
    description:
      "Modern TanStack Start template with TypeScript, providing a solid foundation for full-stack applications.",
    keywords: ["TanStack Start", "TypeScript", "Full-stack", "Template"],
    name: "TanStack Start Template",
    sourceCode: "https://github.com/AydinTheFirst/tanstack-start-template",
    year: 2024,
  },
  {
    category: "Business Application",
    description:
      "Salon appointment booking system built with modern web technologies for managing customer appointments efficiently.",
    keywords: ["Appointment System", "Business App", "TypeScript", "Booking"],
    name: "Salon Randevu",
    sourceCode: "https://github.com/AydinTheFirst/salon-randevu",
    year: 2023,
  },
  {
    category: "Widget Development",
    description:
      "Chat widget integration for N8N workflows, enabling seamless communication features in automation platforms.",
    keywords: ["N8N", "Chat Widget", "Integration", "Automation"],
    name: "N8N Chat Widget",
    sourceCode: "https://github.com/AydinTheFirst/n8n-chat-widget",
    year: 2024,
  },
  {
    category: "Developer Tools",
    description:
      "Collection of useful code snippets and utilities for web development, covering various programming patterns and solutions.",
    keywords: ["Code Snippets", "Utilities", "TypeScript", "Development"],
    name: "Code Snippets",
    sourceCode: "https://github.com/AydinTheFirst/snippets",
    year: 2023,
  },
  {
    category: "Backend Development",
    description:
      "Express.js server template with modern architecture patterns and best practices for Node.js applications.",
    keywords: ["Express.js", "Node.js", "Backend", "JavaScript"],
    name: "Express Server",
    sourceCode: "https://github.com/AydinTheFirst/express",
    year: 2023,
  },
  {
    category: "IoT & Hardware",
    description:
      "Arduino projects and experiments exploring IoT development, sensor integration, and hardware programming.",
    keywords: ["Arduino", "IoT", "Hardware", "C++", "Sensors"],
    name: "Arduino Playground",
    sourceCode: "https://github.com/AydinTheFirst/arduino-playground",
    year: 2023,
  },
  {
    category: "Robotics",
    description:
      "ROS2 (Robot Operating System) projects and experiments for learning robotics development and autonomous systems.",
    keywords: ["ROS2", "Robotics", "Python", "Autonomous Systems"],
    name: "ROS2 Playground",
    sourceCode: "https://github.com/AydinTheFirst/ros2-playground",
    year: 2023,
  },
];
