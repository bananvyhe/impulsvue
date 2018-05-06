<template>
  <div class="news">
		<div class="newsHead">
			<h5>Наши новости:</h5>
			<div class="hrline scale-in-hor-center"></div>
		</div>
		<div class="newsBlock">
    <div v-for="(item, index) in news">
       
        {{item.desc}}        
       
    </div>
		
		</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      news: []
    }
  },
  created() {
    axios.get('/news')
    .then(response => {
      this.news = response.data
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    }); 
  },
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