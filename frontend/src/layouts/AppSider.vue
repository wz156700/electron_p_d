<template>
  <a-layout id="app-layout-sider">
    <a-layout-sider v-model="collapsed" theme="light" class="layout-sider">
      <div class="logo">
        <img class="pic-logo" src="~@/assets/logo.png" />
      </div>
      <a-menu
        class="menu-item"
        theme="light"
        mode="inline"
        :default-selected-keys="[default_key]"
        @click="menuHandle"
      >
        <a-menu-item v-for="(menuInfo, index) in menu" :key="index">
          <a-icon :type="menuInfo.icon" />
          {{ menuInfo.title }}
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content class="layout-content">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { ipcApiRoute, specialIpcRoute } from "@/api/main";
export default {
  name: "AppSider",
  data() {
    return {
      collapsed: true,
      default_key: "menu_1",
      current: "",
      menu: {
        menu_1: {
          icon: "home",
          title: "加载信息",
          pageName: "loadingMessage",
          params: {},
        },
        menu_2: {
          icon: "home",
          title: "设置",
          pageName: "setting",
          params: {},
        },
        menu_3: {
          icon: "home",
          title: "硬件设备测试",
          pageName: "equipment",
          params: {},
        },
        menu_4: {
          icon: "home",
          title: "窗口管理助手",
          pageName: "windowManagement",
          params: {},
        },
      },
      views: [
        {
          type: "vue",
          content: "/#/winMana",
          windowName: "window-ipc",
          windowTitle: "窗口管理助手",
        },
      ],
    };
  },
  created() {},
  mounted() {
    this.menuHandle();
  },
  methods: {
    menuHandle(e) {
      this.current = e ? e.key : this.default_key;
      const linkInfo = this.menu[this.current];
      if (linkInfo.pageName == "windowManagement") {
        this.createWindow("0");
      } else {
        console.log("[home] load page:", linkInfo.pageName);
        this.$router.push({ name: linkInfo.pageName, params: linkInfo.params });
      }
    },
    createWindow(index) {
      this.$ipc
        .invoke(ipcApiRoute.createWindow, this.views[index])
        .then((id) => {
          console.log("[createWindow] id:", id);
        });
    },
  },
};
</script>
<style lang="less" scoped>
// 嵌套
#app-layout-sider {
  height: 100%;
  .logo {
    border-bottom: 1px solid #e8e8e8;
  }
  .pic-logo {
    height: 32px;
    //background: rgba(139, 137, 137, 0.2);
    margin: 10px;
  }
  .layout-sider {
    width: 130px !important;
    max-width: 300px !important;
    flex: 0 0 auto !important;
    border-top: 1px solid #e8e8e8;
    border-right: 1px solid #e8e8e8;
    .ant-menu-inline-collapsed {
      width: 80%;
      margin: 0 10%;
      border-right: none;
      .ant-menu-item {
        text-align: left;
      }
    }
  }
  .menu-item {
    .ant-menu-item {
      background-color: #fff;
      margin-top: 0px;
      margin-bottom: 0px;
      padding: 0 0px !important;
    }
  }
  .layout-content {
    background-color: #fff;
  }
}
</style>
