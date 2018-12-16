<!--服务类别页面-->
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
    name: "ServerType",
    data() {
      return {
        list: ['项目合作', '销售代理'],
        num: 0,
        type: ''
      }
    },
    methods: {
      choose(e, index) {
        this.type = e.target.innerText;
        this.num = index;
        this.$router.replace({
          path: '/company',
          query: {
            type: this.type
          }
        })
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .type_list
    width: 100%;
    background: #fff;
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
