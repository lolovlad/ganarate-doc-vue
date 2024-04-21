<template>
  <li class="collection-item">
    <div class="row" style="margin-bottom: 0">
      <div class="col s10">
        {{prefab.name}}<br>
        {{prefab.tag.name}}
      </div>
      <div class="col s1">
        <AgreeButton @click="$emit('update', prefab.uuid)" ><i class="material-icons">border_color</i></AgreeButton>
      </div>
      <div class="col s1">
        <AgreeButton @click="$emit('delete', prefab.uuid)" ><i class="material-icons">cancel</i></AgreeButton>
      </div>
    </div>
  </li>
</template>

<script>
import AgreeButton from "@/components/UI/AgreeButton";
export default {
  name: "PrefabItem",
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