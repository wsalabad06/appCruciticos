import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL + 'reservation' ;
class ReservationService {
  //Definición para Llamar al API y obtener el listado de barcos

  //Listas de Barcos
  //localhost:81/apiCruciticos/reservation/all
  getReservation() {
    return axios.get(BASE_URL+'/'+'all');
  }
  //Obtener Barco
  //localhost:81/apiCruciticos/reservation/1
  getReservationById(ReservationId){
    return axios.get(BASE_URL+'/'+ReservationId);
  }
  //Obtener Barco por tienda
  //localhost:81/apiCruciticos/reservation/shipByShopRental/1
  getReservationByShopRental(ShopRentalId){
    return axios.get(BASE_URL+'/ReservationByShopRental/'+ShopRentalId);
  }
  createReservation(Reservation) {
    return axios.post(BASE_URL, JSON.stringify(Reservation));
  }
  updateReservation(Reservation) {
    return axios({
      method: 'put',
      url: BASE_URL,
      data: JSON.stringify(Reservation)

    })
  }
}
export default new ReservationService();
