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
				console.log('update'); 
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
	  console.log( 'footer indicator');
	  if (mcontentHeight.value + footerHeight.value > winH.value){
  		console.log('rltve');
  		  triggerPos.value = 'relative'	;
  		}else{console.log('fxd');
  		  triggerPos.value = 'fixed';	 
  		}
		};
	window.addEventListener('load', function(event) {
    parseheght ();
  });
	window.addEventListener('resize', _.throttle(parseheght, 300));
</script>
<style scoped>
@import "../../app/assets/stylesheets/postcss/variables";
.footer {
	bottom: 0px;
}
</style>