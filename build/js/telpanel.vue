<template>
  <div class="telpanel">
   
  	<input type="text" v-model="postBody"/>
  	<button v-on:click="postPost()">send</button>
	 	<button v-on:click="editPost()">edit</button>
  <ul v-if="errors && errors.length">
    <li v-for="error of errors">
      {{error.message}}
    </li>
  </ul>
  </div>
</template>

<script>
// setTimeout(function(){
//       $('.tel').css('visibility', 'visible').addClass('slideUpReturn');
// }, 1300);
import axios from 'axios'
export default {
  data: function () {
    return {
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
  methods: {
  	postPost() {
    axios.post(`/teams`, {
      name: this.postBody
    })
    .then(response => {
    	console.log(123);
    })
    .catch(e => {
      this.errors.push(e)
    })

    // async / await version (postPost() becomes async postPost())
    //
    // try {
    //   await axios.post(`http://jsonplaceholder.typicode.com/posts`, {
    //     body: this.postBody
    //   })
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
  }
  
}
</script>

<style scoped>
 
 
</style>