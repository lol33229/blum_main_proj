/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/module/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
      extend: {
        screens: {
          sm: '640px', // оставляем без изменений
          md: '800px', // переопределяем md на 800px
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
          // Добавить свой breakpoint
          xxl: '1800px', // например, для сверхшироких экранов
    },
  },
},
  plugins: [],
}