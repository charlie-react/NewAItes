"use client";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


const products = [
  { id: 1, name: "AI Chat Assistant", description: "Conversational AI for smarter business" },
  { id: 2, name: "AI Image Generator", description: "Turn ideas into visuals instantly" },
  { id: 3, name: "AI Voice Cloner", description: "Clone voices with human-like realism" },
  { id: 4, name: "AI Data Analyzer", description: "Transform raw data into insights using predictive AI" },
  { id: 5, name: "AI Cybersecurity Shield", description: "Next-gen protection with anomaly detection & defense" },
  { id: 6, name: "AI Creative Studio", description: "Generate music, video, and art with cutting-edge models" },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white p-10 relative overflow-hidden">
      {/* Animated background glow */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-purple-600 rounded-full blur-3xl opacity-20"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-3xl opacity-20"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Header */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold mb-14 text-center bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text"
      >
        🚀 NewAItes Products
      </motion.h1>

      {/* Products Grid */}
      <div className="grid md:grid-cols-3 gap-10 relative z-10">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 2, y: 0 }}
            transition={{ delay: i * 0.3 }}
            whileHover={{ scale: 1.08, boxShadow: "0px 0px 30px rgba(0,255,255,0.7)" }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 cursor-pointer transform transition-all"
          >
            <h2 className="text-2xl font-bold text-cyan-300">{product.name}</h2>
            <p className="mt-3 text-gray-200">{product.description}</p>
          </motion.div>
        ))}
      </div>

      {/* 3D Neon Orb */}
      <div className="w-full h-[500px] mt-20">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[3, 3, 3]} intensity={1.5} />
          <mesh rotation={[0.5, 0.5, 0]}>
            <icosahedronGeometry args={[1.8, 1]} />
            <meshStandardMaterial
              color="cyan"
              emissive="purple"
              emissiveIntensity={0.6}
            wireframe
            />
          </mesh>
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>
    </div>
  );
}
