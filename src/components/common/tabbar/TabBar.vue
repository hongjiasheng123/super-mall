<template>
  <div id="tab-bar">
    <slot></slot>
    <!-- <div class="tab-bar-item"><img src="../../assets/img/tabbar/home.svg" alt="">首页</div>
    <div class="tab-bar-item"><img src="../../assets/img/tabbar/home.svg" alt="">分类</div>
    <div class="tab-bar-item"><img src="../../assets/img/tabbar/home.svg" alt="">购物车</div>
    <div class="tab-bar-item"><img src="../../assets/img/tabbar/home.svg" alt="">我的</div> -->
  </div>
</template>

<script>
export default {
  name:"TabBar"
}
</script>

<style>
  #tab-bar{
    background-color:#f6f6f6;
    display: flex;
    position:fixed;
    left:0;
    right:0;
    bottom:0;
    box-shadow:0px -2px 10px rgba(100,100,100,.3)
  }

  /*.tab-bar-item{
    flex:1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img{
    height:24px;
    width:24px;
  } */
</style>