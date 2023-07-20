<template>
  <div
    :class="[ 'bg-white rounded-1 d-flex flex-column', isPlaceholder ? 'border-dashed ' : '' ]">
    <div v-if="slots.header && !isPlaceholder" class="px-5 pt-5 pb-1">
      <slot name="header"></slot>
    </div>

    <div :class="{
      'flex-grow-1': true,
      'p-5 d-flex  flex-grow-1': isAddContentPadding,
      'd-flex align-items-center justify-content-center placeholder-text': isPlaceholder,
    }">
      <slot></slot>
      <div v-if="isPlaceholder">
        <slot name="placeholder"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from "vue";

type MyCardProps = {
  isAddContentPadding?: boolean;
  isPlaceholder?: boolean;
}
const slots = useSlots();


withDefaults(defineProps<MyCardProps>(), {
  isAddContentPadding: true,
  isPlaceholder: false,
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

.placeholder-text {
  color: #63666E;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
</style>