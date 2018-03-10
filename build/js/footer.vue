<template>
	<div class="footer">
 		234weqwe {{mcontentWidth}}
	</div>
</template>
<script>
	let mcontentWidth = {value: ''};
	export default {
		data: function () {
		  return {
		  	mcontentWidth: mcontentWidth
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
	   
	  mcontentWidth.value = maincontent.offsetHeight;
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