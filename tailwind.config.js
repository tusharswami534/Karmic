/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('./assets/image/webp/hero-bg-layer.webp')",
        'project-image': "url('./assets/image/png/project-bg-layer.png')",
      },
      backgroundSize:{
        'hero-set' :'100% 726px'
      },
      fontFamily: {
        'sunflower': ['"Sunflower"', 'sans-serif'],
      },
      colors: {
        'light-black': '#1E1E1E',
        'sky-blue' : '#AFE5FF',
        'gray' : '#4D4D4D',
      },
    },
  },
  plugins: [],
}