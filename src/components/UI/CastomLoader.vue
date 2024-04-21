<template>
  <div class="loader">
    <div class="progress">
      <div class="indeterminate"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CastomLoader"
}
</script>

<style scoped>
.loader{
  height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  font-size: 50px;
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  padding: 20%;
}
</style>