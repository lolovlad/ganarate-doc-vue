<template>
<UserHeader/>
  <router-view>

  </router-view>
</template>

<script>
import UserHeader from "@/components/UserHeader";
export default {
  name: "MainUserPage",
  components: {UserHeader}
}
</script>

<style scoped>

</style>