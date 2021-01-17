// Import Modules
const error404Module = () => import('@/modules/Error404Module')
const dashboardModule = () => import('@/modules/DashboardModule')
const loginModule = () => import('@/modules/LoginModule')

// Export
export default [
    // Default route
    {
        path: '/',
        redirect: '/login'
    },

    // Errors
    {
        path: '*',
        component: error404Module,
        name: 'error-404'
    },

    // Login
    {
        path: '/login',
        component: loginModule,
        name: 'login'
    },

    // Dashboard
    {
        path: '/dashboard',
        component: dashboardModule,
        name: 'dashboard'
    }
]