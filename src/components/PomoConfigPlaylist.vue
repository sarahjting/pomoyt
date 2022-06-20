<script setup lang="ts">
import IconRemove from "@/components/icons/IconRemove.vue";
import { reactive } from "vue";

// eslint-disable-next-line vue/no-setup-props-destructure
const { modelValue } = defineProps({
  modelValue: Array,
  selected: Number,
});

const emit = defineEmits(["update:modelValue", "select"]);
const form = reactive({
  itemCode: "",
});

const removeItem = (key: number) => {
  const newValue = modelValue as Array<string>;
  newValue.splice(key, 1);
  emit("update:modelValue", newValue);
};

const addItem = () => {
  if (form.itemCode) {
    const newValue = modelValue as Array<string>;
    emit("update:modelValue", [...newValue, form.itemCode]);
  }
  form.itemCode = "";
};
</script>

<template>
  <div class="playlist">
    <div class="playlist-header">
      <i><slot name="icon"></slot></i>
      <span><slot name="title"></slot></span>
    </div>
    <div class="playlist-content">
      <div v-for="(item, key) in modelValue" :key="key" :class="{'playlist-item': true, active: key === selected}" @click="emit('select', key)">
        {{ item }}
        <a href="#" class="playlist-item-remove" @click.prevent="removeItem(key)">
          <IconRemove></IconRemove>
        </a>
      </div>
      <form @submit.prevent="addItem">
        <input type="text" v-model="form.itemCode" />
      </form>
    </div>
  </div>
</template>

<style scoped>
.playlist {
  margin-top: 2rem;
}

.playlist-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  margin-bottom: 0.25rem;

  color: var(--color-text);
  border: 1px solid var(--color-border);
  background: var(--color-background);

  border-radius: 8px;
}

.playlist-header i {
  margin-right: 0.25rem;
}

.playlist-content {
  flex: 1;
  flex-direction: column;
}

.playlist-item {
  cursor: pointer;
  border: 1px #333 solid;
  padding: 0.125rem 0.125rem 0.125rem 0.5rem;
  border-radius: 0.25rem;
  margin-bottom: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.playlist-item-remove {
  cursor: pointer;
  color: hsla(0, 100%, 37%, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.playlist-item-remove:hover {
  color: hsl(0, 85%, 50%);
}

.playlist-item.active {
  border-color: hsla(var(--color-accent), 0.5);
  color: var(--color-accent);
}

input {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 0.15rem;
  width: 100%;
  height: 1.75rem;
  color: var(--color-text);
}

input:focus {
  outline: none;
}
</style>
