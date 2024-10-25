import React from "react";
import MyFavoriteBorder, { MyFavoriteBorderProps } from "../myfavoriteborder"; // Importamos MyFavoriteBorder y sus props

// Creamos el componente Example al cual le pasaremos las props definidas
function Example(props: MyFavoriteBorderProps) {
  return (
    <MyFavoriteBorder
      color={props.color} // Pasamos la prop del color del icono
      disabled={props.disabled} // Prop opcional para deshabilitar el botón
      onClick={props.onClick} // Función onClick opcional
    />
  );
}

export default Example;