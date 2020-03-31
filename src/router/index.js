import Vue from "vue"
import Router from "vue-router"
import Layout from '@/baseView/layout'

Vue.use(Router)

export const constantRouterMap = [
    {
        path: '/redirect',
        // component: Layout,
        hidden: true,
        children: [{
            path: '/redirect/:path*',
            component: () =>
                import('@/baseView/redirect/index')
        }]
    },
    {
        path: '',
        component: Layout,
        redirect: 'dashboard',
        children: [
            {
                path: 'dashboard',
                component: () =>
                    import('@/baseView/dashboard'),
                name: 'Dashboard',
                meta: {
                    title: '首页',
                    cacheEnable: true,
                    hidden: true
                }
            }
        ]
    },
    {
        path: '/ranking',
        component: Layout,
        meta: {
            title: '成绩管理'
        },
        children: [
            {
                path: 'grade',
                component: () =>
                    import('@/iviews/grade/index'),
                name: 'grade',
                meta: {
                    title: '年级',
                    // cacheEnable: true,
                    // hidden: true
                }
            },
            {
                path: 'class',
                component: () =>
                    import('@/iviews/class/index'),
                name: 'class',
                meta: {
                    title: '班级',
                    // cacheEnable: true,
                    // hidden: true
                }
            }
        ]
    },
    {
        path: '/login',
        component: () =>
            import('@/iviews/login/index'),
        hidden: true
    },
    // {
    //     path: '/ranking/grade',
    //     component: () =>
    //         import('@/iviews/grade/index'),
    //     hidden: false
    // },
    // {
    //     path: '/ranking/class',
    //     component: () =>
    //         import('@/iviews/class/index'),
    //     hidden: false
    // }
]

export default new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})