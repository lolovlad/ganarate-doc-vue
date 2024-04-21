<template>
  <div class="list__page">
    <ul class="pagination">
      <li class="disabled"><a><i class="material-icons">chevron_left</i></a></li>
      <li :class="{active: curPage === i}" @click="getCurPage(i)" v-for="i in countPage" :key="i">
        <a>{{i}}</a>
      </li>
      <li class="waves-effect"><a><i class="material-icons">chevron_right</i></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CastomPagination",
  data(){
    return{
      curPage: 1
    }
  },
  props: {
    countPage: {
      type: Number,
      default: 1
    }
  },
  methods: {
    getCurPage(numPage){
      this.$emit("updatePage", numPage)
      this.curPage = numPage
    }
  }
}
</script>

<style scoped>
.list__page{
  display: flex;
  height: 30px;
  gap: 8px;
  justify-items: center;
  justify-content: center;
  align-items: center;
}
.list__page > h1{
  padding: 5px 10px;
  font-size: 20px;
  color: white;
  cursor: pointer;
  background: #0273bb;
  text-align: center;
}
.pagination li.active{
  background-color: #B71C1C;
}
</style>