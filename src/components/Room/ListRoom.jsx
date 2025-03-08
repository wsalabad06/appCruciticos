import React from 'react';
import { useEffect, useState } from 'react';
import RoomService from '../../services/RoomService';

export function ListRoom() {
  //Resultado de consumo del API, respuesta
  const [setData] = useState(null);
  //Error del API
  const [error, setError] = useState('');
  //Booleano para establecer sí se ha recibido respuesta
  const [loaded, setLoaded] = useState(false);
  let idShopRental = 1;
  //Llamar al API y obtener la reserva de los cruceros
  useEffect(() => {
    RoomService.getRoomByShopRental(idShopRental)
      .then((response) => {
        console.log(response);
        setData(response.data);
        setError(response.error);
        setLoaded(true);       
      })
      .catch((error) => {
        console.log(error);
        if (error instanceof SyntaxError) {
          setError(error);
          setLoaded(false);
        }
      });
  }, [idShopRental]);
  if(!loaded) return <p>Cargando..</p>
  if(error) return <p>Error: {error.message}</p>
 
}
