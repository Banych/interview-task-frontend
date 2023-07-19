<template>
  <ul class="nav nav-underline  px-5">
    <li class="nav-item">
      <router-link class="nav-link px-5 py-4" active-class="active"
        exact-active-class="active" to="/">
        Bus Lines
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link px-5 py-4" active-class="active"
        exact-active-class="active" to="/stops">
        Stops
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

</script>

<style scoped lang="scss">
.nav-underline .nav-link {
  position: relative;

  &::after {
    content: '';
    transition: all 200ms ease-in-out;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0;
    background: #1952E1;
    height: 2px;
    opacity: 0;
  }
}

.nav-underline .nav-link.active {
  color: #33373C;

  &::after {
    content: '';
    opacity: 1;
  }
}
</style>