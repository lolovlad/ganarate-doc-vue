<template>
  <nav>
    <div class="nav-wrapper red darken-4">
      <div class="container">
        <a href="#" class="brand-logo">User</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a @click="$router.push(`/user/companies/`)">Компании</a></li>
          <li><a @click="$router.push(`/user/create-pack/`)">Создать набор</a></li>
          <li><a class="dropdown-trigger" data-target="dropdownProfile" ref="dropdownProfile">Профиль</a></li>
        </ul>
      </div>
    </div>
    <ul class="dropdown-content" id='dropdownProfile'>
      <li><a @click="$router.push(`/user/profile/`)">Профиль</a></li>
      <li class="divider"></li>
      <li><a @click="logout">Выход</a></li>
    </ul>
  </nav>
</template>

<script>
import M from "materialize-css";

export default {
  name: "UserHeader",
  mounted() {
    const elem = this.$refs.dropdownProfile;
    this.modelInstance = M.Dropdown.init(elem, {
      alignment: "right",
      coverTrigger: false
    });
  },
  methods:{
    logout(){
      this.$store.dispatch('auth/logout')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>