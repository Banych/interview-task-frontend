<template>
  <MyCard :is-add-content-padding="false" class="flex-grow-1">
    <div class="d-flex flex-column flex-grow-1">
      <div class="group p-2">
        <input class="form-control form-control-sm" type="text" v-model="search"
          placeholder="Search..." />
        <div class="d-flex align-items-center icon pe-3">
          <SearchIcon />
        </div>
      </div>
      <BusStopsList :stops="filteredStopNames" default-sort="desc" />
    </div>
  </MyCard>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import BusStopsList from "./BusStopsList.vue";
import MyCard from "./MyCard.vue";
import { useStore } from "../store";
import SearchIcon from "./SearchIcon.vue";

const store = useStore();

const search = ref<string>('');

const filteredStopNames = computed(() => store.getters.getFilteredBusStopNames(search.value));
</script>

<style scoped lang="scss">
.group {
  position: relative;
  z-index: 10;
  width: 288px;

  & input:focus+.icon svg {
    fill: #1952E1;
  }

  & .icon {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;

    & svg {
      fill: #9A9DA4;
      width: 16px;
      height: 16px;
      z-index: 0;
      transition: fill 150ms ease-in;
    }
  }
}
</style>