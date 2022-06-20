<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

a {
  text-decoration: none;
  color: hsla(0, 0%, 15%, 1);
}

@media (hover: hover) {
  a:hover {
    opacity: 0.5;
  }
}
</style>
