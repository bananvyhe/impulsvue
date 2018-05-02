<template>
  <div class="head">
		<transition name="fade" appear>
      <div class="first">
      </div>    
    </transition>
    <div class="second">
      
    </div>
    <div class="third">
      <nobr>секция 3</nobr>
    </div> 
  </div>
</template>
<script>
export default {
  data: function () {
    return {
 
    }
  }
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
.second {lost-column: 1/4 4 0.5em;
 background-color: #ada;
}
.third {lost-column: 1/4 4 0.5em;
  background-color: #dad;
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