<template>
  <section class="province_wrap">
    <div class="first">
      <div class="left">
        <img src="../../../../static/images/ic-location.png" alt="">
        <span class="had">已选地区</span>
      </div>
      <div class="city">{{province}}</div>
    </div>
    <div class="scroll_wrap">
      <ul class="add_list">
        <li class="add_item" v-for="(item,index) in proList" :key="index" @click="choose($event)">{{item}}</li>
      </ul>
    </div>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Province",
    data() {
      return {
        proList: ['北京', '上海', '广州', '深圳', '西安', '天津', '重庆', '北京', '上海', '广州', '深圳', '西安', '天津', '重庆', '北京', '上海', '广州', '深圳', '西安', '天津', '重庆'],
        num: 0,
        province: ''
      }
    },
    methods: {
      choose(e) {
        this.province = e.target.innerText;
        this.$store.dispatch('saveHosprovince', this.province);
        this.$router.replace('/hospital')
      }
    },
    mounted() {
      const scroll = new BScroll('.scroll_wrap', {
        scrollY: true,
        click: true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .province_wrap
    width 100%
    height 100%
    .first
      width: 100%;
      height: 1rem;
      position: relative;
      border-bottom: 0.01rem solid #e5e5e5;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background #fff
      padding 0 0.32rem
      box-sizing border-box
      .left
        line-height: 0.99rem;
        img
          width: 0.24rem;
          height: 0.3rem;
        .had
          font-size: 0.28rem;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(178, 178, 178, 1);

      .city
        font-size: 0.4rem;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(0, 0, 0, 1);
    .scroll_wrap
      width 100%
      height calc(100%)
      overflow hidden
      .add_list
        width: 100%;
        background: #fff;
        padding: 0 0.32rem 1rem;
        box-sizing: border-box;
        font-size: 0.28rem;
        overflow hidden
        .add_item
          width: 100%;
          height: 0.99rem;
          line-height: 0.99rem;
          border-bottom: 0.01rem solid #e5e5e5;
          font-size: 0.3rem;
          font-family: PingFangSC-Regular;
          color: rgba(53, 53, 53, 1);
</style>
