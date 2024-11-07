import type { Meta, StoryObj } from "@storybook/react";
import { ThemeToggle } from "./theme-toggle";

const meta: Meta<typeof ThemeToggle> = {
  title: "Theme/ThemeToggle",
  component: ThemeToggle,
  // tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {
  args: {},
};
