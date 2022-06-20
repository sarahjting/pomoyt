import { defineStore } from "pinia";
import { useTimerStore } from "@/stores/timer";

export const usePlaylistStore = defineStore({
  id: "playlist",
  state: () => ({
    workPlaylist: ["o4vx-9goNho", "yEPUhesWICA", "1dMadjMQFN8"],
    workPlaylistIndex: 0,
    breakPlaylist: ["ipf7ifVSeDU"],
    breakPlaylistIndex: 0,
    alarmPlaylist: ["0_CDMstFg7M&t=-10"],
    isMuted: false,
  }),
  getters: {
    isPaused(state) {
      const timer = useTimerStore();
      return state.isMuted || timer.status === timer.STATUS.READY;
    },
    currentMusicId(state) {
      const timer = useTimerStore();
      if (timer.status === timer.STATUS.WORK) {
        return state.workPlaylist[state.workPlaylistIndex];
      } else if (timer.status === timer.STATUS.BREAK) {
        return state.breakPlaylist[state.breakPlaylistIndex];
      }

      return null;
    },
    currentAlarmId() {
      return null;
    },
  },
  actions: {
    toggleMute() {
      this.isMuted = !this.isMuted;
    },
    nextVideo() {
      const timer = useTimerStore();
      if (timer.status === timer.STATUS.WORK) {
        if (this.workPlaylistIndex === this.workPlaylist.length - 1) {
          this.workPlaylistIndex = 0;
        } else {
          this.workPlaylistIndex++;
        }
      } else if (timer.status === timer.STATUS.BREAK) {
        if (this.breakPlaylistIndex === this.breakPlaylist.length - 1) {
          this.breakPlaylistIndex = 0;
        } else {
          this.breakPlaylistIndex++;
        }
      }
    },
    setWorkPlaylistIndex(index) {
      this.workPlaylistIndex = index;
    },
    setBreakPlaylistIndex(index) {
      this.breakPlaylistIndex = index;
    },
  },
});
