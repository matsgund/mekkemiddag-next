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
          50: '#FAF9F5', // Antique White, lightest
          100: '#F8F6EB', // Lighter Antique White
          200: '#F6F4E1', // Light Antique White
          300: '#F4F2D7', // Medium Light Antique White
          400: '#F2F0CD', // Slightly Muted Antique White
          500: '#F4F1DE', // Antique White (base color)
          600: '#DAD7C3', // Darker Antique White
          700: '#C0BEA8', // Deep Antique White
          800: '#A6A58D', // Very Deep Antique White
          900: '#8C8C72', // Darkest Antique White
        },
        secondary: {
          50: '#fdf5f3',
          100: '#fbeae5',
          200: '#f9d8cf',
          300: '#f3bcae',
          400: '#eb957e',
          500: '#e07a5f',
          600: '#ca5738',
          700: '#a9462c',
          800: '#8d3c27',
          900: '#753727',
          950: '#3f1a10',
      },
        tertiary: {
          50: '#f5f6f9',
          100: '#e7eaf2',
          200: '#d5dae8',
          300: '#b8c2d8',
          400: '#95a3c5',
          500: '#7c89b5',
          600: '#6a73a6',
          700: '#5e6497',
          800: '#50547d',
          900: '#3d405b',
          950: '#2c2d3f',
        },
        quaternary: {
          50: '#f4f9f6',
          100: '#dcebe3',
          200: '#b9d6c6',
          300: '#81b29a',
          400: '#669b82',
          500: '#4c8069',
          600: '#3b6654',
          700: '#325345',
          800: '#2b443a',
          900: '#273a33',
          950: '#13201c', 
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
