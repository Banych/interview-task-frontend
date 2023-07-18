<template>
    <div class="container">
        <HeaderNav />
        <RouterView></RouterView>
    </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";

import HeaderNav from '@/components/HeaderNav.vue';
</script>