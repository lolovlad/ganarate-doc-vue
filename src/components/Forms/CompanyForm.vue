<template>
  <div v-if="pageLoad">
    <div class="form">
      <div class="row">
        <form class="col s12" @submit.prevent>
          <div class="row">
            <div class="input-field col s12">
              <ComboBox
                  :data="publishedTypeOrganization"
                  v-model="company.id_type_organizations"
                  :disabled="!idAdd"
              />
            </div>
          </div>
          <div v-if="keysTypeOrganization[company.id_type_organizations].name === 'IP'">
            <div class="row">
              <div class="input-field col s4">
                <input placeholder="Фамилия" type="text" v-model="companyIp.sername">
              </div>
              <div class="input-field col s4">
                <input placeholder="Имя" type="text" v-model="companyIp.name">
              </div>
              <div class="input-field col s4">
                <input placeholder="Отчество" type="text" v-model="companyIp.seconname">
              </div>
            </div>
          </div>
          <div v-else>
            <div class="row">
              <div class="input-field col s12">
                <input placeholder="Название компании" type="text" v-model="company.name">
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input placeholder="Генеральный директор" type="text" v-model="company.supervisor">
              </div>
            </div>
            <!--<div class="row">
              <div class="input-field col s12">
                <ComboBox
                    :data="publishedActivity"
                    v-model="company.id_main_activity"
                />
              </div>
            </div>-->
          </div>
          <div class="row">
            <div class="input-field col s12">
              <FileInput
                  ref="icon"
                  v-model:data="icon"
              />
            </div>
          </div>
          <div class="row">
            <div class="input-field col s4">
              <input placeholder="ОГРН" type="text" v-model="company.ogrn">
            </div>
            <div class="input-field col s4">
              <input placeholder="ИНН" type="text" v-model="company.inn">
            </div>
            <div v-if="keysTypeOrganization[company.id_type_organizations].name !== 'IP'">
              <div class="input-field col s4">
                <input placeholder="КПП" type="text" v-model="company.kpp">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input placeholder="Адресс" type="text" v-model="company.address">
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <DateTimePicker
                  :placeholder="'Дата регистрации'"
                  v-model="company.date_registration"
              />
            </div>
          </div>

          <AgreeButton @click="add" v-if="idAdd">Добавить</AgreeButton>
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
import AgreeButton from "@/components/UI/AgreeButton";
import axios from "axios";
import ComboBox from "@/components/UI/ComboBox";
import DateTimePicker from "@/components/UI/DateTimePicker";
import CastomLoader from "@/components/UI/CastomLoader";
import FileInput from "@/components/UI/FileInput";
export default {
  name: "CompanyForm",
  components: {FileInput, CastomLoader, DateTimePicker, ComboBox, AgreeButton},
  props: {
    idAdd: {
      type: Boolean
    },
    error: {
      type: String
    },
    uuidCompany: {
      type: Object
    }
  },
  data(){
    return{
      selectTypeOrganization: [],
      selectMainActivity: [],
      error_form: "",
      company: {
        name: "",
        ogrn: "",
        inn: "",
        kpp: "",
        address: "",
        date_registration: new Date().toISOString(),
        id_type_organizations: 1,
        id_main_activity: 1,
        supervisor: "",
        icon: null
      },
      companyIp: {
        name: "",
        sername: "",
        seconname: "",
      },
      keysTypeOrganization: {},
      pageLoad: false
    }
  },
  methods: {
    async loadType(){
      const responseType = await axios.get(
          `company/get_type_organizations`
      )
      this.selectTypeOrganization = responseType.data
      this.pageLoad = true
      for(let i of this.selectTypeOrganization){
        this.keysTypeOrganization[i.id] = i
      }
    },
    async loadActivity(){
      const responseType = await axios.get(
          `company/get_activity`
      )
      this.selectMainActivity = responseType.data
    },
    add(){
      if(this.keysTypeOrganization[this.company.id_type_organizations].name === 'IP'){
        this.company.name = `${this.companyIp.sername} ${this.companyIp.name} ${this.companyIp.seconname}`
      }else{
        this.company.icon = this.$refs.icon.bytesData
      }
      this.$emit("add", this.company)
    },
    update(){
      if(this.keysTypeOrganization[this.company.id_type_organizations].name === 'IP'){
        this.company.name = `${this.companyIp.sername} ${this.companyIp.name} ${this.companyIp.seconname}`
      }else{
        this.company.icon = this.$refs.icon.bytesData
      }
      this.$emit("update", this.company)
    },
    async loadCompany(){
      await axios.get(
          `company/${this.uuidCompany}`
      ).catch((e)=>{
        console.log(e)
      }).then((response)=> {
        const company = response.data
        console.log(company)
        if(company.type_organizations.name === 'IP'){
          const sepl = company.name.split(" ")
          this.companyIp.name = sepl[1]
          this.companyIp.sername = sepl[0]
          this.companyIp.seconname = sepl[2]
        }else{
          this.company.name = company["name"]
        }
        this.company.ogrn = company["ogrn"]
        this.company.inn = company["inn"]
        this.company.kpp = company["kpp"]
        this.company.id_type_organizations = company["type_organizations"]["id"]
        this.company.id_main_activity = company["main_activity"]["id"]
        this.company.supervisor = company["supervisor"]
        this.$refs.icon.nameFile = company["icon"]
        this.company.address = company["address"]
      })
    }
  },
  computed: {
    publishedTypeOrganization() {
      return this.selectTypeOrganization.map((data) => {
        return {
          value: data.id,
          text: data.description
        }
      })
    },
    publishedActivity() {
      return this.selectMainActivity.map((data) => {
        return {
          value: data.id,
          text: data.name
        }
      })
    }
  },
  mounted() {
    this.loadType()
    this.loadActivity()
    if(!this.idAdd)
      this.loadCompany()
  }
}
</script>

<style scoped>

</style>