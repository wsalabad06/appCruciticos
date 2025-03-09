import React from 'react';

import { AspectRatio } from '@mui/joy';
import Box from '@mui/joy/Box';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const BASE_URL = import.meta.env.VITE_BASE_URL + 'uploads' ;

export default function MinMaxRatio() {
  return (
    <Box sx={{ width: 300, resize: 'horizontal', overflow: 'auto', p: 1 }}>
      <AspectRatio minHeight={120} maxHeight={200}>
        <img
          src={`${BASE_URL}/main.jpg`}  // Imagen servida desde el backend
        />
      </AspectRatio>
    </Box>
  );
}
export function Home() {
  return (
    <Container sx={{ p: 2 }} maxWidth="sm">
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Reserva de cruceros
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Reserva tu crucero favorito
      </Typography>
    </Container>
  );
}
