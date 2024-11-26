import Image from "next/image"
import { notFound } from "next/navigation"
import { Header } from "@/src/components/Header"
import { Footer } from "@/src/components/Footer"

const projects = [
    { 
        id: 1, 
        title: "E-commerce App", 
        image: "/img/e-commerce.jpg", 
        slug: "e-commerce-app",
        description: "Um aplicativo de e-commerce completo construído com Next.js, Node.js e MongoDB. Este projeto inclui autenticação de usuários, catálogo de produtos, carrinho de compras e processamento de pagamentos usando Stripe."
      },
      { 
        id: 2, 
        title: "Blog Platform", 
        image: "/img/Blog-Platform.jpg", 
        slug: "blog-platform",
        description: "Uma plataforma de blog moderna desenvolvida com React e GraphQL. Este projeto apresenta um sistema de gerenciamento de conteúdo personalizado, comentários em tempo real e otimização SEO."
      },
      { 
        id: 3, 
        title: "Task Manager", 
        image: "/img/Task-Manager.jpg", 
        slug: "task-manager",
        description: "Um aplicativo de gerenciamento de tarefas eficiente criado com Vue.js e Firebase. Este projeto inclui autenticação de usuários, criação e atribuição de tarefas, lembretes e relatórios de produtividade."
      },
      { 
        id: 4, 
        title: "Social Media Dashboard", 
        image: "/img/Social-Media-Dashboard.jpg", 
        slug: "social-media-dashboard",
        description: "Um dashboard de mídia social abrangente construído com React e várias APIs de redes sociais. Este projeto agrega dados de múltiplas plataformas, fornecendo análises e insights valiosos."
      },
      { 
        id: 5, 
        title: "Weather App", 
        image: "/img/Weather1-App.jpg", 
        slug: "weather-app",
        description: "Um aplicativo de previsão do tempo elegante desenvolvido com React Native. Este projeto consome dados de uma API de clima e oferece previsões detalhadas, alertas meteorológicos e visualizações interativas."
      },
      { 
        id: 6, 
        title: "Portfolio Website", 
        image: "/img/portfolio-website.jpg", 
        slug: "portfolio-website",
        description: "Um site de portfólio responsivo criado com Next.js e Tailwind CSS. Este projeto apresenta uma galeria de projetos, seções de habilidades e experiência, e um formulário de contato funcional."
      },
]

export default function ProjectPage({ params } : { params: { slug: string }}) {
    const project = projects.find(p => p.slug === params.slug)

    if (!project) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <Header />
            <main className="container mx-auto py-14">
                <div className="mb-8">
                <h1 className="text-4xl font-bold mt-8 ">{project.title}</h1>
                    <div className="mb-8">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={1100}
                        height={675}
                        className="w-full h-auto rounded-lg shadow-lg mt-3 object-cover"
                    />
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">Sobre o Projeto</h2>
                        <p className="text-gray-300">{project.description}</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}