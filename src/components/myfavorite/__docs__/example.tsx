import React from "react";
import MyFavorite, { MyFavoriteProps } from "../myfavorite"; // Importamos MyFavourite y sus props

// Creamos el componente Example al cual le pasaremos las props definidas
function Example(props: MyFavoriteProps) {
  return (
    <MyFavorite
      color={props.color} // Pasamos la prop del color del icono
      disabled={props.disabled} // Prop opcional para deshabilitar el botón
      onClick={props.onClick} // Función onClick opcional
    />
  );
}

export default Example;