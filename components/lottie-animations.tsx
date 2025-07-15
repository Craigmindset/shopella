"use client"

import { motion } from "framer-motion"

// Shopping Bag Animation
export function ShoppingBagAnimation() {
  return (
    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-full flex items-center justify-center relative">
      <motion.div
        className="relative"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        {/* Shopping bag */}
        <motion.div
          className="w-16 h-16 bg-gradient-to-b from-blue-400/20 to-blue-600/20 rounded-b-lg border-2 border-blue-400"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          {/* Bag handles */}
          <div className="absolute -top-2 left-2 w-4 h-4 border-2 border-blue-400 rounded-t-full border-b-0" />
          <div className="absolute -top-2 right-2 w-4 h-4 border-2 border-blue-400 rounded-t-full border-b-0" />

          {/* Items in bag */}
          <motion.div
            className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-cyan-300 rounded"
            animate={{ width: [20, 32, 20] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

// Package Delivery Animation
export function PackageAnimation() {
  return (
    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-full flex items-center justify-center relative">
      <motion.div
        className="relative"
        animate={{
          y: [0, -10, 0],
          rotateY: [0, 5, 0, -5, 0],
        }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        {/* Package box */}
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400/30 to-indigo-500/30 border-2 border-blue-400 rounded relative">
          {/* Package tape */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-cyan-300" />
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-1 bg-cyan-300" />

          {/* Delivery arrow */}
          <motion.div
            className="absolute -top-6 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
          >
            <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-blue-400" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

// Credit Card Payment Animation
export function PaymentAnimation() {
  return (
    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-full flex items-center justify-center relative">
      <motion.div
        className="relative"
        animate={{ rotateY: [0, 10, 0, -10, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      >
        {/* Credit card */}
        <div className="w-16 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg relative overflow-hidden">
          {/* Card chip */}
          <div className="absolute top-2 left-2 w-3 h-2 bg-yellow-300 rounded-sm" />

          {/* Card number lines */}
          <motion.div
            className="absolute bottom-2 left-2 w-8 h-0.5 bg-white/60 rounded"
            animate={{ width: [20, 32, 20] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />

          {/* Payment success checkmark */}
          <motion.div
            className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          >
            <div className="w-2 h-1 border-b-2 border-r-2 border-white transform rotate-45 -translate-y-0.5" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
