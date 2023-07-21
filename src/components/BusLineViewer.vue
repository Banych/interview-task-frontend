<template>
  <MyCard :is-add-content-padding="false"
    :is-placeholder="selectedLine === undefined" class="d-flex flex-grow-1">
    <template #placeholder>
      Please select the bus line first
    </template>
    <template #header>
      <h6>Bus line: {{ selectedLine }}</h6>
    </template>
    <BusStopsList v-if="selectedLine !== undefined" :stops="stopsForSelectedLine"
      @clickItem="handleListItemClick" :key="selectedLine" />
  </MyCard>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useStore } from "../store";
import MyCard from "./MyCard.vue";
import BusStopsList from "./BusStopsList.vue";
import { Getters } from "../store/getters";

const store = useStore();

const selectedLine = computed(() => store.state.selectedLine);
const stopsForSelectedLine = computed(() => selectedLine.value !== undefined
  ? store.getters.getStopsByLine(selectedLine.value)
  : []
);

const handleListItemClick = (item: ReturnType<ReturnType<Getters[ 'getStopsByLine' ]>>[ number ]) => {
  store.dispatch('SET_SELECTED_STOP', item.stop);
}
</script>