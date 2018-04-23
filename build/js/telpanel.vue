<template>
  <div id="telpanel">
    <label>Название категории:</label>
    <input type="text" v-model="team.name" />
    <h4>Предпросмотр:</h4>
    <label>Название категории:</label>
    {{team.name}}<br><hr>
    {{team.players_attributes}}
  <div v-for="(player, index) in team.players_attributes">
    <div v-if="player._destroy == '1'">
      {{ player.name }} will be removed. <button v-on:click="undoRemove(index)">Undo</button>
    </div>
    <div v-else>
      <b-field horizontal>
        <b-input  placeholder="Наименование услуги" v-model="player.name" ></b-input>
        <b-input  placeholder="График занятий" v-model="player.graph" ></b-input>
        <b-input  placeholder="Стоимоять групповых" v-model="player.group"></b-input>
        <b-input  placeholder="Стоимость индивидуального" v-model="player.ind"></b-input>
        <button class="button" v-on:click="removePlayer(index)">Remove</button>
      </b-field>
    </div>
  </div>
  <button v-on:click="addPlayer">Добавить позицию</button>
  <br />
  <button v-on:click="saveTeam">Сохранить категорию</button>
  </div>
</template>
<script>
// setTimeout(function(){
//       $('.tel').css('visibility', 'visible').addClass('slideUpReturn');
// }, 1300);
import axios from 'axios'
var element = document.getElementById("team-form")
if (element != null) {
  console.log(element);
  var id = element.dataset.id
  var team = JSON.parse(element.dataset.team)
  var players_attributes = JSON.parse(element.dataset.playersAttributes)
  players_attributes.forEach(function(player) { player._destroy = null })
  team.players_attributes = players_attributes 
}
export default {
  data: function () {
    return {
      id: id, 
      team: team, 
      postBody: '',
      errors: []
    }
  },
  created() {
  	axios.get('/teams')
	  .then(function (response) {
	    console.log(response);
	  })
	  .catch(function (error) {
	    console.log(error);
	  });	
  },
  mounted() {
  },
  updated() {
  },
  methods: {
    addPlayer: function() {
      this.team.players_attributes.push({
        id: null,
        name: "",
        graph: "",
        group: "",
        ind: "",
        //position: " ",
        _destroy: null
      })
      console.log(this.team.players_attributes)
      console.log(this.team)
    },
    removePlayer: function(index) {
      var player = this.team.players_attributes[index]
      if (player.id == null) {
        this.team.players_attributes.splice(index, 1)
      } else {
        this.team.players_attributes[index]._destroy = "1"
      }
      console.log(this.team.players_attributes)
      console.log(this.team)
    },
    undoRemove: function(index) {
      this.team.players_attributes[index]._destroy = null
    },
    saveTeam: function() {
      // Create a new team
      if (this.id == null) {
        axios.post('/teams', { team: this.team }).then(response => {
         window.location.href = '/teams' ; 
        }, response => {
          console.log(response)
        })
      // Edit an existing team
      } else {
        axios.put(`/teams/${this.id}`, { team: this.team }).then(response => {
           window.location.href = '/teams';  
        }, response => {
          console.log(response)
        })
      }
    },
    existingTeam: function() {
      return this.team.id != null
    },
  }
}
</script>

<style scoped>
 
 
</style>