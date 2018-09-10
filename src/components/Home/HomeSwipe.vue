<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in images" :key="index" >
      <img v-lazy="image.url" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import {Swipe, SwipeItem } from 'vant'
export default {
  name: 'HomeSwipe',
  data () {
    return {
      images: []
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  watch: {
    images: function () {
      this.$nextTick(function () {})
    }
  },
  mounted: function () {
    var that = this
    this.$ajax.get('https://easy-mock.com/mock/5b5939242579af26d93f3bce/dcw/swipe').then(res => {
      console.log(res.data)
      that.images = res.data
    })
  }
}
</script>

<style scoped>
  img,
  div[lazy] {
    padding: 0px;
    width: 100%;
    height: 200px;
    margin: 0 0 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    background-size: 315px 250px;
    background: white no-repeat 15px;
    box-sizing: border-box;
  }
</style>
