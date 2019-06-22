<template>
  <div id="app">
    <route-link to="/msite"></route-link>
    <route-link to="/classify"></route-link>
    <route-link to="/goods"></route-link>
    <route-link to="/shoppingcart"></route-link>
    <route-link to="/person"></route-link>
    <router-view></router-view>
    <FooterGuide></FooterGuide>

  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components: {
    FooterGuide

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
</style>
