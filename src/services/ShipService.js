import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL + 'ship' ;
class ShipService {
  //Definición para Llamar al API y obtener el listado de barcos

  //Listas de Barcos
  //localhost:81/apiCruciticos/ship/all
  getShip() {
    return axios.get(BASE_URL+'/'+'all');
  }
  //Obtener Barco
  //localhost:81/apiCruciticos/ship/1
  getShipById(ShipId){
    return axios.get(BASE_URL+'/'+ShipId);
  }
  //Obtener Barco por tienda
  //localhost:81/apiCruciticos/ship/shipByShopRental/1
  getShipByShopRental(ShopRentalId){
    return axios.get(BASE_URL+'/shipByShopRental/'+ShopRentalId);
  }
  createShip(Ship) {
    return axios.post(BASE_URL, JSON.stringify(Ship));
  }
  updateShip(Ship) {
    return axios({
      method: 'put',
      url: BASE_URL,
      data: JSON.stringify(Ship)

    })
  }
}
export default new ShipService();
