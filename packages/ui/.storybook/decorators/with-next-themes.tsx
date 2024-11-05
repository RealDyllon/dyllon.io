import React from "react";
import { DecoratorHelpers } from "@storybook/addon-themes";
import { ThemeProvider, type ThemeProviderProps } from "next-themes";
import { DecoratorFunction, Renderer } from "storybook/internal/types";

type NextThemesDecorator = Omit<
  ThemeProviderProps,
  "forcedTheme" | "defaultTheme" | "themes"
> & {
  themes: Record<string, string>;
  defaultTheme: string;
};

export const withNextThemes = <TRenderer extends Renderer = Renderer>({
  themes,
  defaultTheme,
  ...props
}: NextThemesDecorator): DecoratorFunction<TRenderer> => {
  const { initializeThemeState, pluckThemeFromContext, useThemeParameters } =
    DecoratorHelpers;

  initializeThemeState(Object.keys(themes), defaultTheme);

  return (story, context) => {
    const { themeOverride } = useThemeParameters();
    const selectedTheme = pluckThemeFromContext(context);
    const selected = themeOverride || selectedTheme || defaultTheme;

    return (
      <ThemeProvider
        forcedTheme={selected}
        defaultTheme={defaultTheme}
        {...props}
      >
        <>{story()}</>
      </ThemeProvider>
    );
  };
};
