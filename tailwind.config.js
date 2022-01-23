module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    borderWidth: {
      '3': '3px'
    },
    screens: {
      'sm': '576px',
      'md': '826px'
    },
    fontFamily: {
      'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        'primary-dark': '#263042',
        'primary': '#3A4A66',
        'primary-light': '#617aa5',
        'link': '#f08080',
        'background': '#d3d3d3'
      },
      spacing: {
        'main': '586px',
        'side': '240px',
        'md': '826px',
        'sheet-height': '1170px'
      }
    }
  },
  plugins: [],
}
