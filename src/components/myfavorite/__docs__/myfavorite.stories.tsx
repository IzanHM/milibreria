import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; // Importamos el componente Example

const meta: Meta<typeof Example> = {
  title: "MyFavorite",
  component: Example,
};
export default meta;

type Story = StoryObj<typeof Example>;

export const Enabled: Story = {
  args: {
    color: "primary", // Color del icono
    disabled: false, // El botón está habilitado
    onClick: () => alert("Favorite Icon Clicked!"), // Acción al hacer clic
  },
};

export const Disabled: Story = {
  args: {
    color: "secondary", // Color del icono
    disabled: true, // El botón está deshabilitado
  },
};