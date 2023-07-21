<template>
    <div class="container py-7 px-6 d-flex flex-column gap-5 h-100">
        <div class="py-1 d-flex align-items-center">
            <h3>Timetable</h3>
        </div>
        <NavBar />
        <RouterView></RouterView>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";

import NavBar from '@/components/NavBar.vue';
import { useStore } from "./store";

const store = useStore();

onMounted(() => {
    store.dispatch('LOAD_STOPS')
})
</script>