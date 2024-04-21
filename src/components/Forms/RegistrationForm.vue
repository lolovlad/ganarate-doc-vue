<template>
  <div class="form">
    <div class="row">
      <form class="col s12" @submit.prevent>
        <div class="row">
          <div class="input-field col s4">
            <input placeholder="Фамилия" type="text" v-model="surname">
          </div>
          <div class="input-field col s4">
            <input placeholder="Имя" type="text" v-model="name">
          </div>
          <div class="input-field col s4">
            <input placeholder="Отчество" type="text" v-model="patronumic">
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input placeholder="телефон" type="text" v-model="phone">
          </div>

        </div>
        <div class="row">
          <div class="input-field col s12">
            <input placeholder="email" type="email" v-model="email">
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input placeholder="пароль" type="password" v-model="password">
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input placeholder="пароль" type="password" v-model="repite_password">
          </div>
        </div>
        <AgreeButton @click="reg">Зарегистрироваться</AgreeButton>
        <span class="helper-text" data-error="wrong" data-success="right">{{error}}</span>
        <span class="helper-text" data-error="wrong" data-success="right">{{error_form}}</span>
      </form>
    </div>
  </div>
</template>

<script>
import AgreeButton from "@/components/UI/AgreeButton";
export default {
  name: "RegistrationForm",
  components: {AgreeButton},
  props: {
    error: {
      type: String,
      required: false
    }
  },
  data(){
    return{
      surname: "",
      name: "",
      patronumic: "",
      phone: "",
      email: "",
      password: "",
      repite_password: "",
      error_form: ""
    }
  },
  methods: {
    reg(){
      console.log(this.password, this.repite_password)
      if(this.password === this.repite_password){
        this.$emit('reg', {
          "email": this.email,
          "name": this.name,
          "surname": this.surname,
          "patronymic": this.patronumic,
          "phone": this.phone,
          "password": this.password
        })
      }else{
        this.error_form = "Пароль не совпадает"
      }
    }
  },
  computed: {
  },
}
</script>

<style scoped>

</style>