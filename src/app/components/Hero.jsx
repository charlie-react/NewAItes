import { TypeAnimation } from "react-type-animation"
export default function Hero() {
  return (
    <div className="flex flex-col min-h-[400px] justify-center items-center gap-5 px-12 py-12 bg-white text-black/95 rounded-lg mb-6 md:mt-12 mt-24">
      <div className="md:text-3xl font-bold">
        <TypeAnimation
          sequence={[
            "Welcome to NewAItes 🚀,we have been wAIting for you.", 1000,
            "Explore AI Chat 🤖",
            1000,
            "Generate Images 🎨",
            1000,
            "Clone Voices 🎤",
            1000,
            " Discover groundbreaking AI innovations that are shaping our world.",1000
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
        />
      </div>
      <button className="p-3 rounded-lg bg-black/90 text-white cursor-pointer transition-transform hover:scale-105">
        <a href="/about">
          Learn More
        </a>
      </button>
    </div>
  )
}