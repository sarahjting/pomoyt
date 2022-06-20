<script setup lang="ts">
import PomoConfigPlaylist from "@/components/PomoConfigPlaylist.vue";
import IconWork from "@/components/icons/IconWork.vue";
import IconBreak from "@/components/icons/IconBreak.vue";
import IconAlarmOn from "@/components/icons/IconAlarmOn.vue";
import { usePlaylistStore } from "@/stores/playlist";
import { storeToRefs } from "pinia";

const playlist = usePlaylistStore();
const { workPlaylist, workPlaylistIndex, breakPlaylist, breakPlaylistIndex, alarmPlaylist } = storeToRefs(playlist);
</script>
<template>
  <div class="pomo-config">
    <PomoConfigPlaylist v-model="workPlaylist" :selected="workPlaylistIndex" @select="playlist.setWorkPlaylistIndex">
      <template #icon><IconWork></IconWork></template>
      <template #title>Work playlist</template>
    </PomoConfigPlaylist>
    <PomoConfigPlaylist v-model="breakPlaylist" :selected="breakPlaylistIndex" @select="playlist.setBreakPlaylistIndex">
      <template #icon><IconBreak></IconBreak></template>
      <template #title>Break playlist</template>
    </PomoConfigPlaylist>
    <PomoConfigPlaylist v-model="alarmPlaylist">
      <template #icon><IconAlarmOn></IconAlarmOn></template>
      <template #title>Alarm</template>
    </PomoConfigPlaylist>
  </div>
</template>

<style scoped>
.pomo-config {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.pomo-config > * {
  width: 100%;
  padding: 0 10px;
}

@media (min-width: 1024px) {
  .pomo-config {
    flex-direction: row;
  }
  .pomo-config > * {
    flex: 1;
  }
}
</style>
