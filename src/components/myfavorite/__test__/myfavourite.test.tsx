import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyFavorite from "../myfavorite"; // Importamos el componente MyFavorite

describe("MyFavourite component", () => {
  it("El icono de favorito se debería renderizar correctamente", () => {
    render(<MyFavorite color="primary" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("El botón de favorito debería estar deshabilitado si se pasa la prop disabled", () => {
    render(<MyFavorite color="secondary" disabled={true} />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});