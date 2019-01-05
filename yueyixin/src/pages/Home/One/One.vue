<template>
  <div class="scroll_wrap" ref="scroll_wrap">
    <div class="inner_wrap" :class="{height:height}">
      <ul class="news_list">
        <li class="news_item" v-for="(item,index) in news" :key="index" ref="liHeight">
          <a :href="item.url">
            <div class="text">
              {{item.title}}
            </div>
            <img v-lazy="'http://www.sinomis.com'+item.thumb" alt="">
          </a>
        </li>
      </ul>
    </div>
    <p class="bottom-tip" v-show="tipShow">{{pullupMsg}}</p>
  </div>
</template>

<script>
  import {reqNews} from '../../../api/index'
  import BScroll from 'better-scroll'

  export default {
    name: "One",
    data() {
      return {
        news: [],
        pullupMsg: '加载更多',
        isShow: false,
        page: 1,
        height: true,
        tipShow: false
      }
    },
    async mounted() {
      const result = await reqNews(1, 1);
      console.log(result);
      if (result.code === 200) {
        this.news = result.data;
        this._initScroll()
      }
    },
    methods: {
      _initScroll() {
        const that = this;
        that.$nextTick(() => {
          if (!that.scroll) {
            that.scroll = new BScroll('.scroll_wrap', {
              click: true,
              scrollY: true,
              mouseWheel: {    // pc端同样能滑动
                speed: 20,
                invert: false
              },
              useTransition: false  // 防止iphone微信滑动卡顿
            })
          } else {
            that.scroll.refresh();
          }
          that.scroll.on('touchEnd', async (position) => {
            if (position.y < (this.scroll.maxScrollY - 30)) {
              that.pullupMsg = '加载中...';
              that.tipShow = true;
              that.isHeight();
              that.page++;
              const result = await reqNews(1, that.page);
              if (result.code = 200) {
                if (!result.data) {
                  that.pullupMsg = '— 没有更多资讯了 —';
                } else {
                  this.news = this.news.concat(result.data);
                  this.scroll.refresh();
                }
                setTimeout(() => {
                  that.tipShow = false;
                  that.pullupMsg = '加载更多'
                }, 1000);
              }
            }
          })
        });
      },
      isHeight() {
        //新闻区域的高度
        const wrapHei = this.$refs.scroll_wrap.clientHeight;
        //每条新闻的高度
        const liHei = this.$refs.liHeight[0].clientHeight;
        //一屏能显示新闻的个数
        const pageNum = Math.floor(wrapHei / liHei);
        if (this.news.length > pageNum) {
          this.height = false;
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../static/css/mixins.styl"
  .scroll_wrap
    width 100%
    position fixed
    top 6.12rem
    bottom 0
    overflow hidden
    background #fff
    .inner_wrap
      width 100%
      &.height
        height 101%
      .news_list
        width: 100%;
        .news_item
          width: 100%;
          bottom-border-1px(#ddd)
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
    .bottom-tip
      width: 100%;
      font-size 0.28rem
      text-align: center;
      line-height 0.4rem
      color: #777;
      background: #f2f2f2;
      position fixed
      bottom 0
</style>
