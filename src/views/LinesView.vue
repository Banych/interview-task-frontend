<template>
  <div class="d-flex flex-column gap-5 flex-grow-1">
    <BusLineSelect />
    <div class="d-flex flex-grow-1 gap-3">
      <BusLineViewer class="mw-50" />
      <BusStopViewer class="mw-50" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BusLineSelect from "../components/BusLineSelect.vue";
import BusLineViewer from "../components/BusLineViewer.vue";
import BusStopViewer from "../components/BusStopViewer.vue";
</script>

<style scoped>
.mw-50 {
  max-width: calc(50% - 1rem);
}
</style>