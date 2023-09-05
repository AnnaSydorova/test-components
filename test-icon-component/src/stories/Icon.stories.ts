import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "../Icon";

const meta = {
  title: "App/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "star",
  },
};

export const Success: Story = {
  args: {
    name: "star",
    color: "green",
  },
};

export const Large: Story = {
  args: {
    name: "star",
    size: 30,
  },
};
