 import Image from "next/image"
 import { motion } from "framer-motion"
 export default function Hero(){
    return(
        <div className="mt-4 flex flex-col md:flex-row justify-between items-cemter gap-3 px-4 space-x-2 py-6">
          
          <motion.div className="md:w-1/2 flex flex-col max-w-xl h-full" initial={{y:-30, opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1}}>
            <h1 className="text-4xl font-semibold italic">
            Welcome to NewAItes,we have been wAIting for you.
          </h1>
          <p className="mt-3 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis ex magnam illum! Repellat sed tenetur facere aliquid, iste quas voluptates commodi nisi reprehenderit libero ut beatae placeat quos eaque assumenda?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusamus vel laudantium quam aliquam, labore quia! Ea dolorem laborum, iure velit deleniti aspernatur non, nostrum maiores accusamus facere distinctio consectetur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, enim provident, amet consequatur, molestias minus voluptatibus laborum maxime iste consequuntur officiis distinctio sequi unde fugit accusantium necessitatibus cumque ad earum!Lorem
          </p>
          <button className="p-3 rounded-lg bg-purple-500 rounded- mt-3 w-1/3 text-white cursor-pointer italic">
            Join us
          </button>
          </motion.div>
          <motion.div initial={{x:-250,opacity:1}} animate={{x:0,opacity:1}} transition={{duration:1}}>
            <Image src="/ai2.avif" width={700} height={200} alt="hero" className="rounded-2xl "/>
          </motion.div>
        </div>
    )
 }