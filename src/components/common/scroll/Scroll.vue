<template>
<!-- ref-->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
  name:"Scroll",
  data(){
    return{
      scroll:null
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      observeDOM:true,
      click:true
    })
    this.scroll.scrollTo(0,0)
  }
}
</script>

<style scoped>

</style>