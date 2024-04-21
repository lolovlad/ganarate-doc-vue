<template>
  <form class="col s12 form__div" @submit.prevent>
    <div class="row">
      <div class="input-field col s12">
        <input placeholder="email" type="email" v-model="email">
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input placeholder="Password" type="password" v-model="password">
      </div>
    </div>
    <AgreeButton @click="signin">вход</AgreeButton>
    <span class="helper-text" data-error="wrong" data-success="right">{{error}}</span>
  </form>
</template>

<script>
import AgreeButton from "@/components/UI/AgreeButton";
export default {
  name: "SignInForm",
  components: {AgreeButton},
  props: {
    error: {
      type: String,
      required: false
    }
  },
  data(){
    return{
      email: "",
      password: ""
    }
  },
  methods: {
    signin(){
      this.$emit('signin', this.email, this.password)
    }
  },
  computed: {
  },
}
</script>

<style scoped>
.form__div{
  width: 450px;
}
</style>