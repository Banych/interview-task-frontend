<template>
  <div class="d-flex flex-column flex-grow-1">
    <ListItem :is-sort="true" @click="sort = sort === 'asc' ? 'desc' : 'asc'">
      <div class="py-2 fw-semibold sort-header fs-075 lh-1">
        Bus Stops
        <SortIcon />
      </div>
    </ListItem>
    <div class="d-flex flex-column flex-grow-1 overflow-auto">
      <div class="h-0">
        <div class="d-flex flex-column">
          <ListItem v-for="stop in sortedStops" :key="stop.stop"
            :is-active="stop.stop === selectedStop?.stop" class=""
            @click="store.dispatch('SET_SELECTED_STOP', stop)">
            {{ stop.stop }}
          </ListItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" generic="T">
import { computed, ref } from "vue";
import { useStore } from "../store";
import { GetStopsByLine } from "../store/getters";
import ListItem from "./ListItem.vue";
import { SortType } from "../types/SortType";
import SortIcon from './SortIcon.vue'

type BusStopsListProps = {
  stops: GetStopsByLine[];
}

const props = defineProps<BusStopsListProps>();

const sort = ref<SortType>('asc');
const store = useStore();

const selectedStop = computed(() => store.state.selectedStop)
const sortedStops = computed(() => {
  const sorted = [ ...props.stops ].sort((a, b) => {
    if (a.stop < b.stop) {
      return -1;
    }
    if (a.stop > b.stop) {
      return 1;
    }
    return 0;
  });
  return sort.value === 'desc' ? sorted.reverse() : sorted;
})
</script>

<style scoped lang="scss">
.h-0 {
  height: 0;
}

.sort-header {
  & svg {
    padding: 4px 5.5px;
    display: inline-block;
    height: 16px;
    width: 16px;
    fill: #9A9DA4;
  }

  &:hover svg {
    fill: #81848a;
  }
}
</style>
