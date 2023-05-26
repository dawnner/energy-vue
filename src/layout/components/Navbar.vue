<template>
  <div style="height: 100%;">
    <div class="navbar" v-if="!showRouyi">
      <!-- <TopMenu></TopMenu> -->
      <TopMenu1></TopMenu1>
      <div class="right-menu">
        <template v-if="device !== 'mobile'">
          <!-- <screenfull id="screenfull" class="right-menu-item hover-effect" /> -->
        </template>
        <el-dropdown
          class="avatar-container right-menu-item hover-effect"
          trigger="click"
        >
          <div class="avatar-wrapper">
            <img
              :src="avatar"
              class="user-avatar"
              style="border-radius: 100%;"
            />
            <span style="font-size: 0.8rem">{{ name }}</span>
            <i
              class="el-icon-caret-bottom"
              style="color: #3ebbc2;position: relative;top: 0;right: -2px;"
            />
            <el-dropdown-menu slot="dropdown">
              <router-link to="/user/profile">
                <el-dropdown-item>个人中心</el-dropdown-item>
              </router-link>
              <!-- <el-dropdown-item @click.native="setting = true">
              <span>布局设置</span>
            </el-dropdown-item> -->
              <el-dropdown-item @click.native="systemSetting">
                <span>系统管理</span>
              </el-dropdown-item>
              <router-link to="/webnumber">
                <el-dropdown-item>外部网站</el-dropdown-item>
              </router-link>
              <el-dropdown-item divided @click.native="logout">
                <span>退出登录</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </div>
        </el-dropdown>
      </div>
    </div>
    <div class="navbar1" v-if="showRouyi">
      <hamburger
        id="hamburger-container"
        :is-active="sidebar.opened"
        class="hamburger-container"
        @toggleClick="toggleSideBar"
      />
      <breadcrumb
        id="breadcrumb-container"
        class="breadcrumb-container"
        v-if="!topNav"
      />
      <top-nav id="topmenu-container" class="topmenu-container" v-if="topNav" />
      <div class="right-menu">
        <template v-if="device !== 'mobile'">
          <search id="header-search" class="right-menu-item" />

          <screenfull id="screenfull" class="right-menu-item hover-effect" />
        </template>
        <el-dropdown
          class="avatar-container right-menu-item hover-effect"
          trigger="click"
        >
          <div class="avatar-wrapper">
            <img
              :src="avatar"
              class="user-avatar"
              style="border-radius: 100%;"
            />
            <span style="font-size: 0.8rem;">欢迎，{{ name }}</span>
            <i class="el-icon-caret-bottom" />
          </div>
          <el-dropdown-menu slot="dropdown">
            <router-link to="/user/profile">
              <el-dropdown-item>个人中心</el-dropdown-item>
            </router-link>
            <el-dropdown-item @click.native="setting = true">
              <!-- <span>布局设置</span> -->
            </el-dropdown-item>
            <el-dropdown-item @click.native="systemSetting">
              <span>可视化平台</span>
            </el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">
              <span>退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RuoYiDoc from "@/components/RuoYi/Doc";
import Breadcrumb from "@/components/Breadcrumb";
import TopNav from "@/components/TopNav";
import Hamburger from "@/components/Hamburger";
import Screenfull from "@/components/Screenfull";
import SizeSelect from "@/components/SizeSelect";
import Search from "@/components/HeaderSearch";
import TopMenu from "@/components/TopMenu";
import TopMenu1 from "@/components/TopMenu1";

export default {
  components: {
    Breadcrumb,
    Hamburger,
    TopNav,
    Screenfull,
    SizeSelect,
    Search,
    TopMenu,
    TopMenu1,
    RuoYiDoc
  },
  data() {
    return {
      showRouyi: false
    };
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
  mounted() {
    this.wOnload();
  },
  methods: {
    wOnload() {
      var that = this;
      var tagTitle1 = this.$store.state.tagsView.visitedViews;
      that.$nextTick(() => {
        if (
          (tagTitle1.length == 2 && tagTitle1[1].title != "可视化") ||
          tagTitle1.length == 1
        ) {
          that.showRouyi = true;
        }
      });
    },
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    async systemSetting() {
      // this.closeAllTags()
      this.showRouyi = !this.showRouyi;
      this.$emit("showRuoyi", this.showRouyi);
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

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 100%;
  display: flex;
  // align-items: flex-start;
  align-items: center;
  justify-content: space-between;
  background: url("../../assets/images/navbj.png");
  background-size: 100% 100%;
  // background-repeat: no-repeat;

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    // float: right;
    // height: 100%;
    // line-height: 50px;
    display: flex;
    align-items: center;
    height: 100%;
    width: 8%;
    background: url("../../assets/images/navbj.png");

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: flex;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      align-items: center;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;
      color: #3ebbc2;

      .avatar-wrapper {
        display: flex;
        align-items: center;
        font-size: 1rem;
        height: 100%;

        .user-avatar {
          cursor: pointer;
          width: 25px;
          height: 25px;
          border-radius: 100%;
          margin-right: 8px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}

.navbar1 {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .topmenu-container {
    position: absolute;
    left: 50px;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        position: relative;
        display: flex;
        align-items: center;

        .user-avatar {
          cursor: pointer;
          width: 25px;
          height: 25px;
          border-radius: 100%;
          margin-right: 8px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 20px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
