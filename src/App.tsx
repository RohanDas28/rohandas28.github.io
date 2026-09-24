import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CursorProvider } from "./context/CursorContext";
import CustomCursor from "./components/CustomCursor";
import Index from "./pages/Index";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";
import useHashScroll from "./hooks/useHashScroll";

// Create a new QueryClient
const queryClient = new QueryClient();

// AnimationRoutes component to handle page transitions and hash scrolling
const AnimationRoutes = () => {
  const location = useLocation();
  useHashScroll();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        {/* Navigation aliases so direct paths cleanly scroll to sections */}
        <Route path="/projects" element={<Navigate to="/#projects" replace />} />
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/skills" element={<Navigate to="/#skills" replace />} />
        <Route path="/contact" element={<Navigate to="/#contact" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CursorProvider>
        <CustomCursor />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimationRoutes />
        </BrowserRouter>
      </CursorProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
