<template>
 <div class="file__div">
   <label class="z-depth-3">
     <input
         type="file"
         @change="fileSelected"
         ref="inputFile"
         :accept="accept"
     >
     <span>{{nameFile}}</span>
   </label>
 </div>
</template>

<script>
export default {
  props: {
    data: String,
    accept: {
      type: String,
      default: "*"
    },
  },
  emits: ['update:data'],
  data(){
    return {
      selectFile: null,
      nameFile: "Выберите файл",
      bytesData: null
    }
  },
  methods: {
    fileSelected(event){
      const reader = new FileReader()

      reader.addEventListener('load', (event) => {
        this.selectFile = event.target.result
        this.$emit('update:data', this.selectFile)
      });


      if(event.target.files[0]){
        this.nameFile = event.target.files[0].name
        reader.readAsBinaryString(event.target.files[0])
        this.bytesData = event.target.files[0]
      }
    },
    clearSelected(){
      this.$refs.inputFile.value = null;
      this.nameFile = "Выберите файл"
    }
  },
  name: "FileInput"
}
</script>

<style scoped>
input[type=file]{
  display: none;
}
label{
  width: 100%;
  height: 40px;
  background: #B71C1C;
  color: white;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>