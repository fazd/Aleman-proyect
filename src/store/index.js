import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    log:false,
    drawer: false,
    name: '',
    img: '',
    token: '' 
  },
  mutations: {
    mutDrawer(data){
      if(data.drawer == false){
        data.drawer= true;
      }
      else{
        data.drawer = false;
      }
    },
    login(data,name, imgUrl, token){
      data.log = true;
      data.token = token;
      data.name = name
      data.img= require(imgUrl)
    },
    logout(data){
      /*this.axios.post('http://localhost:3001/users/logout',data.token).then(response => {
        //console.log("Se vienen los datos");
        console.log(response.data);
        this.loading= !this.loading;
      })
      .catch(error => {
        //console.log("Llegó esto a cliente");
        console.log(error.response);
      })*/
      data.log= false;
      data.token = '';
      data.name = '';
      data.img = '';
    }
  },
  actions: {
  },
  modules: {
  }
})
