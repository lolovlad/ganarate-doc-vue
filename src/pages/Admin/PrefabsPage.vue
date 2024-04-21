<template>
  <div v-if="pageLoad">
    <div v-if="prefabs.length > 0">
      <div class="container">
        <div class="row">
          <PrefabsCardView v-for="prefab in prefabs" :key="prefab.uuid" :prefab="prefab"
                           @update="updateP(prefab.uuid)"
                           @delete="deleteP(prefab.uuid)"
          />
        </div>
      </div>
      <CastomPagination :countPage="countPage" class="pag" @updatePage="getListPrefabs"/>
    </div>
    <div v-else>
      <h1>Нет зарегистрированных шаблонов</h1>
    </div>
  </div>
  <CastomLoader v-else/>
  <FixedButton @click="$router.push(`/admin/prefabs/add`)"/>
</template>

<script>
import PrefabsCardView from "@/components/PrefabsCardView";
import CastomPagination from "@/components/UI/CastomPagination";
import CastomLoader from "@/components/UI/CastomLoader";
import FixedButton from "@/components/UI/FixedButton";
import axios from "axios";
import M from "materialize-css";
export default {
  name: "PrefabsPage",
  components: {FixedButton, CastomLoader, CastomPagination, PrefabsCardView},
  data(){
    return{
      countPage: null,
      pageLoad: false,
      prefabs: []
    }
  },
  methods: {
    async getListPrefabs(page=1){
      await axios.get(
          `templates/?num_page=${page}`,
      ).then(response => {
        this.prefabs = response.data
        this.countPage = parseInt(response.headers["x-count-page"])
        this.pageLoad = true
      }).catch((e) => {
        console.log(e)
      })
    },

    updateP(uuidPrefab){
      this.$router.push(`edit/${uuidPrefab}`)
    },
    async deleteP(uuidPrefab){
      await axios.delete(
          `templates/${uuidPrefab}`
      ).catch((e)=>{
        M.toast({html: e.response.message})
      }).then((response)=> {
            if(response.status === 200){
              M.toast({html: "Компания удалена"})
              this.getListPrefabs()
            }
          }
      )
    },
  },
  mounted() {
    this.getListPrefabs()
  }
}
</script>

<style scoped>

</style>