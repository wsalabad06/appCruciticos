import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL + 'addon' ;
class AddonService {
  //Definición para Llamar al API y obtener el listado de barcos

  //Listas de Barcos
  //localhost:81/apiCruciticos/Addon/all
  getAddon() {
    return axios.get(BASE_URL+'/'+'all');
  }
  //Obtener Barco
  //localhost:81/apiCruciticos/Addon/1
  getAddonById(AddonId){
    return axios.get(BASE_URL+'/'+ AddonId);
  }
  //Obtener Barco por tienda
  //localhost:81/apiCruciticos/Addon/addonByShopRental/1
  getAddonByShopRental(ShopRentalId){
    return axios.get(BASE_URL+'/AddonByShopRental/'+ShopRentalId);
  }
  createAddon(Addon) {
    return axios.post(BASE_URL, JSON.stringify(Addon));
  }
  updateAddon(Addon) {
    return axios({
      method: 'put',
      url: BASE_URL,
      data: JSON.stringify(Addon)

    })
  }
}
export default new AddonService();
