import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    screens: {
      'base': '250px',
      'sm': '640px',
      'md': '760px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    colors: {
      'bgBlack':'#010101',
      'skyblue':'#00ADB5',
      'navBlack':'#0C0D0F',
      'grey':'#ABB2BF',
      'Gray':'#393E46',
      'light':'#EEE',
    },


    extend: {

      fontFamily: {
        'poppins':'Poppins',
        'roboto':'Roboto',
        'fira': ['Fira Code', 'monospace'],
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
