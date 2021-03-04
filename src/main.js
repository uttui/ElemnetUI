import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
//文件夹basic:
// import App from './Basic/Layout.vue'
// import App from './Basic/container.vue'
// import App from './Basic/container-2.vue'
// import App from './Basic/icon.vue'
// import App from './Basic/button.vue'
// import App from './Basic/link.vue'
//文件夹from-radio:
// import App from './form/radio/radio-1.vue'
// import App from './form/radio/radio-2.vue'
// import App from './form/radio/radio-3.vue'
// import App from './form/radio/radio-4.vue'
// import App from './form/radio/radio-5.vue'
//文件夹from-check:
// import App from './form/check/check-jichu.vue'
// import App from './form/check/check-1.vue'
// import App from './form/check/check-2.vue'
// import App from './form/check/check-3.vue'
// import App from './form/check/check-4.vue'
//文件夹from-input:
// import App from './form/input/input-jichu.vue'
// import App from './form/input/input-1.vue'
// import App from './form/input/input-2.vue'
// import App from './form/input/input-3.vue'
// import App from './form/input/input-4.vue'
// import App from './form/input/input-5.vue'
// import App from './form/input/input-6.vue'
// import App from './form/input/input-7.vue'


Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
