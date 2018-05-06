<template>
  <div class="child">
  	<div class="ubuntu">
      <h5>Детям и подросткам</h5>
        
          <div class="hrline scale-in-hor-right"></div>
        
  	</div>
 		<div v-for="(item, index) in items">
      <div class="bgstring">
        {{item.title}}        
      </div>

 		</div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    	items: [
        { title: 'Детский психолог', url: '#'},
        { title: 'Нейропсихологическая диагностика и коррекция', url: '#'},
        { title: 'Группы развития для детей (от 1 года до 7 лет)', url: '#'},
        { title: 'Развитие памяти и внимания (7-10 лет)', url: '#'},
        { title: 'Нейрограмматика (коррекция чтения и письма) (7-10 лет)', url: '#'},
        { title: 'Нейроматематика (7-10 лет)', url: '#'},
        { title: 'Нейробика (11-13 лет)', url: '#'},
        { title: 'Тренинги для детей и подростков (7-14 лет)', url: '#'},
        { title: 'Психодиагностика', url: '#'},
        { title: 'Профориентирование', url: '#'},
        { title: 'Логопед-дефектолог', url: '#'}     
      ] 
    }
  }
}
</script>

<style scoped>
@import "../../app/assets/stylesheets/postcss/variables";
.hrline {
  height: 2px;
  width: 100%;
  border-radius: 0.2em;
  background-color: $str4;
  margin: 0 0 0.3em 0;
}
.child {
	display: flex;
  flex-direction: column;
  align-items: flex-end;
  h5 {
    color: $str4;
  }
}
.bgstring {
  @mixin bgstring;
}

.scale-in-hor-right {
  animation: scale-in-hor-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes scale-in-hor-right {
  0% {
    transform: scaleX(0);
    transform-origin: 100% 100%;
    opacity: 1;
  }
  100% {
    transform: scaleX(1);
    transform-origin: 100% 100%;
    opacity: 1;
  }
}

 
</style>