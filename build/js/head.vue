<template>
  <div class="head">
		<transition name="fade" appear>
      <div class="first">
      </div>    
    </transition>
    <div class="second" v-if="contacts && contacts.length">
      <div v-for="contact of contacts">
        {{contact.mail}}
      </div>
    </div>
    <div class="third" v-if="contacts && contacts.length">
      <div v-for="contact of contacts">
        {{contact.adress}}
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      contacts: []
    }
  },
  created() {
    axios.get('/contacts')
    .then(response => {
      this.contacts = response.data
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    }); 
  },
}
</script>
<style scoped>
.head { 
  display: flex;
	background-position: center left;
	height: 160px; 
}
.first {
  background-image: url(../../app/assets/images/logo.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin: 3em 1em -1em 1em;
	lost-column: 1/2 2 0.5em;
}
.second { border-right: 1px solid black;
  display: flex;
  lost-column: 1/4 4 1em;
  justify-content: flex-end;
  align-self: center;
  margin-top: 4em;
  padding: 0.5em;
}
.third {
  display: flex;
  align-self: center;
  lost-column: 1/4 4 1em;
  margin-top: 4em;
  padding: 0.5em;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
  
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
</style>