import React from 'react';
import { useState } from 'react';
import ShipService from '../../services/ShipService';
import { useEffect } from 'react';


export function CatalogShip() {
  //Resultado de consumo del API, respuesta
  const [setData] = useState(null);
  //Error del API 
  const [error, setError] = useState('');
  //Booleano para establecer sí se ha recibido respuesta
  const [loaded, setLoaded] = useState(false);

  //Llamar al API y obtener la lista de habitaciones
  useEffect(() => {
    ShipService.getShip()
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
  }, []);

  if(!loaded) return <p>Cargando..</p>
  if(error) return <p>Error: {error.message}</p>
  
 
}