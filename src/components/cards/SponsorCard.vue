<template>
  <v-card flat color="grey-10" variant="outlined" class="px-4 py-3" to="/sponsor">
    <h4 class="title text-h6 mb-4 text-grey-90 font-weight-bold">{{ props.title }}</h4>
    <template v-if="props.cardBody">
      <RichTextRenderer :document="props.cardBody" :nodeRenderers="renderNodes()" />
    </template>
  </v-card>
</template>


<script setup>
import { BLOCKS } from '@contentful/rich-text-types';
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import { get } from 'lodash-es';
import { h } from 'vue';

const props = defineProps({
  title: String,
  variant: String,
  bg: {
    type: String,
    default: "white"
  },
  cardBody: Object
});

const fullWidth = { class: "w-100" }

function getCardBorderColor(key) {
  if (key.match(/gold/gi)) {
    return 'gold'
  } else if (key.match(/silver/gi)) {
    return 'grey'
  } else if (key.match(/platinum/gi)) {
    return 'gold'
  }
}
function renderNodes() {
  const wrapperWidth = props.numOfCards ? { style: `display: grid; grid-template-columns: repeat(${props.numOfCards}, 1fr); gap: 12px;` } : { class: 'w-100 mb-2' }

  return {
    [BLOCKS.PARAGRAPH]: (node, key, next) => h("div", wrapperWidth, next(node.content, key, next)),
    [BLOCKS.UL_LIST]: (node, key, next) => h("div", { class: "list" }, next(node.content, key, next)),
    [BLOCKS.LIST_ITEM]: (node, key, next) => h("div", { class: "listItem" }, next(node.content, key, next)),
    [BLOCKS.HEADING_2]: (node, key, next) =>
      h("h2", fullWidth, next(node.content, key, next)),
    [BLOCKS.HEADING_3]: (node, key, next) =>
      h("h3", { class: "text-secondary", style: "font-size: 22px; word-spacing: -10px;" }, next(node.content, key, next)),
    [BLOCKS.HEADING_4]: (node, key, next) =>
      h("h4", fullWidth, next(node.content, key, next)),
    [BLOCKS.HEADING_5]: (node, key, next) =>
      h("h5", { class: 'w-100 text-h6 font-weight-bold text-secondary' }, next(node.content, key, next)),
    [BLOCKS.HEADING_6]: (node, key, next) =>
      h("h6", { class: "text-subtitle-1 ont-weight-bold mt-2" }, next(node.content, key, next)),
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const target = node.data.target;
      const file = target.fields.file

      return file.contentType.includes("image")
        ? h("img", { src: file.url, ...(get(file, "details.image") ?? {}) })
        : undefined;
    },
  };
}
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