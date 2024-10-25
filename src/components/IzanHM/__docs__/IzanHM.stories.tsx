import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; // Importamos el componente Example

const meta: Meta<typeof Example> = {
  title: "IzanHM", // Título en Storybook
  component: Example, // Componente que estamos documentando
};
export default meta;

type Story = StoryObj<typeof Example>;

export const DefaultAvatar: Story = {
  args: {
    nombre: "Izan Hernández", // Nombre del usuario
    imagen: "/path-to-image.jpg", // URL de la imagen del avatar
    altImagen: "Avatar de Izan Hernández", // Texto alternativo de la imagen
  },
};

export const CustomAvatar: Story = {
  args: {
    nombre: "Ana García", // Otro nombre de usuario
    imagen: "", // Sin imagen (avatar predeterminado)
    altImagen: "Avatar de Ana García", // Diferente texto alternativo
  },
};

export const NoImageAvatar: Story = {
  args: {
    nombre: "Carlos Pérez", // Nombre del usuario
    imagen: "", // Sin imagen (avatar predeterminado)
    altImagen: "Avatar de Carlos Pérez", // Texto alternativo de la imagen
  },
};