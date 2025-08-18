
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
}

export const projects: Project[] = [
  {
    id: "face-recognition-attendance",
    title: "Face Recognition Attendance System",
    description: "A Python-based attendance system using real-time face recognition with OpenCV.",
    fullDescription: "This project is a face recognition-based attendance system developed in Python. Leveraging OpenCV and other Python modules, the system captures faces via webcam, recognizes registered individuals, and marks their attendance in a CSV file. It features a Tkinter GUI, efficient face detection, and real-time feedback. Designed for environments like classrooms or offices, it ensures accuracy and ease of use through proper lighting and clear images.",
    image: "https://plus.unsplash.com/premium_photo-1700830452915-434970100217?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python", "OpenCV", "Tkinter", "NumPy", "Pandas", "PIL"],
    link: "https://github.com/RohanDas28/Python-Face-Recognition-Attendance-System",
    github: "https://github.com/RohanDas28/Python-Face-Recognition-Attendance-System",
    color: "#4CAF50",
    featured: true
  },  
  {
    id: "productihub",
    title: "ProductiHub",
    description: "Your personal productivity dashboard",
    fullDescription: "ProductiHub is a modern, all-in-one productivity dashboard designed to help you stay organized, focused, and efficient. It combines several essential tools into a single, beautiful interface, with seamless data synchronization across devices using Supabase.",
    image: "https://productihub.vercel.app/logo.png",
    technologies: ["React", "Vite", "TypeScript", "shadcn/ui", "Tailwind CSS", "@tanstack/react-query", "Framer Motion", "React Hook Form", "tldraw", "Supabase", "React Router"],
    link: "https://productihub.vercel.app/",
    github: "https://github.com/RohanDas28/ProductiHub",
    color: "#3b82f6",
    featured: true
  },
  {
    id: "typerop-speed-test",
    title: "TyperOp - Typing Speed Test",
    description: "A web app to test and improve typing speed with real-time WPM tracking.",
    fullDescription: "TyperOp is a lightweight and interactive typing speed test application built with modern web technologies. It generates random paragraphs for each session, calculates real-time words per minute (WPM), and offers an intuitive interface to enhance your typing skills. Whether you're practicing or just having fun, TyperOp makes typing engaging with instant feedback and the ability to retry with fresh content. Designed for speed and simplicity, it's accessible across all modern browsers.",
    image: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "JavaScript", "Vite", "CSS3", "HTML5"],
    link: "https://typer-op.vercel.app",
    github: "https://github.com/RohanDas28/TyperOp",
    color: "#8e44ad",
    featured: true
  },
  {
    id: "passop-password-manager",
    title: "PassOp - Password Manager",
    description: "A full-stack password manager with secure storage and a sleek UI.",
    fullDescription: "PassOp is a secure and user-friendly full-stack password manager application. Built with React, Express, and MongoDB, it allows users to store, manage, and delete passwords with ease. The app features real-time interactions, such as adding new entries, toggling visibility, and seamless backend communication via API. Styled with Tailwind CSS and powered by Vite for fast frontend performance, PassOp ensures data integrity and a smooth user experience. It's an ideal base for extending security features like encryption or authentication.",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Express", "MongoDB", "Vite", "Tailwind CSS", "Axios"],
    link: "https://pass-op.vercel.app",
    github: "https://github.com/RohanDas28/PassOp",
    color: "#2ecc71",
    featured: true
  },
  {
    id: "auto-facebook-login",
    title: "Automatic Facebook Login",
    description: "A Python script that automates Facebook login using Selenium.",
    fullDescription: "This project is a Python automation script designed to log in to Facebook automatically using Selenium. It leverages WebDriver Manager for dynamic driver management and Colorify for enhanced console output. Ideal for demonstrating browser automation techniques, this tool showcases how Python can simulate human interactions with web pages. Note: This project is for educational purposes only and respects Facebook's terms of service.",
    image: "https://images.unsplash.com/photo-1600859343572-566b5ee12973?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Python", "Selenium", "WebDriverManager", "Colorify"],
    link: "https://github.com/RohanDas28/Automatic-Facebook-Login-With-Python",
    github: "https://github.com/RohanDas28/Automatic-Facebook-Login-With-Python",
    color: "#3b5998",
    featured: true
  },
  {
    id: "linkop-social-links",
    title: "LinkOP - Social Links Page",
    description: "A minimal React-based page showcasing social media links with smooth animations.",
    fullDescription: "LinkOP is a simple yet stylish web page that displays your social media links with animated transitions and interactive elements. Built with React, it features custom animations using animate.css and an animated cursor for added flair. The app includes recognizable icons for platforms like Instagram, Twitter, LinkedIn, GitHub, and more, making it a compact personal link hub. Easily customizable and deployable, LinkOP is perfect for online portfolios or digital business cards.",
    image: "https://plus.unsplash.com/premium_photo-1683288662019-c92caea8276d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "reacticons", "reactanimatedcursor", "animate.css"],
    link: "https://link-op.vercel.app/",
    github: "https://github.com/RohanDas28/LinkOP",
    color: "#ff7f50",
    featured: true
  }
];
