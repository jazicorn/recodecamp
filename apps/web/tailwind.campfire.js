/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  darkMode: 'class',
  theme: {
    fontFamily: {
      gro: ['Space Grotesk', 'sans-serif'],
      mono: ['Space Mono', 'monospace'],
      vt: ['VT323', 'monospace'],
    },
    extend: {
      colors: {
        'no-border': 'rgba(0, 0, 0, 0.3)',
        'campfire-blue': { 
          DEFAULT: '#2ca9bc',
          '100': '#d7ecf0',
          '200': '#afd9e1',
          '300': '#6cbccb',
          '500': '#008396',
          '600': '#006072',
          '700': '#004e60',
          '800': '#003e4f',
          '900': '#00212f',
        },
        'campfire-neutral': {
          '50': '#fafafa',
          '100': '#f5f5f5',
          '200': '#e5e5e5',
          '300': '#d4d4d4',
          '400': '#a3a3a3',
          '500': '#737373',
          '600': '#525252',
          '700': '#404040',
          '800': '#262626',
          '900': '#171717',
        },
        'campfire-purple': {
          DEFAULT: '#8b5cf6',
        }
      },
       backgroundImage: {
         'sw-1': "url('./src/assets/bg/sw-1.jpg')",
         'sw-2': "url('./src/assets/bg/sw-2.jpg')",
         'sw-3': "url('./src/assets/bg/sw-3.jpg')",
         'nature': "url('./src/assets/bg/nature.jpg')",
      },
      brightness: {
        15: '.15',
        25: '.25',
        40: '.40',
        65: '.65',
        175: '1.75',
      },
      backdropBrightness: {
        15: '.15',
        25: '.25',
        40: '.40',
        65: '.65',
        175: '1.75',
      },
      contrast: {
        25: '.25',
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        'dashboard': '3em auto auto minmax(10em, 17em)',
      },
      gridTemplateRows: {
        // Complex site-specific column configuration
        'dashboard': '2.5em, 65%, 30%',
        'learn': '70%, 30%',
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *')
      addVariant('child-hover', '& > *:hover')
      addVariant('h1', '& h1')
      addVariant('h2', '& h2')
      addVariant('h3', '& h3')
      addVariant('h4', '& h4')
      addVariant('h5', '& h5')
      addVariant('h6', '& h6')
      addVariant('p', '& p')
      addVariant('svg', '& svg')
    },
  ],
}
