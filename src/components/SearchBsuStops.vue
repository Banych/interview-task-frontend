<template>
  <MyCard :is-add-content-padding="false" class="flex-grow-1">
    <input type="text" v-model="search" />
    <BusStopsList :stops="filteredStopNames" />
  </MyCard>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import BusStopsList from "./BusStopsList.vue";
import MyCard from "./MyCard.vue";
import { useStore } from "../store";

const store = useStore();

const search = ref<string>('');

const filteredStopNames = computed(() => store.getters.getFilteredBusStopNames(search.value));
</script>