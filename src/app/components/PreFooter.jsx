export default function PreFooter() {
    return (
        <div className="flex flex-col min-h-[400px] justify-center items-center gap-5 px-12 py-12 bg-white rounded-lg mt-16">
            <h1 className="text-2xl md:text-4xl text-black font-semibold">
                Ready to Innovate?
            </h1>
            <p className="text-black">
                Join us in shaping the world with AI.Let's build something amazing together
            </p>
            <button className="px-4 py-2 rounded-lg bg-black text-white cursor-pointer transition-transform hover:scale-105 font-semibold">
                Get Started
            </button>
        </div>
    )
}