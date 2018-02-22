 
import axios from 'axios'
import Vue from 'vue/dist/vue.esm'
import store from './store'
import Telpanel from './telpanel.vue' 
// import TurbolinksAdapter from 'vue-turbolinks';
// Vue.use(TurbolinksAdapter)
console.log('firstappb');
document.addEventListener('DOMContentLoaded', () => {
 let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
  axios.defaults.headers.common['X-CSRF-Token'] = token
  axios.defaults.headers.common['Accept'] = 'application/json'  
  //пример обмена vue-rails 
  console.log('secondappb');
  var element = document.getElementById("team-form")
 	console.log(element);

  Vue.component('telpanel', Telpanel);   
    new Vue({
      el: element,
      components: {Telpanel},
      store,
        data: function() {
        return {   }
      } 
    }) 
   console.log('aftervueinst');
  //end
})
