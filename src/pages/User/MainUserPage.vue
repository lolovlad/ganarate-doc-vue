<template>
<UserHeader/>
  <router-view>

  </router-view>
  <UserFooter/>
</template>

<script>
import UserHeader from "@/components/UserHeader";
import UserFooter from "@/components/UserFooter";
export default {
  name: "MainUserPage",
  components: {UserFooter, UserHeader}
}
</script>

<style scoped>

</style>