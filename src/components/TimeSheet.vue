<script setup lang="ts">
import ActivityCard from "@/components/ActivityCard.vue";
import type { TimeEntry } from "@/models/timeentry.model";
import { ref } from "vue";

defineProps<{
  activities: TimeEntry[];
}>();

const timeframe = ref<"daily" | "weekly" | "monthly">("weekly");
</script>

<template>
  <div
    class="item mx-auto grid max-w-[1400px] gap-4 p-36 md:grid-cols-3 md:gap-7 lg:grid-cols-4"
  >
    <section
      class="rounded-2xl bg-secondaryDarkBlue md:row-span-3 lg:row-span-2"
    >
      <div class="rounded-2xl bg-primaryBlue p-8 pb-20">
        <img
          src="image-jeremy.png"
          alt="Avatar"
          width="80"
          class="mb-9 rounded-full border-2 border-white"
        />
        <h1>
          <span class="text-base text-secondaryPaleBlue">Report for</span>
          <span class="mb-3 mt-3 block text-[2.5rem] font-light text-white"
            >Jeremy</span
          >
          <span class="text-[2.5rem] font-light text-white"> Robson</span>
        </h1>
      </div>
      <nav>
        <ul class="flex flex-row justify-between gap-y-3 p-8 md:flex-col">
          <li
            id="daily"
            class="text-secondaryPaleBlue hover:cursor-pointer"
            :class="{ '!text-white': timeframe === 'daily' }"
            @click="timeframe = 'daily'"
          >
            Daily
          </li>
          <li
            id="weekly"
            class="text-secondaryPaleBlue hover:cursor-pointer"
            :class="{ '!text-white': timeframe === 'weekly' }"
            @click="timeframe = 'weekly'"
          >
            Weekly
          </li>
          <li
            id="monthly"
            class="text-secondaryPaleBlue hover:cursor-pointer"
            :class="{ '!text-white': timeframe === 'monthly' }"
            @click="timeframe = 'monthly'"
          >
            Monthly
          </li>
        </ul>
      </nav>
    </section>

    <ActivityCard
      client:load
      :data="activity"
      :timeframe="timeframe"
      v-for="activity in activities"
      :key="activity.title"
    />
  </div>
</template>
