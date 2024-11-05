import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./calendar";

const meta: Meta<typeof Calendar> = {
  title: "UI/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "select",
      options: ["single", "multiple", "range"],
    },
    captionLayout: {
      control: "select",
      options: ["label", "dropdown", "dropdown-months", "dropdown-years"],
    },
    fixedWeeks: {
      control: "boolean",
    },
    footer: {
      control: "text",
    },
    // hideWeekdayRow: {
    //   control: "boolean",
    // },
    numberOfMonths: {
      control: "number",
    },
    showOutsideDays: {
      control: "boolean",
    },
    showWeekNumber: {
      control: "boolean",
    },
    defaultMonth: {
      control: "date",
    },
    disabled: {
      control: "object",
    },
    selected: {
      control: "object",
    },
    required: {
      control: "boolean",
    },
    onSelect: {
      action: "onSelect",
    },
    // timeZone: {
    //   control: "text",
    // },
    locale: {
      control: "text",
    },
    weekStartsOn: {
      control: "number",
    },
    firstWeekContainsDate: {
      control: "number",
    },
    ISOWeek: {
      control: "boolean",
    },
    labels: {
      control: "object",
    },
    formatters: {
      control: "object",
    },
    dir: {
      control: "select",
      options: ["rtl", "ltr"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {
    className: "rounded-md border",
  },
};

export const WithSelectedDate: Story = {
  args: {
    className: "rounded-md border",
    selected: new Date(),
  },
};

export const RangeSelection: Story = {
  args: {
    className: "rounded-md border",
    mode: "range",
    selected: {
      from: new Date(),
      to: new Date(new Date().setDate(new Date().getDate() + 7)),
    },
  },
};
