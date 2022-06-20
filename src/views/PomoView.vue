<script setup lang="ts">
import PomoTimer from "@/components/PomoTimer.vue";
import PomoTheatre from "@/components/PomoTheatre.vue";
import PomoControl from "@/components/PomoControl.vue";
import PomoConfig from "@/components/PomoConfig.vue";
</script>

<template>
  <div class="pomo">
    <PomoTimer />
    <PomoControl />
    <PomoTheatre />
    <PomoConfig />
  </div>
</template>

<style scoped>
.pomo {
  max-width: 500px;
  margin: 0 auto;
  font-weight: normal;
  padding-top: 15vh;
  display: flex;
  flex-direction: column;
}
</style>
