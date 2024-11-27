import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import projectsDatePage from "@/database.json";

interface Project {
  id: number;
  title: string;
  image: string;
  slug: string;
  description: string;
}

interface PageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: PageProps) {
  const projects: Project[] = projectsDatePage.postagemProjects;

  const project = projects.find((project) => project.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto py-14">
        <div className="mt-10">  
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={200}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
          <div className="bg-gray p-6 rounded-lg">
           <h2 className="text-2xl font-bold">{project.title}</h2>
           <p className=" mt-4">{project.description}</p>
          </div>
      </main>
      <Footer />
    </div>
  );
}
