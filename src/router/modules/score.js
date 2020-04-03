/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const scoreRouter = {
  path: '/score',
  component: Layout,
  redirect: '/score',
  name: '成绩管理',
  meta: {
    title: '成绩管理',
    icon: 'table'
  },
  children: [
    {
      path: '/grade',
      component: () => import('@/views/score/grade/index'),
      name: 'grade',
      meta: { title: '年级' }
    },
    {
      path: '/class',
      component: () => import('@/views/score/class/index'),
      name: 'class',
      meta: { title: '班级' }
      // children
    },
    {
      path: '/class/:id',
      component: () => import('@/views/score/class/classScore'),
      name: 'classScore',
      meta: { title: '班级明细', cacheEnable: true },
      // children
      hidden: true,
      props: true
    }
  ]
}
export default scoreRouter
