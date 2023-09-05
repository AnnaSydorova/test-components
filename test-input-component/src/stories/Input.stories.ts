import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "../Input";

const meta = {
  title: "App/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: "Enter some text",
  },
};

export const Email: Story = {
  args: {
    placeholder: "Email",
    type: "email",
  },
};

export const Password: Story = {
  args: {
    placeholder: "Password",
    type: "password",
  },
};
