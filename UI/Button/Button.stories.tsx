import type { Meta, StoryObj } from "@storybook/react";
import {Button} from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DisableButton: Story = {
  args: {
    variant: "disabled",
    children: "Button",
  },
};

export const PrimaryButton: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};

export const NotFoundButton: Story = {
  args: {
    variant: "notFound",
    children: "Button",
  },
};
