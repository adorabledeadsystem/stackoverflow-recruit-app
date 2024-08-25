import type { Meta, StoryObj } from "@storybook/react";
import ArrowButton from "./ArrowButton";

const meta = {
  title: "UI/ArrowButton",
  component: ArrowButton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ArrowButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NextArrowButton: Story = {
  args: {
    onClick: () => {},
    type: "next"
  },
};

export const PrevArrowButton: Story = {
  args: {
    onClick: () => {},
    type: "prev"
  },
};
