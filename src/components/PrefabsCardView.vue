<template>
  <div class="col s12">
    <div class="card light-blue darken-3">
      <div class="card-content white-text">
        <span class="card-title">{{prefab.name}}</span>
        <p>{{prefab.tag.name}}</p>
      </div>
      <div class="card-action">
        <AgreeButton @click="$emit('update')">Редактировать</AgreeButton>
        <AgreeButton @click="$emit('delete')">Удалить</AgreeButton>
      </div>
    </div>
  </div>
</template>

<script>
import AgreeButton from "@/components/UI/AgreeButton";
export default {
  name: "PrefabsCardView",
  components: {AgreeButton},
  props: {
    prefab: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>