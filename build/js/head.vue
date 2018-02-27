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
	background-image: url(../../app/assets/images/ui_02.jpg);
	background-repeat: no-repeat;
	background-position: center bottom;
	height: 160px;
	background-color: #ada;
	div {
  	lost-column: 1/3;
	}
}
.telpanel {
    justify-content: center;  
  }
  .first {
    background-color: #dad;
  }
  .second {
   background-color: #ada;
  }
  .third {
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