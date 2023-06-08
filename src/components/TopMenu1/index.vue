<template>
  <div class="navbar">
    <div class="box-left">
      <img src="../../assets/images/logo .png" />
      <div class="bt">山东省新能源云深化应用</div>
    </div>
    <!-- 控制左侧菜单展开关闭 -->
    <!-- <hamburger
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    /> -->
    <!-- 顶部面包屑 -->
    <!-- <breadcrumb
      id="breadcrumb-container"
      class="breadcrumb-container"
      v-if="!topNav"
    />
    <top-nav id="topmenu-container" class="topmenu-container" v-if="topNav" /> -->
    <div class="box-center">
      <nav class="nav-center" style="cursor:pointer;">
        <div
          :class="activelist == index ? 'active1' : 'morenzhi'"
          v-for="(item, index) in menuList"
          :key="index"
          @click="clickName(item, index)"
          style="
            display: flex;
            align-items: center;
            hlight: 100%;
            padding: 0 20px;
            white-space: nowrap;
            overflow: hidden;
          "
        >
          <div>{{ item.name }}</div>
        </div>
      </nav>
      <!-- <div>标题：可视化系统</div> -->
      <!-- <router-link to="/">首页</router-link>
      <router-link to="/keshihua">页面一</router-link>
      <router-link to="/page1">页面二</router-link> -->
    </div>

    <!-- <div class="right-menu"> -->
    <!-- <div class="right-menu-one">
        <span>欢迎您，</span>
        <span class="username">{{ username }}</span>
      </div> -->
    <!-- <div class="right-menu-two">
        <div class="right-menu-two-left" @click="dialogVisible()">
          <i class="el-icon-lock"></i>修改密码
        </div> -->
    <!-- <div
          class="right-menu-two-right"
          @click="logout"
          style="cursor: pointer"
        >
          <i class="el-icon-switch-button"></i>退出
        </div> -->

    <!-- <template v-if="device !== 'mobile'">
        <search id="header-search" class="right-menu-item" />

        <el-tooltip content="源码地址" effect="dark" placement="bottom">
          <ruo-yi-git id="ruoyi-git" class="right-menu-item hover-effect" />
        </el-tooltip>

        <el-tooltip content="文档地址" effect="dark" placement="bottom">
          <ruo-yi-doc id="ruoyi-doc" class="right-menu-item hover-effect" />
        </el-tooltip>

        <screenfull id="screenfull" class="right-menu-item hover-effect" />

        <el-tooltip content="布局大小" effect="dark" placement="bottom">
          <size-select id="size-select" class="right-menu-item hover-effect" />
        </el-tooltip>
      </template> -->

    <!-- <el-dropdown
        class="avatar-container right-menu-item hover-effect"
        trigger="click"
      >
        <div class="avatar-wrapper">
          <img :src="avatar" class="user-avatar" />
          <span style="font-size: 12px">欢迎，{{ name }}</span>
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/user/profile">
            <el-dropdown-item>个人中心</el-dropdown-item>
          </router-link>
          <router-link to="/webnumber">
            <el-dropdown-item>外部网站</el-dropdown-item>
          </router-link>
          <router-link to="/index">
            <el-dropdown-item>可视化系统</el-dropdown-item>
          </router-link> -->
    <!-- <el-dropdown-item @click.native="setting = true">
            <span>布局设置</span>
          </el-dropdown-item> -->
    <!-- <el-dropdown-item divided @click.native="logout">
            <span>退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->
    <!-- </div>  -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import TopNav from "@/components/TopNav";
import Hamburger from "@/components/Hamburger";
import Screenfull from "@/components/Screenfull";
import SizeSelect from "@/components/SizeSelect";
import Search from "@/components/HeaderSearch";
import RuoYiGit from "@/components/RuoYi/Git";
import RuoYiDoc from "@/components/RuoYi/Doc";

export default {
  data() {
    return {
      activelist: 0,
      menuList: [
        {
          url: "/basic/wholeInfo",
          name: "首页"
        },
        {
          url: "/basic/keshihua",
          name: "常规电源"
        },
        {
          url: "/page1",
          name: "新能源"
        },
        {
          url: "/chuneng",
          name: "新型储能"
        },
        {
          url: "/dwpgfx",
          name: "电网评估分析"
        },
        {
          url: "/dtmx",
          name: "电碳模型深化应用"
        },
        {
          url: "/zykgl",
          name: "资源库管理"
        },
        {
          url: "/qyyngl",
          name: "企业用能管理"
        }
      ]
    };
  },
  components: {
    Breadcrumb,
    TopNav,
    Hamburger,
    Screenfull,
    SizeSelect,
    Search,
    RuoYiGit,
    RuoYiDoc
  },
  computed: {
    ...mapGetters(["sidebar", "avatar", "name", "device"]),
    setting: {
      get() {
        return this.$store.state.settings.showSettings;
      },
      set(val) {
        this.$store.dispatch("settings/changeSetting", {
          key: "showSettings",
          value: val
        });
      }
    },
    topNav: {
      get() {
        return this.$store.state.settings.topNav;
      }
    }
  },
  methods: {
    dialogVisible() {
      this.$router.push("/user/profile");
    },
    clickName(item, index) {
      this.activelist = index;
      this.$router.push(item.url);
      this.$emit("openIndex", index);
    },
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    async logout() {
      this.$confirm("确定注销并退出系统吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$store.dispatch("LogOut").then(() => {
            location.href = "/index";
          });
        })
        .catch(() => {});
    }
  }
};
</script>

<style lang="scss">
.navbar {
  display: flex;
  // height: (70 / 1180 * 100vh);
  height: 100%;
  overflow: hidden;
  align-content: center;
  position: relative;
  // box-shadow: 0 1px 2px rgba(0, 21, 41, 0.08);
  // background-image: url("../../assets/images/navbj.png");
  background-size: 100% 100%;
  .box-left {
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 2rem;
    img {
      width: 52px;
      height: 54px;
      margin: 9px 20px;
    }
  }
  .bt {
    font-size: 28px;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    color: #158388;
  }
  .box-center {
    width: 76%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    color: #fff;
    // justify-content: space-around;
    align-items: center;
    // font: 1.2rem Arial, Helvetica, sans-serif;
  }
  nav a:hover {
    opacity: 1;
  }

  .active1 {
    color: #158388;
    font-weight: 700;
    font-size: 24px;
    height: 100%;
    border-bottom: 3px solid #158388;
    // background: rgba(255, 255, 255, 0.3);
  }
  .morenzhi {
    height: 100%;
    font-size: 23px;
    color: #000;
  }
  // nav a i {
  //   font-size: 20px;
  //   margin-bottom: 10px;
  // }
  // .hamburger-container {
  //   line-height: 46px;
  //   height: 100%;
  //   float: left;
  //   cursor: pointer;
  //   transition: background 0.3s;
  //   -webkit-tap-highlight-color: transparent;

  //   &:hover {
  //     background: rgba(0, 0, 0, 0.025);
  //   }
  // }

  .breadcrumb-container {
    float: left;
  }

  // .topmenu-container {
  //   position: absolute;
  //   left: 50px;
  // }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  // .right-menu {
  //   width: 9%;
  //   height: 100%;
  //   display: flex;
  //   justify-content: flex-end;
  //   align-items: center;
  //   padding-right: 20px;
  //   .right-menu-two {
  //     display: flex;
  //     color: #fff;
  //     .right-menu-two-left {
  //       cursor: pointer;
  //       margin-right: 1rem;
  //     }
  //   }
  //   &:focus {
  //     outline: none;
  //   }

  //   .right-menu-item {
  //     display: inline-block;
  //     padding: 0 10px;
  //     height: 100%;
  //     font-size: 1rem;
  //     color: #5a5e66;
  //     vertical-align: text-bottom;

  //     &.hover-effect {
  //       cursor: pointer;
  //       transition: background 0.3s;

  //       &:hover {
  //         background: rgba(0, 0, 0, 0.025);
  //       }
  //     }
  //   }

  //   .avatar-container {
  //     display: flex;
  //     align-items: center;
  //     i {
  //       font-size: 15px;
  //     }

  //     .avatar-wrapper {
  //       display: flex;
  //       align-items: center;
  //       // margin-top: 5px;
  //       // position: relative;

  //       .user-avatar {
  //         cursor: pointer;
  //         width: 30px;
  //         height: 30px;
  //         background: #fff;
  //         border-radius: 15px;
  //       }
  //     }
  //   }
  // }
}
</style>
