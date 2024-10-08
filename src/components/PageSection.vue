<template>
  <div>
    <div class="container narrow">
      <a class="anchor" :id="'anchorName'"></a>
      <!-- <div class="bar"></div> -->
      <h2>{{ title }}</h2>
      <RichTextRenderer
        :document="body"
        :nodeRenderers="renderNodes()"
        :markRenderers="renderMarks()" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Entry } from 'contentful';
import type { PageSection } from 'Content';
import type { PropType } from 'vue';
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import { renderNodes, renderMarks } from 'Content/renderContent';

const props = defineProps({
  content: Object as PropType<Entry<PageSection>>
})

const { title, body } = props.content.fields

</script>

<style scoped>
a.anchor {
  display: block;
  position: relative;
  top: -15vh;
  visibility: hidden;
}
h2 {
  margin-top: 0 !important;
}
h2::before {
  display: block;
  content: " ";
  margin-top: -50px;
  height: 50px;
  visibility: hidden;
  pointer-events: none;
}
@media screen and (max-width: 1280px) {
  h2::before {
    margin-top: -80px;
    height: 80px;
  }
}
.container {
  padding-block: 2rem;
  padding-inline: 1rem;
}
.container > :deep(*:last-child) {
  margin-bottom: 0;
}
.container :deep(.section-row) {
  padding: 1rem;
  margin-inline: -1rem;
}
</style>
