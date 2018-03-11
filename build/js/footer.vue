<template>
	<div class="footer" v-bind:style="{position: triggerPos, width: footerWidth.value + 'px'}">
 		234weqwe {{mcontentHeight}}{{footerHeight}}{{winH}}{{footerWidth}}
	</div>
</template>
<script>
	let mcontentHeight = {value: ''};
	let footerHeight = {value: ''};
	let winH = {value: ''};
	let footerWidth = {value: ''};
	export default {
		data: function () {
		  return {
		  	footerWidth: footerWidth,
		  	triggerPos: '',
		  	winH: winH,
		  	mcontentHeight: mcontentHeight,
		  	footerHeight: footerHeight
		  }
	  },
	  updated: function(){
	  	setTimeout(function(){
				console.log('update'); 
		    parseheght ();
  		}, 500);
  		if (mcontentHeight + footerHeight < winH){
	  			 
	  		}else{
	  			 
	  		}
	  },
	  watch: {
	  	mcontentHeight: function(){
	  		
	  	}
	  }
  }
  function parseheght () {
	  let maincontent = document.querySelector(".maincontent");
	  mcontentHeight.value = maincontent.offsetHeight;
	  let footerquery = document.querySelector(".footer");
	  footerHeight.value = footerquery.offsetHeight;
	  footerWidth.value = maincontent.offsetWidth;
	  winH.value = window.innerHeight;
	  console.log( 'footer indicator');
	};
	window.addEventListener('load', function(event) {
    parseheght ();
  });
	window.addEventListener('resize', _.throttle(parseheght, 300));
</script>
<style scoped>
@import "../../app/assets/stylesheets/postcss/variables";
.footer {
 
}
</style>