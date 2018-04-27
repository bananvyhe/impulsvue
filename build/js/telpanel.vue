<template>
  <div id="telpanel">
    <h5>{{team.name}}</h5>
    <b-table 
      :striped = "true"
      :narrowed = "true"
      :data = "team.players_attributes" 
      :columns = "columns">
      <b-table-column field="name" label="name"   >
      </b-table-column>
    </b-table>
    <h4>Редактор:</h4>
    <div class="inputShort">
      <b-input  placeholder="Название категории" type="text" v-model="team.name" />
    </div>

    <div v-for="(player, index) in team.players_attributes">
      <div v-if="player._destroy == '1'" class="delMessage"> Строка "{{ player.name }}" &ndash;  удалена.  <button class="button is-small is-info is-inverted" v-on:click="undoRemove(index)">Восстановить</button>
       
      </div>
      <div v-else>
        <b-field grouped >
          <b-field expanded>
            <b-input  placeholder="Наименование услуги" v-model="player.name" ></b-input>
          </b-field>
          <b-field expanded><b-input  placeholder="График занятий" v-model="player.graph" ></b-input></b-field>
          <b-field expanded><b-input  placeholder="Стоимоять групповых" v-model="player.group"></b-input></b-field>
          <b-field expanded><b-input  placeholder="Стоимость индивидуального" v-model="player.ind"></b-input></b-field>
          <b-field expanded><button class="button is-danger is-inverted" v-on:click="removePlayer(index)">Удалить</button></b-field>
        </b-field>
      </div>
    </div>
    <a  v-on:click="addPlayer" class="button is-info is-outlined">
    <span class="icon is-small">
      <i class="fas fa-check"></i>
    </span>
    <span>Добавить позицию</span>
    </a>
     
    <a  v-on:click="saveTeam" class="button is-success is-outlined">
    <span class="icon is-small">
      <i class="fas fa-check"></i>
    </span>
    <span>Сохранить</span>
    </a>
 
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
      errors: [],
      columns: [
        {
          field: 'name',
          label: 'Наименование услуги'
        },
        {
          field: 'graph',
          label: 'График занятий',
          centered: true
        },
        {
          field: 'group',
          label: 'Стоимость групповых занятий (цена за месяц)',
          centered: true
            
        },
        {
          field: 'ind',
          label: 'Стоимость индивидуального занятия'
        }
      ]
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