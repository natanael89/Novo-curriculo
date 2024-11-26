import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/Hero";
import ProjectsSection  from "@/src/components/Projects-section";
import { Footer } from "@/src/components/Footer";
import { ThemeProvider } from "@/src/components/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider>
    <div className="bg-white dark:bg-black min-h-screen">
      <Header />
      <Hero />
      <ProjectsSection /> 
      <Footer />
    
    </div>
    </ThemeProvider>
  );
}
