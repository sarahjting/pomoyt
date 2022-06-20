<script setup lang="ts">
import YouTube from "vue3-youtube";
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { usePlaylistStore } from "@/stores/playlist";
import {nextTick} from "vue";

const STATUS = {
  LOADING: 0,
  PAUSED: 1,
  PLAYING: 2,
};

const playlist = usePlaylistStore();
const { currentMusicId, isPaused } = storeToRefs(playlist);
const youtubeEl = ref(null);
const status = ref(STATUS.LOADING);

const onReady = (e) => {
  status.value = isPaused.value ? STATUS.PLAYING : STATUS.PAUSED;
  e.target.addEventListener("onStateChange", (e) => {
    if (e.data === 0) {
      playlist.nextVideo();
    }
  });
};

watch([isPaused, currentMusicId], () => {
  // next tick is required to wait for the new ID to be loaded into the youtube component
  // if we don't wait, the youtube component will immediately start itself after being paused
  nextTick().then(() => {
    if (isPaused.value || !currentMusicId) {
      youtubeEl.value.pauseVideo();
    } else {
      youtubeEl.value.playVideo();
    }
  });
});
</script>

<template>
  <div class="pomo-theatre">
    <YouTube :src="currentMusicId" @ready="onReady" ref="youtubeEl" width="100%" height="200" />
  </div>
</template>

<style scoped>
.pomo-theatre {
  position: relative;
  overflow: hidden;
  height: 200px;
  margin: 0 10px 10px 10px;
}

.pomo-theatre::before {
  content: "";
  width: 100vw;
  height: 100vh;
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1000;
}

iframe {
  width: 100%;
  height: 200px;
}
</style>
