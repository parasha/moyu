<template>
  <div
    ref="scrollRef"
    class="scroll-wrapper"
    @scroll="scroll"
    :style="{ height: height }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";

// 计算滚动位置
function getBottomLength(element: HTMLDivElement) {
  return element.scrollHeight - (element.scrollTop + element.clientHeight);
}

export default {
  name: "infiniteScroll",
  props: {
    delay: {
      // // 延迟，ms
      type: Number,
      default: 200,
    },
    distance: {
      // 距离底部距离，px
      type: Number,
      default: 200,
    },
    onLoad: {
      // 滚动回调
      type: Function,
      required: true,
    },
    height: {
      // 组件需要一个确定的高度
      type: String,
      required: true,
    },
  },
  setup({ delay, distance, onLoad }) {
    const scrollRef = ref<HTMLDivElement>();
    const lastLoadTime = ref<number>(0);
    const timeout = ref<NodeJS.Timeout>();

    const initScrollHandle = () => {
      const el = scrollRef.value;
      if (!el) {
        return;
      }
      if (Date.now() - lastLoadTime.value < delay) {
        return;
      }
      if (getBottomLength(el) <= distance) {
        load();
      }
    };

    const load = () => {
      timeout.value && clearTimeout(timeout.value);
      timeout.value = setTimeout(() => {
        console.log("滚动加载");
        onLoad();
        lastLoadTime.value = Date.now();
      }, delay);
    };

    onMounted(() => {
      initScrollHandle();
    });

    return {
      scrollRef,
    };
  },
};
</script>

<style lang="less" scoped>
.scroll-wrapper {
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
