/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const scoreRouter = {
  path: '/grade',
  component: Layout,
  redirect: '/grade',
  name: '成绩管理',
  meta: {
    title: '成绩管理',
    icon: 'table'
  },
  children: [
    {
      path: '/grade',
      component: () => import('@/views/grade/index'),
      name: 'grade',
      meta: { title: '年级' }
    },
    {
      path: '/class',
      component: () => import('@/views/class/index'),
      name: 'class',
      meta: { title: '班级' }
    }
  ]
}
export default scoreRouter
