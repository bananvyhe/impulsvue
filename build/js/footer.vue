<template>
	<div class="footer" v-bind:style="{ position: triggerPos.value, width: footerWidth.value + 'px'}">
 		234weqwe {{mcontentHeight}}{{footerHeight}}{{winH}}{{footerWidth}}<br/>{{triggerPos}} 
	</div>
</template>
<script>
	let mcontentHeight = {value: ''};
	let footerHeight = {value: ''};
	let winH = {value: ''};
	let footerWidth = {value: ''};
	let triggerPos = {value: ''};
	 
	export default {
		data: function () {
		  return {
		   
		  	footerWidth: footerWidth,
		  	triggerPos: triggerPos,
		  	winH: winH,
		  	mcontentHeight: mcontentHeight,
		  	footerHeight: footerHeight
		  }
	  },

	  updated: function(){
	  	setTimeout(function(){
				console.log('footer timeout updated hook calc div dimensions'); 
		    parseheght ();
  		}, 500);
  		
	  }
  }
  function parseheght () {
	  let maincontent = document.querySelector(".maincontent");
	  mcontentHeight.value = maincontent.offsetHeight;
	  let footerquery = document.querySelector(".footer");
	  footerHeight.value = footerquery.offsetHeight;
	  footerWidth.value = maincontent.offsetWidth;
	  winH.value = window.innerHeight;
	  if (mcontentHeight.value + footerHeight.value > winH.value){
  		  triggerPos.value = 'relative';
  	}else{
  			triggerPos.value = 'fixed';	 
  	}
	};
	//отдельно прослушивание событий ckeditor и запуск обсчета высоты для определния положения футера
	let cke = document.querySelector("ckeditor");
	if (typeof CKEDITOR !== 'undefined'){
		CKEDITOR.on('instanceCreated', function(e) {
	    e.editor.on('change', _.throttle(parseheght, 100));
		});
 	}
	window.addEventListener('load', function(event) {
    parseheght ();
  });
  window.addEventListener('click', _.throttle(parseheght, 300));
	window.addEventListener('resize', _.throttle(parseheght, 300));
 	window.addEventListener('scroll', _.throttle(parseheght, 300));
	 
</script>
<style scoped>
@import "../../app/assets/stylesheets/postcss/variables";
.footer {
	height: 150px; 
	background-color: #dad;
	bottom: 0px;
	margin-top: 1em;
}
</style>