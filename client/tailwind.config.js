const colors = require('tailwindcss/colors')

module.exports = {
  //enabled: true,
 // mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // class, 'media' or boolean
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      },
      spacing: {
        80:'13rem',
        82: '15rem',
        83:'16rem',
        88: '20rem',
        90: '22rem',
      },
      animation: {
        fade: 'fadeIn  .5s ease-in-out',
        fadeOut: 'fadeOut  .5s ease-out',
        motionSafe: 'motion-safe',
      },
  
      keyframes: theme => ({
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      }),
    },
  },
  variants: {
      extend: {
        backgroundColor: ['active'],
        fontSize: ['hover','focus','active'],
        fontWeight: ['hover','focus','active'],
        textColor: ['visited','focus','active'],
        scale: ['responsive', 'hover', 'focus'],
        translate: ['responsive', 'hover', 'focus'],
        animation: ['motion-safe'],
        fill: ['hover'],
        stroke: ['hover'],
        outline: ['hover', 'active', 'focus'],
        gridColumn: ['responsive', 'hover'],
        gridColumnStart: ['responsive', 'hover'],
        gridColumnEnd: ['responsive', 'hover'],
      }
    },
  plugins: [],
};


//variants: {
  //   extend: {
  //     backgroundColor: ['active'],
  //     fontSize: ['hover','focus','active'],
  //     fontWeight: ['hover','focus','active'],
  //     textColor: ['visited','focus','active'],
  //     scale: ['responsive', 'hover', 'focus'],
  //     translate: ['responsive', 'hover', 'focus'],
  //     animation: ['motion-safe'],
  //     fill: ['hover'],
  //     stroke: ['hover'],
  //     outline: ['hover', 'active', 'focus'],
  //   }
  // },
  // plugins: [],