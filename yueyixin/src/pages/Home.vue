<template>
  <section class="home_wrap" ref="bscroll">
    <div>
      <div class="banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(ban,index) in banner" :key="index">
              <img :src="'http://yixin.581vv.com'+ban.img">
            </div>
          </div>
        </div>
      </div>
      <ul class="nav_list">
        <li class="nav_item" @click="getNews(1)">
          <img src="../../static/images/1.png" alt="">
          <p>{{cate[0]}}</p>
        </li>
        <li class="nav_item" @click="getNews(2)">
          <img src="../../static/images/2.png" alt="">
          <p>{{cate[1]}}</p>
        </li>
        <li class="nav_item" @click="getNews(3)">
          <img src="../../static/images/3.png" alt="">
          <p>{{cate[2]}}</p>
        </li>
      </ul>
      <ul class="news_list">
        <li class="news_item" v-for="(item,index) in news" :key="index"> <!--@click="goTo(item.url)"-->
          <a :href="item.url">
            <div class="text">
              {{item.title}}
            </div>
            <img :src="'http://yixin.581vv.com'+item.thumb" alt="">
          </a>
        </li>
      </ul>
      <p class="add_more">加载更多...</p>
    </div>
  </section>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  import {reqBanners, reqNewsCate, reqNews} from '../api'

  export default {
    name: "Home",
    data() {
      return {
        banner: [],
        cate: [],
        news: [],
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
      //页面竖向滑屏逻辑
      _initScroll() {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.bscroll, {
              click: true,
              scrollY: true,
              probeType: 3
            });
          } else {
            this.scroll.refresh();
          }
          this.scroll.on('touchEnd', async (pos) => {
            //上拉加载 总高度>下拉的高度+10 触发加载更多
            if (this.scroll.maxScrollY > pos.y + 5) {
              const news = await reqNews(1, 1);
              this.news = news.data;
              this.scroll.refresh();
              //使用refresh 方法 来更新scroll  解决无法滚动的问题
            }
          })
        });

      },
      //按分类获取新闻逻辑
      async getNews(id) {
        const news = await reqNews(id, 2);
        this.news = news.data;
      }
    },
    async mounted() {
      const banner = await reqBanners();
      this.banner = banner.data;
      this._initSwiper();
      const cate = await reqNewsCate();
      const result = cate.data;
      const arr = [];
      result.forEach(item => {
        arr.push(item.name)
      });
      this.cate = arr;
      const news = await reqNews(1, 2);
      this.news = news.data;
      this._initScroll()
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
          font-weight: 300;
          color: rgba(0, 0, 0, 1);
          line-height: 0.5rem;

    .news_list
      width: 100%;
      .news_item
        width: 100%;
        a
          width: 100%;
          background: #fff;
          padding: 0.35rem 0.32rem 0.29rem 0.34rem;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1px;
        .text
          width: 5.3rem;
          font-size: 0.34rem;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          line-height: 0.5rem;
        img
          width: 1.04rem;
          height: 1.04rem;
    .add_more
      width 100%
      font-size 0.28rem
      line-height 1rem
      text-align: center
</style>
