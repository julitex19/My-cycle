/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        100: "100px",
      },
       backgroundColor: {
        '5760fd': '#5760fd',
      },
         fontFamily: {
           dancing: ['"Dancing Script"', 'cursive'],
           pathway: ['Pathway Extreme', 'sans'],
           'marck-script': ['"Marck Script"', 'cursive'],
          'major-mono': ['"Major Mono Display"', 'monospace']
      },
    },
  },
  plugins: [],
};
