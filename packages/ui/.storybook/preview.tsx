import React from "react";
import type { Preview } from "@storybook/react";
import { withNextThemes } from "./decorators/with-next-themes";

import "../src/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true, // table of contents
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    withNextThemes({
      themes: {
        light: "light",
        dark: "dark",
        system: "system",
      },
      attribute: "class",
      defaultTheme: "system",
      // All next-themes properties can be configured directly here
      enableSystem: true,
      disableTransitionOnChange: true,
    }),
  ],
};

export default preview;
