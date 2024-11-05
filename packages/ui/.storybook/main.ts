import type { StorybookConfig } from "@storybook/experimental-nextjs-vite";

import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [// getAbsolutePath("@storybook/addon-webpack5-compiler-swc"),
  getAbsolutePath("@storybook/addon-onboarding"), getAbsolutePath("@storybook/addon-essentials"), // getAbsolutePath("@chromatic-com/storybook"),
  getAbsolutePath("@storybook/addon-interactions"), getAbsolutePath("@storybook/addon-themes")],
  framework: '@storybook/experimental-nextjs-vite',
  // framework: {
  //   name: getAbsolutePath("@storybook/react-webpack5"),
  //   options: {},
  // },
  features: {
    experimentalRSC: true,
  },
  managerHead: head => `
    ${head}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet">
  `,
};
export default config;
