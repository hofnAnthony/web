<template>
  <div id="shipLine" class="shipline-top">
    <van-list
      v-model="loading"
      :finished="finished"
    >
      <van-row class="list-group-item" v-for="item in list" :key="item[0]">
        <van-col span="8">
          {{item[3]}}
        </van-col>
        <van-col>
          <van-icon name="exchange-record"/>
        </van-col>
        <van-col span="8">
          {{item[6]}}
        </van-col>
        <van-col span="6">
          <van-button size="small" type="default">订舱</van-button>
        </van-col>
      </van-row>
    </van-list>
  </div>
</template>

<script>
  import {Button, Col, Icon, List, Row} from 'vant'

  export default {
    name: 'ShipLine',
    data() {
      return {
        list: [],
        loading: false,
        finished: false
      }
    },
    components: {
      [List.name]: List,
      [Row.name]: Row,
      [Col.name]: Col,
      [Button.name]: Button,
      [Icon.name]: Icon
    },
    watch: {
      list: function () {
        this.$nextTick(function () {
        })
      }
    },
    mounted: function () {
      var that = this
      this.$ajax.get('https://easy-mock.com/mock/5b5939242579af26d93f3bce/dcw/ship').then(res => {
        that.list = res.data
      })
    }
  }
</script>

<style scoped>
  .shipline-top {
    margin-top: 5px;
  }
</style>
