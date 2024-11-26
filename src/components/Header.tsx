import Link from "next/link";
import { Button } from "@/components/ui/button";


export function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-black bg-opacity-90">
            <div className="container mx-auto flex justify-between items-center py-4">
                <Link href="/" className="text-red-600 text-2xl font-bold">
                    DevFlix
                </Link>
                <nav className="hidden md:flex">
                    <div className="flex items-center space-x-4">
                        <Link href="#projects" className="text-gray-300 hover:text-gray-100">
                            Projeto
                        </Link>
                        <Link href="/about" className="text-gray-300 hover:text-gray-100">
                            Sobre
                        </Link>
                        <Link href="/contact" className="text-gray-300 hover:text-gray-100">
                            Contato
                        </Link>
                    </div>
                </nav>
                <Button variant="outline" className="bg-red-600 text-white hover:bg-red-700 border-none">Entra em contato</Button>
            </div>
        </header>
    )
}