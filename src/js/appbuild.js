// import TurbolinksAdapter from 'vue-turbolinks';
import { Carousel, CarouselItem } from 'element-ui'

import axios from 'axios'
import Vue from 'vue/dist/vue.esm'
 
import App from './telpanel.vue' 
import Head from './head.vue' 
import Mainmenu from './mainmenu.vue' 
import Sliderapp from './sliderapp.vue'
import Child from './child.vue'
import Adult from './adult.vue'
Vue.use(Carousel)
Vue.use(CarouselItem) 

// Vue.use(TurbolinksAdapter)
document.addEventListener('DOMContentLoaded', () => {
  Vue.directive('scroll', {
    // Когда привязанный элемент вставляется в DOM......... 
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
    
  }) 
  var head = new Vue({
    el: '#head',
    render: h => h(Head)
    
  }) 
  new Vue({
    el: '#mainmenu',
    render: h => h(Mainmenu)
    
  }) 
  
  var element = document.getElementById("sliderapp")
  if (element != null) {
    new Vue({
      el: '#sliderapp',
      render: h => h(Sliderapp)
    })
  }
  var element = document.getElementById("child")
  if (element != null) {
    new Vue({
      el: '#child',
      render: h => h(Child)
    })
  }
  var element = document.getElementById("adult")
  if (element != null) {
    new Vue({
      el: '#adult',
      render: h => h(Adult)
    })
  }


})
