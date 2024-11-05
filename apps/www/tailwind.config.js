import repoConfig from "@repo/ui/tailwind.config"

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [repoConfig],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)'],
      },
    },
  },
  plugins: [],
}

