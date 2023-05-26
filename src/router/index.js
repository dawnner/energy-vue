import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import ParentView from '@/components/ParentView';
import InnerLink from '@/layout/components/InnerLink'
import webnumber from '@/views/webnumber.vue'

/**
 * Note: 路由配置项
 *
 * hidden: true                   // 当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
 * alwaysShow: true               // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 *                                // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 *                                // 若你想不管路由下面的 children 声明的个数都显示你的根路由
 *                                // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * redirect: noRedirect           // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'             // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * meta : {
    noCache: true                // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    title: 'title'               // 设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'             // 设置该路由的图标，对应路径src/assets/icons/svg
    breadcrumb: false            // 如果设置为false，则不会在breadcrumb面包屑中显示
  }
 */

// 公共路由
export const constantRoutes = [
  //外部网站
  {
    path: '/webnumber',
    name: 'webnumber',
    component: webnumber
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [{
      path: '/redirect/:path(.*)',
      component: (resolve) => require(['@/views/redirect'], resolve)
    }]
  },
  {
    path: '/login',
    component: (resolve) => require(['@/views/login'], resolve),
    hidden: true
  },
  // {
  //   path: '/photovoltaic',
  //   component: (resolve) => require(['@/views/photovoltaic'], resolve),
  //   hidden: true
  // },
  {
    path: '/404',
    component: (resolve) => require(['@/views/error/404'], resolve),
    hidden: true
  },
  {
    path: '/401',
    component: (resolve) => require(['@/views/error/401'], resolve),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'index',
    children: [{
      path: 'index',
      component: (resolve) => require(['@/views/index'], resolve),
      name: '首页',
      meta: {
        title: '首页',
        icon: 'dashboard',
        noCache: true,
        affix: true
      }
    }]
  },
  {
    path: '/basic',
    component: Layout,
    hidden: true,
    redirect: 'noredirect',
    children: [{
      path: 'wholeInfo',
      component: (resolve) => require(['@/views/basic/WholeInfo/index'], resolve),
      name: 'WholeInfo',
      meta: {
        title: '可视化',
        icon: 'user'
      }
    },{
	    path: '/keshihua',
	    component: () => import('@/views/keshihua/index'),
	    name: 'keshihua',
	    meta: { title: '常规电源', icon: 'dashboard' }
	  },
	  {
	    path: '/page1',
	    component: () => import('@/views/keshihua/page1'),
	    name: 'page1',
	    meta: { title: '新能源', icon: 'dashboard' }
	  },
    {
	    path: '/chuneng',
	    component: () => import('@/views/chuneng/index'),
	    name: 'chuneng',
	    meta: { title: '储能', icon: 'dashboard'}
	  },
    {
	    path: '/dwpgfx',
	    component: () => import('@/views/dwpgfx'),
	    name: 'dwpgfx',
	    meta: { title: '电网评估分析', icon: 'dashboard'}
	  },
    {
	    path: '/dtmx',
	    component: () => import('@/views/dtmx'),
	    name: 'dtmx',
	    meta: { title: '电碳模型深化应用', icon: 'dashboard' }
	  },
    {
	    path: '/zykgl',
	    component: () => import('@/views/zykgl'),
	    name: 'zykgl',
	    meta: { title: '资源库管理', icon: 'dashboard' }
	  },
    {
	    path: '/qyyngl',
	    component: () => import('@/views/qyyngl'),
	    name: 'qyyngl',
	    meta: { title: '企业用能管理', icon: 'dashboard' }
	  }
  ]
  },
  // {
  //   path: '/basic',
  //   component: Layout,
  //   hidden: true,
  //   redirect: 'noredirect',
  //   children: [{
  //     path: 'photovoltaic',
  //     component: (resolve) => require(['@/views/basic/photovoltaic/index'], resolve),
  //     name: 'Photovoltaic',
  //     meta: {
  //       title: '可视化',
  //       icon: 'user'
  //     }
  //   }]
  // },
  
  // {
  //   path: '/basic',
  //   component: Layout,
  //   hidden: true,
  //   redirect: 'noredirect',
  //   children: [{
  //     path: 'platformArea',
  //     component: (resolve) => require(['@/views/basic/platformArea/index'], resolve),
  //     name: 'PlatformArea',
  //     meta: {
  //       title: '可视化',
  //       icon: 'user'
  //     }
  //   }]
  // },
  // {
  //   path: '/basic',
  //   component: Layout,
  //   hidden: true,
  //   redirect: 'noredirect',
  //   children: [{
  //     path: 'userInfo',
  //     component: (resolve) => require(['@/views/basic/UserInfo/index'], resolve),
  //     name: 'userInfo',
  //     meta: {
  //       title: '可视化',
  //       icon: 'user'
  //     }
  //   }]
  // },
  // {
  //   path: '/WholeMonitore',
  //   component: Layout,
  //   hidden: true,
  //   redirect: 'noredirect',
  //   children: [{
  //     path: 'wholeMonitore',
  //     component: (resolve) => require(['@/views/WholeMonitore/index'], resolve),
  //     name: 'wholeMonitore',
  //     meta: {
  //       title: '可视化',
  //       icon: 'user'
  //     }
  //   }]
  // },
  // {
  //   path: '/basic',
  //   component: Layout,
  //   hidden: true,
  //   redirect: 'noredirect',
  //   children: [{
  //     path: 'StationMonitoring',
  //     component: (resolve) => require(['@/views/basic/StationMonitoring/index'], resolve),
  //     name: 'StationMonitoring',
  //     meta: {
  //       title: '可视化',
  //       icon: 'user'
  //     }
  //   }]
  // },
  // {
  //   path: '/analysis',
  //   component: Layout,
  //   hidden: true,
  //   redirect: 'noredirect',
  //   children: [{
  //     path: 'OperationAnalysis',
  //     component: (resolve) => require(['@/views/analysis/OperationAnalysis/index'], resolve),
  //     name: 'OperationAnalysis',
  //     meta: {
  //       title: '可视化',
  //       icon: 'user'
  //     }
  //   }]
  // },
  // {
  //   path: '/PlanningAccess',
  //   component: Layout,
  //   hidden: true,
  //   redirect: 'noredirect',
  //   children: [{
  //     path: 'plan',
  //     component: (resolve) => require(['@/views/PlanningAccess/index'], resolve),
  //     name: 'plan',
  //     meta: {
  //       title: '可视化',
  //       icon: 'user'
  //     }
  //   }]
  // },
	{
	  path: '/DevelopmentCapacity',
	  component: Layout,
	  hidden: true,
	  redirect: 'noredirect',
	  children: [{
	    path: 'Capacity',
	    component: (resolve) => require(['@/views/DevelopmentCapacity/index'], resolve),
	    name: 'Capacity',
	    meta: {
	      title: '开发容量',
	      icon: 'user'
	    }
	  }]
	},
  {
    path: '/user',
    component: Layout,
    hidden: true,
    redirect: 'noredirect',
    children: [{
      path: 'profile',
      component: (resolve) => require(['@/views/system/user/profile/index'], resolve),
      name: 'Profile',
      meta: {
        title: '个人中心',
        icon: 'user'
      }
    }]
  },
  {
    path: '/auth',
    component: Layout,
    hidden: true,
    children: [{
      path: 'role/:userId(\\d+)',
      component: (resolve) => require(['@/views/system/user/authRole'], resolve),
      name: 'AuthRole',
      meta: {
        title: '分配角色'
      }
    }]
  },
  {
    path: '/auth',
    component: Layout,
    hidden: true,
    children: [{
      path: 'user/:roleId(\\d+)',
      component: (resolve) => require(['@/views/system/role/authUser'], resolve),
      name: 'AuthUser',
      meta: {
        title: '分配用户'
      }
    }]
  },
  {
    path: '/dict',
    component: Layout,
    hidden: true,
    children: [{
      path: 'type/data/:dictId(\\d+)',
      component: (resolve) => require(['@/views/system/dict/data'], resolve),
      name: 'Data',
      meta: {
        title: '字典数据',
        icon: ''
      }
    }]
  },
  {
    path: '/job',
    component: Layout,
    hidden: true,
    children: [{
      path: 'log',
      component: (resolve) => require(['@/views/monitor/job/log'], resolve),
      name: 'JobLog',
      meta: {
        title: '调度日志'
      }
    }]
  },
  {
    path: '/gen',
    component: Layout,
    hidden: true,
    children: [{
      path: 'edit/:tableId(\\d+)',
      component: (resolve) => require(['@/views/tool/gen/editTable'], resolve),
      name: 'GenEdit',
      meta: {
        title: '修改生成配置'
      }
    }]
  }
]

export default new Router({
  mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})
