import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import IzanHM from "../IzanHM"; // Importamos el componente IzanHM

describe("IzanHM component", () => {
  it("El avatar y el nombre deberían renderizarse correctamente", () => {
    render(<IzanHM nombre="Izan" imagen="/path/to/image.jpg" altImagen="Avatar de Izan" />);
    
    // Comprobamos si el avatar se renderiza
    const avatar = screen.getByAltText("Avatar de Izan");
    expect(avatar).toBeInTheDocument();

    // Comprobamos si el nombre se renderiza correctamente
    const name = screen.getByText("Izan");
    expect(name).toBeInTheDocument();
  });
});