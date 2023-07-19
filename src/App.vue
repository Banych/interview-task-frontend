<template>
    <div class="container py-7 px-6 d-flex flex-column gap-5">
        <div class="py-1 d-flex align-items-center">
            <h3>Timetable</h3>
        </div>
        <NavBar />
        <RouterView></RouterView>
    </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";

import NavBar from '@/components/NavBar.vue';
</script>