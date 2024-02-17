import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF4E0', // Pale shade of orange
          100: '#FFE4B3', // Lighter orange
          200: '#FFD386', // Light orange
          300: '#FFC259', // Medium light orange
          400: '#FFB036', // Slightly muted orange
          500: '#FF9F1C', // Bright orange (base color)
          600: '#E68A17', // Darker bright orange
          700: '#CC7513', // Deep orange
          800: '#B3600F', // Very deep orange
          900: '#994B0B', // Darkest orange
        },
        secondary: {
          50: '#FFF7E5', // Very pale orange
          100: '#FFEBCB', // Lighter light orange
          200: '#FFDFB1', // Light light orange
          300: '#FFD397', // Medium light orange
          400: '#FFC77D', // Slightly muted light orange
          500: '#FFBF69', // Light orange (base color)
          600: '#E6AB5F', // Darker light orange
          700: '#CC9755', // Deep light orange
          800: '#B3834B', // Very deep light orange
          900: '#996F41', // Darkest light orange
        },
        tertiary: {
          50: '#F4EDE7', // Very pale pink
          100: '#E8DBD0', // Lighter muted pink
          200: '#DCB9A9', // Light muted pink
          300: '#D0A883', // Medium muted pink
          400: '#C4975D', // Slightly muted pink
          500: '#CB997E', // Muted pink (base color)
          600: '#B77F6E', // Darker muted pink
          700: '#A3655E', // Deep muted pink
          800: '#8F4B4E', // Very deep muted pink
          900: '#7B313E', // Darkest muted pink
        },
        quaternary: {
          50: '#FFFFFF', // Almost white
          100: '#FFFDFB', // Very pale peach
          200: '#FFFBF7', // Lighter pale peach
          300: '#FFF9F3', // Light pale peach
          400: '#FFF7EF', // Medium pale peach
          500: '#FFE8D6', // Pale peach (base color)
          600: '#E6D1C0', // Darker pale peach
          700: '#CCBAAA', // Deep pale peach
          800: '#B3A394', // Very deep pale peach
          900: '#998C7E', // Darkest pale peach
        },
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
};
export default config;
