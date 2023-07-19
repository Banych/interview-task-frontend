<template>
  <button type="button" class="btn btn-primary btn-sm px-3 py-2"
    :style="buttonStyles" @click="(e) => emits('onClick', e)">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { reactive } from "vue";

type MyButtonProps = {
  width?: 'auto' | `${number}${'px' | 'rem' | 'em'}`;
}

type MyButtonEvents = {
  (e: 'onClick', payload: MouseEvent): void;
}

const props = withDefaults(defineProps<MyButtonProps>(), {
  width: 'auto'
});

const emits = defineEmits<MyButtonEvents>();

const buttonStyles = reactive({
  width: props.width
});
</script>