const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: {
    enabled: false,    
    content: ["./dist/**/*.liquid"], 
  },
  darkMode: false, // or 'media' or 'class'

  theme: {
    screens: {
      'xs': '375px',
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '2560px',
    },

    colors: {
      carmine: {
        DEFAULT: '#E90101',
        500: '#AD0000',
        600: '#790303',
      },
      white: {
        DEFAULT: '#FFFFFF',
        100: '#F5F5F5',
        200: '#EBEBEB',
      },
      black: {
        300: '#2b2b2b',
        200: '#171717',
        100: '#101010',
        DEFAULT: '#000000',
      },
      gray: {
        light: "#BFBFBF",
        DEFAULT: "#7D7D7D",
      },
      transparent: {
        DEFAULT: "transparent",
      },
    },
    fontFamily: {
      'body': ['Gilroy', 'Calibri', 'sans-serif'],
    },
    extend: {
      maxHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
       },
       zIndex: {
        '-10': '-10',
       },
       scale: {
         '200': '2',
         '250': '2.5',
         '275': '2.75',
         '300': '3'
       },
       spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/24': '4.1666666%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        'full': '100%',
        '2/1': '200%',
        '3/2': '150%',
        '5/4': '125%',
        '16/9': '56.25%',
        '85vh': '85vh',
       },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
 
    plugin(function({ addUtilities }) {
      let utils = {
        '.text-vertical': {
          writingMode: 'vertical-rl',
        },
      }

      addUtilities(utils, {
        variants: ['responsive'],
      })
    }),

    plugin(({ addVariant, e }) => {
      addVariant('before', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`before${separator}${className}`)}::before`;
        });
      });
      addVariant('after', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`after${separator}${className}`)}::after`;
        });
      });
    }),
    plugin(({ addUtilities }) => {
      const contentUtilities = {
        '.content': {
          content: 'attr(data-content)',
        },
        '.content-before': {
          content: 'attr(data-before)',
        },
        '.content-after': {
          content: 'attr(data-after)',
        },
      };

      addUtilities(contentUtilities, ['before', 'after']);
    }),
    // plugin(function({addBase, config}) {
    //     addBase({
    //         'container-0': {width: '100%'}

    //     })
    // })
    // require('./plugins/filters'),

    // plugin(function({ addBase, config }) {
    //   addBase({
    //     'h1': { fontSize: config('theme.fontSize.2xl') },
    //     'h2': { fontSize: config('theme.fontSize.xl') },
    //     'h3': { fontSize: config('theme.fontSize.lg') },
    //     // 'pb-4/5': { paddingBottom: '125%'},
    //   })
    // })
  ]
}
