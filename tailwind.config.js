module.exports = {
mode: 'jit',
darkMode: false,
theme: {
    screens: {
        'xs': '375px',
        sm: '425px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
    },
    fontFamily: {
        'body': ['"Gilroy"', 'ui-sans-serif', 'system-ui', 'Helvetica Neue', 'Helvetica']
    },
    extend: {
        colors: {
            white: {
                DEFAULT: '#FFFFFF',
                100: '#F5F5FA',
                200: '#EAEAEA',
                300: '#DFDFDF'
            },
            gray: {
                900: '#E6E6E6',
                800: '#D9D9D9',
                DEFAULT: '#A4A4B1',
            },
            black: {
                DEFAULT: '#000000',
                900: '#101010',
            },
            transparent: {
                DEFAULT: "transparent",
            },
            warning: {
                DEFAULT: '#E83100',
            },
            success: {
                DEFAULT: '#00c34e',
            },
            pending: {
                DEFAULT: '#edc307'
            }
        },
        height: {
            '104': '24rem',
            '112': '28rem',
        },
        opacity: {
            '5': '5',
        }, 
        zIndex: {
            '-10': '-10',
            '-20': '-20',
            '-30': '-30',
            '-40': '-40',
            '-50': '-50',
        },
        scale: {
            '200': '2',
            '250': '2.5',
            '275': '2.75',
            '300': '3',
        },
        borderWidth: {
            '3': '3px',
        },
        dropShadow: {
            'card': '0 30px 30px rgba(0, 0, 0, 0.1)',
        },
        opacity: {
            '5': '.05',
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
            '1/12': '8.333333%',
            '1/10': '10%',
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
            '16/9': '56.25%',
            'full': '100%',
            '2/1': '200%',
            '3/2': '150%',
            '5/4': '125%',
        },
        
    },
},
variants: {
    extend: {},
},
plugins: [],
}