<template>
  <div id="programms">
    <label>Название программы:</label>
    <input type="text" v-model="programm.name" /><br/>
     <ckeditor :config="config"  v-model="programm.desc" /> 
  	<button v-on:click="saveProgramm">Сохранить</button>
  </div>
</template>

<script>
// setTimeout(function(){    
//       $('.tel').css('visibility', 'visible').addClass('slideUpReturn');
// }, 1300);
import axios from 'axios'
 import Ckeditor from 'vue-ckeditor2'
 

var element1 = document.getElementById("programm-form")
if (element1 != null) {
  
  var id = element1.dataset.id
  var programm = JSON.parse(element1.dataset.programm)
  console.log(programm); 
}
export default {
  components: { Ckeditor },
  data: function () {
    return {
      id: id, 
      programm: programm ,
      config: {
        toolbar: [
          ['Undo','Redo'],
          [ 'Bold', 'Italic', 'Underline'],
          ['NumberedList','BulletedList'],
          ['Cut','Copy','Paste']
        ],
        height: 300
      }
       
    }
  
  },
  methods: {
  	saveProgramm: function() {
      // Create a new programm
      if (this.id == null) {
        axios.post('/programms', { programm: this.programm }).then(response => {
         window.location.href = '/programms' ; 
        }, response => {
          console.log(response)
        })
      // Edit an existing programm
      } else {
        axios.put(`/teams/${this.id}`, { programm: this.programm }).then(response => {
           window.location.href = '/programms';  
        }, response => {
          console.log(response)
        })
      }
    },
  }
}
</script>

<style scoped>
 
 
</style>