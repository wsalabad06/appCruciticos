import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import StarIcon from '@mui/icons-material/Star';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Grid from '@mui/material/Grid2';
//import ticket from '../../assets/ticket.jpg';
import ReservationService from '../../services/ReservationService';

export function DetailReservation() {
  const routeParams = useParams();
  console.log(routeParams);
  //Url para acceder a la imagenes guardadas en el API
  //const BASE_URL = import.meta.env.VITE_BASE_URL+'uploads'
  //Resultado de consumo del API, respuesta
  const [data, setData] = useState(null);
  //Error del API
  const [error, setError] = useState('');
  //Booleano para establecer sí se ha recibido respuesta
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    //Llamar al API y obtener una pelicula
    ReservationService.getReservationById(routeParams.id)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setError(response.error);
        setLoaded(true);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        throw new Error('Respuesta no válida del servidor');
      });
  }, [routeParams.id]);


  let totalHabitaciones = 0;
  let totalComplementos = 0;
  let subTotal = 0;
  let impuesto = 0;
  let total = 0;


  if (!loaded) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Container component="main" sx={{ mt: 8, mb: 2 }}>
      {data && (
        <Grid container spacing={2}>
          
          <Grid size={7}>

          <Typography component="span" variant="subtitle1" display="block">
              <Box fontWeight="bold" display="inline">
              Crucero: {data.cruise.name}
              </Box>{' '}
            </Typography>

            <Typography component="span" variant="subtitle1" display="block">
              <Box fontWeight="bold" display="inline">
                Fecha de reserva: {data.reservationDate}
              </Box>{' '}
            </Typography>

            <Typography component="span" variant="subtitle1" display="block">
              <Box fontWeight="bold" display="inline">
                Nombre del barco: {data.cruise.ship.name}
              </Box>{' '}
            </Typography>

            <Typography component="span" variant="subtitle1" display="block">
              <Box fontWeight="bold" display="inline">
              Fecha: {data.destinationId}
              </Box>{' '}
            </Typography>

            <Typography component="span" variant="subtitle1" display="block">
              <Box fontWeight="bold" display="inline">
              Cantidad Habitación: {data.destinationId}
              </Box>{' '}
            </Typography>

            <Typography component="span" variant="subtitle1">
              <Box fontWeight="bold">Puertos:</Box>
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  bgcolor: 'background.paper',
                }}
              >
                {data.cruise.port.map((item) => (
                  <ListItemButton key={item.id}>
                    <ListItemIcon>
                      <ArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                    <ListItemText primary={`Hora de salida: ${item.horaSalida} AM`} />
                  </ListItemButton>
                ))}
              </List>
            </Typography>

            <Typography component="span" variant="subtitle1" display="block">
              <Box fontWeight="bold" display="inline">
              Total de habitaciones: {data.destinationId}
              </Box>{' '}
            </Typography>

            <Typography component="span" variant="subtitle1">
              <Box fontWeight="bold">Habitación(es):</Box>
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  bgcolor: 'background.paper',
                }}
              >
                {data.cruise.room.map((item) => (
                  <ListItemButton key={item.id}>
                    <ListItemIcon>
                      <ArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary={`Nombre: ${item.name}`} />
                    <ListItemText primary={`Precio: $${item.price}`} />
                  </ListItemButton>
                ))}
              </List>
            </Typography>

            <Typography component="span" variant="subtitle1" display="block">
              <Box fontWeight="bold" display="inline">
              Complementos: {data.destinationId}
              </Box>{' '}
            </Typography>

            <Typography component="span" variant="subtitle1" display="block">
              <Box fontWeight="bold" display="inline">
              Subtotal: {data.destinationId}
              </Box>{' '}
            </Typography>

            <Typography component="span" variant="subtitle1" display="block">
              <Box fontWeight="bold" display="inline">
              Impuestos: {data.destinationId}
              </Box>{' '}
            </Typography>

            <Typography component="span" variant="subtitle1" display="block">
              <Box fontWeight="bold" display="inline">
                Total: $ {data.totalAmount}
              </Box>{' '}
              
            </Typography>

            <Typography component="span" variant="subtitle1" display="block">
              <Box fontWeight="bold" display="inline">
                Estado: {data.status}
              </Box>{' '}
              </Typography>

            <Typography component="span" variant="subtitle1" display="block">
              <Box fontWeight="bold" display="inline">
              Pendiente?: {data.destinationId}
              console.log(data); 
              </Box>{' '}
            </Typography>






            <Typography component="span" variant="subtitle1">
      <Box fontWeight="bold">Habitación(es):</Box>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
        }}
      >
        {data.cruise.room.map((item) => {
          totalHabitaciones += parseFloat(item.price); // Convertir el precio a número antes de sumarlo
          return (
            <ListItemButton key={item.id}>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary={`Nombre: ${item.name}`} />
              <ListItemText primary={`Precio: $${item.price}`} />
            </ListItemButton>
          );
        })}
      </List>
      {/* Mostrar el total por habitaciones */}
      <Box fontWeight="bold">Pago total por habitaciones: ${totalHabitaciones}</Box>
    </Typography>




            <Typography component="span" variant="subtitle1">
      <Box fontWeight="bold">Complemento(s):</Box>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
        }}
      >
        {data.cruise.addon.map((item) => {
          totalComplementos += parseFloat(item.price); // Convertir el precio a número antes de sumarlo
          return (
            <ListItemButton key={item.id}>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary={`Nombre: ${item.name}`} />
              <ListItemText primary={`Precio: $${item.price}`} />
            </ListItemButton>
          );
        })}
      </List>
      {/* Mostrar el total por habitaciones */}
      <Box fontWeight="bold">Pago total de complementos es: ${totalComplementos}</Box>
    </Typography>


            <Typography component="span" variant="subtitle1" display="block">
              <Box fontWeight="bold" display="inline">
              Subtotal: ${subTotal = totalComplementos + totalHabitaciones}
              </Box>{' '}
            </Typography>


            <Typography component="span" variant="subtitle1" display="block">
              <Box fontWeight="bold" display="inline">
              Total de impuestos: ${impuesto = subTotal * 0.13}
              </Box>{' '}
            </Typography>

            <Typography component="span" variant="subtitle1" display="block">
              <Box fontWeight="bold" display="inline">
              Total: ${subTotal + impuesto}
              </Box>{' '}
            </Typography>

          </Grid>
        </Grid>
      )}
    </Container>
  );
}