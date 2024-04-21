<template>
  <div v-if="pageLoad">
    <div class="container">
      <div class="row">
        <PrefabSearchForm
            @addPrefab="addPrefab"
        />
      </div>
      <div class="row">
        <div v-if="Object.keys(prefabs).length > 0">
          <ul class="collection">
            <PrefabItem
                v-for="(value, key) in prefabs" :key="key" :prefab="value"
                @update="updateP"
                @delete="deleteP"
            />
          </ul>
        </div>
      </div>
      <div class="row">
        <AgreeButton @click="openCreate">Создать</AgreeButton>
      </div>
    </div>
    <CastomModelWindow ref="modelWindow" @close="$refs.prefabForm.clearForm()">
      <PrefabFieldForm ref="prefabForm" @saveChange="saveFiled"/>
    </CastomModelWindow>

    <CastomModelWindow ref="modelWindowCreate" @close="$refs.prefabCreateForm.clearForm()">
      <PrefabCreateForm ref="prefabCreateForm" @create="createPack"/>
    </CastomModelWindow>

  </div>

  <CastomLoader v-else/>

</template>

<script>
import PrefabItem from "@/components/PrefabItem";
import CastomLoader from "@/components/UI/CastomLoader";
import PrefabSearchForm from "@/components/Forms/PrefabSearchForm";
import axios from "axios";
import CastomModelWindow from "@/components/UI/CastomModelWindow";
import PrefabFieldForm from "@/components/Forms/PrefabFieldForm";
import PrefabCreateForm from "@/components/Forms/prefabCreateForm";
import AgreeButton from "@/components/UI/AgreeButton";
import M from "materialize-css";
import { saveAs } from 'file-saver';
export default {
  name: "PackPage",
  components: {
    AgreeButton,
    PrefabCreateForm, PrefabFieldForm, CastomModelWindow, PrefabSearchForm, CastomLoader, PrefabItem},
  data(){
    return{
      pageLoad: false,
      prefabs: {}
    }
  },
  methods: {
    updateP(uuidPrefab){
      const pref = this.prefabs[uuidPrefab]

      if(pref.additional_fields !== null && pref.additional_fields !== ""){
        this.$refs.prefabForm.fields = pref.additional_fields
        this.$refs.prefabForm.uuidPrefab = pref.uuid
        this.$refs.modelWindow.open()
      }
    },
    deleteP(uuidPrefab){
      delete this.prefabs[uuidPrefab]
    },
    async addPrefab(uuidPrefab){

      await axios.get(
          `templates/create/${uuidPrefab}`
      ).then(response => {
        const pref = response.data
        this.prefabs[pref.uuid] = pref

        if(pref.additional_fields !== null && pref.additional_fields !== ""){
          this.$refs.prefabForm.fields = pref.additional_fields
          this.$refs.prefabForm.uuidPrefab = uuidPrefab
          this.$refs.modelWindow.open()
        }
      })
    },
    saveFiled(fields, uuidPrefab){
      this.prefabs[uuidPrefab].additional_fields = fields
      this.$refs.modelWindow.close()
    },
    async createPack(uuidCompany){

      const data = []

      for (let key in this.prefabs){
        data.push({
          uuid: key,
          additional_fields: this.prefabs[key].additional_fields
        })
      }

      this.$refs.modelWindowCreate.close()
      this.$refs.prefabCreateForm.clear()

      await axios.post(
          `templates/create_pack_doc`,
          {
            queue_template: data,
            uuid_company: uuidCompany
          },
          {
            responseType: 'blob'
          }

      ).then(response => {
        M.toast({html: "идет скачивыание архива"})

        const blob = new Blob([response.data], {
          type: 'application/octet-stream'
        })
        const filename = 'download.zip'
        saveAs(blob, filename)
        this.$router.push(`/user`)
      })
    },
    openCreate(){
      this.$refs.prefabCreateForm.getListCompany()
      this.$refs.modelWindowCreate.open()
    }
  },
  mounted() {
    this.pageLoad = true
  }
}
</script>

<style scoped>

</style>