import { defineStore } from "pinia";

const STATUS = {
  READY: 1,
  WORK: 2,
  BREAK: 3,
};

export const useTimerStore = defineStore({
  id: "timer",
  state: () => ({
    STATUS,
    status: STATUS.READY,
    breakSeconds: 60 * 5,
    pomoSeconds: 60 * 25,
    secondsLeft: 60 * 25,
    intervalHandle: null,
    isAuto: false,
  }),
  getters: {
    displaySecondsLeft: (state) => `${state.secondsLeft % 60}`.padStart(2, "0"),
    displayMinutesLeft: (state) => `${Math.floor(state.secondsLeft / 60)}`.padStart(2, "0"),
  },
  actions: {
    tick() {
      if (this.status === STATUS.READY) {
        return;
      }

      if (this.secondsLeft === 0) {
        if (this.status === STATUS.WORK) {
          this.status = STATUS.BREAK;
          this.secondsLeft = this.breakSeconds;
        } else {
          this.status = this.isAuto ? STATUS.WORK : STATUS.READY;
          this.secondsLeft = this.pomoSeconds;
        }
      } else {
        this.secondsLeft--;
      }
    },
    next() {
      this.secondsLeft = this.pomoSeconds;
      this.status = {
        [STATUS.READY]: STATUS.WORK,
        [STATUS.WORK]: STATUS.READY,
        [STATUS.BREAK]: STATUS.READY,
      }[this.status];
    },
    reset() {
      this.secondsLeft = this.pomoSeconds;
      this.status = STATUS.READY;
    },
    toggleAuto() {
      this.isAuto = !this.isAuto;
    },
  },
});
