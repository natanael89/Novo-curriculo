"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import projectsDate from "../../database.json"
import { useEffect, useState } from "react";


interface Project {
    id: number;
    title: string;
    image: string;
    slug: string;
}

const  ProjectsSection: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        setProjects(projectsDate.projects)
    }, []);

    return (
        <section id="#projects" className="py-16 bg-black">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-white mb-4">Meus Projetos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(project => (
                    <Link key={project.id} href={`/projects/${project.slug}`}>
                        <Card className="bg-gray hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                            <CardContent className="p-0">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={300}
                                    height={200}
                                    className="w-full h-48 object-cover rounded-t-xl"
                                />
                                <div className="p-4">
                                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection;