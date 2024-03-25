// remember to fix this issue wint the tailwind/nuxt
// https://github.com/tailwindlabs/tailwindcss-intellisense/issues/663#issuecomment-1316788128

module.exports = {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      fontFamily: {
        spacegrotesk: ['Space Grotesk', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        'hoppr-black': '#23272A',
        'hoppr-green': '#00cca5',
        'hoppr-red': '#F85352',
        'hoppr-purple': '#2F2D85',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
