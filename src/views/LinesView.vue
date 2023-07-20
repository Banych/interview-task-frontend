<template>
  <div class="d-flex flex-column gap-5 flex-grow-1">
    <BusLineSelect />
    <div class="d-flex flex-grow-1 gap-3">
      <BusLineViewer />
      <BusStopViewer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "@/store";
import BusLineSelect from "../components/BusLineSelect.vue";
import BusLineViewer from "../components/BusLineViewer.vue";
import BusStopViewer from "../components/BusStopViewer.vue";

const store = useStore();

// onMounted(() => {
// })
</script>