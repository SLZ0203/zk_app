<template>
  <div class="home_wrap">
    <nav class="navBar">
      <img :src="logoImg" class="logoImg">
      <img src="../../../static/images/ic-menu.png" @click="isShow=!isShow">
    </nav>
    <ul class="navList" v-if="isShow">
      <li class="nav_item" v-for="(item,index) in navArr" :key="index" :class="{on:num===index}"
          @click="scroll(index)">
        {{item}}
      </li>
    </ul>
    <transition name="fade">
      <div class="shade" v-show="isShow" @click="isShow=false"></div>
    </transition>
    <router-view/>
  </div>
</template>

<script>
  import axios from 'axios'
  import {baseUrl} from '../../api'

  export default {
    name: 'Home',
    data() {
      return {
        num: 0,
        isShow: false,
        navArr: [],
        logoImg: ''
      }
    },
    methods: {
      //导航栏点击逻辑
      scroll(index) {
        this.num = index;
        let path;
        if (index === 0) {
          path = '/one'
        } else if (index === 1) {
          path = '/two'
        } else if (index === 2) {
          path = '/three'
        } else if (index === 3) {
          path = '/four'
        } else if (index === 4) {
          path = '/five'
        }
        this.$router.replace(path);
        this.isShow = false;
      }
    },
    mounted() {
      axios.get(baseUrl + '/api/get_navs').then(res => {
        const result = res.data;
        const arr = result.data;
        arr.forEach(item => {
          this.navArr.push(item.name);
        });
      }).catch(error => {
        console.log(error);
      });
      axios.get(baseUrl + '/api/config').then(res => {
        const result = res.data.data
        this.logoImg = baseUrl + result.logo
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .home_wrap
    width: 100%;
    height: 100%;
    .navBar
      width: 100%;
      height: 0.77rem;
      background: rgba(75, 100, 214, 1);
      padding: 0 0.32rem;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.2rem;

  .home_wrap .navBar :nth-child(1) {
    width: 1.4rem;
  }

  .home_wrap .navBar :nth-child(2) {
    width: 0.42rem;
  }

  .home_wrap .shade {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .4);
    position: fixed;
    top: 0;
    z-index: 10;
  }

  .home_wrap .fade-leave {
    opacity: 1
  }

  .home_wrap .fade-leave-active {
    opacity: 0;
    transition: all .5s
  }

  .home_wrap .navList {
    width: 100%;
    position: absolute;
    z-index: 100;
    background: #fff;
  }

  .home_wrap .navList .nav_item {
    width: 100%;
    padding: 0.32rem 0.3rem;
    box-sizing: border-box;
    font-size: 0.34rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(53, 53, 53, 1);
    border-bottom: 1px solid #e5e5e5;
    background-repeat: no-repeat;
    background-size: 0.32rem;
    background-position: 95%;
  }

  .home_wrap .navList .on {
    background-image: url("../../../static/images/ic-right.png");
  }
</style>
