<template>
    <div id="business" class="">
      <van-panel title="运单" >
        <van-row class="user-links">
          <van-col span="6">
            <van-icon name="idcard" />
            运单待生成
          </van-col>
          <van-col span="6">
            <van-icon name="records" />
            待返箱号
          </van-col>
          <van-col span="6">
            <van-icon name="pending-deliver" />
            运单待下载
          </van-col>
          <van-col span="6">
            <van-icon name="info-o" />
            待解提箱锁
          </van-col>
        </van-row>
        <van-row class="user-links">
          <van-col span="6">
            <van-icon name="free-postage" />
            待放货
          </van-col>
          <van-col span="6">
            <van-icon name="logistics" />
            运单中心
          </van-col>
        </van-row>
      </van-panel>
      <van-panel title="便利业务" class="business-top" >
        <van-row class="user-links">
          <van-col span="6">
            <van-icon name="records" />
            签收单
          </van-col>
          <van-col span="6">
            <van-icon name="cash-on-deliver" />
            自备柜
          </van-col>
          <van-col span="6">
            <van-icon name="edit-data" />
            改单管理
          </van-col>
        </van-row>
      </van-panel>
    </div>
</template>

<script>
import { Panel, CellGroup, Icon, Row, Col } from 'vant'
export default {
  name: 'Business',
  data () {
    return {
      msg: 'Welcome Business.vue'
    }
  },
  components: {
    [Panel.name]: Panel,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon,
    [Row.name]: Row,
    [Col.name]: Col
  }
}
</script>
<style lang="less">
  .user {
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
  .business-top{
    margin-top: 5px;
  }
</style>
