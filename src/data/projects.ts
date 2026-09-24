
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
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Kanban", "Real-Time Sync", "Framer Motion"],
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
    description: "Your personal all-in-one productivity dashboard with sync across devices.",
    fullDescription: "ProductiHub is a modern, all-in-one productivity dashboard designed to help you stay organized, focused, and efficient. It combines several essential tools into a single, beautiful interface, with seamless data synchronization across devices using Supabase.",
    image: "https://productihub.vercel.app/logo.png",
    technologies: ["React", "Vite", "TypeScript", "shadcn/ui", "Tailwind CSS", "@tanstack/react-query", "Framer Motion", "React Hook Form", "tldraw", "Supabase", "React Router"],
    link: "https://productihub.vercel.app/",
    github: "https://github.com/RohanDas28/ProductiHub",
    color: "#3b82f6",
    featured: true,
    category: "Full Stack",
    badge: "Popular"
  },
  {
    id: "passop-password-manager",
    title: "PassOp - Password Manager",
    description: "A secure full-stack password manager with encrypted storage and sleek UI.",
    fullDescription: "PassOp is a secure and user-friendly full-stack password manager application. Built with React, Express, and MongoDB, it allows users to store, manage, and delete passwords with ease. The app features real-time interactions, such as adding new entries, toggling visibility, and seamless backend communication via API. Styled with Tailwind CSS and powered by Vite for fast frontend performance.",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Express", "MongoDB", "Vite", "Tailwind CSS", "Axios"],
    link: "https://pass-op.vercel.app",
    github: "https://github.com/RohanDas28/PassOp",
    color: "#2ecc71",
    featured: true,
    category: "Full Stack"
  },
  {
    id: "typerop-speed-test",
    title: "TyperOp - Typing Speed Test",
    description: "A web app to test and improve typing speed with real-time WPM tracking.",
    fullDescription: "TyperOp is a lightweight and interactive typing speed test application built with modern web technologies. It generates random paragraphs for each session, calculates real-time words per minute (WPM), and offers an intuitive interface to enhance your typing skills with instant feedback and fresh content.",
    image: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "JavaScript", "Vite", "CSS3", "HTML5"],
    link: "https://typer-op.vercel.app",
    github: "https://github.com/RohanDas28/TyperOp",
    color: "#8e44ad",
    featured: true,
    category: "Web Apps"
  },
  {
    id: "face-recognition-attendance",
    title: "Face Recognition Attendance System",
    description: "A Python-based attendance system using real-time face recognition with OpenCV.",
    fullDescription: "This project is a face recognition-based attendance system developed in Python. Leveraging OpenCV and other Python modules, the system captures faces via webcam, recognizes registered individuals, and marks their attendance in a CSV file. It features a Tkinter GUI, efficient face detection, and real-time feedback.",
    image: "https://plus.unsplash.com/premium_photo-1700830452915-434970100217?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python", "OpenCV", "Tkinter", "NumPy", "Pandas", "PIL"],
    link: "https://github.com/RohanDas28/Python-Face-Recognition-Attendance-System",
    github: "https://github.com/RohanDas28/Python-Face-Recognition-Attendance-System",
    color: "#10b981",
    featured: true,
    category: "Automation"
  },  
  {
    id: "auto-facebook-login",
    title: "Automatic Facebook Login",
    description: "A Python script that automates Facebook login using Selenium WebDriver.",
    fullDescription: "This project is a Python automation script designed to log in to Facebook automatically using Selenium. It leverages WebDriver Manager for dynamic driver management and Colorify for enhanced console output. Ideal for demonstrating browser automation techniques, this tool showcases how Python can simulate human interactions with web pages.",
    image: "https://images.unsplash.com/photo-1600859343572-566b5ee12973?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python", "Selenium", "WebDriverManager", "Colorify"],
    link: "https://github.com/RohanDas28/Automatic-Facebook-Login-With-Python",
    github: "https://github.com/RohanDas28/Automatic-Facebook-Login-With-Python",
    color: "#3b5998",
    featured: true,
    category: "Automation"
  },
  {
    id: "linkop-social-links",
    title: "LinkOP - Social Links Page",
    description: "A minimal React-based page showcasing social media links with smooth animations.",
    fullDescription: "LinkOP is a simple yet stylish web page that displays your social media links with animated transitions and interactive elements. Built with React, it features custom animations using animate.css and an animated cursor for added flair. Easily customizable and deployable, LinkOP is perfect for online portfolios or digital business cards.",
    image: "https://plus.unsplash.com/premium_photo-1683288662019-c92caea8276d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "reacticons", "reactanimatedcursor", "animate.css"],
    link: "https://link-op.vercel.app/",
    github: "https://github.com/RohanDas28/LinkOP",
    color: "#ff7f50",
    featured: true,
    category: "Web Apps"
  }
];
