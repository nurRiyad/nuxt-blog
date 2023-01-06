// remember to fix this issue wint the tailwind/nuxt
// https://github.com/tailwindlabs/tailwindcss-intellisense/issues/663#issuecomment-1316788128

module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
