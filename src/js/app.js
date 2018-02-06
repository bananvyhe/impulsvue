var Turbolinks = require("turbolinks")
Turbolinks.start()
import axios from 'axios'
import Vue from 'vue/dist/vue.esm'

import Telpanel from './telpanel.vue' 

document.addEventListener('turbolinks:load', () => {
  let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
  axios.defaults.headers.common['X-CSRF-Token'] = token
  axios.defaults.headers.common['Accept'] = 'application/json'
    var element = document.getElementById("team-form")
    if (element != null) {

      var id = element.dataset.id
      var team = JSON.parse(element.dataset.team)
      
      var players_attributes = JSON.parse(element.dataset.playersAttributes)
      players_attributes.forEach(function(player) { player._destroy = null })
      team.players_attributes = players_attributes
      console.log(id)
      console.log(team)
      console.log(players_attributes)
    }

    new Vue({
      el: element,
            data: function() {
        return { id: id, team: team }
      },
      methods: {
        addPlayer: function() {
          this.team.players_attributes.push({
            id: null,
            name: "",
            //position: "",
            _destroy: null
          })
        },

        removePlayer: function(index) {
          var player = this.team.players_attributes[index]

          if (player.id == null) {
            this.team.players_attributes.splice(index, 1)
          } else {
            this.team.players_attributes[index]._destroy = "1"
          }
        },

        undoRemove: function(index) {
          this.team.players_attributes[index]._destroy = null
        },

        saveTeam: function() {
          // Create a new team
          if (this.id == null) {
             axios.post('/teams', { team: this.team }).then(response => {
              Turbolinks.visit(`/teams`)
            }, response => {
              console.log(response)
            })

          // Edit an existing team
          } else {
            axios.put(`/teams/${this.id}`, { team: this.team }).then(response => {
              Turbolinks.visit(`/teams`)
            }, response => {
              console.log(response)
            })
          }
        },

        existingTeam: function() {
          return this.team.id != null
        }

      }
    }) 
  
})
