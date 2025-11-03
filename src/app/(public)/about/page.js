import TeamCard from "@/components/ui/team-card";
import { team } from "@/data";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">
    
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About NewAItes</h1>
        <p className="text-lg md:text-xl opacity-80">
          We’re building the future of AI-powered innovations — tools that
          empower individuals and businesses to thrive in the digital era.
        </p>
      </section>

    
      <section className="grid md:grid-cols-2 gap-8 mb-16 text-black">
        <div className="bg-white backdrop-blur-md rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            To make AI accessible, reliable, and impactful — improving the way
            people work, connect, and live every day.
          </p>
        </div>
        <div className="bg-white backdrop-blur-md rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p>
            A world where AI is seamlessly integrated into our lives, enabling
            creativity, productivity, and innovation for all.
          </p>
        </div>
      </section>

     
      <section className="text-center px-6">
        <h2 className="text-3xl font-semibold mb-8">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mx-auto">
         {team.map(({id,name,role,bio,image})=>(
            <TeamCard key={id} role={role} image={image} bio={bio} name={name}/>
         ))}  
        </div>
      </section>
    </div>
  );
}
