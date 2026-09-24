
export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  color: string;
  featured?: boolean;
  category?: 'Web Apps' | 'Full Stack' | 'Automation';
  badge?: string;
}

export const projects: Project[] = [
  {
    id: "boardly-visual-workspace",
    title: "Boardly - Visual Workspace for Teams",
    description: "Collaborative visual workspace uniting Kanban boards, infinite canvas planning, and real-time sync.",
    fullDescription: "Boardly is an all-in-one collaborative visual workspace crafted for modern agile, engineering, and product teams. It unites flexible Kanban boards, infinite freeform canvas planning, structured task lists, and real-time multiplayer collaboration in a unified interface. Built with Next.js, React, Tailwind CSS, TypeScript, and Supabase for passwordless authentication, real-time sync, and granular permissions.",
    image: "/uploads/boardly.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Kanban", "Real-Time Sync"],
    link: "https://useboardly.vercel.app/",
    github: "https://github.com/RohanDas28",
    color: "#0ea5e9",
    featured: true,
    category: "Full Stack",
    badge: "Flagship Product"
  },
  {
    id: "productihub",
    title: "ProductiHub",
    description: "Your personal all-in-one productivity dashboard with seamless sync across devices.",
    fullDescription: "ProductiHub is a modern, all-in-one productivity dashboard designed to help you stay organized, focused, and efficient. It combines several essential tools into a single, beautiful interface, with seamless data synchronization across devices using Supabase.",
    image: "https://productihub.vercel.app/logo.png",
    technologies: ["React", "Vite", "TypeScript", "shadcn/ui", "Tailwind CSS", "Supabase", "React Router"],
    link: "https://productihub.vercel.app/",
    github: "https://github.com/RohanDas28/ProductiHub",
    color: "#3b82f6",
    featured: true,
    category: "Full Stack",
    badge: "Popular"
  },
  {
    id: "face-recognition-attendance",
    title: "Face Recognition Attendance System",
    description: "A Python-based attendance system using real-time webcam face detection and recognition with OpenCV.",
    fullDescription: "This project is a face recognition-based attendance system developed in Python. Leveraging OpenCV and other Python modules, the system captures faces via webcam, recognizes registered individuals, and marks their attendance in a CSV file. It features a Tkinter GUI, efficient face detection, and real-time feedback.",
    image: "https://plus.unsplash.com/premium_photo-1700830452915-434970100217?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python", "OpenCV", "Tkinter", "NumPy", "Pandas", "PIL"],
    link: "https://github.com/RohanDas28/Python-Face-Recognition-Attendance-System",
    github: "https://github.com/RohanDas28/Python-Face-Recognition-Attendance-System",
    color: "#10b981",
    featured: true,
    category: "Automation",
    badge: "AI / Vision"
  }
];

