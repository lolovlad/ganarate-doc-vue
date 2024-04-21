<template>
  <h3>{{$props.placeholder}}</h3>
  <VueDatePicker :model-value="convertDate"
                 utc
                 :min-date="minDate"
                 @update:model-value="handleDate"
                 :enableTimePicker="false">
    <template #input-icon>
      <img/>
    </template>
  </VueDatePicker>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
export default {
  components: { VueDatePicker },
  name: "DateTimePicker",
  props: {
    modelValue: {Date},
    placeholder: String,
    minDate:{
      type: String,
      default: null
    }
  },
  computed: {
    convertDate(){
      return new Date(this.$props.modelValue)
    }
  },
  methods: {
    handleDate(event){
      this.$emit('update:modelValue', event)
    }
  }
}
</script>

<style scoped>
.repad{
  padding: 10px;
}
</style>