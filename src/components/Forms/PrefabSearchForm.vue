<template>
  <div v-if="pageLoad">
    <div class="form">
      <div class="row">
        <form class="col s12" @submit.prevent>
          <div class="row">
            <div class="input-field col s3">
              <ComboBox
                  :data="publishedParentTag"
                  v-model="idMainTag"
                  @change="loadChildrenTag"
              />
            </div>
            <div class="input-field col s3">
              <ComboBox
                  :data="publishedChildrenTag"
                  v-model="idChildTag"
                  @change="loadPrefabs"
              />
            </div>
            <div class="input-field col s4">
              <ComboBox
                  :data="publishedPrefabs"
                  v-model="selectUuidPrefab"
              />
            </div>
            <div class="input-field col s2">
              <AgreeButton @click="$emit('addPrefab', selectUuidPrefab)">Добавить</AgreeButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <CastomLoader v-else/>
</template>

<script>
import CastomLoader from "@/components/UI/CastomLoader";
import AgreeButton from "@/components/UI/AgreeButton";
import ComboBox from "@/components/UI/ComboBox";
import axios from "axios";
export default {
  name: "PrefabSearchForm",
  components: {ComboBox, AgreeButton, CastomLoader},
  data(){
    return{
      selectParentTag: [],
      selectChildTag: [],
      selectPrefab: [],
      idMainTag: 1,
      idChildTag: 1,
      selectUuidPrefab: "",
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
      await axios.get(
          `templates/tags_children/${this.idMainTag}`
      ).then(response => {
        this.selectUuidPrefab = ""
        this.selectChildTag = response.data
        this.loadPrefabs()
      })
    },
    async loadPrefabs(){
      const responseType = await axios.get(
          `templates/by_id_tag/${this.idChildTag}`
      )
      this.selectPrefab = responseType.data
    },
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
    },
    publishedPrefabs(){
      return this.selectPrefab.map((data) => {
        return {
          value: data.uuid,
          text: data.name
        }
      })
    }
  },
  mounted() {
    this.loadParentTag()
    this.pageLoad = true
  }
}
</script>

<style scoped>

</style>