<template>
  <div id="editor">
    <input class="edit-header" />
    <div class="edit-area" ref="editorRef" contenteditable="true"></div>
    <div class="edit-handle"></div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";

export default {
  setup() {
    const editorRef = ref();

    onMounted(() => {});

    return {
      editorRef,
    };
  },
};
</script>

<style lang="less">
#editor {
  .edit-area {
    padding: 6px;
  }
  .edit-handle {
    display: flex;
    min-height: 20px;
    border: 1px solid #e7e7e7;
  }
}
</style>
