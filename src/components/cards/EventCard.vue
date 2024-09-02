<template>
  <h3 v-if="props.title" class="event-title text-secondary mb-5">{{ props.title }}</h3>

  <div v-if="props.datasets" class="card-wrapper">
    <v-card v-for="(event) in props.datasets.data" color="surface-bright" class="py-1 card-border" elevation="0"
      :to="props.href ?? ''">
      <v-card-item>
        <div class="d-flex justify-between align-baseline">
          <h4 class="w-100 text-capitalize"> {{ event.name }}</h4>
          <h5 v-if="event?.date" class="date-time"> {{ event.date }}</h5>
        </div>
      </v-card-item>

      <v-card-text class="pt-4 card-text-base">
        <div class="d-flex flex-column ga-3">
          <p v-if="event?.title || event?.sub_title" :class="event?.sub_title ? 'card-subtitle' : 'card-title'">
            {{ event?.title || event?.sub_title }}
          </p>
          <p class="text-grey-90">
            {{ event.description }}
          </p>

          <v-list v-if="event.key_points" lines="one" bgColor="transparent">
            <v-list-item class="text-grey-90 pa-0" v-for="(keyPoint) in event?.key_points" slim density="compact">
              {{ keyPoint }}
            </v-list-item>
          </v-list>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps({
  title: String,
  variant: String,
  isEventPage: [Boolean, undefined],
  bg: {
    type: String,
    default: "white"
  },
  datasets: Object,
  href: String
});

</script>

<style scoped>
.card-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 8px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
}

.card-border {
  border: 1px solid rgb(var(--v-theme-surface-dark)) !important;
}

.date-time {
  font-family: var(--v-font-body);
  font-size: 14px;
  word-spacing: -4px;
  width: max-content;
  flex-wrap: nowrap;
  display: flex;
  white-space: nowrap;
}

.event-title {
  font-size: 22px;

  @media screen and (max-width: 600px) {
    margin-bottom: 46px;
    font-size: 18px;
  }
}

.card-title {
  font-size: 15px;
  font-weight: 600;
  font-family: var(--v-font-body);
  color: rgb(var(--v-theme-grey-70));

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
}

.card-subtitle {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.1;
  font-family: var(--v-font-body);
  color: rgb(var(--v-theme-grey-70));
}
</style>
