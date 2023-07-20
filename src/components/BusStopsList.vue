<template>
  <div class="d-flex flex-column flex-grow-1 overflow-auto">
    <div class="h-0">
      <div class="d-flex flex-column">
        <ListItem v-for="stop in stops" :key="stop.stop"
          :is-active="stop.stop === selectedStop" class=""
          @click="store.dispatch('SET_SELECTED_STOP', stop.stop)">
          {{ stop.stop }}
        </ListItem>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "../store";
import { BusStop } from "../store/state";
import ListItem from "./ListItem.vue";

const store = useStore();

const selectedStop = computed(() => store.state.selectedStop)

type BusStopsListProps = {
  stops: BusStop[];
}

defineProps<BusStopsListProps>();

</script>

<style scoped>
.h-0 {
  height: 0;
}
</style>
