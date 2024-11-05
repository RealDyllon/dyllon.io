import repoConfig from "@repo/ui/tailwind.config"

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [repoConfig],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)'],
      },
    },
  },
  plugins: [],
}

