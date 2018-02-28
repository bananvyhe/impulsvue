// import TurbolinksAdapter from 'vue-turbolinks';
import axios from 'axios'
import Vue from 'vue/dist/vue.esm'
import store from './store'
import App from './telpanel.vue' 
import Head from './head.vue' 
import Mainmenu from './mainmenu.vue' 

// Vue.use(TurbolinksAdapter)
document.addEventListener('DOMContentLoaded', () => {
  Vue.directive('scroll', {
    // Когда привязанный элемент вставляется в DOM............
    inserted: function(el, binding) {
      let f = function(evt) {
        if (binding.value(evt, el)) {
          window.removeEventListener('scroll', _.throttle(f, 300));
        }
      };
      window.addEventListener('scroll', _.throttle(f, 300));
    },
  });
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
  new Vue({
    el: '#mainmenu',
    render: h => h(Mainmenu)
    
  }) 
})
