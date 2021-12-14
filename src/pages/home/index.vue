<template>
  <button @click="buttonClick">{{ number }}</button>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const number = ref(0);

    return {
      number,
    };
  },
  methods: {
    buttonClick() {
      console.log(this.number);
      this.number++;
    },
  },
};
</script>

<style lang="less"></style>
