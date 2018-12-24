<template>
  <div class="scroll_wrap">
    <ul class="news_list">
      <li class="news_item" v-for="(item,index) in news" :key="index"> <!--@click="goTo(item.url)"-->
        <a :href="item.url">
          <div class="text">
            {{item.title}}
          </div>
          <img :src="'http://yixin.581vv.com'+item.thumb" alt="">
        </a>
      </li>
      <p class="add_more">{{moreTxt}}</p>
    </ul>
  </div>
</template>

<script>
  import {reqNews} from '../../../api/index'
  import BScroll from 'better-scroll'

  export default {
    name: "Two",
    data() {
      return {
        news: [],
        moreTxt: '加载更多'
      }
    },
    async mounted() {
      const result = await reqNews(2, 1);
      this.news = result.data;
      this._initScroll()
    },
    methods: {
      _initScroll() {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll('.scroll_wrap', {
              click: true,
              scrollY: true,
              pullUpLoad: {
                threshold: -10, // 当上拉到超过底部 50px 时，
              },
              mouseWheel: {    // pc端同样能滑动
                speed: 20,
                invert: false
              },
              useTransition: false  // 防止iphone微信滑动卡顿
            })
          } else {
            this.scroll.refresh();
          }
          this.scroll.on('pullingUp', async () => {
            this.moreTxt = '加载中...';
            await reqNews(1, 2).then(res => {
              if (this.news.length < 50) {
                this.moreTxt = '加载更多';
                this.news = this.news.concat(res.data);
                this.scroll.finishPullUp();//可以多次执行上拉刷新
                this.scroll.refresh();
              } else {
                this.moreTxt = '- 没有更多资讯了 -';
              }
            })
          })
        });
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .scroll_wrap
    width 100%
    height 100%
    overflow hidden
    .news_list
      width: 100%;
      padding-bottom 6rem
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
        color #999
        font-size 0.28rem
        line-height 1rem
        text-align: center
</style>
