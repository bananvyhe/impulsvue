<template>
  <div class="feedback">
  	<div><h4>Отправьте нам сообщение:</h4></div>
  	<div class="hrline scale-in-hor-left"></div>
  	<el-input placeholder="Как к вам обращаться?" v-model="name"></el-input>
  	<el-input placeholder="Контактная информация (тел, е-майл, ...)" v-model="contact"></el-input>
  	<el-input
		  type="textarea"
		  :rows="4"
		  placeholder="Введите сообщение"
		  v-model="message">
		</el-input>
		<el-button type="success" plain>Success</el-button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    	name: '',
    	contact: '',
    	message: ''
    }
  }
}
</script>

<style scoped>
@import "../../app/assets/stylesheets/postcss/variables";
h4 {
  color: $str4;
  margin: 0 0 0 0;
}
.hrline { 
	width: 16em; 
	@mixin hrline;
	margin: 0.1em 0 0.5em 0em;
	background-color: $str4;
}
</style>