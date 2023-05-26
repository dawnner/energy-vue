<template>
  <div :class="classObj" class="app-wrapper" :style="{'--current-color': theme}">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <!-- <sidebar class="sidebar-container" :style="{ backgroundColor: sideTheme === 'theme-dark' ? variables.menuBg : variables.menuLightBg }" /> -->
    <div class="main-containerv">
      <div style="height: 7.8%;">
        <voltaic-bar></voltaic-bar>
      </div>
      <photovoltaic style="height: 89%;"></photovoltaic>
      <!-- <right-panel v-if="showSettings">
        <settings />
      </right-panel> -->
    </div>
  </div>
</template>

<script>
  import RightPanel from '@/components/RightPanel'
  import VoltaicBar from '@/components/VoltaicBar'
  import {
    AppMain,
    Settings,
    Sidebar,
    TagsView
  } from '../layout/components'
  import photovoltaic from '../views/basic/photovoltaic'
  import ResizeMixin from '../layout/mixin/ResizeHandler'
  import {
    mapState
  } from 'vuex'
  import variables from '@/assets/styles/variables.scss'

  export default {
    name: 'Layout',
    components: {
      AppMain,
      VoltaicBar,
      RightPanel,
      Settings,
      Sidebar,
      TagsView,
      photovoltaic
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
          mobile: this.device === 'mobile'
        }
      },
      variables() {
        return variables;
      }
    },
    methods: {
      handleClickOutside() {
        this.$store.dispatch('app/closeSideBar', {
          withoutAnimation: false
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/styles/mixin.scss";
  @import "~@/assets/styles/variables.scss";

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
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>
