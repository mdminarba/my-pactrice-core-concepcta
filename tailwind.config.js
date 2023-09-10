/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#3a8405",
        
"secondary": "#3651d8",
        
"accent": "#e69ced",
        
"neutral": "#201627",
        
"base-100": "#ecf0f4",
        
"info": "#88a9dd",
        
"success": "#24db86",
        
"warning": "#a75c11",
        
"error": "#e67091",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

