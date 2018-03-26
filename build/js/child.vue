<template>
  <div class="child">
  	<div class="ubuntu">
  		Детям и подросткам
  	</div>
 		<div v-for="(item, index) in items">
 			{{item.title}}
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
.child {
	display: flex;
  flex-direction: column;
  align-items: flex-end;
}
 
</style>