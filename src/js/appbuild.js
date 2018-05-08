// import TurbolinksAdapter from 'vue-turbolinks';
import { Carousel, CarouselItem, Input, Button } from 'element-ui'

import axios from 'axios'
import Vue from 'vue/dist/vue.esm'
import Buefy from 'buefy'

import Footer from './footer.vue'
import App from './telpanel.vue' 
import Head from './head.vue' 
import Mainmenu from './mainmenu.vue' 
import Sliderapp from './sliderapp.vue'
import Child from './child.vue'
import Adult from './adult.vue'
import News from './news.vue'
import Feedback from './feedback.vue'
// import Programm from './programms.vue'
// import Employee from './employees.vue'
Vue.use(Carousel)
Vue.use(CarouselItem) 
Vue.use(Input) 
Vue.use(Button) 
Vue.use(Buefy)

// Vue.use(TurbolinksAdapter)
document.addEventListener('DOMContentLoaded', () => {
  Vue.directive('scroll', {
    // Когда привязанный элемент вставляется в DOM............ss 
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
  if (element != null) {
    var app = new Vue({
      el: element,
      template: '<App/>',
      components: {App}
    }) 
  }
  var head = new Vue({
    el: '#head',
    render: h => h(Head)
  })
  var news = document.getElementById("news") 
  if (news != null) {
    new Vue({
      el: '#news',
      render: h => h(News)
    }) 
  }
  var feedback = document.getElementById("feedback") 
  if (feedback != null) {
    new Vue({
      el: '#feedback',
      render: h => h(Feedback)
    }) 
  }
  new Vue({
    el: '#mainmenu',
    render: h => h(Mainmenu)
  }) 
  var element1 = document.getElementById("programm-form")
  if (element1 != null) {
    var programm = new Vue({
      el: element1,
      template: '<Programm/>',
      components: {Programm}
    }) 
  }
  var element2 = document.getElementById("employee-form")
  if (element2 != null) {
    var employee = new Vue({
      el: element2,
      template: '<Employee/>',
      components: {Employee}
    }) 
  }

  new Vue({
    el: '#footer',
    render: h => h(Footer)
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
