<template>
  <div
    :class="classObj"
    class="app-wrapper"
    :style="{ '--current-color': theme }"
  >
    <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <div class="main-container" v-if="!isRuoyi">
      <div style="height: 7.8%;">
        <navbar @showRuoyi="showRuoyi"></navbar>
        <tags-view ref="closeTag" style="visibility: hidden" />
      </div>
      <app-main />
      <right-panel v-if="showSettings">
        <settings />
      </right-panel>
    </div>
    <sidebar class="sidebar-container" v-if="isRuoyi" />
    <div
      :class="{ hasTagsView: needTagsView }"
      class="main-container1"
      v-if="isRuoyi"
    >
      <div :class="{ 'fixed-header': fixedHeader }">
        <navbar @showRuoyi="showRuoyi"></navbar>
        <tags-view v-if="needTagsView" ref="closeTag" />
      </div>
      <app-main />
      <right-panel v-if="showSettings">
        <settings />
      </right-panel>
    </div>
  </div>
</template>

<script>
import RightPanel from "@/components/RightPanel";
import { AppMain, Navbar, Settings, Sidebar, TagsView } from "./components";
import ResizeMixin from "./mixin/ResizeHandler";
import { mapState } from "vuex";
import variables from "@/assets/styles/variables.scss";

export default {
  name: "Layout",
  components: {
    AppMain,
    Navbar,
    RightPanel,
    Settings,
    Sidebar,
    TagsView
  },
  data() {
    return {
      isRuoyi: false
    };
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      theme: state => state.settings.theme,
      sideTheme: state => state.settings.sideTheme,
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      showSettings: state => state.settings.showSettings,
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile"
      };
    },
    variables() {
      return variables;
    }
  },
  created() {
    this.wOnload();
    // this.changePage()
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch("app/closeSideBar", {
        withoutAnimation: false
      });
    },
    wOnload() {
      var that = this;
      var tagTitle = this.$store.state.tagsView.visitedViews;
      console.log("cwef3", tagTitle);
      that.$nextTick(() => {
        if (
          (tagTitle.length == 2 && tagTitle[1].title != "可视化") ||
          tagTitle.length == 1
        ) {
          that.isRuoyi = true;
        } else if (tagTitle.length > 2) {
        }
      });
    },
    showRuoyi(val) {
      this.isRuoyi = val;
      if (!val) {
        this.$router.push({
          path: "/basic/wholeInfo"
        });
      } else {
        this.$refs.closeTag.closeAllTags();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/mixin.scss";
@import "~@/assets/styles/variables.scss";
.main-container {
  background: url("../assets/images/beijing1.png") no-repeat left;
  background-size: 100% 100%;
}
::-webkit-scrollbar {
  width: 0;
}

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
