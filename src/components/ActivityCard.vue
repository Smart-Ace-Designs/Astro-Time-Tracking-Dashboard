<script setup lang="ts">
import type { TimeEntry, Timeframe } from "@/models/timeentry.model";
import { computed } from "vue";

const props = defineProps<{
  data: TimeEntry;
  timeframe: "daily" | "weekly" | "monthly";
}>();

const currentData = computed(() => {
  const timeframe = props.timeframe || "weekly";
  return (props.data.timeframes as { [key: string]: Timeframe })[timeframe];
});
</script>

<template>
  <article class="relative h-60 overflow-clip rounded-2xl">
    <div :class="['h-1/2 rounded-t-2xl', data.color]">
      <img
        :src="data.image"
        :alt="data.title"
        class="absolute -top-3 right-3"
      />
    </div>
    <div
      class="absolute bottom-0 h-[85%] w-full rounded-2xl bg-secondaryDarkBlue"
    >
      <div class="flex items-center justify-between p-8">
        <h2 class="font-medium">{{ data.title }}</h2>
        <img
          src="/icon-ellipsis.svg"
          :alt="`${timeframe.toLocaleUpperCase} Details`"
          class="hover:cursor-pointer"
        />
      </div>
      <div class="pl-8">
        <p class="text-5xl text-white">{{ currentData.current }}hrs</p>
        <p class="text-white">Previous - {{ currentData.previous }}hrs</p>
      </div>
    </div>
  </article>
</template>
