module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(0, 122, 63)',
        primary_dark_1: 'rgb(0, 77, 30)',
        primary_dark_2: 'rgb(0, 77, 40)',
        primary_light_2: 'rgb(0, 179, 92)',
        primary_light_1: 'rgb(0, 230, 119)',
        secondary: 'rgb(216, 26, 29)',
        secondary_dark_1: 'rgb(114, 14, 15)',
        secondary_dark_2: 'rgb(159, 19, 21)',
        grey_dark_0: '#222',
        grey_dark_1: '#333',
        grey_dark_2: '#777',
        grey_dark_3: '#999',
        gray_light_1: '#f4f2f2',
        gray_light_2: '#f3f3f3',
        gray_light_4: 'rgb(240, 238, 238)',
        gray_light_3: '#cccccc',
      },
      fontSize: {
        medium: [
          '0.945rem',
          {
            lineHeight: '1.275rem',
          },
        ],
      },
    },
    fontFamily: {
      workSans: ['Work Sans', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      openSans: ['Open Sans', 'sans-serif'],
      notoSerifJP: ['Noto Serif JP', 'serif'],
      notoSerif: ['Noto Serif', 'serif'],
    },
  },
  variants: {
    extend: {
      padding: ['hover'],
      display: ['hover'],
      borderWidth: ['hover', 'focus'],
      visibility: ['hover', 'group-hover'],
      inset: ['hover', 'group-hover'],
      borderWidth: ['responsive', 'last', 'hover', 'focus'],
      margin: ['last', 'hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}
