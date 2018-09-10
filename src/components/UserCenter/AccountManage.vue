<template>
  <!-- TODO template 下面只能有一个总的DIV 之类的，不能出现并列两个DIV的布局 -->
  <div id="accountManage">
    <DCWNavBar :bar_title="title"></DCWNavBar>
    <div>
      <h2 class="block__title">账号信息</h2>
      <van-cell-group>
        <van-cell>
          <van-field
            label="公司名称"
            disabled
            icon="companyname"
          />
        </van-cell>
      </van-cell-group>

      <van-cell-group>
        <van-cell>
          <van-field
            label="用户名称"
            disabled
            icon="username"
          />
        </van-cell>
      </van-cell-group>

      <van-cell-group>
        <van-cell>
          <van-field
            required
            label="手机号码"
            placeholder="请输入手机号码"
            icon="shouji"
          />
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell>
          <van-field
            required
            label="电子邮箱"
            placeholder="请输入电子邮箱"
            icon="email"
          />
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell>
          <van-field
            label="QQ"
            placeholder="请输入qq"
            icon="qq"
          />
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell>
          <van-button size="normal" type="primary"
                      class="van-button van-button--primary van-button--normal van-button--block">保存
          </van-button>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>

  import {Button, Cell, CellGroup, Col, Field, Row} from 'vant'
  import DCWNavBar from '../Common/DCWNavBar'

  export default {
    name: 'AccountManage',
    data() {
      return {
        title: '账号管理'
      }
    },
    components: {
      [Row.name]: Row,
      [Col.name]: Col,
      [Field.name]: Field,
      [Button.name]: Button,
      [CellGroup.name]: CellGroup,
      [Cell.name]: Cell,
      DCWNavBar
    }
  }
</script>

