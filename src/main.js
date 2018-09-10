// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from '../node_modules/axios'

import 'vant/packages/vant-css/lib/base.css'
import 'vant/packages/vant-css/lib/index.css'
// TODO 引入外部ICON 首先下载ICON文件，然后将相关的文件放入 assets文件夹下 全局引用

import 'vant/lib/vant-css/icon-local.css'

// chris add babel-polyfill 转码器，可以将ES6代码转为ES5代码，
import 'babel-polyfill'
// Lazyload 图片懒加载 安装 npm install vue-lazyload --save-dev
import { Lazyload,Icon } from 'vant'

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.use(Lazyload)
Vue.use(Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
