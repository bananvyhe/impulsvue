<template>
  <div class="news">
		<div class="newsHead">
			<h5>Наши новости:</h5>
			<div class="hrline scale-in-hor-center"></div>
		</div>
		
		<div class="newsBlock">
			<div>1</div>
			<div>2</div>
			<div>3</div>
			<div>4</div>
			<div>5</div>
			<div>6</div>
			<div>1</div>
			<div>2</div>
			<div>3</div>
			<div>4</div>
			<div>5</div>
			<div>6</div>
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
.news {

}
.newsHead {
	display: flex;
  flex-direction: column;
  align-items: center; 
	h5 {
    color: $str6;
    margin: 0 0 0em 0;
  }
}
.hrline { width: 12em; 
	@mixin hrline;
	margin: 0.1em 0 0.3em -0.3em;
	background-color: $str6;
}

.newsBlock { background-color: #dad;
  lost-center: 1150px;
  div { height: 100px; padding: 1em;
    lost-column: 1/3 0 0;
    @media (--only-small-screen) {
      lost-column: 1/1 0 0;
    }
  }
}

.child {
	display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.bgstring {
  @mixin bgstring;
}

.scale-in-hor-center {
	animation: scale-in-hor-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes scale-in-hor-center {
  0% {
    transform: scaleX(0);
    opacity: 1;
  }
  100% {
    transform: scaleX(1);
    opacity: 1;
  }
}
</style>