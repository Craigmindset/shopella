"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const productImages = [
  "/images/product1.png",
  "/images/product2.png",
  "/images/product3.png",
  "/images/smartphone.png",
];

interface FallingProductProps {
  src: string;
  delay: number;
  duration: number;
  xPosition: number;
  size: number;
}

function FallingProduct({
  src,
  delay,
  duration,
  xPosition,
  size,
}: FallingProductProps) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${xPosition}%`,
        top: "-100px",
      }}
      initial={{ y: -100, opacity: 0, rotate: 0 }}
      animate={{
        y: "100vh",
        opacity: [0, 1, 1, 0],
        rotate: 360,
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
        opacity: {
          times: [0, 0.1, 0.9, 1],
          duration,
        },
      }}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt="Product"
        width={size}
        height={size}
        className="object-contain drop-shadow-lg"
      />
    </motion.div>
  );
}

export default function FallingProducts() {
  const PRODUCT_COUNT = 20;
  const [products, setProducts] = useState<
    Array<{
      id: number;
      src: string;
      delay: number;
      duration: number;
      xPosition: number;
      size: number;
    }>
  >([]);

  // Helper to generate a single product
  const generateProduct = (id: number) => ({
    id,
    src: productImages[Math.floor(Math.random() * productImages.length)],
    delay: Math.random() * 4,
    duration: 8 + Math.random() * 4,
    xPosition: Math.random() * 90,
    size: 80 + Math.random() * 60,
  });


  useEffect(() => {
    // Initialize products
    setProducts(Array.from({ length: PRODUCT_COUNT }, (_, i) => generateProduct(i)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (products.length === 0) return;
    const intervals: NodeJS.Timeout[] = [];
    products.forEach((product, idx) => {
      const loop = () => {
        setProducts((prev) => {
          const updated = [...prev];
          updated[idx] = generateProduct(product.id);
          return updated;
        });
      };
      const interval = setInterval(loop, (product.delay + product.duration) * 1000);
      intervals.push(interval);
    });
    return () => {
      intervals.forEach(clearInterval);
    };
    // Only run this effect once after products are initialized
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products.length]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {products.map((product) => (
        <FallingProduct
          key={product.id}
          src={product.src}
          delay={product.delay}
          duration={product.duration}
          xPosition={product.xPosition}
          size={product.size}
        />
      ))}
    </div>
  );
}
