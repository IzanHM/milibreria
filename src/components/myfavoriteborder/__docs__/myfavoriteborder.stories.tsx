import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; // Importamos el componente Example

const meta: Meta<typeof Example> = {
  title: "MyFavoriteBorder", // Título en Storybook
  component: Example, // Componente que estamos documentando
};
export default meta;

type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    color: "primary", // Color del icono
    disabled: false, // Estado habilitado
    onClick: () => alert("Favorite Border Clicked"), // Función onClick
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary", // Color del icono
    disabled: false, // Estado habilitado
    onClick: () => alert("Favorite Border Clicked"), // Función onClick
  },
};

export const Disabled: Story = {
  args: {
    color: "default", // Color del icono
    disabled: true, // Estado deshabilitado
    onClick: () => alert("This should not be clickable"), // Función onClick
  },
};