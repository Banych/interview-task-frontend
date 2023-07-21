<template>
  <MyCard :is-add-content-padding="false"
    :is-placeholder="selectedStop === undefined" class="d-flex flex-grow-1">
    <template #placeholder>
      {{ placeholder }}
    </template>
    <template #header>
      <h6>Bus Stop: {{ selectedStop }}</h6>
    </template>
    <div v-if="selectedStop" class="d-flex flex-column flex-grow-1">
      <ListItem>
        <div class="py-2 fw-semibold fs-075 lh-1">
          Time
        </div>
      </ListItem>
      <div class="d-flex flex-column flex-grow-1 overflow-auto"
        :key="`${selectedLine}${selectedStop}`">
        <div class="h-0">
          <div class="d-flex flex-column">
            <ListItem v-for="time in schedule" :key="time">
              {{ time }}
            </ListItem>
          </div>
        </div>
      </div>
    </div>
  </MyCard>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "../store";
import ListItem from "./ListItem.vue";

import MyCard from "./MyCard.vue";

const store = useStore();

const selectedLine = computed(() => store.state.selectedLine)
const selectedStop = computed(() => store.state.selectedStop)
const schedule = computed(() =>
  selectedStop.value && selectedLine.value
    ? store.getters.getScheduleForStop(selectedStop.value, selectedLine.value)
    : []
)
const placeholder = computed(() => {
  switch (true) {
    case selectedLine.value && !selectedStop.value:
      return 'Please select the bus stop first';
    case !selectedLine.value && !selectedStop.value:
    default:
      return 'Please select the bus line first';
  }
})
</script>

<style scoped>
.h-0 {
  height: 0;
}
</style>