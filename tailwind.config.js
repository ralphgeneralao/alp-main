/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2680eb',
        'dark-gray': '#4b4b4b',
        'light-gray-0': '#eaeaea',
        'light-gray-1': 'rgb(75,75,75)',
        'light-gray-2': 'rgb(128,128,128)',
        'renderer-gray': 'rgb(224, 224, 224)',
        red: '#e34850',
        'green-400': '#2d9d78',
        'green-500': '#268e6c',
      },
    },
  },
  corePlugins: {
    // this is will disable their own implementation of tailwind normalize.css
    preflight: false,
  },
  plugins: [],
};
