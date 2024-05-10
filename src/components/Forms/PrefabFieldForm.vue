<template>
  <div class="form">
    <div class="row">
      <form class="col s12" @submit.prevent>
        <div class="row" v-for="field in fields" :key="field.name">
          <div class="input-field col s12">
            <input :placeholder="field.discription" :type="field.type" v-model="field.val">
          </div>
        </div>
        <AgreeButton @click="$emit('saveChange', fields, uuidPrefab)">Сохранить</AgreeButton>
      </form>
    </div>
  </div>
</template>

<script>
import AgreeButton from "@/components/UI/AgreeButton";
export default {
  name: "PrefabFieldForm",
  components: {AgreeButton},
  data(){
    return{
      fields: [],
      uuidPrefab: "",
    }
  },
  methods: {
    clearForm(){
      this.fields = []
    }
  }
}
</script>

<style scoped>

</style>