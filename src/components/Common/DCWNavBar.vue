<template>
  <van-nav-bar :title="bar_title"  left-text="返回" left-arrow @click-left="onClickLeft">
  </van-nav-bar>
</template>

<script>
import { NavBar } from 'vant'
export default {
  name: 'DCWNavBar',
  props: ['bar_title'],
  components: {
    [NavBar.name]: NavBar
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  }
}
</script>
