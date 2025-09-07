// Predefined animation values to prevent hydration mismatches
// These replace Math.random() calls that cause server/client differences

export const FLOATING_ELEMENTS_POSITIONS = [
  { left: 15, top: 20, duration: 3.5, delay: 0.8 },
  { left: 85, top: 35, duration: 4.2, delay: 1.2 },
  { left: 25, top: 70, duration: 3.8, delay: 0.3 },
  { left: 75, top: 15, duration: 4.5, delay: 1.8 },
  { left: 45, top: 85, duration: 3.2, delay: 0.5 },
  { left: 65, top: 50, duration: 4.0, delay: 1.5 },
] as const;

export const FLOATING_NOTES_POSITIONS = [
  { left: 20, top: 15, duration: 4.2, delay: 0.5 },
  { left: 80, top: 25, duration: 3.8, delay: 1.2 },
  { left: 35, top: 70, duration: 4.5, delay: 0.8 },
  { left: 70, top: 40, duration: 3.5, delay: 1.8 },
  { left: 15, top: 85, duration: 4.0, delay: 0.3 },
  { left: 90, top: 60, duration: 3.2, delay: 1.5 },
  { left: 50, top: 10, duration: 4.8, delay: 0.7 },
  { left: 25, top: 45, duration: 3.7, delay: 1.0 },
  { left: 75, top: 80, duration: 4.3, delay: 1.3 },
  { left: 40, top: 30, duration: 3.9, delay: 0.6 },
] as const;

export const RECENT_NOTES_POSITIONS = [
  { left: 30, top: 20, duration: 4.5, delay: 0.8 },
  { left: 70, top: 35, duration: 3.8, delay: 1.2 },
  { left: 15, top: 75, duration: 4.2, delay: 0.4 },
  { left: 85, top: 50, duration: 3.5, delay: 1.6 },
  { left: 45, top: 10, duration: 4.0, delay: 0.9 },
  { left: 60, top: 85, duration: 3.7, delay: 1.4 },
  { left: 25, top: 40, duration: 4.3, delay: 0.6 },
  { left: 80, top: 70, duration: 3.9, delay: 1.1 },
  { left: 50, top: 25, duration: 4.1, delay: 0.7 },
  { left: 35, top: 60, duration: 3.6, delay: 1.3 },
] as const;
