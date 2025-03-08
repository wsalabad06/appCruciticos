import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL + 'port' ;
class PortService {
  //Definición para Llamar al API y obtener el listado de puertos

  //Listas de Puertos
  //localhost:81/apiCruciticos/port/all
  getPort() {
    return axios.get(BASE_URL+'/'+'all');
  }
  //Obtener Barco
  //localhost:81/apiCruciticos/port/1
  getPortById(PortId){
    return axios.get(BASE_URL+'/'+ PortId);
  }

  getCruisesbyPort(PortId) {
    return axios.get(BASE_URL + '/getCruisesbyPort/' + PortId);
  }

  //Obtener Barco por tienda
  //localhost:81/apiCruciticos/port/portByShopRental/1
  getPortByShopRental(ShopRentalId){
    return axios.get(BASE_URL+'/PortByShopRental/'+ShopRentalId);
  }
  createPort(Port) {
    return axios.post(BASE_URL, JSON.stringify(Port));
  }
  updatePort(Port) {
    return axios({
      method: 'put',
      url: BASE_URL,
      data: JSON.stringify(Port)

    })
  }
}
export default new PortService();
