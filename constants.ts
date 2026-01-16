
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "EcoSphere AI",
    description: "An advanced ecosystem monitoring platform using satellite imagery and machine learning to predict deforestation patterns.",
    image: "https://picsum.photos/seed/eco/800/600",
    tags: ["React", "TypeScript", "Python", "ML"],
    link: "#"
  },
  {
    id: 2,
    title: "Nebula Finance",
    description: "A decentralized finance dashboard with real-time analytics, yield farming optimization, and multi-wallet support.",
    image: "https://picsum.photos/seed/finance/800/600",
    tags: ["Next.js", "Solidity", "Tailwind", "D3.js"],
    link: "#"
  },
  {
    id: 3,
    title: "Quantum Chat",
    description: "End-to-end encrypted messaging application with focus on speed and privacy using WebSockets and zero-knowledge proofs.",
    image: "https://picsum.photos/seed/chat/800/600",
    tags: ["Node.js", "React", "WebRTC", "PostgreSQL"],
    link: "#"
  },
  {
    id: 4,
    title: "Aura Commerce",
    description: "A luxury lifestyle e-commerce platform with AR product previews and seamless checkout experience.",
    image: "https://picsum.photos/seed/aura/800/600",
    tags: ["React", "Three.js", "Stripe", "Framer"],
    link: "#"
  }
];

export const SKILLS: Skill[] = [
  { name: "React 19", icon: "⚛️", category: "Frontend" },
  { name: "TypeScript", icon: "TS", category: "Frontend" },
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "PostgreSQL", icon: "🐘", category: "Backend" },
  { name: "Docker", icon: "🐳", category: "Tools" },
  { name: "AWS", icon: "☁️", category: "Cloud" },
  { name: "Three.js", icon: "🌌", category: "Frontend" },
  { name: "Framer Motion", icon: "✨", category: "Frontend" }
];

export const SOCIAL_LINKS = {
  email: "noreply@authorize.qzz.io",
  whatsapp: "https://wa.me/9779826048177?text=Hello%20Bharat",
  whatsappIcon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/662px-WhatsApp_icon.png",
  gmailIcon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png"
};
