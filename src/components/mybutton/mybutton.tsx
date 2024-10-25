import { MouseEventHandler } from 'react';
import Button from '@mui/material/Button';

// Declaro la interface del componente
export interface MyButtonProps {
  text: string; // Prop text de tipo string. Es el texto del botón
  txtcolor: string; // Prop txtcolor de tipo string. Es el color del texto del botón
  bgcolor: string; // Prop bgcolor de tipo string. Es el color del fondo del botón
  bordercolor: string; // Prop bordercolor de tipo string. Es el color del borde del botón
  borderwidth: string; // Prop borderwidth de tipo string. Es el ancho del borde del botón
  size?: 'small' | 'medium' | 'large'; // Prop size, con valores posibles
  hoverTxtColor: string; // Color del texto al hacer hover
  hoverBgColor: string; // Color del fondo al hacer hover
  disabled?: boolean; // Prop disabled, opcional y de tipo boolean
  onClick?: MouseEventHandler<HTMLButtonElement>; // Prop onClick opcional
}

// Defino mi componente MyButton y le paso las props que definí arriba
function MyButton(props: MyButtonProps) {
  // Extraigo los valores de las props
  const {
    text,
    txtcolor,
    bgcolor,
    bordercolor,
    borderwidth,
    size = 'medium', // Valor por defecto 'medium'
    hoverTxtColor,
    hoverBgColor,
    disabled = false, // Valor por defecto false
    onClick,
  } = props;

  return (
    // Uso el Button de MUI y lo personalizo con las props pasadas al componente
    <Button
      onClick={onClick}
      disabled={disabled}
      size={size}
      sx={{
        color: txtcolor,
        backgroundColor: bgcolor,
        borderColor: bordercolor,
        borderWidth: borderwidth,
        ':hover': {
          backgroundColor: hoverBgColor,
          color: hoverTxtColor,
        },
      }}
    >
      {text}
    </Button>
  );
}

export default MyButton;

//IZAN NICOLÁS HERNÁNDEZ MORALES