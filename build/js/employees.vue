<template>
  <div id="employees">
    <div v-html="employee.desc"></div>
    <label>Имя сотроудника:</label>
    <input type="text" v-model="employee.name" /><br/>
    <label>Информация о сотроуднике:</label>
    <ckeditor v-model="employee.desc" /> 
  	<button v-on:click="saveProgramm">Сохранить</button>
  </div>
</template>

<script>
import axios from 'axios'
import Ckeditor from 'vue-ckeditor2' 
var element2 = document.getElementById("employee-form")
if (element2 != null) {
  var id = element2.dataset.id
  var employee = JSON.parse(element2.dataset.employee)
  console.log(employee); 
}
export default {
  components: { Ckeditor },
  data: function () {
    return {
      id: id, 
      employee: employee 
    }
  },
  methods: {
  	saveProgramm: function() {
      // Create a new employee
      if (this.id == null) {
        axios.post('/employees', { employee: this.employee }).then(response => {
         window.location.href = '/employees' ; 
        }, response => {
          console.log(response)
        })
      // Edit an existing employee
      } else {
 
        axios.put(`/employees/${this.id}`, { employee: this.employee }).then(response => {
           window.location.href = '/employees';  
        }, response => {
          console.log(response)
        })
      }
    },
  }
}
</script>

<style scoped>
 .ckeditor {
  margin: 15px;
  clear: both;
 }
 
</style>