/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  darkMode: 'class',
  theme: {
    fontFamily: {
      roboto_mono: ['Roboto-Mono'],
      roboto_mono_italic: ['Roboto-Mono-Italic'],
      roboto_mono_thin: ['Roboto-Mono-Thin'],
      roboto_mono_thin_italic: ['Roboto-Mono-ThinItalic'],
      roboto_mono_medium: ['Roboto-Mono-Medium'],
      roboto_mono_mediumitalic: ['Roboto-Mono-MediumItalic'],
      roboto_mono_bold: ['Roboto-Mono-Bold'],
      roboto_mono_bold_italic: ['Roboto-Mono-BoldItalic'],
      space_mono: ['Space-Mono'],
      space_mono_italic: ['Space-Mono-Italic'],
      space_mono_bold: ['Space-Mono-Bold'],
      space_mono_bold_italic: ['Space-Mono-BoldItalic'],
      space_grotesk: ['Space-Grotesk'],
      space_grotesk_light: ['Space-Grotesk-Light'],
      space_grotesk_medium: ['Space-Grotesk-Medium'],
      space_grotesk_bold: ['Space-Grotesk-Bold'],
    },
    extend: {
      colors: {
        'no-border': 'rgba(0, 0, 0, 0.3)',
        'campfire-blue': { 
          DEFAULT: '#2ca9bc',
          '50': '#eff6ff',
          '100': '#d7ecf0',
          '200': '#afd9e1',
          '300': '#6cbccb',
          '400': '#2ca9bc',
          '500': '#008396',
          '600': '#006072',
          '700': '#004e60',
          '800': '#003e4f',
          '900': '#00212f',
        },
        'campfire-neutral': {
          DEFAULT: '#a3a3a3',
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
          'light': '#c4b5fd',
          'dark': "#6d28d9",
          'darker': "#581c87",
          'darkest': "#2e1065",
          '300': '#c4b5fd',
          '500': "#8b5cf6",
          '700': "#6d28d9",
          '900': "#4c1d95",
          '950': "#2e1065",
        },
        'campfire-green': {
          DEFAULT: '#22c55e',
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
        'dashboard': '3em, auto',
        'dashboard-mobile': 'auto',
        'layout-dashboard-home': 'minmax(32em, auto)',
        'layout-dashboard-home-mobile': 'auto',
        'layout-dashboard-code': 'minmax(22em, 28em), minmax(23em, auto)',
        'layout-dashboard-code-mobile': 'auto',
        'layout-dashboard-code-editor': 'minmax(100px, 200px), minmax(20em, auto)',
        'layout-dashboard-code-editor-mobile': 'auto',
        'layout-dashboard-categories': 'minmax(10em, 20em), auto',
        'layout-dashboard-categories-mobile': 'auto',
        'layout-dashboard-categories-container': 'auto',
        'layout-dashboard-categories-container-mobile': 'auto',
        'layout-dashboard-calender': 'auto',
        'layout-dashboard-calender-mobile': 'auto',
        'layout-dashboard-docs': 'auto',
        'layout-dashboard-docs-mobile': 'auto',
        'layout-dashboard-notes': 'auto',
        'layout-dashboard-notes-mobile': 'auto',
        'layout-dashboard-settings': 'auto',
        'layout-dashboard-settings-mobile': 'auto',
      },
      gridTemplateRows: {
        'dashboard': '2.5em, minmax(28em, auto)',
        'dashboard-extended': '2.5em, minmax(44.5em, auto)',
        'dashboard-mobile': '3em, 3em, 28em, auto, auto, auto',
        'dashboard-no-language': 'minmax(28em, auto)',
        'dashboard-no-language-extended': 'minmax(28em, auto)',
        'dashboard-no-language-mobile': '3em, 28em, auto, auto, auto',
        'layout-dashboard-home': 'minmax(29.6em, auto)',
        'layout-dashboard-home-mobile': '28em, auto, auto, auto',
        'layout-dashboard-code': '3.2em, 25em, minmax(15.8em, auto)',
        'layout-dashboard-code-mobile': '3em, minmax(20em, auto), minmax(22em, auto), minmax(10em, auto)',
        'layout-dashboard-code-editor': '28.2em, minmax(15.8em, auto)',
        'layout-dashboard-code-editor-mobile': 'minmax(20em, auto), minmax(22em, auto), minmax(10em, auto)',
        'layout-dashboard-categories': 'auto',
        'layout-dashboard-categories-mobile': ' auto',
        'layout-dashboard-categories-container': 'minmax(35.7em, auto)',
        'layout-dashboard-categories-container-mobile': 'auto',
        'layout-dashboard-calender': 'auto',
        'layout-dashboard-calender-mobile': 'auto',
        'layout-dashboard-docs': 'auto',
        'layout-dashboard-docs-mobile': 'auto',
        'layout-dashboard-notes': 'auto',
        'layout-dashboard-notes-mobile': 'auto',
        'layout-dashboard-settings': 'auto',
        'layout-dashboard-settings-mobile': 'auto',
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
