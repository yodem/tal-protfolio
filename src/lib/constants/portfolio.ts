// Portfolio constants for hardcoded values

// About section constants
export const ABOUT_CONSTANTS = {
  YEARS_EXPERIENCE: 10,
  TRACKS_PRODUCED: 2000,
  COLLABORATIONS: 50,
  ROTATION_DURATION: 20,
  FLOATING_ELEMENTS_COUNT: 8,
  IMAGE_WIDTH: 800,
  IMAGE_HEIGHT: 800,
  BORDER_WIDTH: 6,
  ROTATING_IMAGE_SIZE: 400,
} as const;

// Work section constants
export const WORK_CONSTANTS = {
  ITEMS_COUNT: 3,
  IMAGE_WIDTH: 400,
  IMAGE_HEIGHT: 300,
  PROGRESS_CREATIVITY: 95,
  PROGRESS_TECHNICAL: 90,
} as const;

// Tracks section constants
export const TRACKS_CONSTANTS = {
  ITEMS_COUNT: 6,
  IMAGE_WIDTH: 300,
  IMAGE_HEIGHT: 300,
  FLOATING_NOTES_COUNT: 10,
  ANIMATION_DELAY_MULTIPLIER: 0.1,
} as const;

// Contact section constants
export const CONTACT_CONSTANTS = {
  FORM_TIMEOUT: 2000,
  SUCCESS_MESSAGE_TIMEOUT: 3000,
  VALIDATION_MIN_NAME_LENGTH: 2,
  VALIDATION_MIN_MESSAGE_LENGTH: 10,
  FORM_ROWS: 5,
} as const;

// Footer section constants
export const FOOTER_CONSTANTS = {
  FLOATING_NOTES_COUNT: 5,
  ANIMATION_DURATION_BASE: 3,
  ANIMATION_DURATION_VARIANCE: 2,
  ANIMATION_DELAY_MAX: 3,
} as const;

// Animation constants
export const ANIMATION_CONSTANTS = {
  DURATION_FAST: 0.3,
  DURATION_NORMAL: 0.6,
  DURATION_SLOW: 0.8,
  DURATION_VERY_SLOW: 1,
  DELAY_INCREMENT: 0.1,
  DELAY_NORMAL: 0.2,
  DELAY_LONG: 0.5,
  DELAY_VERY_LONG: 0.7,
  SCALE_HOVER: 1.05,
  SCALE_TAP: 0.9,
  SCALE_HOVER_LARGE: 1.1,
  OPACITY_VISIBLE: 1,
  OPACITY_HIDDEN: 0,
  OPACITY_SEMI: 0.5,
  ROTATION_FULL: 360,
  ROTATION_HALF: 180,
} as const;

// Layout constants
export const LAYOUT_CONSTANTS = {
  CONTAINER_MAX_WIDTH: 'max-w-6xl',
  SECTION_PADDING_Y: 'py-20 lg:py-32',
  SECTION_PADDING_Y_SMALL: 'py-16',
  GRID_COLS_1: 'grid-cols-1',
  GRID_COLS_2: 'grid-cols-2',
  GRID_COLS_3: 'grid-cols-3',
  GRID_COLS_4: 'grid-cols-4',
  GAP_4: 'gap-4',
  GAP_6: 'gap-6',
  GAP_8: 'gap-8',
  GAP_12: 'gap-12',
  BORDER_RADIUS_SM: 'rounded-sm',
  BORDER_RADIUS_MD: 'rounded-md',
  BORDER_RADIUS_LG: 'rounded-lg',
  BORDER_RADIUS_XL: 'rounded-xl',
  BORDER_RADIUS_2XL: 'rounded-2xl',
  BORDER_RADIUS_FULL: 'rounded-full',
} as const;

// Color constants
export const COLOR_CONSTANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  MUTED: 'muted',
  ACCENT: 'accent',
  DESTRUCTIVE: 'destructive',
  CARD: 'card',
  BORDER: 'border',
  INPUT: 'input',
  RING: 'ring',
} as const;
