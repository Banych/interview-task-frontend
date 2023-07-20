<template>
  <button type="button" :class="{
    'py-4 px-5 button-item': true,
    'active': isActive,
    'sort': isSort,
  }" @click="(e) => emit('click', e)">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
type ButtonItemEvents = {
  (event: 'click', e: MouseEvent): void;
}

type ButtonItemProps = {
  isActive?: boolean;
  isSort?: boolean;
}

const emit = defineEmits<ButtonItemEvents>();

withDefaults(defineProps<ButtonItemProps>(), {
  isActive: false,
  isSort: false,
})
</script>

<style scoped lang="scss">
.button-item {
  position: relative;
  border: 0;
  background: transparent;
  text-align: left;

  &.active {
    color: #1952E1;
  }

  &:hover {
    background-color: #F8F8FB;
  }

  &::after {
    content: '';
    position: absolute;
    height: 1px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #F3F4F9;
  }

  &.sort::after {
    content: '';
    background-color: #E2E4EA;
  }
}
</style>