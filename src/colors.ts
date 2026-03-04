// =============================================================================
// CSS Forge Color Constants for JS/TSX
// Mirrors the CSS custom properties in _variables.scss
// Usage: import { colors } from '../colors' or import { white100, blue400 } from '../colors'
// =============================================================================

export const colors = {
  // White / Gray Scale
  white100: '#fff',
  white200: '#f1f1f1',
  white300: '#f2f2f5',
  gray100: '#eee',
  gray200: '#ededed',
  gray300: '#ccc',
  gray400: '#888',
  gray500: '#666',
  gray600: '#616161',
  gray700: '#555',
  gray800: '#444',
  gray900: '#333',

  // Charcoal / Dark Backgrounds
  charcoal100: '#2a2a2b',
  charcoal200: '#282828',
  charcoal300: '#1c1d20',
  charcoal400: '#1b1b1c',
  charcoal500: '#1a1a2e',
  charcoal600: '#1a1a1a',
  charcoal700: '#16213e',
  charcoal800: '#111',
  charcoal900: '#0f0f23',
  charcoal950: '#0d0d0d',

  // Blue
  blue100: '#87ceeb',
  blue200: '#6e81e0',
  blue300: '#6d72b2',
  blue400: '#667eea',
  blue500: '#5a6fd6',
  blue600: '#4682b4',
  blue700: '#3498db',
  blue800: '#5a7db0',
  blue900: '#7d9ec8',

  // Purple
  purple100: '#dcd2ec',
  purple200: '#b4b3e7',
  purple300: '#b24fcf',
  purple400: '#a30dad',
  purple500: '#9146dc',
  purple600: '#8439c8',
  purple700: '#8149a1',
  purple800: '#764ba2',
  purple900: '#6a3e7e',

  // Purple (Desert/Dark theme)
  purpleDark100: '#6b3883',
  purpleDark200: '#645387',
  purpleDark300: '#5e3c6b',
  purpleDark400: '#5a2e77',
  purpleDark500: '#585672',
  purpleDark600: '#512f69',
  purpleDark700: '#352f56',
  purpleDark800: '#331948',
  purpleDark900: '#26223a',

  // Sky Blue
  sky100: '#9cb1e5',

  // Navy
  navy900: '#000033',

  // Orange / Yellow
  orange100: '#fff9c4',
  orange200: '#ffe066',
  orange300: '#ffd700',
  orange400: '#ffa500',
  orange500: '#f7b267',
  orange600: '#f28b30',
  orange700: '#f79d65',
  orange800: '#e07a5f',
  orange900: 'rgba(255, 165, 0, 0.4)',

  // Cream / Ivory
  cream100: '#fcf4cd',
  cream200: '#f1e6fd',
  cream300: '#f1e6fd3a',
  cream400: '#f1e6fd0e',

  // Red / Pink
  red100: '#ecdddd',
  red200: '#e37b7b',
  red300: '#e74c3c',
  red400: '#d75555',
  red500: '#d13639',
  red600: '#cc4761',

  // Green
  green400: '#2ecc71',

  // Yellow
  yellow400: '#f1c40f',

  // Slider
  slider100: 'rgba(153, 247, 95, 0.28)',
  slider200: 'rgba(68, 67, 67, 0.4)',

  // Sun Glow
  sunGlow100: 'rgba(255, 223, 128, 0.95)',
} as const

// Named exports for convenience
export const {
  white100, white200, white300,
  gray100, gray200, gray300, gray400, gray500, gray600, gray700, gray800, gray900,
  charcoal100, charcoal200, charcoal300, charcoal400, charcoal500, charcoal600, charcoal700, charcoal800, charcoal900, charcoal950,
  blue100, blue200, blue300, blue400, blue500, blue600, blue700, blue800, blue900,
  purple100, purple200, purple300, purple400, purple500, purple600, purple700, purple800, purple900,
  purpleDark100, purpleDark200, purpleDark300, purpleDark400, purpleDark500, purpleDark600, purpleDark700, purpleDark800, purpleDark900,
  sky100,
  navy900,
  orange100, orange200, orange300, orange400, orange500, orange600, orange700, orange800, orange900,
  cream100, cream200, cream300, cream400,
  red100, red200, red300, red400, red500, red600,
  green400,
  yellow400,
  slider100, slider200,
  sunGlow100,
} = colors
