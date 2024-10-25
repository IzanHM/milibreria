import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyFavoriteBorder from "../myfavoriteborder"; // Importamos el componente MyFavoriteBorder

describe("MyFavoriteBorder component", () => {
  it("El icono de favorito bordeado se debería renderizar correctamente", () => {
    render(<MyFavoriteBorder color="primary" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("El botón de favorito bordeado debería estar deshabilitado si se pasa la prop disabled", () => {
    render(<MyFavoriteBorder color="secondary" disabled={true} />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});