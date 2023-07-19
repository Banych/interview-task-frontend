<template>
  <div :class="[ 'bg-white rounded-1', isBorderDashed ? 'border-dashed' : '' ]">
    <div v-if="slots.header" class="px-5 pt-5 pb-1">
      <slot name="header"></slot>
    </div>

    <div v-if="slots.default" :class="{ 'p-5': isAddContentPadding }">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from "vue";

type MyCardProps = {
  isAddContentPadding?: boolean;
  isBorderDashed?: boolean;
}
const slots = useSlots();

withDefaults(defineProps<MyCardProps>(), {
  isAddContentPadding: true,
  isBorderDashed: false,
});
</script>

<style scoped>
.border-dashed {
  border: 2px dashed #9A9DA4;
  stroke-dasharray: 30 32;
  /* background-image: repeating-linear-gradient(0deg, #9a9da4, #9a9da4 30px, transparent 30px, transparent 51px, #9a9da4 51px), repeating-linear-gradient(90deg, #9a9da4, #9a9da4 30px, transparent 30px, transparent 51px, #9a9da4 51px), repeating-linear-gradient(180deg, #9a9da4, #9a9da4 30px, transparent 30px, transparent 51px, #9a9da4 51px), repeating-linear-gradient(270deg, #9a9da4, #9a9da4 30px, transparent 30px, transparent 51px, #9a9da4 51px);
  background-size: 2px 100%, 100% 2px, 2px 100%, 100% 2px;
  background-position: 0 0, 0 0, 100% 0, 0 100%;
  background-repeat: no-repeat; */
}
</style>