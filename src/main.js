import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
//文件夹basic:
// import App from './basic/Layout.vue'
// import App from './basic/container.vue'
// import App from './basic/container-2.vue'
// import App from './basic/icon.vue'
// import App from './basic/button.vue'
// import App from './basic/link.vue'


Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
