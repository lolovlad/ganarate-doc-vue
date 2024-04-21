<template>
  <div class="container">
    <div class="row">
      <h1>Регистрация</h1>
    </div>
    <div class="row">
      <RegistrationForm :error="error" @reg="reg"/>
    </div>
  </div>
</template>

<script>
import RegistrationForm from "@/components/Forms/RegistrationForm";
export default {
  name: "RegistrationPage",
  components: {RegistrationForm},
  data(){
    return{
      error: ""
    }
  },
  methods: {
    reg(userData){
      this.$store.dispatch('auth/registration', {url: '/login/sign-up', userData: userData})
          .then(
              (response) => {
                console.log(response.status !== 200)
                if (response.status !== 200) {
                  this.error = response.status.message
                } else {
                  this.$router.push('/user')
                }
              })
          .catch(() => {
            this.error = "неверная почта или пароль"
          })
    },
  }
}
</script>

<style scoped>

</style>