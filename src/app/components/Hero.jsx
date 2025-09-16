 import Image from "next/image"
 
 export default function Hero(){
    return(
        <div className="mt-4 flex justify-between items-cemter gap-3 px-4 space-x-2 py-6">
          
          <div className="w-1/2 flex flex-col max-w-xl h-full">
            <h1 className="text-4xl font-semibold italic">
            Welcome to NewAItes,we have been wAIting for you.
          </h1>
          <p className="mt-3 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis ex magnam illum! Repellat sed tenetur facere aliquid, iste quas voluptates commodi nisi reprehenderit libero ut beatae placeat quos eaque assumenda?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusamus vel laudantium quam aliquam, labore quia! Ea dolorem laborum, iure velit deleniti aspernatur non, nostrum maiores accusamus facere distinctio consectetur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, enim provident, amet consequatur, molestias minus voluptatibus laborum maxime iste consequuntur officiis distinctio sequi unde fugit accusantium necessitatibus cumque ad earum!Lorem
          </p>
          <button className="p-3 rounded-lg bg-gradient-to-r from-teal-500 to-pink-500 rounded- mt-3 w-1/3 text-white cursor-pointer italic">
            Join us
          </button>
          </div>
          <div>
            <Image src="/ai2.avif" width={700} height={200} alt="hero" className="rounded-sm "/>
          </div>
        </div>
    )
 }