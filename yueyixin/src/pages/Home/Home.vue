<template>
  <section class="home_wrap">
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(ban,index) in banner" :key="index">
            <img :src="'http://www.sinomis.com'+ban.img">
          </div>
        </div>
      </div>
    </div>
    <ul class="nav_list">
      <li class="nav_item" @click.prevent="goTo('/one',0)">
        <img src="../../../static/images/1.png" alt="">
        <p :class="{on:nowIndex===0}">{{cate[0]}}</p>
      </li>
      <li class="nav_item" @click.prevent="goTo('/two',1)">
        <img src="../../../static/images/2.png" alt="">
        <p :class="{on:nowIndex===1}">{{cate[1]}}</p>
      </li>
      <li class="nav_item" @click.prevent="goTo('/three',2)">
        <img src="../../../static/images/3.png" alt="">
        <p :class="{on:nowIndex===2}">{{cate[2]}}</p>
      </li>
    </ul>
    <transition name="fade">
      <router-view/>
    </transition>
  </section>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {reqBanners, reqNewsCate} from '../../api/index'

  export default {
    name: "Home",
    data() {
      return {
        banner: [],
        cate: [],
        nowIndex: 0,
      }
    },
    methods: {
      //初始化轮播图
      _initSwiper() {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay: true,
          })
        })
      },
      goTo(path, index) {
        this.$router.push(path);
        this.nowIndex = index
      }
    },
    async mounted() {
      let result;
      //获取轮播图
      reqBanners().then(res => {
        const result = res.data;
        this.banner = result.data;
        this._initSwiper()
      });
      reqNewsCate().then(res => {
        result = res.data;
        result.data.forEach(item => {
          this.cate.push(item.name)
        })
      });
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .home_wrap
    width 100%
    height 100%
    overflow hidden
    .banner
      width: 100%;
      height: 3.7rem;
      img
        width: 100%;
        height: 100%;
    .nav_list
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0.43rem 0.75rem 0.35rem;
      box-sizing: border-box;
      background: #fff;
      .nav_item
        text-align: center;
        img
          width: 1.02rem;
          height: 1.02rem;
        p
          font-size: 0.28rem;
          font-family: PingFangSC-Light;
          color: rgba(0, 0, 0, 1);
          line-height: 0.5rem;
          &.on
            color rgba(75, 100, 214, 1);
    .add_more
      width 100%
      color #999
      font-size 0.28rem
      line-height 1rem
      text-align: center
    .fade-enter-active, .fade-leave-avtive {
      transition: opacity .3s
    }
    .fade-enter, .fade-leave-to {
      opacity: 0
    }
</style>
