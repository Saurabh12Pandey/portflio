import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaMobileAlt, FaLaptopCode, FaServer, FaShoppingBag, FaPaintBrush, FaTools } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "Experience",
    path: "/experience",
  },
  {
    name: "Contact",
    path: "/contact",
  },
] as const;

export const personalData = {
  name: "Saurabh Pandey",
  role: "Full-Stack Web & Mobile App Developer",
  tagline: "Engineering Custom Websites & Native-Grade Mobile Apps for Global Clients",
  bio: "Hello, I'm Saurabh Pandey. I'm a full-stack developer and freelance specialist building custom websites and mobile applications tailored to clients' exact requirements. I partner with founders, businesses, and agencies globally to turn ideas into scalable, high-converting digital realities.",
  location: "Remote / Worldwide",
  experienceYears: "4+",
  projectsCompleted: "15+",
  satisfiedClients: "100%",
  cvUrl: "https://drive.google.com/file/d/1bvnHEr_O_6YRjqN-4qK7w_gR4Ive_oHE/view?usp=drivesdk",
  email: "saurabh.pandeyy24@gmail.com",
  phone: "+91 7458086248",
  linkedin: "https://www.linkedin.com/in/saurabh-pandey-911514203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  facebook: "https://www.facebook.com/saurabh.pandey.780389",
  whatsapp: "https://wa.me/917458086248?text=Hi%20Saurabh%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!",
};

export const clientChannels = [
  {
    platform: "LinkedIn",
    handle: "SAURABH PANDEY",
    role: "Professional B2B & Enterprise Partnerships",
    description: "My primary network for collaborating with tech founders, CTOs, and business owners looking for robust web applications and scalable engineering.",
    url: "https://www.linkedin.com/in/saurabh-pandey-911514203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    badge: "Primary Network",
    color: "from-blue-600 to-cyan-600",
  },
  {
    platform: "Facebook",
    handle: "saurabh.pandey.780389",
    role: "Business Communities & Client Outreach",
    description: "Active across entrepreneurial groups, business forums, and international client referral networks to help companies digitize their services.",
    url: "https://www.facebook.com/saurabh.pandey.780389",
    badge: "Direct Contact",
    color: "from-blue-700 to-indigo-600",
  },
];

export const projectsData = [
  {
    id: "levelup-car-rental",
    title: "Level Up Car Rental Dubai",
    subtitle: "Luxury & Exotic Supercar Rental Platform",
    client: "Level Up Car Rental (Dubai, UAE)",
    liveUrl: "https://levelupcarrent.com/",
    category: "Web Application / Luxury Rental",
    description:
      "Designed and engineered a high-performance luxury car rental platform for Dubai's premier exotic supercar fleet (Ferrari, Lamborghini, Rolls-Royce, Bentley, Porsche, McLaren). Features a 0-deposit booking workflow, real-time fleet filtering by brand and vehicle type, multilingual internationalization (7 languages), instant WhatsApp booking conversion, and ultra-fast Next.js architecture.",
    detailedCaseStudy: {
      problem:
        "The client needed an ultra-premium digital storefront that matched Dubai's luxury supercar standards, loaded 4K vehicle assets without delay, accommodated global tourists in multiple languages, and streamlined instant WhatsApp reservations without friction.",
      solution:
        "Engineered an ultra-fast Next.js application with Tailwind CSS, custom dark-and-gold luxury aesthetic, optimized CloudFront CDN image delivery, real-time dynamic fleet filters, and multi-language routing.",
      features: [
        "Zero-deposit supercar booking and instant reservation workflows",
        "Multilingual platform supporting English, Arabic, Russian, Chinese, French, German, and Spanish",
        "Dynamic fleet filtering across SUVs, Sports, Luxury, and Supercar categories",
        "Instant WhatsApp lead generation with pre-populated vehicle and rental date details",
        "Comprehensive SEO and schema markup for VIP and exotic car rental search visibility in Dubai",
      ],
      impact:
        "Significantly boosted direct rental inquiries, reduced bounce rate with sub-second page loads, and simplified international tourist bookings.",
    },
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "CloudFront CDN", "Multilingual i18n", "WhatsApp API", "SEO Optimization"],
    imageUrl: "/projects/levelup.jpg",
  },
  {
    id: "placely",
    title: "Placely",
    subtitle: "AI-Powered College Soccer Recruiting Platform",
    client: "Placely (Canada & USA)",
    liveUrl: "https://placely.ca/",
    category: "AI SaaS / EdTech Platform",
    description:
      "Developed an AI-driven college soccer recruiting application helping student-athletes discover institutions across NCAA, NAIA, and Canadian U Sports that fit their athletic caliber, academic eligibility, and budget. Features an interactive college match discovery radar, eligibility checker, and player recruitment pipeline.",
    detailedCaseStudy: {
      problem:
        "Student-athletes and their families often struggle to navigate the complex landscape of college soccer recruitment, NCAA/NAIA academic eligibility rules, and budget constraints across hundreds of universities.",
      solution:
        "Built an intelligent matchmaking dashboard that benchmarks athlete metrics (GPA, test scores, athletic profile) against program historical data, displaying multi-dimensional fit radars and actionable recruitment steps.",
      features: [
        "Multi-dimensional college match discovery radar (Academic, Athletic, Budget, Location)",
        "Automated eligibility evaluation against NCAA Division 1, 2, 3 and NAIA criteria",
        "Interactive player profile builder and recruitment progress pipeline",
        "Scout and coach discovery workflow with personalized recommendations",
      ],
      impact:
        "Democratized soccer recruiting for hundreds of aspiring student-athletes, drastically cutting down the manual search time for colleges.",
    },
    tags: ["React", "TypeScript", "AI Algorithm", "Tailwind CSS", "REST APIs", "Data Visualization", "Framer Motion"],
    imageUrl: "/projects/placely.jpg",
  },
  {
    id: "techniplast-india",
    title: "TechniPlast India",
    subtitle: "Perfume Bottle Caps & Packaging Manufacturer Portal",
    client: "TechniPlast India (Mumbai, India)",
    liveUrl: "https://techniplastindia.com/",
    category: "B2B Manufacturing & Industrial Web Portal",
    description:
      "Designed and built an elegant digital presence for India's leading manufacturer of bespoke perfume bottle caps, closures, and luxury packaging. Showcases precision injection moulding, custom tooling, and product collections with an automated RFQ quotation request workflow.",
    detailedCaseStudy: {
      problem:
        "A luxury B2B packaging manufacturer required an international digital catalog to attract global fragrance brands, showcase precision engineering, and capture high-intent inquiries from perfume creators worldwide.",
      solution:
        "Created a sleek, performance-focused React/Vite portal highlighting premium product series (Zenith, Obsidian, Amethyst), custom tooling capabilities, factory infrastructure, and instant RFQ submission.",
      features: [
        "Curated industrial product catalog with filtering by closure type, material, and neck size",
        "Custom tooling and precision injection moulding technical showcase",
        "High-intent RFQ (Request for Quote) system with automated inquiry routing",
        "Mobile-optimized responsive design with static SEO injections for global search ranking",
      ],
      impact:
        "Expanded international client inquiries from luxury fragrance brands across Europe, the Middle East, and Asia.",
    },
    tags: ["React", "Vite", "Tailwind CSS", "Modern B2B UI/UX", "SEO Optimization", "Responsive Architecture"],
    imageUrl: "/projects/techniplast.jpg",
  },
  {
    id: "botana-beauty",
    title: "Botana Beauty Products",
    subtitle: "Organic Skincare & Cosmetics E-Commerce Platform",
    client: "Botana (India)",
    liveUrl: "https://botana.co.in/",
    category: "D2C E-Commerce",
    description:
      "Engineered a botanical beauty and skincare e-commerce website designed to convert social media referral traffic (Instagram, Facebook) into loyal customers. Features clean botanical branding, product benefits breakdown, interactive shopping cart, and secure checkout.",
    detailedCaseStudy: {
      problem:
        "The brand needed an aesthetic, trustworthy e-commerce storefront that would seamlessly convert traffic arriving from Instagram and Facebook ad campaigns into purchases with zero friction.",
      solution:
        "Built a clean, mobile-first e-commerce web app emphasizing organic ingredients, clinical benefits, transparent reviews, and a rapid 1-click cart and checkout flow.",
      features: [
        "Aesthetic skincare product catalog with ingredient transparency and customer ratings",
        "Frictionless mobile shopping cart and instant checkout pipeline",
        "Social-first design optimized for Instagram and Facebook referral shoppers",
        "Secure payment gateway integration and automated order confirmation",
      ],
      impact:
        "Significantly improved mobile conversion rates and reduced cart abandonment for social media shoppers.",
    },
    tags: ["React", "Next.js", "Tailwind CSS", "E-Commerce", "Payment Gateway", "Mobile-First UX", "Conversion Optimization"],
    imageUrl: "/projects/botana.jpg",
  },
] as const;

export const servicesData = [
  {
    id: "website-development",
    title: "Custom Website Development",
    shortDesc: "High-performance websites, corporate portals, and web applications built with Next.js, React, and TypeScript.",
    description:
      "From high-converting landing pages to complex corporate websites and customer portals, I engineer fast, responsive, and SEO-optimized web experiences tailored precisely to your brand and business objectives.",
    icon: FaLaptopCode,
    features: [
      "Custom UI/UX Implementation with Tailwind CSS",
      "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
      "Speed Optimization & Core Web Vitals (90+ Lighthouse Score)",
      "Search Engine Optimization (SEO) & Schema Architecture",
      "Interactive Animations with Framer Motion",
      "Headless CMS & Dynamic Content Integrations",
    ],
    deliverables: ["Fully responsive website", "Source code & repository", "Deployment to Vercel/Cloud", "Free 30-day post-launch support"],
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    shortDesc: "Cross-platform iOS and Android mobile applications built according to client requirements with fluid performance.",
    description:
      "I create cross-platform mobile apps that look, feel, and perform like native applications. Built with modern frameworks (React Native, PWA), ensuring your users enjoy an intuitive, responsive experience across all devices.",
    icon: FaMobileAlt,
    features: [
      "Cross-Platform iOS & Android Codebase",
      "Native Device Hardware Integration (Camera, Geolocation, Storage)",
      "Smooth Gesture Animations & Touch Feedback",
      "Offline Storage, Syncing & Push Notifications",
      "App Store & Google Play Store Submission Preparation",
      "Progressive Web Apps (PWA) with Add to Home Screen support",
    ],
    deliverables: ["Cross-platform app build", "Store submission package", "API integration layer", "Complete documentation"],
  },
  {
    id: "fullstack-saas",
    title: "Full-Stack Web Apps & SaaS",
    shortDesc: "End-to-end web applications with secure authentication, scalable databases, and custom business logic.",
    description:
      "Transforming complex workflows into seamless digital software. I handle the entire lifecycle: database modeling, REST/GraphQL APIs, secure authentication, role-based access control, and intuitive management dashboards.",
    icon: FaServer,
    features: [
      "Robust RESTful & GraphQL API Architecture",
      "Database Modeling with MongoDB, PostgreSQL, and Prisma",
      "User Authentication & Authorization (NextAuth, JWT, OAuth)",
      "Interactive Admin Dashboards & Analytics",
      "Third-Party Service Integrations (Stripe, WhatsApp, Twilio)",
      "Scalable Cloud Deployment (AWS, Vercel, Docker)",
    ],
    deliverables: ["Full-stack application", "Secured API endpoints", "Database schema & migrations", "Admin control panel"],
  },
  {
    id: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    shortDesc: "High-converting online storefronts with frictionless shopping carts, secure payments, and inventory management.",
    description:
      "Empowering direct-to-consumer and B2B brands to sell online effortlessly. I develop custom e-commerce experiences engineered to convert traffic from Instagram, Facebook, and Google Ads into paying customers.",
    icon: FaShoppingBag,
    features: [
      "Custom Product Catalogs & Filter Systems",
      "Smooth Shopping Cart & Fast One-Page Checkout",
      "Payment Gateway Integration (Stripe, Razorpay, PayPal)",
      "Automated Order Confirmations & WhatsApp Alerts",
      "Discount Engines, Coupon Codes & Promo Logic",
      "Mobile-First Shopping Experience & Conversion Optimization",
    ],
    deliverables: ["Complete e-commerce store", "Payment gateway setup", "Inventory management view", "Order notification system"],
  },
  {
    id: "uiux-design",
    title: "UI/UX Design & Prototyping",
    shortDesc: "Human-centric, modern interfaces designed to captivate visitors and deliver effortless user journeys.",
    description:
      "Great software begins with thoughtful design. I create modern visual systems with curated color palettes, elegant typography, glassmorphism, and micro-interactions that elevate brand perception.",
    icon: FaPaintBrush,
    features: [
      "Responsive Desktop, Tablet & Mobile Wireframes",
      "Design Systems & Reusable Component Libraries",
      "Interactive Prototypes & User Flow Diagrams",
      "Curated Typography & Dark/Light Mode Themes",
      "Accessibility & Usability Best Practices",
      "Conversion Rate Optimization (CRO) Focused Layouts",
    ],
    deliverables: ["Interactive prototypes", "Design tokens & style guide", "Figma/Tailwind component specs"],
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Performance Tuning",
    shortDesc: "Continuous speed optimization, security updates, feature enhancements, and cloud monitoring.",
    description:
      "Your website and app need continuous care to stay fast, secure, and competitive. I provide ongoing maintenance, code refactoring, cloud server management, and feature enhancements.",
    icon: FaTools,
    features: [
      "Page Speed & Core Web Vitals Optimization",
      "Regular Security Patches & Dependency Upgrades",
      "Feature Expansions & Client Requirement Updates",
      "Cloud Server & Domain/DNS Monitoring",
      "Database Backups & Performance Tuning",
      "Priority Bug Fixes & Technical Troubleshooting",
    ],
    deliverables: ["Monthly performance reports", "Regular backups & updates", "Guaranteed response turnaround"],
  },
] as const;

export const skillsCategories = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, pixel-perfect, and animated user interfaces.",
    skills: ["React.js", "Next.js (App Router)", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & Semantic SEO", "CSS3 / Modern Layouts", "Framer Motion", "Redux & Context API"],
  },
  {
    title: "Mobile App Development",
    description: "Creating fluid mobile experiences across iOS and Android.",
    skills: ["React Native", "Progressive Web Apps (PWA)", "Mobile-First Responsive Design", "Gesture Handling", "Touch Interactions", "Offline Data Caching"],
  },
  {
    title: "Backend & Cloud Architecture",
    description: "Engineering secure APIs, server logic, and cloud deployments.",
    skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Next.js Server Actions", "Python", "Authentication (JWT / NextAuth)", "Vercel & AWS Deployment"],
  },
  {
    title: "Databases & ORM",
    description: "Structuring scalable, high-integrity data storage systems.",
    skills: ["MongoDB", "PostgreSQL", "Prisma ORM", "SQL & Relational Modeling", "Database Indexing & Queries"],
  },
  {
    title: "Dev Tools & Workflow",
    description: "Modern developer tooling ensuring reliability and agile delivery.",
    skills: ["Git & GitHub", "Docker Basics", "Postman API Testing", "VS Code", "npm & yarn", "Chrome DevTools & Audits"],
  },
  {
    title: "Client Acquisition & Delivery",
    description: "Connecting with clients and executing on their unique vision.",
    skills: ["Client Requirements Scoping", "LinkedIn B2B Outreach", "Facebook Community Networking", "Agile Sprints & Milestones", "Transparent Communication"],
  },
] as const;

export const skillsData = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "React Native (Mobile)",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "RESTful APIs",
  "GraphQL",
  "Framer Motion",
  "Git & GitHub",
  "HTML5 & CSS3",
  "Redux",
  "Python",
  "Vercel & Cloud",
  "SEO & Web Vitals",
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer & Freelance Consultant",
    location: "Remote / Worldwide (Dubai, Canada, India)",
    description:
      "Partnering with founders and businesses globally to develop custom websites and mobile applications based on their exact requirements. Successfully delivered high-impact platforms including Level Up Car Rental Dubai (supercar rental platform with multilingual booking), Placely (AI college soccer recruiting platform), TechniPlast India (industrial luxury packaging), and Botana (botanical e-commerce). Actively acquire and collaborate with clients via LinkedIn and Facebook.",
    icon: React.createElement(FaReact),
    date: "2021 - Present",
  },
  {
    title: "Front-End Developer & UI Specialist",
    location: "Remote",
    description:
      "Developed interactive, responsive, and performance-optimized user interfaces for startups and commercial clients. Translated complex Figma designs into clean React and Next.js code, integrated REST APIs, and improved mobile user retention through fast-loading architectures.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Computer Science & Web Engineering Bootcamp",
    location: "Professional Certification",
    description:
      "Graduated from an intensive full-stack software development curriculum. Mastered data structures, algorithms, modern JavaScript/TypeScript, relational & NoSQL databases, and full-stack application lifecycle management.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2019",
  },
] as const;

export const workflowSteps = [
  {
    step: "01",
    title: "Discovery & Requirements",
    description:
      "We connect via LinkedIn, Facebook, or WhatsApp to thoroughly understand your business goals, target audience, technical requirements, and project scope.",
  },
  {
    step: "02",
    title: "Architecture & Design",
    description:
      "I map out the technical stack, database schema, and high-fidelity wireframes/prototypes to ensure alignment before writing a single line of production code.",
  },
  {
    step: "03",
    title: "Agile Development",
    description:
      "Building your website or mobile app in rapid, testable milestones. You receive regular live preview links and video walk-throughs to verify progress.",
  },
  {
    step: "04",
    title: "Testing & Optimization",
    description:
      "Rigorous cross-browser, cross-device testing, SEO optimization, performance auditing, and responsiveness checks across iOS, Android, and desktop.",
  },
  {
    step: "05",
    title: "Launch & Ongoing Support",
    description:
      "Seamless production deployment to your domain and cloud infrastructure, accompanied by documentation and post-launch maintenance.",
  },
];
