'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ProductCard from './ProductCard';
import { coffeeProducts } from '@/data/products';

export default function ProductShowcase() {
  return (
    <section className="py-24 px-4 md:px-8 relative">
      {/* Coffee Splash Banner */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[2rem] h-64 mb-16"
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/coffee-beans.jpeg"
            alt="Coffee beans background"
            fill
            sizes="100vw"
            className="w-full h-full object-cover opacity-25 blur-[4px]"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#3D2418]/60 via-[#4D3428]/55 to-[#3D2418]/60" />
        <Image
          src="/mocha.jpeg"
          alt="Coffee Splash"
          fill
          sizes="100vw"
          className="absolute inset-0 z-10 w-full h-full object-cover mix-blend-overlay opacity-60"
        />
      </motion.div>
      
      {/* Product Grid */}
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-['Playfair_Display'] font-bold text-center text-[#F5E6D3] mb-16"
        >
          Our Best Coffee
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffeeProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

