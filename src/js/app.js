var Turbolinks = require("turbolinks")
Turbolinks.start()
import axios from 'axios'
import Vue from 'vue/dist/vue.esm'

import Telpanel from './telpanel.vue' 

document.addEventListener('turbolinks:load', () => {
  let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
  axios.defaults.headers.common['X-CSRF-Token'] = token
  axios.defaults.headers.common['Accept'] = 'application/json'
  new Vue({
    el: '#telpanel',
    render: h => h(Telpanel)
  }) 
})
