<template>
  <BaseHeader/>
  <router-view>

  </router-view>
  <BaseFooter/>
</template>

<script>
import BaseHeader from "@/components/BaseHeader";
import BaseFooter from "@/components/BaseFooter";
export default {
  name: "MainPage",
  components: {BaseFooter, BaseHeader}
}
</script>

<style scoped>

</style>