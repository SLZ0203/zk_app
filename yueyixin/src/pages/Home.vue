<template>
  <section class="home_wrap">
    <div>
      <div class="banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../../static/images/banner.png" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../../static/images/banner.png" alt="">
            </div>
            <div class="swiper-slide">
              <img src="../../static/images/banner.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <ul class="nav_list">
        <li class="nav_item" @click="goTo('/one')">
          <img src="../../static/images/1.png" alt="">
          <p>公司略引</p>
        </li>
        <li class="nav_item" @click="goTo('/two')">
          <img src="../../static/images/2.png" alt="">
          <p>行业动态</p>
        </li>
        <li class="nav_item" @click="goTo('/three')">
          <img src="../../static/images/3.png" alt="">
          <p>医信讲堂</p>
        </li>
      </ul>
      <ul class="news_list">
        <li class="news_item" v-for="(item,index) in news" :key="index" @click="goTo('/detail')">
          <div class="text">
            {{item.text}}
          </div>
          <img :src="item.img" alt="">
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'

  export default {
    name: "Home",
    data() {
      return {
        news: [
          {
            text: '中科医信技术团队携手北京朝阳医院开展安全隐患培训',
            img: 'static/images/n1.jpg'
          },
          {
            text: '医院后勤服务社会化要持续推进',
            img: 'static/images/n2.jpg'
          },
          {
            text: '解读“健康雄安”规划：将建国家中医医疗中心实行居民健设',
            img: 'static/images/n1.jpg'
          },
          {
            text: '中科医信技术团队携手北京朝阳医院开展安全隐患培训',
            img: 'static/images/n2.jpg'
          },
          {
            text: '医院后勤服务社会化要持续推进',
            img: 'static/images/n2.jpg'
          },
          {
            text: '解读“健康雄安”规划：将建国家中医医疗中心实行居民健设',
            img: 'static/images/n1.jpg'
          },
          {
            text: '中科医信技术团队携手北京朝阳医院开展安全隐患培训',
            img: 'static/images/n2.jpg'
          },
          {
            text: '医院后勤服务社会化要持续推进',
            img: 'static/images/n2.jpg'
          },
          {
            text: '解读“健康雄安”规划：将建国家中医医疗中心实行居民健设',
            img: 'static/images/n1.jpg'
          },
          {
            text: '中科医信技术团队携手北京朝阳医院开展安全隐患培训',
            img: 'static/images/n2.jpg'
          },
        ]
      }
    },
    methods: {
      //页面互动逻辑
      _initScroll() {
        new BScroll('.home_wrap', {
          click: true
        });
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay: true,
          })
        })
      },
      //页面跳转逻辑
      goTo(path){
        this.$router.push(path)
      }
    },
    mounted() {
      this._initScroll()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .home_wrap
    width 100%
    height 100%
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
</style>
