import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; // Importamos el componente Example

const meta: Meta<typeof Example> = {
  title: "MyButton",
  component: Example,
};
export default meta;

type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    text: "Button primary",
    txtcolor: "black",
    bgcolor: "green",
    disabled: false,
    size: "small",
    bordercolor: "black",
    hoverTxtColor: "yellow",
    hoverBgColor: "blue",
    onClick: () => alert("Button Primary"),
  },
};

export const Secondary: Story = {
  args: {
    text: "Button secondary",
    txtcolor: "white",
    bgcolor: "pink",
    disabled: false,
    size: "small",
    bordercolor: "black",
    hoverTxtColor: "blue",
    hoverBgColor: "yellow",
    onClick: () => alert("Button secondary"),
  },
};