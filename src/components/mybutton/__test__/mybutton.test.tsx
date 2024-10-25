import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyButton from "../mybutton"; // Importo mi componente MyButton

describe("MyButton component", () => {
  it("El botón se debería renderizar correctamente", () => {
    render(
      <MyButton
        text="Hola"
        txtcolor="white"
        bgcolor="orange"
        bordercolor="black"
        borderwidth="2px"
        hoverTxtColor="yellow"
        hoverBgColor="blue"
      />
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});