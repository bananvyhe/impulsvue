// import TurbolinksAdapter from 'vue-turbolinks';
import axios from 'axios'
import Vue from 'vue/dist/vue.esm'
import store from './store'
import App from './telpanel.vue' 
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
    var app = new Vue({
      el: element,
      template: '<App/>',
      components: {App},
      store,
        data: function() {
        return {   }
      } 
    }) 
   console.log('aftervueinst');
  //end
})
