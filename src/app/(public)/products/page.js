"use client";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ArrowRight } from "lucide-react";
import { API_BASE_URL } from "@/config";
import { useState, useEffect } from "react";
import Link from "next/link";
import Loader from "@/components/ui/loader";


const wiggleAnimation = {
  animate: {
    rotate: [1, -1, 1, -1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};




export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/products`);
        const data = await res.json();
        setProducts(data.data || []);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-purple-950 text-white py-26 px-10 relative overflow-hidden">

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
        className="text-3xl md:text-5xl font-extrabold mb-14 text-center bg-blue-500 text-slate-300 bg-clip-text"
      >
        🚀 NewAItes Products
      </motion.h1>

      {/* Products Grid */}
      <div className="grid md:grid-cols-3 gap-10  relative z-10">
        {products.length > 0 ? products.map((product, i) => (
          <motion.div
            key={product.id}
            {...wiggleAnimation}
            transition={{
              ...wiggleAnimation.animate.transition,
              delay: i * 0.3,
            }}

            className="bg-white text-black backdrop-blur-xl mx-auto  rounded-2xl w-[350px] sm:w-full text-center min-h-[200px] py-2 px-3 md:py-4 md:px-4 border border-white cursor-pointer transform transition-all flex flex-col"
          >
            <h2 className="text-2xl font-bold text-black">{product.name}</h2>
            <p className="mt-2  max-w-[300px]">{product.description}</p>
            <Link href={`/products/${product.id}`}>
              <button className="py-2 px-2 text-sm  rounded-lg bg-black text-slate-100 mt-2 max-w-[120px] cursor-pointer">
                View Product
                <ArrowRight size={12} className="inline-block ml-1 mx-auto" />
              </button>
            </Link>
          </motion.div>
        )) : <div className="flex items-center justify-center mx-auto">
          <Loader/></div>}
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
