
<template>
  <div id="app">
    <p>{{ message }}</p>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      message: "Hello Vue123!"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>