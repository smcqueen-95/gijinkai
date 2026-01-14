'use client'

export default function CyberpunkCharacter() {
  return (
    <div className="md:w-1/2 mt-8 md:mt-0 md:pl-6 lg:pl-10 xl:pl-12 2xl:pl-16 w-full flex-shrink-0 flex items-center justify-center relative animate-fade-in-up animation-delay-300">
      <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      {/* Multiple Glowing Aura Layers for Depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40 rounded-full blur-3xl opacity-60 animate-pulse -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 via-primary/30 to-secondary/30 rounded-full blur-2xl opacity-50 animate-pulse animation-delay-1000 -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full blur-xl opacity-40 -z-10"></div>
      
      {/* Cyberpunk Character SVG with 3D Pop-out Effect */}
      <div className="relative z-10 transform animate-pop-out" style={{ transformStyle: 'preserve-3d' }}>
        <svg 
          viewBox="0 0 500 600" 
          className="w-full h-auto relative"
          style={{ 
            filter: 'drop-shadow(0 30px 60px rgba(116, 117, 235, 0.6)) drop-shadow(0 15px 40px rgba(71, 238, 239, 0.5))',
          }}
        >
          <defs>
            <linearGradient id="cyberGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7475EB" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#47EEEF" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="purpleMetal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="1" />
            </linearGradient>
            <radialGradient id="hairGradient" cx="50%" cy="30%">
              <stop offset="0%" stopColor="#5D4037" />
              <stop offset="50%" stopColor="#3E2723" />
              <stop offset="100%" stopColor="#1a0f09" />
            </radialGradient>
            <radialGradient id="skinGradient" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#8D6E63" />
              <stop offset="50%" stopColor="#6D4C41" />
              <stop offset="100%" stopColor="#5D4037" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Energy Aura around character - Behind */}
          <circle cx="250" cy="350" r="180" fill="none" stroke="url(#cyberGradient)" strokeWidth="2" opacity="0.2" className="animate-pulse animation-delay-1000" />
          <circle cx="250" cy="350" r="160" fill="none" stroke="url(#cyberGradient)" strokeWidth="2" opacity="0.3" className="animate-pulse" />
          <circle cx="250" cy="350" r="140" fill="none" stroke="url(#cyanGlow)" strokeWidth="1.5" opacity="0.4" className="animate-pulse animation-delay-500" />
          
          {/* Holographic Data Panels - Floating */}
          <g className="animate-float animation-delay-300" opacity="0.7">
            {/* Left Panel */}
            <rect x="50" y="200" width="80" height="100" rx="8" fill="url(#cyanGlow)" opacity="0.3" transform="rotate(-15 90 250)" />
            <rect x="52" y="202" width="76" height="96" rx="6" fill="none" stroke="url(#cyanGlow)" strokeWidth="1.5" opacity="0.6" transform="rotate(-15 90 250)" />
            <line x1="60" y1="220" x2="120" y2="220" stroke="url(#cyanGlow)" strokeWidth="1" opacity="0.5" transform="rotate(-15 90 250)" />
            <line x1="60" y1="240" x2="110" y2="240" stroke="url(#cyanGlow)" strokeWidth="1" opacity="0.5" transform="rotate(-15 90 250)" />
            <line x1="60" y1="260" x2="100" y2="260" stroke="url(#cyanGlow)" strokeWidth="1" opacity="0.5" transform="rotate(-15 90 250)" />
            
            {/* Right Panel */}
            <rect x="370" y="200" width="80" height="100" rx="8" fill="url(#cyanGlow)" opacity="0.3" transform="rotate(15 410 250)" />
            <rect x="372" y="202" width="76" height="96" rx="6" fill="none" stroke="url(#cyanGlow)" strokeWidth="1.5" opacity="0.6" transform="rotate(15 410 250)" />
            <line x1="380" y1="220" x2="440" y2="220" stroke="url(#cyanGlow)" strokeWidth="1" opacity="0.5" transform="rotate(15 410 250)" />
            <line x1="380" y1="240" x2="430" y2="240" stroke="url(#cyanGlow)" strokeWidth="1" opacity="0.5" transform="rotate(15 410 250)" />
            <line x1="380" y1="260" x2="420" y2="260" stroke="url(#cyanGlow)" strokeWidth="1" opacity="0.5" transform="rotate(15 410 250)" />
          </g>
          
          {/* Hair - Curly High Bun */}
          <g className="animate-float-gentle animation-delay-200">
            {/* High Bun on top */}
            <ellipse cx="250" cy="120" rx="45" ry="50" fill="url(#hairGradient)" />
            <ellipse cx="250" cy="110" rx="40" ry="45" fill="url(#hairGradient)" />
            {/* Curls framing face */}
            <path d="M 200 140 Q 180 160 170 190 Q 165 220 175 250 Q 180 270 190 280 L 190 200 Q 185 180 192 160 Q 198 145 200 140 Z" fill="url(#hairGradient)" />
            <path d="M 300 140 Q 320 160 330 190 Q 335 220 325 250 Q 320 270 310 280 L 310 200 Q 315 180 308 160 Q 302 145 300 140 Z" fill="url(#hairGradient)" />
            <path d="M 210 150 Q 195 170 188 200 Q 185 230 192 260" stroke="#4a3428" strokeWidth="2" fill="none" opacity="0.4" />
            <path d="M 290 150 Q 305 170 312 200 Q 315 230 308 260" stroke="#4a3428" strokeWidth="2" fill="none" opacity="0.4" />
          </g>
          
          {/* Head - Dark Skin */}
          <ellipse cx="250" cy="220" rx="80" ry="95" fill="url(#skinGradient)" />
          
          {/* Freckles */}
          <circle cx="230" cy="200" r="1.5" fill="#5D4037" opacity="0.6" />
          <circle cx="240" cy="205" r="1" fill="#5D4037" opacity="0.6" />
          <circle cx="260" cy="200" r="1.5" fill="#5D4037" opacity="0.6" />
          <circle cx="270" cy="205" r="1" fill="#5D4037" opacity="0.6" />
          
          {/* Left Eye - Expressive */}
          <g>
            <ellipse cx="225" cy="210" rx="12" ry="18" fill="#FFFFFF" />
            <ellipse cx="225" cy="216" rx="9" ry="11" fill="#3E2723" />
            <circle cx="227" cy="213" r="3.5" fill="#FFFFFF" />
            <ellipse cx="222" cy="208" rx="4" ry="7" fill="#FFFFFF" opacity="0.9" />
            <ellipse cx="220" cy="205" rx="2" ry="3" fill="#FFFFFF" opacity="0.7" />
          </g>
          
          {/* Right Eye */}
          <g>
            <ellipse cx="275" cy="210" rx="12" ry="18" fill="#FFFFFF" />
            <ellipse cx="275" cy="216" rx="9" ry="11" fill="#3E2723" />
            <circle cx="277" cy="213" r="3.5" fill="#FFFFFF" />
            <ellipse cx="272" cy="208" rx="4" ry="7" fill="#FFFFFF" opacity="0.9" />
            <ellipse cx="270" cy="205" rx="2" ry="3" fill="#FFFFFF" opacity="0.7" />
          </g>
          
          {/* Eyebrows */}
          <path d="M 210 195 Q 220 193 230 195" stroke="#1a0f09" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M 270 195 Q 280 193 290 195" stroke="#1a0f09" strokeWidth="3" fill="none" strokeLinecap="round" />
          
          {/* Mouth - Confident Smile */}
          <path d="M 235 235 Q 250 245 265 235" stroke="#3E2723" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 240 238 Q 250 242 260 238" stroke="#3E2723" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7" />
          
          {/* Neck */}
          <rect x="230" y="290" width="40" height="25" rx="5" fill="url(#skinGradient)" />
          
          {/* Upper Body - Futuristic Suit Base (Black) */}
          <path d="M 180 315 Q 175 360 180 400 Q 185 430 200 450 Q 215 465 250 470 Q 285 465 300 450 Q 315 430 320 400 Q 325 360 320 315 Z" fill="#1a1a1a" />
          
          {/* Chest Plate - Purple Metallic */}
          <path d="M 220 320 Q 230 325 250 328 Q 270 325 280 320 L 280 360 Q 270 365 250 368 Q 230 365 220 360 Z" fill="url(#purpleMetal)" />
          <path d="M 225 325 Q 250 330 275 325" stroke="url(#cyanGlow)" strokeWidth="2" fill="none" filter="url(#glow)" />
          
          {/* Shoulder Pads - Purple */}
          <ellipse cx="190" cy="330" rx="25" ry="20" fill="url(#purpleMetal)" transform="rotate(-20 190 330)" />
          <ellipse cx="310" cy="330" rx="25" ry="20" fill="url(#purpleMetal)" transform="rotate(20 310 330)" />
          
          {/* Glowing Cyan Lines on Suit */}
          {/* Chest lines */}
          <line x1="230" y1="340" x2="230" y2="355" stroke="url(#cyanGlow)" strokeWidth="2.5" filter="url(#glow)" />
          <line x1="250" y1="338" x2="250" y2="358" stroke="url(#cyanGlow)" strokeWidth="2.5" filter="url(#glow)" />
          <line x1="270" y1="340" x2="270" y2="355" stroke="url(#cyanGlow)" strokeWidth="2.5" filter="url(#glow)" />
          
          {/* Waist lines */}
          <line x1="200" y1="380" x2="220" y2="380" stroke="url(#cyanGlow)" strokeWidth="2" filter="url(#glow)" />
          <line x1="280" y1="380" x2="300" y2="380" stroke="url(#cyanGlow)" strokeWidth="2" filter="url(#glow)" />
          
          {/* Left Arm - Outstretched */}
          <ellipse cx="150" cy="330" rx="28" ry="40" fill="url(#skinGradient)" transform="rotate(-20 150 330)" />
          <ellipse cx="120" cy="370" rx="24" ry="35" fill="url(#skinGradient)" transform="rotate(-25 120 370)" />
          {/* Forearm - Suit */}
          <ellipse cx="100" cy="410" rx="22" ry="32" fill="#1a1a1a" transform="rotate(-30 100 410)" />
          {/* Glowing lines on forearm */}
          <line x1="90" y1="400" x2="110" y2="400" stroke="url(#cyanGlow)" strokeWidth="2" filter="url(#glow)" transform="rotate(-30 100 410)" />
          <line x1="90" y1="420" x2="110" y2="420" stroke="url(#cyanGlow)" strokeWidth="2" filter="url(#glow)" transform="rotate(-30 100 410)" />
          {/* Hand */}
          <ellipse cx="85" cy="445" rx="15" ry="18" fill="url(#skinGradient)" transform="rotate(-30 85 445)" />
          {/* Glowing rectangle on hand */}
          <rect x="80" y="440" width="10" height="8" rx="2" fill="url(#cyanGlow)" opacity="0.8" filter="url(#glow)" transform="rotate(-30 85 444)" />
          
          {/* Right Arm - Outstretched */}
          <ellipse cx="350" cy="330" rx="28" ry="40" fill="url(#skinGradient)" transform="rotate(20 350 330)" />
          <ellipse cx="380" cy="370" rx="24" ry="35" fill="url(#skinGradient)" transform="rotate(25 380 370)" />
          {/* Forearm - Suit */}
          <ellipse cx="400" cy="410" rx="22" ry="32" fill="#1a1a1a" transform="rotate(30 400 410)" />
          {/* Glowing lines on forearm */}
          <line x1="390" y1="400" x2="410" y2="400" stroke="url(#cyanGlow)" strokeWidth="2" filter="url(#glow)" transform="rotate(30 400 410)" />
          <line x1="390" y1="420" x2="410" y2="420" stroke="url(#cyanGlow)" strokeWidth="2" filter="url(#glow)" transform="rotate(30 400 410)" />
          {/* Hand */}
          <ellipse cx="415" cy="445" rx="15" ry="18" fill="url(#skinGradient)" transform="rotate(30 415 445)" />
          {/* Glowing rectangle on hand */}
          <rect x="410" y="440" width="10" height="8" rx="2" fill="url(#cyanGlow)" opacity="0.8" filter="url(#glow)" transform="rotate(30 415 444)" />
          
          {/* Lower Body - Suit with Purple Panels */}
          <path d="M 200 450 Q 190 480 195 510 Q 200 530 210 545 Q 220 555 250 560 Q 280 555 290 545 Q 300 530 305 510 Q 310 480 300 450 Z" fill="#1a1a1a" />
          {/* Thigh panels - Purple */}
          <ellipse cx="220" cy="500" rx="30" ry="25" fill="url(#purpleMetal)" transform="rotate(-10 220 500)" />
          <ellipse cx="280" cy="500" rx="30" ry="25" fill="url(#purpleMetal)" transform="rotate(10 280 500)" />
          {/* Glowing lines on legs */}
          <line x1="210" y1="490" x2="230" y2="490" stroke="url(#cyanGlow)" strokeWidth="2" filter="url(#glow)" transform="rotate(-10 220 490)" />
          <line x1="270" y1="490" x2="290" y2="490" stroke="url(#cyanGlow)" strokeWidth="2" filter="url(#glow)" transform="rotate(10 280 490)" />
          
          {/* Sparkle/Energy Effects */}
          <g className="animate-ping">
            <circle cx="180" cy="180" r="5" fill="url(#cyanGlow)" opacity="0.9" filter="url(#glow)" />
            <path d="M 180 180 L 180 172 M 180 180 L 180 188 M 180 180 L 172 180 M 180 180 L 188 180" stroke="url(#cyanGlow)" strokeWidth="2" opacity="0.7" />
          </g>
          <g className="animate-ping animation-delay-500">
            <circle cx="320" cy="180" r="4.5" fill="url(#purpleMetal)" opacity="0.9" />
            <path d="M 320 180 L 320 173 M 320 180 L 320 187 M 320 180 L 313 180 M 320 180 L 327 180" stroke="url(#purpleMetal)" strokeWidth="1.8" opacity="0.7" />
          </g>
          <g className="animate-ping animation-delay-1000">
            <circle cx="250" cy="150" r="4" fill="url(#cyanGlow)" opacity="0.7" filter="url(#glow)" />
            <path d="M 250 150 L 250 144 M 250 150 L 250 156 M 250 150 L 244 150 M 250 150 L 256 150" stroke="url(#cyanGlow)" strokeWidth="1.5" opacity="0.6" />
          </g>
        </svg>
        
        {/* Multiple shadow layers for pop-out effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40 rounded-full blur-3xl -z-20 opacity-60" style={{ transform: 'translateY(50px) scale(1.3)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 via-primary/30 to-secondary/30 rounded-full blur-2xl -z-20 opacity-50" style={{ transform: 'translateY(45px) scale(1.25)' }}></div>
      </div>
      </div>
    </div>
  )
}
