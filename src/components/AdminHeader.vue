<template>
  <nav>
      <div class="nav-wrapper red darken-4">
        <div class="container">
          <a href="#" class="brand-logo">Админ панель</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a @click="$router.push(`/admin/prefabs/`)">Шаблоны</a></li>
            <li><a class="dropdown-trigger" data-target="dropdownProfile" ref="dropdownProfile">Профиль</a></li>
          </ul>
        </div>
    </div>
    <ul class="dropdown-content" id='dropdownProfile'>
      <li><a href="">Профиль</a></li>
      <li class="divider"></li>
      <li><a @click="logout">Выход</a></li>
    </ul>
  </nav>
</template>

<script>
import M from "materialize-css";
export default {
  name: "AdminHeader",
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
.header__main{
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #b50034;
}
.menu{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
}
.menu > li{
  padding: 10px 20px;
  font-size: 25px;
  font-weight: bold;
  color: white;
  list-style-type: none;
  cursor: pointer;
}
.menu > li:hover{
  background: white;
  color: black;
}
.btn__menu{
  margin: 0 20px;
}
</style>