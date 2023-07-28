/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     fontFamily:{
      "rem": ["rem"],
      "inter":["inter"]
     },
     colors:{
      primaryColor:'#0072F6',
      darkPrimary:"#0063d5",
      secondaryColor:"#0063d5",
      headingText:'#FFFFFF',
      normalText:"rgb(107 114 128) "

     }
    },
  },
  plugins: [],
}
