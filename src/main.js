import Vue from 'vue'
import App from './modules/AppModule'
import router from './routes'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
