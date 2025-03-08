import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL + 'user' ;
class UserService {
  //Definición para Llamar al API y obtener el listado de puertos

  //Listas de Puertos
  //localhost:81/apiCruciticos/user/all
  getUser() {
    return axios.get(BASE_URL+'/'+'all');
  }
  //Obtener Barco
  //localhost:81/apiCruciticos/user/1
  getUserById(UserId){
    return axios.get(BASE_URL+'/'+ UserId);
  }
  //Obtener Barco por tienda
  //localhost:81/apiCruciticos/user/userByShopRental/1
  getUserByShopRental(ShopRentalId){
    return axios.get(BASE_URL+'/UserByShopRental/'+ShopRentalId);
  }
  createUser(User) {
    return axios.post(BASE_URL, JSON.stringify(User));
  }
  updateUser(User) {
    return axios({
      method: 'put',
      url: BASE_URL,
      data: JSON.stringify(User)

    })
  }
}
export default new UserService();
