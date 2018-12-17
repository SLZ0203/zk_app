<!--关注重点页面-->
<template>
  <ul class="type_list">
    <li class="ty_item" v-for="(item,index) in list" :key="index" @click="choose($event,index)"
        :class="{on:num===index}">
      {{item}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: "KeyPoint",
    data() {
      return {
        list: ['医院安全', '员工服务', '后勤管理'],
        num: 0,
      }
    },
    methods: {
      choose(e, index) {
        this.num = index;
        const key = e.target.innerText;
        this.$store.dispatch('saveHosKeypoint', key);
        this.$router.replace('/hospital')
      },
    }
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
