module.exports = {
  content: [
    './index.html',
    './**/*.html',
    './node_modules/flowbite/**/*.js' // Pastikan Flowbite di-scan
  ],
  theme: {
    screens: {
      sm1: '380px',
      sm2: '500px',
      md1: '688px',
      md2: '788px',
      lg1: '976px',
      lg2: '1276px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ]
};
