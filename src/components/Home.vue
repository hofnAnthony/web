<template>
  <div id="home">
    <HomeSwipe></HomeSwipe>
    <van-cell-group class="van-cell-group">
      <van-cell class="van-cell">
        <van-field placeholder="起运港" icon="qiyungang"/>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="van-cell-group">
      <van-cell class="van-cell">
        <van-field placeholder="目的港" icon="mudigang"/>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="van-cell-group">
      <van-cell class="van-cell">
        <van-button size="normal" type="primary"
                    class="van-button van-button--primary van-button--normal van-button--block">搜索
        </van-button>
      </van-cell>
    </van-cell-group>
    <ShipLine></ShipLine>
  </div>
</template>

<script>
  import {Button, CellGroup, Col, Field, Row} from 'vant'
  import ShipLine from './Home/ShipLine'
  import HomeSwipe from './Home/HomeSwipe'

  export default {
    name: 'Home',
    components: {
      [Row.name]: Row,
      [Col.name]: Col,
      [Field.name]: Field,
      [Button.name]: Button,
      [CellGroup.name]: CellGroup,
      ShipLine,
      HomeSwipe
    }
  }
</script>
