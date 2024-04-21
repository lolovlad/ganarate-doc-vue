<template>
  <div class="btn__fix">
    <a class="btn-floating btn-large waves-effect waves-light red darken-4 "><i class="material-icons">add</i></a>
  </div>
</template>

<script>
export default {
  name: "FixedButton"
}
</script>

<style scoped>
.btn__fix{
  position: fixed;
  right: 30px;
  top: 50%;
}
</style>