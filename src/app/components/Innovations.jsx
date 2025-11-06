import Card from "@/components/ui/card"
import { products } from "@/data"


export default function Innovations() {
    return (
        <div className="mt-12 flex flex-col items-center justify-around">
            <h1 className="text-center text-white text-nowrap text-lg font-extrabold sm:text-4xl py-4 md:font-bold">
              Featured Innovations
            </h1>
                <div className="lg:col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-3 mt-6">
                    {products.map((item) => (
                        <Card key={item.id} name={item.name} description ={item.description} image={item.image} />)
                    )}
                </div>
         
        </div>
    )
}


// import Card from "@/components/ui/card"
// import { testimonials } from "@/data"

// export default function Testimonials() {
//   return (
//     <div className="border-t-2 border-amber-100 px-4 sm:px-8 py-8 overflow-hidden">
//       <h1 className="text-center text-2xl sm:text-4xl py-4 font-bold">
//         ===== Testimonials and CEO's Note =====
//       </h1>

//       <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
//         {/* Left side: testimonials */}
//         <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {testimonials.map((item) => (
//             <Card
//               key={item.id}
//               testimony={item.testimony}
//               country={item.country}
//               company={item.company}
//               imageUrl={item.logoUrl}
//               flag={item.flag}
//             />
//           ))}
//         </div>

//         {/* Right side: CEO note */}
//         <div className="lg:col-span-2 flex flex-col rounded-md shadow-xl p-6 bg-white/10">
//           <p className="text-base sm:text-lg italic leading-relaxed flex-1">
//             At NewAItes, our mission has always been simple: to build technology
//             that empowers people to do more with less effort. We believe
//             innovation isn’t just about creating new tools—it’s about solving
//             real problems and giving our users the freedom to focus on what
//             truly matters.
//             <br />
//             <br />
//             In today’s fast-moving digital world, trust and reliability are
//             everything. That’s why we hold ourselves to the highest standards in
//             performance, security, and customer support. Every decision we
//             make—whether it’s about design, data, or partnerships—centers around
//             creating real value for the people and businesses that rely on us.
//             <br />
//             <br />
//             We’re proud of how far we’ve come, but this is just the beginning.
//             Our team is relentlessly focused on learning, improving, and pushing
//             boundaries. With your support, we’ll continue shaping solutions
//             through AI that not only serve today’s needs but also anticipate the
//             challenges of tomorrow.
//             <br />
//             <br />
//             Thank you for being part of this journey with us.
//           </p>
//           <div className="text-right mt-4 font-semibold">Charles, CEO.</div>
//         </div>
//       </div>
//     </div>
//   )
// }
