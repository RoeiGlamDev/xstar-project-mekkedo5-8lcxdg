export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: 'linear' | 'power2.out' | 'back.out' | 'elastic.out'; // Focus on smoother, elegant transitions
  repeat?: number;
  yoyo?: boolean;
}

export interface ScrollTriggerConfig {
  trigger: string | Element;
  start: string; // e.g., 'top center'
  end: string; // e.g., 'bottom center'
  scrub?: boolean;
  pin?: boolean; // Pin elements for a luxurious scroll effect
  toggleActions?: 'play none none reverse'; // Elegant toggle actions for animations
}

export interface StaggerConfig {
  amount: number;
  from?: 'start' | 'center' | 'end' | number;
  grid?: [number, number]; // Grid layout for product displays
  axis?: 'x' | 'y'; // Horizontal for elegant layouts
}

export interface ParallaxOptions {
  speed: number; // Subtle parallax effects for depth
  direction?: 'vertical' | 'horizontal';
  smooth?: boolean; // Smooth transitions for a high-end feel
}

export interface MagneticOptions {
  strength: number; // Adjusted for a gentle magnetic effect
  radius: number; // Larger radius for a more inviting interaction
  ease: 'power2.out'; // Soft easing for luxurious feel
}

export type EasingFunction = 
  | 'linear'
  | 'power1.out'
  | 'power2.out'
  | 'back.out'
  | 'elastic.out'
  | 'bounce.out'
  | 'circ.out'
  | 'expo.out'
  | 'sine.out'; // Focus on elegant and smooth easing functions

export interface TimelineConfig {
  repeat?: number; // Controlled repeat for elegant animations
  yoyo?: boolean; // Yoyo effect for a sophisticated touch
  delay?: number; // Delay for staggered animations
  paused?: boolean; // Control for initial state of animations
}