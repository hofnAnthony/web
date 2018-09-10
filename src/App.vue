<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from './components/Tabbar/index'
export default {
  name: 'App',
  components: {
    tabbar
  }
}
</script>

<style>
  /*
    http://p2ncp64d6.bkt.clouddn.com/pic-footer.png
  */
  body {
    font-size: 16px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: #f8f8f8 url("http://p2ncp64d6.bkt.clouddn.com/pic-footer.png") no-repeat fixed center;
  }
  .block__title {
     margin: 0;
     font-weight: 400;
     font-size: 14px;
     color: rgba(69,90,100,.6);
     padding: 20px 15px 15px;
     text-align: left;
  }
</style>
