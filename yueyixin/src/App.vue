<template>
  <transition name="fade">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </transition>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    width: 100%;
    height: 100%;
    .fade-enter-active, .fade-leave-avtive {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-to {
      opacity: 0
    }
</style>

