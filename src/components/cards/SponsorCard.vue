<template>
  <v-card flat color="grey" variant="outlined" class="px-7 py-5 bg-white">
    <h4 class="title title-font text-h6 mb-4 text-grey-90 font-weight-bold">{{ props.title }}</h4>
    <template v-if="computedData?.data?.target?.fields?.cardBody">
      <template v-for="content in computedData.data.target.fields.cardBody?.content">
        <template v-if="content.data.target?.fields">
          <a target="_blank" :href="props.link">
            <v-img width="300" height="auto" :src="content.data.target.fields?.file?.url" class="px-3" />
          </a>
        </template>
      </template>

    </template>
  </v-card>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: String,
  variant: String,
  bg: {
    type: String,
    default: "white"
  },
  cardBody: Object,
  link: String
});

const computedData = computed(() => props.cardBody.content?.[0]?.content?.filter((_content) => _content?.nodeType === 'embedded-entry-inline')?.[0])
</script>


<style scoped>
.title {
  font-size: 22px;

  @media screen and (max-width: 600px) {
    margin-bottom: 46px;
    font-size: 18px;
  }
}
</style>