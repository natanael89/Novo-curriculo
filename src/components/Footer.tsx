import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
            <footer id="contact" className="bg-black text-white py-8">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4">Entre em contato</h2>

                    <div className="flex flex-wrap justify-center mb-4">
                        <a href="https://github.com/natanael89" target="_blank" rel="noopener noreferrer" className="mr-4 hover:text-red-500">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/natanael-santos-879568b7" target="_blank" rel="noopener noreferrer" className="mr-4 hover:text-red-500">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:natanaelc7@gmail.com"  rel="noopener noreferrer" className="mr-4 hover:text-red-500">
                            <Mail size={24} />
                        </a>
                    </div>
                    <p>&copy; 2024 DevFlix Natanael Carvalho. Todos os direitos reservados.</p>
                </div>
            </footer>
    )
}