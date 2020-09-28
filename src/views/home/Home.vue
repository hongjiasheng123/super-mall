<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="content">
      <home-swiper :banners="banners"/>
      <home-recommend-view :recommends="recommends"/>
      <home-feature/>
      <tab-control class="tab-control" :titles="['流行','新款','样式']" @tabClick="tabClick"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import HomeSwiper from "./childComps/HomeSwiper"
import HomeRecommendView from "./childComps/HomeRecommendView"
import HomeFeature from "./childComps/HomeFeature"
import TabControl from "components/content/tabControl/TabControl"
import GoodsList from "components/content/goods/GoodsList"
import Scroll from "components/common/scroll/Scroll"
import BackTop from "components/content/backtop/BackTop"

import {getHomeMultidata , getHomeGoods} from "network/home"

export default {
 name:'Home',
 components:{
   NavBar,
   HomeSwiper,
   HomeRecommendView,
   HomeFeature,
   TabControl,
   GoodsList,
   Scroll,
   BackTop
 },
 data(){
   return{
     banners:[],
     recommends:[],
     goods:{
       'pop':{page:0,list:[]},
       'new':{page:0,list:[]},
       'sell':{page:0,list:[]}
     },
     currentType:'pop'
   }
 },
 created(){
   //1.请求多个数据
    this.getHomeMultidata()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
 },
 methods:{
   //下面是事件监听
   tabClick(index){
     switch(index){
      case 0:
         this.currentType = 'pop'
         break
      case 1:
         this.currentType = 'new'
         break
      case 2:
         this.currentType = 'sell'
     }
   },

   //下面都是网络请求
   getHomeMultidata() {
     getHomeMultidata().then(
     value => {
       this.banners = value.data.banner.list;
       this.recommends = value.data.recommend.list;
     }
   )
  },
  getHomeGoods(type) {
    const page = this.goods[type].page + 1
    getHomeGoods(type, page).then(
     value => {
       this.goods[type].list.push(...value.data.list)
       this.goods[type].page +=1
     }
   )
  }
 },
 computed:{
   showGoods(){
     return this.goods[this.currentType].list
   }
 }
}
</script>

<style scoped>
  #home{
    margin-top:44px;
    height:100vh;
  }
  .home-nav{
    background-color:var(--color-tint);
    color:white;
    position:fixed;
    left:0;
    right:0;
    top:0;
    z-index: 9;
  }
  .tab-control{
    position:sticky;
    top:44px;
  }
  .content{
    height:calc(100% - 93px);
    overflow: hidden;
  }
</style>