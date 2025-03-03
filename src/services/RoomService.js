import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL + 'room' ;
class RoomService {
  //Definición para Llamar al API y obtener el listado de habitaciones

  //Listas de habitaciones
  //localhost:81/apiCruciticos/room/all
  getRoom() {
    return axios.get(BASE_URL+'/'+'all');
  }
  //Obtener habitacion
  //localhost:81/apiCruciticos/room/1
  getRoomById(RoomId){
    return axios.get(BASE_URL+'/'+RoomId);
  }
  //Obtener habitacion por tienda
  //localhost:81/apiCruciticos/room/roomByShopRental/1
  getCruiseByShopRental(ShopRentalId){
    return axios.get(BASE_URL+'/roomByShopRental/'+ShopRentalId);
  }
  createCruise(Room) {
    return axios.post(BASE_URL, JSON.stringify(Room));
  }
  updateCruise(Room) {
    return axios({
      method: 'put',
      url: BASE_URL,
      data: JSON.stringify(Room)

    })
  }
}
export default new RoomService();
