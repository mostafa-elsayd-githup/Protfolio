import type { Project } from "../Types/projectDataType";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "MoStore - E-commerce Web App",
    description: "A modern online store with authentication, cart & wishlist, and real-time search.",
    image: "/MoStore.png",
    techStack: ["React", "TypeScript", "TanStack Query", "Supabase", "zustand"],
    liveUrl: "https://mo-store-three.vercel.app/",
    githubUrl: "https://github.com/mostafa-elsayd-githup/MoStore.git",
    featured: true,
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description: "A clean weather app with real-time forecast and beautiful UI.",
    image: "/WeatherApp.png", 
    techStack: ["React", "Tailwind CSS", "REST API"],
    liveUrl: "https://weather-dashboard-five-steel.vercel.app/",
    githubUrl: "https://github.com/mostafa-elsayd-githup/weather-dashboard.git",
    featured: false,
  },
];