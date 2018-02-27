<template>
  <div class="head">
		<transition name="fade" appear>
      <div class="first">
       <nobr>секция 1</nobr>
      </div>    
    </transition>
    <div class="second">секция 2
    </div>
    <div class="third">
      <nobr>секция 3</nobr>
    </div> 

  </div>
</template>

<script>
console.log('head.vue');

export default {
   
  data: function () {
    return {
 
    }
  }
}
</script>

<style scoped>

.head {
	lost-center: 1366px;
	background-image: url(../../app/assets/images/SW-028.jpg);
	background-repeat: no-repeat;
	background-position: center left;
	height: 160px;
	background-color: #ada;
}
 
.first {
	lost-column: 1/2 2 0.5em;
  background-color: #dad;
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