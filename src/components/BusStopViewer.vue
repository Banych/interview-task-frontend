<template>
  <MyCard :is-add-content-padding="false"
    :is-placeholder="selectedStop === undefined" class="d-flex flex-grow-1">
    <template #placeholder>
      Please select the bus line first
    </template>
    <div v-if="selectedStop">
      {{ selectedStop }}</div>
  </MyCard>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "../store";

import MyCard from "./MyCard.vue";

const store = useStore();

const selectedStop = computed(() => store.state.selectedStop)
</script>