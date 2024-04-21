<template>
  <div class="container">
  <PrefabForm
      :isAdd="isAdd"
      :error="error"
      :uuidPrefab="uuidPrefab"
      @add="addPrefab"
      @update="updatePrefab"
  />
</div>
</template>

<script>
import PrefabForm from "@/components/Forms/PrefabForm";
import axios from "axios";
export default {
  name: "PrefabsFormPage",
  components: {PrefabForm},
  data(){
    return{
      uuidPrefab: this.$route.params.uuid_prefabs,
      isAdd: (this.$route.params.uuid_prefabs === undefined),
      error: "",
    }
  },
  methods: {
    async addPrefab(prefabData){
      console.log(prefabData)
      const form = new FormData()
      form.append("name", prefabData.name)
      form.append("docs", prefabData.docs)
      if(prefabData.additional_fields !== null)
        form.append("additional_fields", prefabData.additional_fields)
      form.append("id_tag", prefabData.id_tag)

      await axios.post(
          `templates/`,
          form,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
      ).catch((e)=>{
        console.log(e)
      }).then((response)=> {
            response.status
            this.$router.push('/admin/prefabs/')
          }
      )
    },
    async updatePrefab(prefabData){
      console.log(prefabData)
      const form = new FormData()

      form.append("name", prefabData.name)
      form.append("id_tag", prefabData.id_tag)
      if(prefabData.docs !== null)
        form.append("docs", prefabData.docs)

      if(prefabData.additional_fields !== null)
        form.append("additional_fields", prefabData.additional_fields)

      await axios.put(
          `templates/${this.uuidPrefab}`,
          form,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
      ).catch((e)=>{
        console.log(e)
      }).then((response)=> {
            response.status
            this.$router.push('/admin/prefabs/')
          }
      )
    }
  }
}
</script>

<style scoped>

</style>