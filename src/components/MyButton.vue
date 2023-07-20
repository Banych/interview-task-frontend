<template>
  <button type="button" :class="{
    'btn btn-primary btn-sm px-3 py-2': true,
    active: isPressed
  }" data-bs-toggle="button" :aria-pressed="isPressed" :style="buttonStyles"
    @click="(e) => emits('onClick', e)">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { reactive } from "vue";

type MyButtonProps = {
  width?: 'auto' | `${number}${'px' | 'rem' | 'em'}`;
  isPressed?: boolean;
}

type MyButtonEvents = {
  (e: 'onClick', payload: MouseEvent): void;
}

const props = withDefaults(defineProps<MyButtonProps>(), {
  width: 'auto',
  isPressed: false,
});

const emits = defineEmits<MyButtonEvents>();

const buttonStyles = reactive({
  width: props.width
});
</script>