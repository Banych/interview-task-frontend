<template>
  <MyCard>
    <template #header>
      <h6>Select Bus Line</h6>
    </template>
    <div class="d-flex gap-1 flex-wrap">
      <MyButton v-for="line in lines" :key="line" :width="'54px'"
        @on-click="click(line)" :is-pressed="selectedLine === line">
        {{ line }}
      </MyButton>
    </div>
  </MyCard>
</template>

<script setup lang="ts">
import { computed } from "vue";

import MyCard from "@/components/MyCard.vue";
import MyButton from "@/components/MyButton.vue";
import { useStore } from "@/store";

const store = useStore();

const lines = computed(() => store.getters.getLines)
const selectedLine = computed(() => store.state.selectedLine)
const click = (line: number) => {
  store.dispatch('CLEAR_SELECTED_STOP')
  if (selectedLine.value === line) {
    store.dispatch('CLEAR_SELECTED_LINE')
  } else {
    store.dispatch('SET_SELECTED_LINE', line);
  }
}
</script>