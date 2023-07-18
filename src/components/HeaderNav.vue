<template>
  <ul class="nav nav-underline">
    <li class="nav-item">
      <RouterLink class="nav-link" active-class="active"
        exact-active-class="active" to="/">
        Lines
      </RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink class=" px-3 py-2" active-class="active"
        exact-active-class="active" to="/stops">
        Stops
      </RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

</script>

<style scoped>
.nav-underline .nav-link {
  position: relative;
}

.nav-underline a.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #1952E1;
}
</style>