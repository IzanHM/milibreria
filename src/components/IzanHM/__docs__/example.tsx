import React from "react";
import IzanHM, { IzanHMProps } from "../IzanHM"; // Importamos IzanHM y sus props

// Creamos el componente Example al cual le pasaremos las props definidas
function Example(props: IzanHMProps) {
  return (
    <IzanHM
      nombre={props.nombre} // Pasamos la prop del nombre
      imagen={props.imagen} // Pasamos la prop de la imagen
      altImagen={props.altImagen} // Pasamos la prop del texto alternativo de la imagen
    />
  );
}

export default Example;