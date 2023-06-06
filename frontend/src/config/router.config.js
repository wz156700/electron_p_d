/**
 * 基础路由
 * @type { *[] }
 */
import { AppSider, Menu } from '@/layouts'

const RouteView = {
  name: 'RouteView',
  render: h => h('router-view')
}

export const constantRouterMap = [
  {
    path: '/',
    component: AppSider,
    children: [
      {
        path: '/pro',
        name: 'Example',
        component: RouteView,
        // redirect: { name: 'ExampleHelloIndex' },
        children: [
          {
            path: '/pro/loading',
            name: 'loadingMessage',
            component: () => import('@/views/pro/loadingMessage/index')
          },
          {
            path: '/pro/setting',
            name: 'setting',
            component: () => import('@/views/pro/setting/index')
          },
          {
            path: '/pro/equipment',
            name: 'equipment',
            component: () => import('@/views/pro/equipment/index')
          },
          // {
          //   path: '/pro/winMana',
          //   name: 'winMana',
          //   component: () => import('@/views/pro/windowManagement/index')
          // },
        ]
      },
    ]
  },
  {
    path: '/winMana',
    name: 'winMana',
    component: () => import('@/views/pro/windowManagement/index')
  }
]
