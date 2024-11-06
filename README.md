# dyllon.io

This monorepo includes the following packages and apps:

### Apps and Packages

- `api`: an [Express](https://expressjs.com/) server
- `www`: a [Next.js](https://nextjs.org/) app for [www.dyllon.io](https://www.dyllon.io)
- `@repo/config-eslint`: ESLint configurations used throughout the monorepo
- `@repo/config-typescript`: ESLint configurations used throughout the monorepo
- `@repo/jest-presets`: Jest configurations
- `@repo/logger`: isomorphic logger (a small wrapper around console.log)
- `@repo/ui`: a UI libary with storybook used across apps.

### Utilities

This repo uses the following tools:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
- [Turborepo](https://turbo.build) for managing the monorepo
