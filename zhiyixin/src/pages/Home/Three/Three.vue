<template>
  <div class="scroll_wrap">
    <ul class="newsList" ref="newsUl">
      <li class="news_item" v-for="(item,index) in imgArr[2]" :key="index">
        <img v-lazy="'http://www.sinomis.com/upload/'+item.image" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import axios from 'axios'
  import {baseUrl} from '../../../api'

  export default {
    name: "Three",
    data() {
      return {
        imgArr: []
      }
    },
    mounted() {
      axios.get(baseUrl + '/api/get_navs').then(res => {
        const result = res.data;
        const arr = result.data;
        arr.forEach(item => {
          this.imgArr.push(item.images);
        });
        this._initScroll();
      }).catch(error => {
        console.log(error);
      })
    },
    methods: {
      //页面滑动逻辑
      _initScroll() {
        this.$nextTick(() => {
          if (!this.myScroll) {
            this.myScroll = new BScroll('.scroll_wrap', {
              click: true
            })
          } else {
            this.myScroll.refresh()
          }
        })
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .scroll_wrap
    width: 100%;
    height: 100%;
    overflow: hidden;
    .newsList
      width: 100%;
      padding-bottom: 0.77rem;
      box-sizing: border-box;
      .news_item
        width: 100%;
        height: 4rem;
        margin-bottom: 0.2rem;
        img
          width: 100%;
          height: 100%;
</style>
