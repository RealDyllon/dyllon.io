import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "./aspect-ratio";

const meta: Meta<typeof AspectRatio> = {
  title: "UI/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  args: {
    ratio: 16 / 9,
    children: (
      <img
        alt="placeholder"
        className="rounded-md object-cover"
        src="https://unsplash.com/photos/_QnPkc4C6E4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fGJlYWNofGVufDB8MHx8fDE3MzA4MDI1MTF8MA&w=1920"
      />
    ),
  },
};

export const Square: Story = {
  args: {
    ratio: 1,
    children: (
        <img
        alt="placeholder"
        className="rounded-md object-cover"
        src="https://unsplash.com/photos/_QnPkc4C6E4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fGJlYWNofGVufDB8MHx8fDE3MzA4MDI1MTF8MA&w=1920"
      />
    ),
  },
};

export const Custom: Story = {
  args: {
    ratio: 4 / 3,
    children: (
        <img
        alt="placeholder"
        className="rounded-md object-cover"
        src="https://unsplash.com/photos/_QnPkc4C6E4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fGJlYWNofGVufDB8MHx8fDE3MzA4MDI1MTF8MA&w=1920"
      />
    ),
  },
};
