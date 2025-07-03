"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GlassmorphismOrb() {
  // Color variables - easily customizable
  const [colors, setColors] = useState({
    primary: "#3b82f6", // blue
    secondary: "#8b5cf6", // purple
    accent: "#06b6d4", // cyan
    highlight: "#f59e0b", // amber
  });

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-8 relative overflow-hidden">
      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}

      {/* Main orb container */}
      <div className="relative">
        {/* Outer glow layer */}
        <motion.div
          className="absolute inset-0 rounded-full blur-3xl opacity-30"
          style={{
            background: `radial-gradient(circle, ${colors.primary}40, ${colors.secondary}20, transparent)`,
            width: "400px",
            height: "400px",
            left: "-50px",
            top: "-50px",
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Secondary glow */}
        <motion.div
          className="absolute inset-0 rounded-full blur-2xl opacity-40"
          style={{
            background: `radial-gradient(circle, ${colors.accent}30, ${colors.highlight}15, transparent)`,
            width: "300px",
            height: "300px",
            left: "25px",
            top: "25px",
          }}
          animate={{
            scale: [1.1, 0.9, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Main orb layers */}
        <div className="relative w-80 h-80">
          {/* Layer 1 - Outermost */}
          <motion.div
            className="absolute inset-0 rounded-full backdrop-blur-md border border-white/10"
            style={{
              background: `linear-gradient(135deg, ${colors.primary}15, ${colors.secondary}10, transparent)`,
            }}
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          {/* Layer 2 */}
          <motion.div
            className="absolute inset-4 rounded-full backdrop-blur-lg border border-white/20"
            style={{
              background: `linear-gradient(225deg, ${colors.secondary}20, ${colors.accent}15, transparent)`,
            }}
            animate={{
              scale: [1.02, 0.98, 1.02],
              rotate: [360, 270, 180, 90, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Layer 3 */}
          <motion.div
            className="absolute inset-8 rounded-full backdrop-blur-xl border border-white/30"
            style={{
              background: `linear-gradient(45deg, ${colors.accent}25, ${colors.highlight}20, ${colors.primary}10)`,
            }}
            animate={{
              scale: [0.95, 1.05, 0.95],
              rotate: [0, 120, 240, 360],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Layer 4 - Inner core */}
          <motion.div
            className="absolute inset-12 rounded-full backdrop-blur-2xl border border-white/40"
            style={{
              background: `radial-gradient(circle, ${colors.highlight}30, ${colors.primary}20, transparent)`,
            }}
            animate={{
              scale: [1, 0.9, 1.1, 1],
              opacity: [0.8, 1, 0.6, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Central pulse */}
          <motion.div
            className="absolute inset-20 rounded-full"
            style={{
              background: `radial-gradient(circle, ${colors.highlight}60, ${colors.accent}40, transparent)`,
              filter: "blur(8px)",
            }}
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Floating elements around the orb */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full backdrop-blur-sm border border-white/20"
            style={{
              background: `linear-gradient(45deg, ${colors.primary}40, ${colors.secondary}30)`,
              left: `${150 + Math.cos((i * Math.PI * 2) / 8) * 200}px`,
              top: `${150 + Math.sin((i * Math.PI * 2) / 8) * 200}px`,
            }}
            animate={{
              x: [0, Math.cos((i * Math.PI * 2) / 8) * 20, 0],
              y: [0, Math.sin((i * Math.PI * 2) / 8) * 20, 0],
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
