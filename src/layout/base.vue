<template>
  <div class="base-layout flex-column">
    <div class="base-layout-content">
      <router-view />
    </div>
    <div class="base-layout-bottom flex">
      <div
        v-for="item of tabList"
        :key="item.key"
        :class="`bottom-bar-item ${tabId === item.key ? 'active' : ''}`"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
import { useRoute } from "vue-router";

const TabList = [
  {title: '首页', key: 'home'},
  {title: '个人中心', key: 'user'},
]

export default {
  setup() {
    const route = useRoute();
    console.log("route:", route, route.meta);
    const { tabId } = route.meta;
    const ctx = getCurrentInstance();
    console.log("ctx:", ctx);

    return { tabId, tabList: TabList };
  },
};
</script>

<style lang="less" scoped>
.base-layout {
  height: 100vh;
}
.base-layout-content {
  flex: 1;
  overflow: scroll;
}
.base-layout-bottom {
  flex-shrink: 0;
  width: 100vw;
  height: 60px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .3);

  .bottom-bar-item{
    flex: 1;
    color: #969799;
  }

  .active{
    color: #333;
    font-weight: bold;
  }
}
</style>
