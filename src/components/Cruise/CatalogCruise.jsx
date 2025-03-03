import React from 'react';
import { useState } from 'react';
import CruiseService from '../../services/CruiseService';
import { useEffect } from 'react';
/*import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from "@mui/material/Grid2";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccessTime from '@mui/icons-material/AccessTime';
import Language from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';
import { Info } from '@mui/icons-material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';*/
import { ListCardCruise } from './ListCardCruise';

export function CatalogCruise() {
  //Resultado de consumo del API, respuesta
  const [data, setData] = useState(null);
  //Error del API 
  const [error, setError] = useState('');
  //Booleano para establecer sí se ha recibido respuesta
  const [loaded, setLoaded] = useState(false);

  //Llamar al API y obtener la lista de peliculas
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
  /* return (
    <Grid container sx={{ p: 2 }} spacing={3}>
        
        {data && data.map((item)=>( 
          <Grid size={4} key={item.id}>
            <Card>
              <CardHeader
                sx={{
                  p: 0,
                  backgroundColor: (theme) => theme.palette.secondary.main,
                  color: (theme) => theme.palette.common.white,
                }}
                style={{ textAlign: 'center' }}
                title={item.title}
                subheader={item.year}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  <AccessTime /> Tiempo: {item.time} minutos
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Language /> Idioma: {item.lang}
                </Typography>
               
              </CardContent>
              <CardActions
                disableSpacing
                sx={{
                  backgroundColor: (theme) => theme.palette.action.focus,
                  color: (theme) => theme.palette.common.white,
                }}
              >
                <IconButton
                  component={Link}
                  aria-label="Detalle"
                  sx={{ ml: 'auto' }}
                >
                  <Info />
                </IconButton>
                
                  <IconButton
                    aria-label="Comprar"
                    sx={{ ml: 'auto' }}
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                
              </CardActions>
            </Card>
          </Grid>
      ))}
    </Grid>
  ) */
}
