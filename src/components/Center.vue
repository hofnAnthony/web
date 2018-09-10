<template>
  <div id="center" class="">
    <img class="user-poster" src="http://p2ncp64d6.bkt.clouddn.com/20161114150832_94012.png">
    <van-row class="user-links">
      <van-col span="6">
        <router-link v-bind:to="{path:'/CargoTrack'}">
          <van-icon name="cash-on-deliver"/>
          货物跟踪
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link :to="{path: '/AccountManage'}">
          <van-icon name="contact"/>
          账号管理
        </router-link>
      </van-col>
      <van-col span="6">
        <van-icon name="exchange-record"/>
        收发货人
      </van-col>
      <van-col span="6">
        <van-icon name="setting"/>
        我的模板
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import {Cell, CellGroup, Col, Icon, Row} from 'vant'

  export default {
    name: 'center',
    components: {
      [Row.name]: Row,
      [Col.name]: Col,
      [Icon.name]: Icon,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup
    }
  }
</script>

<style lang="less">
  .user {
    &-poster {
      padding: 0px;
      width: 100%;
      height: 230px;
      margin: 0 0 0;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      background-size: 315px 250px;
      background: white no-repeat 15px;
      box-sizing: border-box;
    }

    &-group {
      margin-bottom: .3rem;
    }

    &-links {
      padding: 15px 0;
      font-size: 12px;
      text-align: center;
      background-color: #fff;

      .van-icon {
        display: block;
        font-size: 24px;
      }
    }
  }
</style>
