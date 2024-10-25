import { MouseEventHandler } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// Declaro la interfaz del componente
export interface MyFavoriteBorderProps {
  color: 'inherit' | 'primary' | 'secondary' | 'default' | 'error' | 'info' | 'success' | 'warning'; // Color del icono
  disabled?: boolean; // Prop disabled, opcional y de tipo boolean
  onClick?: MouseEventHandler<HTMLButtonElement>; // Prop onClick opcional
}

// Defino mi componente MyFavoriteBorder y le paso las props que definí arriba
function MyFavoriteBorder(props: MyFavoriteBorderProps) {
  // Extraigo los valores de las props
  const {
    color,
    disabled = false, // Valor por defecto false
    onClick,
  } = props;

  return (
    // Uso el IconButton de MUI y lo personalizo con las props pasadas al componente
    <IconButton
      onClick={onClick}
      disabled={disabled}
      color={color}
    >
      <FavoriteBorderIcon />
    </IconButton>
  );
}

export default MyFavoriteBorder;

//IZAN NICOLÁS HERNÁNDEZ MORALES