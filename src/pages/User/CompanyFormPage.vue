<template>
  <div class="container">
    <CompanyForm
        :idAdd="isAdd"
        :error="error"
        :uuidCompany="uuidCompany"
        @add="addCompany"
        @update="updateCompany"
    />
  </div>
</template>

<script>
import CompanyForm from "@/components/Forms/CompanyForm";
import axios from "axios";
export default {
  name: "CompanyFormPage",
  components: {CompanyForm},
  data(){
    return{
      uuidCompany: this.$route.params.uuid_company,
      isAdd: (this.$route.params.uuid_company === undefined),
      error: "",
    }
  },
  methods: {
    async addCompany(companyData){
      const form = new FormData()

      form.append("name", companyData.name)
      form.append("ogrn", companyData.ogrn)
      form.append("inn", companyData.inn)
      form.append("kpp", companyData.kpp)
      form.append("id_type_organizations", parseInt(companyData.id_type_organizations))
      form.append("id_main_activity", parseInt(companyData.id_main_activity))
      form.append("supervisor", companyData.supervisor)
      form.append("address", companyData.address)
      form.append("date_registration", companyData.date_registration)
      if(companyData.icon !== null)
        form.append("icon", companyData.icon)

      await axios.post(
          `company/`,
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
            this.$router.push('/user/companies/')
          }
      )
    },
    async updateCompany(companyData){
      const form = new FormData()

      form.append("name", companyData.name)
      form.append("ogrn", companyData.ogrn)
      form.append("inn", companyData.inn)
      form.append("kpp", companyData.kpp)
      form.append("id_type_organizations", parseInt(companyData.id_type_organizations))
      form.append("id_main_activity", parseInt(companyData.id_main_activity))
      form.append("supervisor", companyData.supervisor)
      form.append("address", companyData.address)
      form.append("date_registration", companyData.date_registration)
      if(companyData.icon !== null)
        form.append("icon", companyData.icon)

      console.log(companyData.icon)

      await axios.put(
          `company/${this.uuidCompany}`,
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
            this.$router.push('/user/companies/')
          }
      )
    }
  }
}
</script>

<style scoped>

</style>