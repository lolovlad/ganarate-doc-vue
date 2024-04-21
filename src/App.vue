<template>
  <div class="app">
    <router-view>

    </router-view>
  </div>
</template>

<script>
import M from "materialize-css/dist/js/materialize"
export default {
  name: "App",
  mounted() {
    M.AutoInit();
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>