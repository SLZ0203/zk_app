<!--服务类别页面-->
<template>
  <ul class="type_list">
    <li class="ty_item" v-for="(item,index) in list" :key="index" @click="choose(item.title,item.id,index)"
        :class="{on:num===index}">
      {{item.title}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: "ServerType",
    data() {
      return {
        list: [],
        num: 0,
      }
    },
    mounted() {
      this.$axios.get('http://yixin.581vv.com/api/service_type').then(res => {
        const result = res.data;
        this.list = result.data;
      })
    },
    methods: {
      choose(title, id, index) {
        this.num = index;
        const servertype = {
          title,
          id
        };
        this.$store.dispatch('saveCompanyServertype', servertype);
        this.$router.replace('/company')
      },
    },
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
