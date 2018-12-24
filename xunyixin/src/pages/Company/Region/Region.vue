<!--省份/地区页面-->
<template>
  <section class="region_wrap" v-show="proCity">
    <div class="first">
      <div class="left">
        <img src="../../../../static/images/ic-location.png" alt="">
        <span class="had">已选地区</span>
      </div>
      <div class="city">{{region}}</div>
    </div>
    <div class="scroll_wrap">
      <ul class="add_list">
        <li class="add_item" v-for="(item,index) in proCity" :key="index">
          <div class="province">{{item.name}}</div>
          <ul class="city_list">
            <li class="city_item" v-for="(city,index) in item.citys" :key="index"
                @click="choose(item.name,item.id,city.name,city.id)">
              {{city.name}}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import {baseUrl} from '../../../api'

  export default {
    name: "Region",
    data() {
      return {
        proCity: [],
        num: 0,
        region: ''
      }
    },
    methods: {
      choose(pname, pid, cname, cid) {
        this.region = pname + ' ' + cname;
        const proCity = {
          name: this.region,
          proId: pid,
          city: cid
        };
        this.$store.dispatch('saveComanyRegion', proCity);
        this.$router.replace('/company')
      },
      _initScroll() {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll('.scroll_wrap', {
              scrollY: true,
              click: true
            })
          } else {
            this.scroll.refresh()
          }
        })
      }
    },
    mounted() {
      this.$axios.get(baseUrl + '/api/get_province_city').then(res => {
        const result = res.data;
        this.proCity = result.data;
        this._initScroll();
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .region_wrap
    width 100%;
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
          line-height: 1rem;
          font-family: PingFangSC-Regular;
          color: rgba(53, 53, 53, 1);
          .province
            font-size: 0.3rem;
            font-weight 600
            border-bottom: 0.01rem solid #e5e5e5;
          .city_list
            width 100%
            padding: 0 0.4rem
            box-sizing: border-box;
            .city_item
              font-size 0.28rem
              border-bottom: 0.01rem solid #e5e5e5;
</style>
