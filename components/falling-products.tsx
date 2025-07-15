"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

const productImages = ["/images/product1.png", "/images/product2.png", "/images/product3.png", "/images/smartphone.png"]

interface FallingProductProps {
  src: string
  delay: number
  duration: number
  xPosition: number
  size: number
}

function FallingProduct({ src, delay, duration, xPosition, size }: FallingProductProps) {
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
  )
}

export default function FallingProducts() {
  const [products, setProducts] = useState<
    Array<{
      id: number
      src: string
      delay: number
      duration: number
      xPosition: number
      size: number
    }>
  >([])

  useEffect(() => {
    const generateProducts = () => {
      const newProducts = []

      // Generate multiple instances of falling products
      for (let i = 0; i < 20; i++) {
        newProducts.push({
          id: i,
          src: productImages[Math.floor(Math.random() * productImages.length)],
          delay: Math.random() * 4, // Random delay between 0-4 seconds (reduced from 8)
          duration: 8 + Math.random() * 4, // Duration between 8-12 seconds (increased)
          xPosition: Math.random() * 90, // Random horizontal position
          size: 80 + Math.random() * 60, // Size between 80-140px
        })
      }

      setProducts(newProducts)
    }

    generateProducts()
  }, [])

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
  )
}
