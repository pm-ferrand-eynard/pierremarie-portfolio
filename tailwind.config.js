module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors:{
        'yellow':'#F3E753',
        'green':'#B6D3B9',
        'blue':'#81C3D1',
        'pink':'#BA597E'
      },
      fontFamily:{
        inconsolata: ['Inconsolata', 'monospace']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}