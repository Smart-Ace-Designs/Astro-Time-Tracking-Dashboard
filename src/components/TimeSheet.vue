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
  <main class="lg:flex lg:min-h-screen lg:items-center lg:justify-center">
    <div
      class="mx-auto grid gap-4 px-20 py-20 md:grid-cols-2 md:gap-7 md:px-32 lg:max-w-[1400px] lg:grid-cols-4 lg:px-36"
    >
      <section
        class="bg-theme-dark-blue min-w-64 rounded-2xl md:col-span-2 md:row-span-1 md:min-w-0 lg:col-span-1 lg:row-span-2"
      >
        <div
          class="bg-theme-blue flex flex-row items-center gap-4 rounded-2xl p-7 lg:flex-col lg:items-start lg:p-8 lg:pb-12"
        >
          <img
            src="image-jeremy.png"
            alt="Avatar"
            width="80"
            class="rounded-full border-2 border-white lg:mb-9"
          />
          <div class="flex flex-col">
            <h1>
              <span class="text-theme-pale-blue text-base">Report for</span>
            </h1>
            <div>
              <span
                class="text-2xl font-light text-white lg:my-3 lg:inline-block lg:text-[2.5rem]"
                >Jeremy</span
              >
              <span class="text-2xl font-light text-white lg:text-[2.5rem]">
                Robson</span
              >
            </div>
          </div>
        </div>
        <nav>
          <ul
            class="flex flex-row justify-between gap-y-3 px-8 py-6 lg:flex-col lg:py-8"
          >
            <li
              id="daily"
              class="text-theme-pale-blue hover:cursor-pointer hover:text-white"
              :class="{ '!text-white': timeframe === 'daily' }"
              @click="timeframe = 'daily'"
            >
              Daily
            </li>
            <li
              id="weekly"
              class="text-theme-pale-blue hover:cursor-pointer hover:text-white"
              :class="{ '!text-white': timeframe === 'weekly' }"
              @click="timeframe = 'weekly'"
            >
              Weekly
            </li>
            <li
              id="monthly"
              class="text-theme-pale-blue hover:cursor-pointer hover:text-white"
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
  </main>
</template>
