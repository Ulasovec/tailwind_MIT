module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      text: {
        'index': 'calc(100px*1)',
      },

    },
  },
  plugins: [require('@tailwindcss/forms'),require('tw-elements/dist/plugin'),],
}
