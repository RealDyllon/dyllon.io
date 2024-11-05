import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";

const meta: Meta<typeof Avatar> = {
  title: "UI/Avatar",
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    children: (
      <>
        <AvatarImage src="https://github.com/RealDyllon.png" alt="Avatar" />
        <AvatarFallback>AB</AvatarFallback>
      </>
    ),
  },
};

export const Fallback: Story = {
  args: {
    children: <AvatarFallback>AB</AvatarFallback>,
  },
};
