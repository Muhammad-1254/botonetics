/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
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
      secondaryColor:"rgb(38 38 38 / 0.8)",
      headingText:'#FFFFFF',
      normalText:"rgb(107 114 128)",
      bg:'black'

     }
    },
  },
  plugins: [
    require('@kamona/tailwindcss-perspective'),
  ],
}
