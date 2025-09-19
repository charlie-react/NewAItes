import Card from "@/components/ui/card"
import { testimonials } from "@/data"


export default function Testimonials() {
    return (
        <div className="mt-4 ">
            <h1 className="text-center text-nowrap text-lg font-extrabold sm:text-4xl py-4 md:font-bold">
                =====Testimonials and CEO's Note=====
            </h1>
            <div className=" p-6 grid grid-cols-1 gap-6 lg:grid-cols-5">

                <div className="lg:col-span-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {testimonials.map((item) => (
                        <Card key={item.id} testimony={item.testimony} country={item.country} company={item.company} imageUrl={item.logoUrl} flag={item.flag} />)
                    )}
                </div>
                <div className="col-span-2 flex flex-col rounded-sm h-auto shadow-2xl p-6 ">
                    <p className="h-full text-xl italic">
                        At NewAItes, our mission has always been simple: to build technology that empowers people to do more with less effort. We believe innovation isn’t just about creating new tools—it’s about solving real problems and giving our users the freedom to focus on what truly matters.

                        In today’s fast-moving digital world, trust and reliability are everything. That’s why we hold ourselves to the highest standards in performance, security, and customer support. Every decision we make—whether it’s about design, data, or partnerships—centers around creating real value for the people and businesses that rely on us.

                        We’re proud of how far we’ve come, but this is just the beginning. Our team is relentlessly focused on learning, improving, and pushing boundaries. With your support, we’ll continue shaping solutions through AI that not only serve today’s needs but also anticipate the challenges of tomorrow.

                        Thank you for being part of this journey with us.
                    </p>
                    <div className="text-right">
                       Charles, CEO.
                    </div>
                </div>

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
