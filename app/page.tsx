'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-white">
      <Header />
      <HeroSection 
        title="Elevate Your Beauty" 
        subtitle="Discover the luxury of FashionTV Cosmetics" 
        backgroundImage="/path/to/hero-image.jpg" 
      />
      <FeaturesSection 
        features={[
          { title: "Premium Quality", description: "Experience the finest ingredients." },
          { title: "Elegant Packaging", description: "Designed to impress." },
          { title: "Exclusive Collections", description: "Limited editions for a unique touch." }
        ]} 
      />
      <Footer 
        socialLinks={[
          { platform: "Instagram", url: "https://instagram.com/fashiontvcosmetics" },
          { platform: "Facebook", url: "https://facebook.com/fashiontvcosmetics" },
          { platform: "Twitter", url: "https://twitter.com/fashiontvcosmetics" }
        ]}
      />
    </div>
  );
}