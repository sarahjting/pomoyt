<script setup lang="ts">
import { useTimerStore } from "@/stores/timer";
import {computed} from "vue";

const timer = useTimerStore();

if (timer.intervalHandle) {
  clearInterval(timer.intervalHandle);
  timer.intervalHandle = null;
}

timer.intervalHandle = setInterval(() => timer.tick(), 1000);

const isGreen = computed(() => timer.status === timer.STATUS.WORK);
const isClickable = computed(() => timer.status === timer.STATUS.READY);

const click = () => {
  if (isClickable) {
    timer.next();
  }
};
</script>

<template>
  <div class="pomo-timer">
    <span :class="{ green: isGreen, clickable: isClickable }" @click.prevent="click">
      {{ timer.displayMinutesLeft }}{{ timer.displaySecondsLeft }}
    </span>
  </div>
</template>

<style scoped>
.pomo-timer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pomo-timer span {
  font-weight: 500;
  font-size: 10rem;
  top: -10px;
  text-align: center;
  color: hsla(0, 0%, 20%, 1);
}

.pomo-timer span.clickable {
  cursor: pointer;
}

.pomo-timer span.clickable:hover {
  opacity: 0.5;
}

.pomo-timer span.green {
  color: var(--color-accent);
  transition: 0.4s;
}
</style>
