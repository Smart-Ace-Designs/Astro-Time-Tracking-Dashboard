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

const previousTimeframeLabel = computed(() => {
  switch (props.timeframe) {
    case "daily":
      return "Yesterday";
    case "weekly":
      return "Last Week";
    case "monthly":
      return "Last Month";
  }
});
</script>

<template>
  <article class="relative h-40 overflow-clip rounded-2xl md:h-60">
    <div :class="['h-1/2 rounded-t-2xl', data.color]">
      <img
        :src="data.image"
        :alt="data.title"
        class="absolute -top-3 right-3"
      />
    </div>
    <div
      class="hover:bg-secondaryHoverBlue absolute bottom-0 h-[85%] w-full rounded-2xl bg-secondaryDarkBlue"
    >
      <div
        class="flex items-center justify-between px-8 pb-2 pt-8 lg:px-8 lg:pb-6 lg:pt-8"
      >
        <h2 class="font-medium">{{ data.title }}</h2>
        <img
          src="/icon-ellipsis.svg"
          :alt="`${timeframe.toLocaleUpperCase} Details`"
          class="hover:cursor-pointer"
        />
      </div>
      <div
        class="flex items-center justify-between px-8 md:flex-col md:items-start"
      >
        <p class="text-3xl text-white md:text-5xl lg:mb-2">
          {{ currentData.current }}hrs
        </p>
        <p class="text-base text-secondaryPaleBlue">
          {{ previousTimeframeLabel }} - {{ currentData.previous }}hrs
        </p>
      </div>
    </div>
  </article>
</template>
