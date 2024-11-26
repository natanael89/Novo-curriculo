export function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center text-white">
            <div className="absolute inset-0 bg-[url('https://miro.medium.com/v2/resize:fit:1400/1*qWMhyHIlGImx_tIuUwg0-A.jpeg')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="relative z-10 text-center">
                <h1 className="text-5xl font-bold mb-4">DevFlix</h1>
                <p className="text-2xl mb-8">Desenvolvedor full stack Portfólio inspirado na Netflix</p>
            </div>
        </section>
    )
}