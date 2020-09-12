<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle">
    <slot name="item-text"></slot>
    </div>
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
    <div>首页</div> -->
  </div>
</template>

<script>
export default {
  name:"TabBaritem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  data(){
    return{
      // isActive:true,
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
/* #tab-bar{
    background-color:#f6f6f6;
    display: flex;
    position:fixed;
    left:0;
    right:0;
    bottom:0;
    box-shadow:0px -2px 10px rgba(100,100,100,.3)
  } */

  .tab-bar-item{
    flex:1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img{
    height:24px;
    width:24px;
    margin-top:3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  /* .active{
    color:red;
  } */
</style>