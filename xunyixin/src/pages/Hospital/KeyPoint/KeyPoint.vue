<!--关注重点页面-->
<template>
  <ul class="type_list">
    <li class="ty_item" v-for="(item,index) in list" :key="index" @click="choose(item.title,item.id,index)"
        :class="{on:num===index}">
      {{item.title}}
    </li>
  </ul>
</template>

<script>
  import {baseUrl} from '../../../api'

  export default {
    name: "KeyPoint",
    data() {
      return {
        list: [],
        num: 0,
      }
    },
    mounted() {
      this.$axios.get(baseUrl + '/api/focus').then(res => {
        const result = res.data;
        this.list = result.data;
      })
    },
    methods: {
      choose(focus, id, index) {
        this.num = index;
        const point = {
          focus,
          id
        };
        this.$store.dispatch('saveHosKeypoint', point);
        this.$router.replace('/hospital')
      },
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .type_list
    width 100%
    background #fff
    .ty_item
      width: 100%;
      height: 0.98rem;
      padding: 0 0.3rem;
      box-sizing: border-box;
      line-height: 0.98rem;
      font-size: 0.34rem;
      font-family: PingFangSC-Regular;
      border-bottom: 0.01rem solid #F3F6F9;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      background-repeat: no-repeat;
      background-size: 0.32rem;
      background-position: 95%;
      &.on
        background-image: url("../../../../static/images/right.png");

</style>
