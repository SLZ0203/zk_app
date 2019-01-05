<template>
  <div class="choose">
    <div class="inner">
      <div class="user" :class="{on:isChoose}" @click="isChoose=true">
        <img src="../../../static/images/hos_check.png" v-if="isChoose">
        <img src="../../../static/images/hos_no.png" v-else>
        <p>我是医院用户</p>
      </div>
      <div class="units" :class="{on:!isChoose}" @click="isChoose=false">
        <img src="../../../static/images/com_no.png" v-if="isChoose">
        <img src="../../../static/images/com_check.png" v-else>
        <p>我是合作单位</p>
      </div>
      <div class="btn" @click="goto">确定</div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'

  export default {
    data() {
      return {
        isChoose: true
      }
    },
    mounted() {
      if (!this.scroll) {
        this.scroll = new BScroll('.choose', {
          scrollY: true,
          click: true
        })
      } else {
        this.scroll.refresh()
      }
    },
    methods: {
      goto() {
        if (this.isChoose) {
          this.$router.push('/hospital')
        } else {
          this.$router.push('/company')
        }
      }
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .choose
    width: 100%;
    height: 100%;
    background: #fff;
    .inner
      width 100%
      height 100%
      padding-top: 2.26rem;
    .user, .units
      width: 3rem;
      height: 3rem;
      margin: 0 auto;
      padding-top: 0.6rem;
      box-sizing: border-box;
      text-align: center;
      border: 1px solid rgba(229, 229, 229, 1);
      img
        width: 1.05rem;
        height: 1.04rem;
      p
        font-size: 0.3rem;
        font-family: FZLTZHK--GBK1-0;
        color: rgba(0, 0, 0, 1);
        line-height: 0.38rem;
        margin-top: 0.5rem;
      &.on
        border-color: rgba(75, 100, 214, 1);
        p
          color: rgba(75, 100, 214, 1);
          font-weight: 600;

    .user
      margin-bottom: 0.76rem;
    .btn
      display: block;
      width: 6.01rem;
      height: 0.88rem;
      margin: 0 auto;
      background: rgba(75, 100, 214, 1);
      border-radius: 0.1rem;
      text-align: center;
      font-size: 0.36rem;
      line-height: 0.88rem;
      font-family: PingFangSC-Regular;
      color: rgba(255, 255, 255, 1);
      margin-top: 1.5rem;
</style>
