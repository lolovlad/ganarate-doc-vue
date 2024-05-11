<template>
  <nav>
    <div class="nav-wrapper red darken-4">
      <div class="container">
        <a  @click="$router.push(`/`)" class="brand-logo">DocuMatic</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a class="waves-effect waves-light btn-small"  @click="$router.push(`/sign-in`)">Вход</a></li>
          <li><a class="waves-effect waves-light btn-small"  @click="$router.push(`/sign-up`)">Регистрация</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "BaseHeader"
}
</script>

<style scoped>

</style>