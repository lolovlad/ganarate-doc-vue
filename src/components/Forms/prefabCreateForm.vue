<template>
  <div v-if="pageLoad">
    <div v-if="selectCompany.length > 0">
      <div class="container">
        <div class="row">
          <CompanyCardSelect v-for="company in selectCompany" :key="company.uuid" :company="company"
                             @select="select(company)"
          />

        </div>
        <CastomPagination :countPage="countPage" class="pag" @updatePage="getListCompany"/>
        <div class="row">
          <div class="col s6" v-if="mainCompany !== null">
            <div class="card light-blue darken-3">
              <div class="card-content white-text">
                <span class="card-title">{{mainCompany.type_organizations.description}} {{mainCompany.name}}</span>
                <p>{{mainCompany.ogrn}}</p>
                <p>{{mainCompany.inn}}</p>
                <p>{{mainCompany.kpp}}</p>
                <p>{{mainCompany.address}}</p>
                <p>{{mainCompany.date_registration}}</p>
                <div v-if="mainCompany.type_organizations.name !== 'IP'">
                  <p>{{mainCompany.supervisor}}</p>
                  <p>{{mainCompany.main_activity.name}} {{mainCompany.main_activity.code}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <AgreeButton @click="$emit('create', data.uuidCompany)">Создать набор</AgreeButton>
        </div>
      </div>
    </div>
  </div>
  <CastomLoader v-else/>
</template>

<script>
import axios from "axios";
import CastomPagination from "@/components/UI/CastomPagination";
import CastomLoader from "@/components/UI/CastomLoader";
import AgreeButton from "@/components/UI/AgreeButton";
import CompanyCardSelect from "@/components/CompanyCardSelect";

export default {
  name: "prefabCreateForm",
  components: {CompanyCardSelect, AgreeButton, CastomLoader, CastomPagination},
  data(){
    return{
      selectCompany: [],
      countPage: null,
      pageLoad: false,
      data: {
        uuidCompany: ""
      },
      mainCompany: null
    }
  },
  methods: {
    async getListCompany(page=1){
      await axios.get(
          `/company/by_user/?num_page=${page}`,
      ).then(response => {
        this.selectCompany = response.data

        this.countPage = parseInt(response.headers["x-count-page"])
        this.pageLoad = true
      }).catch((e) => {
        console.log(e)
      })
    },
    select(company){
      this.data.uuidCompany = company.uuid
      this.mainCompany = company
    },
    clear(){
      this.selectCompany = []
      this.countPage = null
      this.pageLoad = false
      this.data = {
        uuidCompany: ""
      }
      this.mainCompany = null
    }
  },
}
</script>

<style scoped>

</style>