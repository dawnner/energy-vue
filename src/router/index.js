import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";
import InnerLink from "@/layout/components/InnerLink";
import webnumber from "@/views/webnumber.vue";
import web0 from "../utils/webNumber/web0.vue";
import web1 from "../utils/webNumber/web1.vue";
import web2 from "../utils/webNumber/web2.vue";
import web3 from "../utils/webNumber/web3.vue";
import web4 from "../utils/webNumber/web4.vue";
import webtwo0 from "../utils/webNumber/web-two0.vue";
import webtwo1 from "../utils/webNumber/web-two1.vue";
import webtwo2 from "../utils/webNumber/web-two2.vue";
import webtwo3 from "../utils/webNumber/web-two3.vue";
import webtwo4 from "../utils/webNumber/web-two4.vue";
import webthree0 from "../utils/webNumber/web-three0.vue";
import webthree1 from "../utils/webNumber/web-three1.vue";
import webthree2 from "../utils/webNumber/web-three2.vue";
import webthree3 from "../utils/webNumber/web-three3.vue";
import webthree4 from "../utils/webNumber/web-three4.vue";
import webfour0 from "../utils/webNumber/web-four0.vue";
import webfour1 from "../utils/webNumber/web-four1.vue";
import webfour2 from "../utils/webNumber/web-four2.vue";
import webfour3 from "../utils/webNumber/web-four3.vue";
import webfour4 from "../utils/webNumber/web-four4.vue";
import webfive0 from "../utils/webNumber/web-five0.vue";
import webfive1 from "../utils/webNumber/web-five1.vue";
import webfive2 from "../utils/webNumber/web-five2.vue";
import webfive3 from "../utils/webNumber/web-five3.vue";
import webfive4 from "../utils/webNumber/web-five4.vue";
import websix0 from "../utils/webNumber/web-six0.vue";
import websix1 from "../utils/webNumber/web-six1.vue";
import websix2 from "../utils/webNumber/web-six2.vue";
import websix3 from "../utils/webNumber/web-six3.vue";
import websix4 from "../utils/webNumber/web-six4.vue";

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
    path: "/webnumber",
    name: "webnumber",
    component: webnumber
  },
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: resolve => require(["@/views/redirect"], resolve)
      }
    ]
  },
  {
    path: "/login",
    component: resolve => require(["@/views/login"], resolve),
    hidden: true
  },
  {
    path: "/404",
    component: resolve => require(["@/views/error/404"], resolve),
    hidden: true
  },
  {
    path: "/401",
    component: resolve => require(["@/views/error/401"], resolve),
    hidden: true
  },
  {
    path: "",
    component: Layout,
    redirect: "index",
    children: [
      {
        path: "index",
        component: resolve => require(["@/views/index"], resolve),
        name: "首页",
        meta: {
          title: "首页",
          icon: "dashboard",
          noCache: true,
          affix: true
        }
      }
    ]
  },
  {
    path: "/basic",
    component: Layout,
    hidden: true,
    redirect: "noredirect",
    children: [
      {
        path: "wholeInfo",
        component: resolve =>
          require(["@/views/basic/WholeInfo/index"], resolve),
        name: "WholeInfo",
        meta: {
          title: "可视化",
          icon: "user"
        }
      },
      {
        path: "/basic/keshihua",
        component: () => import("@/views/keshihua/index"),
        name: "keshihua",
        meta: { title: "常规电源", icon: "dashboard" }
      },
      {
        path: "/page1",
        component: () => import("@/views/newEnergy/index"),
        name: "page1",
        meta: { title: "新能源", icon: "dashboard" }
      },
      {
        path: "/chuneng",
        component: () => import("@/views/chuneng/index"),
        name: "chuneng",
        meta: { title: "新型储能", icon: "dashboard" }
      },
      {
        path: "/dwpgfx",
        component: () => import("@/views/dwpgfx"),
        name: "dwpgfx",
        meta: { title: "电网评估分析", icon: "dashboard" }
      },
      {
        path: "/dtmx",
        component: () => import("@/views/dtmx"),
        name: "dtmx",
        meta: { title: "电碳模型深化应用", icon: "dashboard" }
      },
      {
        path: "/zykgl",
        component: () => import("@/views/zykgl"),
        name: "zykgl",
        meta: { title: "资源库管理", icon: "dashboard" }
      },
      {
        path: "/qyyngl",
        component: () => import("@/views/qyyngl"),
        name: "qyyngl",
        meta: { title: "企业用能管理", icon: "dashboard" }
      }
    ]
  },
  {
    path: "/basic",
    component: Layout,
    hidden: true,
    redirect: "policyRelease",
    children: [
      {
        path: "policyRelease",
        component: () => import("@/views/PolicyRelease/index.vue"),
        name: "policyRelease",
        meta: {
          title: "政策发文",
          icon: "user"
        }
      }
    ]
  },
  {
    path: "/keshihua",
    component: Layout,
    hidden: true,
    redirect: "components",
    children: [
      {
        path: "components",
        component: () => import("../views/keshihua/components/CoalRanking.vue"),
        name: "CoalRanking"
      }
    ]
  },
  {
    path: "/dateils",
    component: Layout,
    hidden: true,
    redirect: "zcfwDateil",
    children: [
      {
        path: "zcfwDateil",
        component: () => import("@/views/zcfwDateil/index.vue"),
        name: "zcfwDateil",
        meta: {
          title: "政策解读",
          icon: "user"
        }
      }
    ]
  },
  {
    path: "/DevelopmentCapacity",
    component: Layout,
    hidden: true,
    redirect: "noredirect",
    children: [
      {
        path: "Capacity",
        component: resolve =>
          require(["@/views/DevelopmentCapacity/index"], resolve),
        name: "Capacity",
        meta: {
          title: "开发容量",
          icon: "user"
        }
      }
    ]
  },
  {
    path: "/user",
    component: Layout,
    hidden: true,
    redirect: "noredirect",
    children: [
      {
        path: "profile",
        component: resolve =>
          require(["@/views/system/user/profile/index"], resolve),
        name: "Profile",
        meta: {
          title: "个人中心",
          icon: "user"
        }
      }
    ]
  },
  {
    path: "/auth",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "role/:userId(\\d+)",
        component: resolve =>
          require(["@/views/system/user/authRole"], resolve),
        name: "AuthRole",
        meta: {
          title: "分配角色"
        }
      }
    ]
  },
  {
    path: "/auth",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "user/:roleId(\\d+)",
        component: resolve =>
          require(["@/views/system/role/authUser"], resolve),
        name: "AuthUser",
        meta: {
          title: "分配用户"
        }
      }
    ]
  },
  {
    path: "/dict",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "type/data/:dictId(\\d+)",
        component: resolve => require(["@/views/system/dict/data"], resolve),
        name: "Data",
        meta: {
          title: "字典数据",
          icon: ""
        }
      }
    ]
  },
  {
    path: "/job",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "log",
        component: resolve => require(["@/views/monitor/job/log"], resolve),
        name: "JobLog",
        meta: {
          title: "调度日志"
        }
      }
    ]
  },
  {
    path: "/gen",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "edit/:tableId(\\d+)",
        component: resolve => require(["@/views/tool/gen/editTable"], resolve),
        name: "GenEdit",
        meta: {
          title: "修改生成配置"
        }
      }
    ]
  }
];
//外部网站路由
export const webnumberRoutes = [
  {
    path: "/web0",
    name: "web0",
    component: web0
  },
  {
    path: "/web1",
    name: "web1",
    component: web1
  },
  {
    path: "/web2",
    name: "web2",
    component: web2
  },
  {
    path: "/web3",
    name: "web3",
    component: web3
  },
  {
    path: "/web4",
    name: "web4",
    component: web4
  },
  {
    path: "/webtwo0",
    name: "webtwo0",
    component: webtwo0
  },
  {
    path: "/webtwo1",
    name: "webtwo1",
    component: webtwo1
  },
  {
    path: "/webtwo2",
    name: "webtwo2",
    component: webtwo2
  },
  {
    path: "/webtwo3",
    name: "webtwo3",
    component: webtwo3
  },
  {
    path: "/webtwo4",
    name: "webtwo4",
    component: webtwo4
  },
  {
    path: "/webthree0",
    name: "webthree0",
    component: webthree0
  },
  {
    path: "/webthree1",
    name: "webthree1",
    component: webthree1
  },
  {
    path: "/webthree2",
    name: "webthree2",
    component: webthree2
  },
  {
    path: "/webthree3",
    name: "webthree3",
    component: webthree3
  },
  {
    path: "/webthree4",
    name: "webthree4",
    component: webthree4
  },
  {
    path: "/webfour0",
    name: "webfour0",
    component: webfour0
  },
  {
    path: "/webfour1",
    name: "webfour1",
    component: webfour1
  },
  {
    path: "/webfour2",
    name: "webfour2",
    component: webfour2
  },
  {
    path: "/webfour3",
    name: "webfour3",
    component: webfour3
  },
  {
    path: "/webfour4",
    name: "webfour4",
    component: webfour4
  },
  {
    path: "/webfive0",
    name: "webfive0",
    component: webfive0
  },
  {
    path: "/webfive1",
    name: "webfive1",
    component: webfive1
  },
  {
    path: "/webfive2",
    name: "webfive2",
    component: webfive2
  },
  {
    path: "/webfive3",
    name: "webfive3",
    component: webfive3
  },
  {
    path: "/webfive4",
    name: "webfive4",
    component: webfive4
  },
  {
    path: "/websix0",
    name: "websix0",
    component: websix0
  },
  {
    path: "/websix1",
    name: "websix1",
    component: websix1
  },
  {
    path: "/websix2",
    name: "websix2",
    component: websix2
  },
  {
    path: "/websix3",
    name: "websix3",
    component: websix3
  },
  {
    path: "/websix4",
    name: "websix4",
    component: websix4
  }
];
export default new Router({
  // mode: 'history', // 去掉url中的#
  mode: "hash",
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [...constantRoutes, ...webnumberRoutes]
});
