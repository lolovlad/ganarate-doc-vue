<template>
  <div v-if="pageLoad">
    <div class="form">
      <div class="row">
        <form class="col s12" @submit.prevent>
          <div class="row">
            <div class="input-field col s6">
              <ComboBox
                  :data="publishedParentTag"
                  v-model="idMainTag"
                  @change="loadChildrenTag"
              />
            </div>
            <div class="input-field col s6">
              <ComboBox
                  :data="publishedChildrenTag"
                  v-model="prefab.id_tag"
              />
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input placeholder="Название" type="text" v-model="prefab.name">
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <FileInput
                  ref="docs"
                  v-model:data="prefab.docs"
                  :accept="'.docx'"
              />
            </div>
            <div class="input-field col s6">
              <FileInput
                  ref="json"
                  v-model:data="prefab.additional_fields"
                  :accept="'.json'"
              />
            </div>
          </div>


          <AgreeButton @click="add" v-if="isAdd">Добавить</AgreeButton>
          <AgreeButton @click="update" v-else>Обновить</AgreeButton>
          <span class="helper-text" data-error="wrong" data-success="right">{{error}}</span>
          <span class="helper-text" data-error="wrong" data-success="right">{{error_form}}</span>
        </form>
      </div>
    </div>
  </div>
  <CastomLoader v-else/>
</template>

<script>
import axios from "axios";
import CastomLoader from "@/components/UI/CastomLoader";
import AgreeButton from "@/components/UI/AgreeButton";
import ComboBox from "@/components/UI/ComboBox";
import FileInput from "@/components/UI/FileInput";

export default {
  name: "PrefabForm",
  components: {FileInput, ComboBox, AgreeButton, CastomLoader},
  props: {
    isAdd: {
      type: Boolean
    },
    error: {
      type: String
    },
    uuidPrefab: {
      type: Object
    }
  },
  data(){
    return{
      selectParentTag: [],
      selectChildTag: [],
      error_form: "",
      prefab: {
        name: "",
        docs: null,
        additional_fields: null,
        id_tag: 1,
      },
      idMainTag: 1,
      pageLoad: false
    }
  },
  methods: {
    async loadParentTag(){
      await axios.get(
          `templates/tags_parent`
      ).then(response => {
        this.selectParentTag = response.data
        this.loadChildrenTag()
      })
    },
    async loadChildrenTag(){
      const responseType = await axios.get(
          `templates/tags_children/${this.idMainTag}`
      )
      this.selectChildTag = responseType.data
    },
    add(){
      this.prefab.docs = this.$refs.docs.bytesData
      this.prefab.additional_fields = this.$refs.json.bytesData
      this.$emit("add", this.prefab)
    },
    update(){
      this.prefab.docs = this.$refs.docs.bytesData
      this.prefab.additional_fields = this.$refs.json.bytesData
      this.$emit("update", this.prefab)
    },
    async loadPrefab(){
      await axios.get(
          `templates/update/${this.uuidPrefab}`
      ).catch((e)=>{
        console.log(e)
      }).then((response)=> {
        const prefab = response.data
        console.log(prefab)
        this.prefab.name = prefab.name
        this.$refs.docs.nameFile = prefab["docs"].split("\\").slice(-1)[0]

        if(prefab["additional_fields"] !== "" && prefab["additional_fields"] !== null)
          this.$refs.json.nameFile = prefab["additional_fields"].split("\\").slice(-1)[0]

        this.idMainTag = prefab.tag.id_subtag
        this.loadChildrenTag()

        this.prefab.id_tag = prefab.tag.id
      })
    }
  },
  computed: {
    publishedParentTag() {
      return this.selectParentTag.map((data) => {
        return {
          value: data.id,
          text: data.name
        }
      })
    },
    publishedChildrenTag() {
      return this.selectChildTag.map((data) => {
        return {
          value: data.id,
          text: data.name
        }
      })
    }
  },
  mounted() {
    this.loadParentTag()
    if(!this.isAdd)
      this.loadPrefab()
    this.pageLoad = true
  }
}
</script>

<style scoped>

</style>