<template>
  <div id="cargoTrack">
    <DCWNavBar :bar_title="title"></DCWNavBar>
    <van-search placeholder="请输入运单号"></van-search>
    <van-panel title="动态信息">
      <div>
        <van-steps class="van-steps"  direction="vertical" :active="0" active-color="#f60">
          <van-step class="van-step"  v-for="item in list" :key="item[0]">
            <h6>{{item.step}}</h6>
            <span>{{item.time}}</span>
            <!-- TODO v-if 使用示例 -->
            <a class="van" v-if="item.detail!=null">({{item.detail}})</a>
          </van-step>

        </van-steps>
      </div>
    </van-panel>
  </div>
</template>

<script>
import { Search, Step, Steps, Panel} from 'vant'
import DCWNavBar from '../Common/DCWNavBar'
export default {
  name: 'CargoTrack',
  data () {
    return {
      title: '货物跟踪',
      list: []
    }
  },
  components: {
    [Search.name]: Search,
    [Step.name]: Step,
    [Steps.name]: Steps,
    [Panel.name]: Panel,
    DCWNavBar
  },
  // TODO 请求加载示例
  watch: {
    list: function () {
      this.$nextTick(function () {})
    }
  },
  mounted: function () {
    var that = this
    this.$ajax.get('https://easy-mock.com/mock/5b5939242579af26d93f3bce/dcw/cargoTrack').then(res => {
      that.list = res.data.data
    })
  }
}
</script>

