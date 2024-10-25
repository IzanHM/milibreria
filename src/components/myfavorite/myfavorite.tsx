import { MouseEventHandler } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

// Declaro la interface del componente
export interface MyFavoriteProps {
  color: 'inherit' | 'primary' | 'secondary' | 'default' | 'error' | 'info' | 'success' | 'warning'; // Color del icono
  disabled?: boolean; // Prop disabled, opcional y de tipo boolean
  onClick?: MouseEventHandler<HTMLButtonElement>; // Prop onClick opcional
}

// Defino mi componente MyFavourite y le paso las props que definí arriba
function MyFavorite(props: MyFavoriteProps) {
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
      <FavoriteIcon />
    </IconButton>
  );
}

export default MyFavorite;

//IZAN NICOLÁS HERNÁNDEZ MORALES