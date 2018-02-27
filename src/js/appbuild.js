// import TurbolinksAdapter from 'vue-turbolinks';
import axios from 'axios'
import Vue from 'vue/dist/vue.esm'
import store from './store'
import App from './telpanel.vue' 
import Head from './head.vue' 
// Vue.use(TurbolinksAdapter)
document.addEventListener('DOMContentLoaded', () => {
 let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
  axios.defaults.headers.common['X-CSRF-Token'] = token
  axios.defaults.headers.common['Accept'] = 'application/json'  
  //пример обмена vue-rails 
  var element = document.getElementById("team-form")
  var app = new Vue({
    el: element,
    template: '<App/>',
    components: {App},
    store,
      data: function() {
      return {   }
    } 
  }) 
  var head = new Vue({
    el: '#head',
    render: h => h(Head)
    
  }) 
})
