import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL + 'cruise' ;
class CruiseService {
  //Definición para Llamar al API y obtener el listado de cruceros

  //Listas de cruceros
  //localhost:81/apiCruciticos/cruise/all
  getCruise() {
    return axios.get(BASE_URL+'/'+'all');
  }
  //Obtener Crucero
  //localhost:81/apiCruciticos/cruise/1
  getCruiseById(CruiseId){
    return axios.get(BASE_URL+'/'+ CruiseId);
  }

  createCruise(Cruise) {
    return axios.post(BASE_URL, JSON.stringify(Cruise));
  }
}
export default new CruiseService();
