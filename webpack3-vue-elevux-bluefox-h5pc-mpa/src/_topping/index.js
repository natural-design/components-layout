// 全局样式
require('./assets/css/style.less')

// Vue
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

/* Configure whether to allow vue-devtools inspection. */
Vue.config.devtools = process.env.NODE_ENV !== 'production'

/* Suppress all Vue logs and warnings. */
Vue.config.silent = process.env.NODE_ENV === 'production'

/* Set this to false to prevent the production tip on Vue startup(2.2.0+). */
Vue.config.productionTip = process.env.NODE_ENV !== 'production'

// 适应
// 暂时注释
// import 'lib-flexible'

import axios from 'axios'
Vue.prototype.$axios = axios

import qs from 'qs'
Vue.prototype.$qs = qs

// Toast
import { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

// 路由
import router from './router'
import store from './store'

// socket
Vue.prototype.$socket = null

// permission control
import './router/permission'

// 骨架
import App from './App'

// 解决click点击300毫秒延时问题
import FastClick from 'fastclick'
FastClick.attach(document.body)

// require('../../static/js/socket.io')

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});