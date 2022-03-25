import axios from 'axios'
    
const apiClient = axios.create({  
  baseURL: `https://apiclient.adaptimmo.com/test/`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  listeDesBiens() {
    return apiClient.get('/bien?perPage=20?page=1')
  },
  filtrerListeDesBiens(payload){
    console.log("verif dans service", payload);
    return apiClient.get('/bien?filter[type]=' + payload.type_bien + "&filter[state]=" + payload.etat)
  },
  recupererDetailsBien(bien_id){
    return apiClient.get('/bien/' + bien_id)
  }
}
