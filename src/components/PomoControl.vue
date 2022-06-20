<script setup lang="ts">
import { useTimerStore } from "@/stores/timer";
import { usePlaylistStore } from "@/stores/playlist";
import IconMusicOff from "@/components/icons/IconMusicOff.vue";
import IconAlarmOff from "@/components/icons/IconAlarmOff.vue";
import IconMusicOn from "@/components/icons/IconMusicOn.vue";
import IconReset from "@/components/icons/IconReset.vue";
import IconAuto from "@/components/icons/IconAuto.vue";
import { storeToRefs } from "pinia";

const timer = useTimerStore();
const playlist = usePlaylistStore();
</script>

<template>
  <div class="pomo-control">
    <a href="#" @click="timer.reset()">
      <IconReset />
    </a>
    <a href="#" @click="timer.toggleAuto()" :class="{ green: timer.isAuto }">
      <IconAuto />
    </a>
    <a href="#">
      <IconAlarmOff />
    </a>
    <a href="#" @click="playlist.toggleMute()">
      <IconMusicOff v-if="playlist.isMuted" />
      <IconMusicOn v-else />
    </a>
  </div>
</template>

<style scoped>
.pomo-control {
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
}

.pomo-control a {
  display: flex;
  place-items: center;
  place-content: center;
  width: 50px;
  height: 50px;

  border: 1px solid var(--color-border);
  background: var(--color-background);
  color: var(--color-text);

  margin-right: 1rem;
  border-radius: 0.5rem;
}

.pomo-control a.green {
  background-color: var(--color-accent);
}
</style>
