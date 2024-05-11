<template>
  <AdminHeader/>
  <router-view>

  </router-view>
  <AdminFooter/>
</template>

<script>
import AdminHeader from "@/components/AdminHeader";
import AdminFooter from "@/components/AdminFooter";
export default {
  name: "MainAdminPage",
  components: {AdminFooter, AdminHeader},

}
</script>

<style scoped>

</style>