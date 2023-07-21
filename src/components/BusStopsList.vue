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
            :is-active="stop.stop === selectedStop"
            @click="handleClickItem(stop)">
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
import ListItem from "./ListItem.vue";
import { SortType } from "../types/SortType";
import SortIcon from './SortIcon.vue'
import { Getters } from "../store/getters";

type BusStopsListProps = {
  stops: ReturnType<ReturnType<Getters[ 'getStopsByLine' ]>>;
  isSelectable?: boolean;
}

type BusStopsListEvents = {
  (event: 'clickItem', item: BusStopsListProps[ 'stops' ][ number ]): void;
}

const props = withDefaults(defineProps<BusStopsListProps>(), {
  isSelectable: true,
});

const emit = defineEmits<BusStopsListEvents>();

const sort = ref<SortType>('asc');
const store = useStore();

const selectedStop = computed(() => store.state.selectedStop)
const sortedStops = computed(() =>
  [ ...props.stops ].sort((a, b) =>
    sort.value === 'asc' ? a.order - b.order : b.order - a.order
  )
)

const handleClickItem = (item: BusStopsListProps[ 'stops' ][ number ]) => {
  props.isSelectable && emit('clickItem', item);
}
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
