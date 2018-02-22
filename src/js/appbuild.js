var Turbolinks = require("turbolinks")
Turbolinks.start()
 
import axios from 'axios'
import Vue from 'vue/dist/vue.esm'
import store from './store'
import Telpanel from './telpanel.vue' 
import TurbolinksAdapter from 'vue-turbolinks';
Vue.use(TurbolinksAdapter)
document.addEventListener('turbolinks:load', () => {
  let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
  axios.defaults.headers.common['X-CSRF-Token'] = token
  axios.defaults.headers.common['Accept'] = 'application/json'
  //пример обмена vue-rails
  var element = document.getElementById("team-form")
  if (element != null) {

     
    new Vue({
      el: element,
      components: {Telpanel},
      store,
        data: function() {
        return {   }
      } 
    }) 
  }
  //end
})
