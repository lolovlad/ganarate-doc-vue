<template>
  <AdminHeader/>
  <router-view>

  </router-view>
</template>

<script>
import AdminHeader from "@/components/AdminHeader";
export default {
  name: "MainAdminPage",
  components: {AdminHeader},

}
</script>

<style scoped>

</style>