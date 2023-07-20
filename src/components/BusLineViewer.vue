<template>
  <MyCard :is-add-content-padding="selectedLine !== undefined"
    :is-placeholder="selectedLine === undefined" class="d-flex flex-grow-1">
    <template #placeholder>
      Please select the bus line first
    </template>
    <template #header>
      <h6>Bus line: {{ selectedLine }}</h6>
    </template>
    <BusStopsList v-if="selectedLine !== undefined"
      :stops="stopsForSelectedLine" />
  </MyCard>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "../store";

import MyCard from "./MyCard.vue";
import BusStopsList from "./BusStopsList.vue";

const store = useStore();

const selectedLine = computed(() => store.state.selectedLine);
const stopsForSelectedLine = computed(() => selectedLine.value !== undefined
  ? store.getters.getStopsByLine(selectedLine.value)
  : []
);
</script>