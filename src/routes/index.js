// Import
import Vue from 'vue'
import VueRouter from 'vue-router'
import generalRoutes from './general-routes.js'

// Vue Router
Vue.use(VueRouter)

// Combine multiple routes
var allRoutes = []
allRoutes = allRoutes.concat(generalRoutes)
const routes = allRoutes

// Start vue router
const router = new VueRouter({
    mode: 'history',
    routes
})

// Export
export default router