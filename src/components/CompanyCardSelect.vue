<template>
  <div class="col s12">
    <div class="card light-blue darken-3">
      <div class="card-content white-text">
        <span class="card-title">{{company.type_organizations.description}} {{company.name}}</span>
        <p>{{company.ogrn}}</p>
        <p>{{company.inn}}</p>
        <p>{{company.kpp}}</p>
        <p>{{company.address}}</p>
        <p>{{company.date_registration}}</p>
        <div v-if="company.type_organizations.name !== 'IP'">
          <p>{{company.supervisor}}</p>
          <p>{{company.main_activity.name}} {{company.main_activity.code}}</p>
        </div>
      </div>
      <div class="card-action">
        <AgreeButton @click="$emit('select')">Выбрать</AgreeButton>
      </div>
    </div>
  </div>
</template>

<script>
import AgreeButton from "@/components/UI/AgreeButton";
export default {
  name: "CompanyCardSelect",
  components: {AgreeButton},
  props: {
    company: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>