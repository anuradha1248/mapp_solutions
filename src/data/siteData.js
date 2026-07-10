import { Globe, Smartphone, Code2, Cpu, Palette } from "lucide-react";
import fintechImg from "../assets/fintech_preview.png";
import ecommerceImg from "../assets/ecommerce_preview.png";
import mobileImg from "../assets/mobile_app_preview.png";

export const SERVICES_DATA = [
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    shortDesc: "High-performance, search-optimized responsive web experiences built with modern stacks.",
    longDesc: "We design and build bespoke, high-performance web applications that load in milliseconds, rank highly on search engines, and convert visitors into active customers. By utilizing modern headless architectures and performance-first frameworks, we guarantee robust, scalable storefronts and dashboards.",
    features: [
      "Headless CMS integration (WordPress, Contentful, Strapi)",
      "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
      "High-security configurations & DDoS protection",
      "PWA (Progressive Web App) offline capabilities",
      "Dynamic data binding & real-time sockets",
      "Google Lighthouse optimization (95+ score guaranteed)"
    ],
    techStack: ["Next.js", "React", "Node.js", "GraphQL", "Tailwind CSS", "Vercel"]
  },
  {
    id: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    shortDesc: "Premium cross-platform and native iOS & Android applications delivering fluid UX.",
    longDesc: "We craft high-fidelity, native-feeling mobile applications for iOS and Android. Our development processes prioritize smooth gesture animations, secure localized keychains, offline-first data syncing, and fluid layouts to ensure an unparalleled user experience.",
    features: [
      "Cross-platform efficiency (React Native / Flutter)",
      "Biometric login validation (FaceID / TouchID)",
      "Offline-first sync using SQLite & Realm databases",
      "Real-time notifications & geo-tracking APIs",
      "Secure payment processing via Stripe & Apple Pay",
      "Full app store provisioning & deployment management"
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux"]
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    shortDesc: "High-end product prototypes, user journeys, and wireframes centered around conversion.",
    longDesc: "Great software starts with exceptional design. We build design systems, dynamic prototypes, and intuitive user journeys that reduce user friction and maximize engagement. Every pixel is planned based on user behavior metrics and digital psychological principles.",
    features: [
      "User research, persona mapping & card sorting",
      "Interactive high-fidelity Figma prototypes",
      "Comprehensive digital brand design systems",
      "Micro-animations & custom gesture definitions",
      "Multi-viewport layout validation & testing",
      "A/B conversion rate optimization layouts"
    ],
    techStack: ["Figma", "Adobe CC", "Framer", "Principles", "Sketch"]
  },
  {
    id: "ai-automation",
    icon: Cpu,
    title: "AI Automation",
    shortDesc: "Integrating cutting-edge LLMs and custom machine learning pipelines to automate operations.",
    longDesc: "We help enterprises step into the future by automating manual workflows using Artificial Intelligence. We integrate Large Language Models (LLMs) like GPT-4, build customized retrieval-augmented generation (RAG) pipelines, and deploy automated bots to optimize throughput.",
    features: [
      "LLM fine-tuning & prompt engineering optimization",
      "RAG pipelines for secure internal document searches",
      "Autonomous conversational support agents",
      "Data extraction, cleaning & classification bots",
      "API integrations with OpenAI, Anthropic & Llama",
      "Predictive modeling & machine learning dashboards"
    ],
    techStack: ["Python", "LangChain", "OpenAI API", "Pinecone", "TensorFlow", "Hugging Face"]
  },
  {
    id: "custom-software",
    icon: Code2,
    title: "Custom Software",
    shortDesc: "We build robust, scalable, and secure tailormade software solutions configured for your workflows.",
    longDesc: "When off-the-shelf software doesn't cut it, we engineer tailor-made enterprise systems. From complex database architectures to custom API integrations and workflow automation dashboards, our systems are built from scratch to scale alongside your business growth.",
    features: [
      "Monolithic-to-Microservice API re-architecting",
      "Relational & Document database schema optimizations",
      "Secure HIPAA & GDPR compliance engineering",
      "Real-time telemetric logging & audits",
      "Legacy software refactoring & code migration",
      "Cloud hosting architecture setups (AWS / GCP / Azure)"
    ],
    techStack: ["React", "Go", "PostgreSQL", "Docker", "AWS", "Kubernetes"]
  }
];

export const PROJECTS_DATA = [
  {
    id: "restaurant-tablet",
    title: "Restaurant Tablet Menu",
    category: "Mobile / Tablet",
    image: mobileImg,
    shortDesc: "Seamless interactive tableside ordering & POS integrations.",
    tagline: "High-performance tableside menu ordering systems",
    overview: "A premium interactive tableside ordering system designed for high-end dining restaurants. Patrons can browse high-definition food visual cards, customize orders in real time, split bills, and pay directly. The system coordinates orders directly with the kitchen's Point-of-Sale (POS) printers for instant preparation routing.",
    problem: "Peak hours caused waiter fatigue, order taking delays, and manual transcription errors into the POS. The restaurant suffered from slower table turnover and missed upselling opportunities.",
    solution: "We engineered an offline-resistant React Native application optimized for Android/iOS tablets. The frontend synchronizes inventory instantly and leverages local SQLite caching to remain active during network drops. A Node.js socket gateway coordinates real-time status updates directly between tables and kitchen screens.",
    features: [
      "Dynamic tableside ordering & customization options",
      "Real-time synchronization with kitchen screens via WebSockets",
      "Split-billing payment system with credit card terminal integration",
      "Smart recommendation engine for automated upselling"
    ],
    technologies: ["React Native", "Node.js", "Redis", "SQLite", "WebSockets"],
    timeline: "3 Months (Q1 2026)",
    result: "Reduced average tableside order-to-kitchen transmission time by 65%, increased ticket order values by 18% via the automated upselling engine, and eliminated waiter billing disputes."
  },
  {
    id: "cleaning-app",
    title: "Home Cleaning App",
    category: "Mobile App",
    image: mobileImg,
    shortDesc: "Uber-style booking booking and scheduling mobile app for professional cleaning services.",
    tagline: "On-demand routing & cleaner dispatch dashboard",
    overview: "A dual-app ecosystem consisting of a premium client-facing booking interface and a separate, routing-optimized cleaner dispatch application. Features Google Maps integration, Stripe payment gateways, cleaner dispatching algorithms, and in-app support chat rooms.",
    problem: "Homeowners struggled to book verified cleaning cleaning professionals quickly. Cleaning crews faced route planning inefficiencies, high travel time, and manually intensive calendar planning.",
    solution: "We built a mobile system utilizing Flutter for the cross-platform frontend and Firebase for serverless databases. Cleaners are routed dynamically using a custom geo-distance scheduling algorithm matching bookings based on location, service type, and calendar slots.",
    features: [
      "Instant cleaner dispatcher algorithm matching by location",
      "Real-time cleaner tracking using Google Maps Geolocation",
      "Integrated Stripe wallet & subscription scheduling",
      "In-app chat rooms with clean image-upload support"
    ],
    technologies: ["Flutter", "Firebase", "Stripe API", "Google Maps API", "Node.js"],
    timeline: "4 Months (Q2 2026)",
    result: "Successfully booked over 50k cleanings in the first quarter of release, improved cleaner route efficiency by 30%, and reduced customer checkout latency down to 15 seconds."
  },
  {
    id: "beauty-store",
    title: "Beauty Store Storefront",
    category: "Web / E-Commerce",
    image: ecommerceImg,
    shortDesc: "Headless cosmetic e-commerce platform with sub-second page loads.",
    tagline: "High-end headless commerce platform with 3D preview",
    overview: "A luxurious cosmetic storefront built on headless architecture. Incorporates interactive WebGL 3D views for custom beauty kits, custom product selectors, Shopify store integrations, and custom SSR indexing to optimize for search engine results.",
    problem: "The client's existing template e-commerce layout was slow to load, had poor search engine indexability, and felt too generic for a premium luxury cosmetic label.",
    solution: "We designed a custom Next.js storefront using Shopify's Storefront GraphQL API. Pages are pre-rendered statically using incremental static regeneration (ISR) to load under 0.8 seconds globally. Framer Motion was used to create fluid, elegant product navigation sequences.",
    features: [
      "Headless storefront architecture with sub-second page loads",
      "WebGL interactive beauty kit customization panel",
      "Incremental Static Regeneration (ISR) for instantly indexed listings",
      "Sleek micro-interactions and smooth page transition sequences"
    ],
    technologies: ["Next.js", "React", "Shopify API", "Framer Motion", "Tailwind CSS"],
    timeline: "2.5 Months (Q3 2026)",
    result: "Achieved a 98/100 performance score on Google Lighthouse, boosted checkout conversion rates by 26%, and grew organic search visibility by 45% in 60 days."
  },
  {
    id: "hospital-management",
    title: "Hospital Management System",
    category: "Custom Software",
    image: fintechImg,
    shortDesc: "Secure, HIPAA-compliant patient recording & staff scheduling platform.",
    tagline: "HIPAA-compliant EHR & scheduling telemetry dashboard",
    overview: "An enterprise-grade patient charting, clinic scheduling, and diagnostic telemetry logging system built for hospital systems. The system encrypts database records, audits user accesses, and streamlines scheduling for medical professionals.",
    problem: "Medical staff spent hours sorting through patient charts across fragmented desktop databases, causing check-in bottlenecks, physician calendar clashes, and high administrative overhead.",
    solution: "We engineered a secure Web dashboard in React. The backend is written in Go to maximize concurrency throughput, writing encrypted health records directly to a PostgreSQL database. The application undergoes strict security auditing logs to comply with health privacy regulations.",
    features: [
      "HIPAA-compliant patient charting database with AES-256 encryption",
      "Automated real-time physician scheduling to prevent double-bookings",
      "Telemetric diagnostic reporting with PDF exports",
      "SMS & Email appointment notifications to minimize customer no-shows"
    ],
    technologies: ["React", "Go", "PostgreSQL", "Docker", "AWS", "AES-256"],
    timeline: "6 Months (Q4 2026)",
    result: "Reduced patient check-in bottlenecks by 40%, eliminated doctor doctor scheduling clashes entirely, and passed strict HIPAA audit requirements on the initial certification run."
  }
];
