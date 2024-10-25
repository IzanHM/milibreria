import React from "react";
import MyButton, { MyButtonProps } from "../mybutton"; // Importamos MyButton y las props

// Creamos el componente Example al cual le pasaremos las props definidas
function Example(props: MyButtonProps) {
  return (
    <MyButton
      text={props.text}
      bgcolor={props.bgcolor}
      txtcolor={props.txtcolor}
      bordercolor={props.bordercolor}
      borderwidth={props.borderwidth}
      size={props.size}
      hoverTxtColor={props.hoverTxtColor}
      hoverBgColor={props.hoverBgColor}
      disabled={props.disabled}
      onClick={props.onClick}
    />
  );
}
export default Example;