<template>
  <div class="form">
    <img src="../../static/logo.png" />
    <SignInForm :error="error" @signin="login" />
    <h3></h3>
  </div>
</template>

<script>
import SignInForm from "@/components/Forms/SignInForm";
export default {
  name: "LoginPage",
  components: {SignInForm},
  data(){
    return{
      error: ""
    }
  },
  methods: {
    login(email, password) {
      this.$store.dispatch('auth/login', {url: '/login/sign-in', email: email, password: password})
          .then(
              (response) => {
                console.log(response.status !== 200)
                if (response.status !== 200) {
                  this.error = response.status.message
                } else {
                  this.redirect(response.data.user.type)
                }
              })
          .catch(() => {
            this.error = "неверная почта или пароль"
          })
    },
    redirect(typeUser){
      if (typeUser.name === "admin"){
        this.$router.push('/admin')
      }else{
        this.$router.push('/user')
      }
    }
  },
}
</script>

<style scoped>
.form{
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
}

.form > img{
  width: 200px;
  height: 200px;
  margin: 30px 0;
}
</style>