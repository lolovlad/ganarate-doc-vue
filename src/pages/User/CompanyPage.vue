<template>
  <div v-if="pageLoad">
    <div v-if="companies.length > 0">
      <div class="container">
        <div class="row">
          <CompanyCardView v-for="company in companies" :key="company.uuid" :company="company"
                           @update="updateCompany(company.uuid)"
                           @delete="deleteCompany(company.uuid)"
          />
        </div>
      </div>
      <CastomPagination :countPage="countPage" class="pag" @updatePage="getListCompany"/>
    </div>
    <div v-else>
      <h1>Нет зарегистрированных компаний</h1>
    </div>
  </div>
  <CastomLoader v-else/>
  <FixedButton @click="$router.push(`/user/companies/add`)"/>

</template>

<script>
import CastomLoader from "@/components/UI/CastomLoader";
import FixedButton from "@/components/UI/FixedButton";
import CastomPagination from "@/components/UI/CastomPagination";
import CompanyCardView from "@/components/CompanyCardView";
import axios from "axios";
import M from "materialize-css";
export default {
  name: "CompanyPage",
  components: {CompanyCardView, CastomPagination, FixedButton, CastomLoader},
  data(){
    return{
      countPage: null,
      pageLoad: false,
      companies: []
    }
  },
  methods: {
    async getListCompany(page=1){
      await axios.get(
          `/company/by_user?num_page=${page}`,
      ).then(response => {
        this.companies = response.data
        this.countPage = parseInt(response.headers["x-count-page"])
        this.pageLoad = true
      }).catch((e) => {
        console.log(e)
      })
    },

    updateCompany(uuidCompany){
      this.$router.push(`edit/${uuidCompany}`)
    },
    async deleteCompany(uuidCompany){
      await axios.delete(
          `company/${uuidCompany}`
      ).catch((e)=>{
        M.toast({html: e.response.message})
      }).then((response)=> {
            if(response.status === 200){
              M.toast({html: "Компания удалена"})
              this.getListCompany()
            }
          }
      )
    },
  },
  mounted() {
    this.getListCompany()
  }
}
</script>

<style scoped>
</style>