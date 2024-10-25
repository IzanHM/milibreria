import { Avatar, Typography, Box } from '@mui/material';

// Defino la interfaz del componente con las props que acepta
export interface IzanHMProps {
  nombre: string; // Nombre del usuario
  imagen: string; // URL de la imagen del avatar
  altImagen: string; // Texto alternativo de la imagen
  tamaño?: 'small' | 'medium' | 'large'; // Tamaño opcional del avatar
}

// Defino el componente IzanHM y le paso las props
function IzanHM(props: IzanHMProps) {
  // Extraigo los valores de las props con valores por defecto
  const { nombre, imagen, altImagen, tamaño = 'medium' } = props;

  // Defino el tamaño del avatar según la prop "tamaño"
  const avatarSize = tamaño === 'small' ? 40 : tamaño === 'large' ? 80 : 56;

  return (
    // Uso el componente Box para alinear el Avatar y el nombre horizontalmente
    <Box display="flex" alignItems="center" sx={{ marginBottom: 2 }}>
      {/* Personalizo el Avatar con las props pasadas */}
      <Avatar alt={altImagen} src={imagen} sx={{ width: avatarSize, height: avatarSize, marginRight: 2 }} />
      {/* Muestro el nombre con el componente Typography */}
      <Typography variant="h6">{nombre}</Typography>
    </Box>
  );
}

export default IzanHM;

//IZAN NICOLÁS HERNÁNDEZ MORALES