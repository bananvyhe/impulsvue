<template>
  <div class="child">
  	<div>
      <h4>Детям и подросткам</h4>
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
  @mixin hrline;
  margin: 0.1em 0 0.5em -1em;
  background-color: $str1;
} 
.child {
	display: flex;
  flex-direction: column;
  align-items: flex-end;
  h4 {
    color: $str4;
    margin: 0 0 0 0;
  }
}
.bgstring {
  @mixin bgstring;
  &:hover {
    color: #fff;
    background-color: $str4;
  }
}


 
</style>