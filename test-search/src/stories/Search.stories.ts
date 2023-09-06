import type { Meta, StoryObj } from "@storybook/react";

import { Search } from "../Search";

const meta = {
  title: "Example/Page",
  component: Search,
  tags: ["autodocs"],
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [
      { id: "1", value: "test" },
      { id: "2", value: "overtest" },
      { id: "3", value: "search" },
    ],
  },
};

export const Colored: Story = {
  args: {
    color: "green",
    items: [
      { id: "1", value: "test" },
      { id: "2", value: "overtest" },
    ],
  },
};

export const Small: Story = {
  args: {
    width: 300,
    items: [
      { id: "1", value: "test" },
      { id: "2", value: "overtestovertestovertestovertestovertestovertest" },
    ],
  },
};
