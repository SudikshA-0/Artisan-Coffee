'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { features } from '@/data/products';

export default function FeatureSection() {
  const TOTAL_FRAMES = 200;
  const FRAME_PATH = '/Coffee cup-middle';
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [frames, setFrames] = useState<HTMLImageElement[]>([]);
  const [framesLoaded, setFramesLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  const frameProgress = useTransform(smoothProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  useEffect(() => {
    let cancelled = false;

    const loadFrames = async () => {
      const imagePromises = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.src = `${FRAME_PATH}/frame (${i + 1}).jpg`;
          img.onload = () => resolve(img);
          img.onerror = reject;
        });
      });

      try {
        const loaded = await Promise.all(imagePromises);
        if (!cancelled) {
          setFrames(loaded);
          setFramesLoaded(true);
        }
      } catch (error) {
        console.error('Failed to load center cup frames', error);
      }
    };

    loadFrames();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!framesLoaded || !canvasRef.current || frames.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const renderFrame = () => {
      const frameIndex = Math.round(frameProgress.get());
      const img = frames[Math.max(0, Math.min(frameIndex, TOTAL_FRAMES - 1))];
      if (!img || !img.complete) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const scale = Math.max(rect.width / img.width, rect.height / img.height);
      const drawW = img.width * scale;
      const drawH = img.height * scale;
      const x = (rect.width - drawW) / 2;
      const y = (rect.height - drawH) / 2;

      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.drawImage(img, x, y, drawW, drawH);
    };

    const unsubscribe = frameProgress.on('change', renderFrame);
    renderFrame();

    return () => unsubscribe();
  }, [framesLoaded, frames, frameProgress]);

  return (
    <section ref={sectionRef} className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A0F0A] via-[#2D1810] to-[#1A0F0A] opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Left Features */}
          <div className="space-y-8">
            {features.filter(f => f.position === 'left').map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-[#3D2820]/60 backdrop-blur-sm p-6 rounded-xl border border-[#5A4034]/50"
              >
                <h3 className="text-2xl font-['Playfair_Display'] font-semibold text-[#F5E6D3] mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#C9B8A0] font-['Inter'] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Center: Coffee Cup Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-[500px] h-[600px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4A574]/20 to-[#4F9C8F]/20 blur-3xl rounded-full" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-[#4F9C8F]/20 to-[#D4A574]/20 rounded-full blur-3xl"
              />
              <canvas
                ref={canvasRef}
                width={320}
                height={320}
                className="relative z-10 w-full max-w-[500px] h-[600px] drop-shadow-2xl"
              />
            </div>
          </motion.div>
          
          {/* Right Features */}
          <div className="space-y-8">
            {features.filter(f => f.position === 'right').map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-[#3D2820]/60 backdrop-blur-sm p-6 rounded-xl border border-[#5A4034]/50"
              >
                <h3 className="text-2xl font-['Playfair_Display'] font-semibold text-[#F5E6D3] mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#C9B8A0] font-['Inter'] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
