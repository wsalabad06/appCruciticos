import React from 'react';
import { useState } from 'react';
import CruiseService from '../../services/CruiseService';
import { useEffect } from 'react';
import { ListCardCruise } from './ListCardCruise';

export function CatalogCruise() {
  //Resultado de consumo del API, respuesta
  const [data, setData] = useState(null);
  //Error del API 
  const [error, setError] = useState('');
  //Booleano para establecer sí se ha recibido respuesta
  const [loaded, setLoaded] = useState(false);

  //Llamar al API y obtener la lista de cruceros
  useEffect(() => {
    CruiseService.getCruise()
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
  return <>{data && <ListCardCruise data={data} isShopping={false} />}</>
  
}
