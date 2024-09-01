<template>
  <template v-if="computedData.data.target.fields">
    <v-responsive :class="['content-wrapper', props.hasHeaderMargin ? '' : 'py-4']">
      <div v-if="props.isResponsiveContainer"
        :class="[props.hasHeaderMargin ? 'mb-3' : '', 'd-flex ga-3 align-baseline']">
        <h2 v-if="computedData.data.target.fields?.showTitle"
          :class="[props.offsetColor ? 'text-white' : 'text-secondary']">
          {{ computedData.data.target.fields.shownTitle }}
        </h2>
        <slot name="subTitle" />
      </div>
      <slot name="header" />
      <RichTextRenderer :document="computedData.data.target.fields.body" :nodeRenderers="renderNodes()" />
    </v-responsive>

  </template>
</template>

<script setup>
import { EventCard, SponsorCard, TicketCard } from "@/components";
import { isValidTicket } from "@/utils";
import { BLOCKS } from "@contentful/rich-text-types";
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import { format } from "date-fns";
import { get } from "lodash-es";
import { computed, h } from "vue";

const props = defineProps({
  data: {
    type: [Object, undefined],
    default: {}
  },
  numOfCards: [Number, undefined],
  activeView: {
    type: String,
    default: "in_person"
  },
  offsetColor: [Boolean, undefined],
  hasHeaderMargin: {
    type: Boolean,
    default: true
  },
  isResponsiveContainer: {
    type: Boolean,
    default: true
  },
  hasDescription: Boolean
});

const fullWidth = { class: "w-100" }
const computedData = computed(() => props?.data)
const hasActionBtn = computed(() => !!activeView)

function renderTicket(fields) {
  const {
    href,
    validFrom,
    validUntil,
    ticketInfo = {}
  } = fields;

  if (!validFrom || !validUntil) return undefined

  const isValid = isValidTicket(validFrom, validUntil)
  const { name, category, price, discountedPrice, highlight, features } = ticketInfo;

  return isValid ? h(
    TicketCard,
    {
      href,
      // IMPORTANT: must pass destructured object to avoid warning
      name, category, price, discountedPrice, highlight, features,
      validUntil: validUntil ? format(new Date(validUntil), "do MMM") : undefined,
      hasDescription: props.hasDescription
    },
  ) : undefined;
}



function renderEvents(fields) {
  if (props.activeView !== fields.key) return ""
  return h(
    EventCard,
    {
      title: fields.title,
      datasets: fields.datasets,
      href: '/event'
    },
  )
}

function renderSponsor(fields) {
  const {
    cardTitle,
    cardBody
  } = fields;
  return h(
    SponsorCard,
    {
      title: cardTitle,
      cardBody
    },
  )
}

function getListStyle(isSponsor, isSponsorPageSection) {
  if (!isSponsor && !isSponsorPageSection) return ({ class: 'list' })

  return { class: `list${isSponsor ? " box ga-5 mt-0 mb-5" : ' cardGroup text-dark'}` }
}

function getListItemStyle(isSponsorPage, isSponsorPageSection) {
  if (!isSponsorPage && !isSponsorPageSection) return ({ class: 'listItem' })
  return { class: `listItem${isSponsorPage ? " textOnly" : ' noBox text-dark'}` }
}

function getH3Style(isSponsorPage) {
  if (isSponsorPage) {
    return ({ class: "text-h6 mb-3", style: "word-spacing: 0;" })
  }
  return ({ class: "text-secondary", style: "font-size: 22px; word-spacing: -10px;" })
}

function getH4Style(isSponsorPage, isTicketIntro) {
  if (isSponsorPage) return ({ class: "text-h6 text-dark mb-5" });
  return ({ class: isTicketIntro ? 'mb-2' : 'w-100' })
}


function getH5Style(sectionKey) {
  if (sectionKey.endsWith('_package')) {
    return { class: 'w-100 text-h5 font-weight-medium mt-4' }
  }

  return fullWidth
}

function getH6Style(sectionKey) {
  if (sectionKey === 'sponsor_2025') {
    return { class: 'w-100 text-h6 font-weight-bold' }
  } else if (sectionKey.endsWith('_package')) {
    return { class: 'w-100 text-h6 font-weight-normal mb-n2' }
  } else if (sectionKey.startsWith('sponsor_page_intro_section')) {
    return { class: 'w-100 text-h6 mt-2' }
  }

  return { class: 'w-100 text-h6 font-weight-bold text-secondary' }
}


function getParagraphStyle(sectionKey) {
  if (sectionKey.startsWith("sponsor_") && sectionKey.endsWith("_package")) {
    return undefined
  } else if (sectionKey?.startsWith('ticket_section_2025') || sectionKey?.endsWith('tickets_2025')) {
    return { class: sectionKey?.startsWith('ticket_section_2025') ? 'slider-group' : 'auto-fit-grid' }
  }

  return props.numOfCards ? { style: `display: grid; grid-template-columns: repeat(${props.numOfCards}, 1fr); gap: ${isEventSection ? 0 : 12}px;` } : { class: 'w-100' };

}

function renderNodes() {
  const sectionKey = props?.data?.data?.target?.fields?.sectionKey ?? ""

  const isEventSection = !!sectionKey?.match(/^(event_section_2025|events_2025)/g)
  const isSponsorPage = sectionKey === "sponsor_2025"
  const isSponsorPageSection = sectionKey?.startsWith("sponsor_")

  return {
    [BLOCKS.PARAGRAPH]: (node, key, next) => h("p", getParagraphStyle(sectionKey), next(node.content, key, next)),
    [BLOCKS.UL_LIST]: (node, key, next) => h("div", isEventSection ? undefined : getListStyle(isSponsorPage, isSponsorPageSection), next(node.content, key, next)),
    [BLOCKS.LIST_ITEM]: (node, key, next) => h("div", getListItemStyle(isSponsorPage, isSponsorPageSection), next(node.content, key, next)),
    [BLOCKS.HEADING_2]: (node, key, next) =>
      h("h2", fullWidth, next(node.content, key, next)),
    [BLOCKS.HEADING_3]: (node, key, next) => h("h3", getH3Style(isSponsorPage), next(node.content, key, next)),
    [BLOCKS.HEADING_4]: (node, key, next) =>
      h("h4", getH4Style(isSponsorPage, sectionKey?.startsWith('ticket_page_intro_section')), next(node.content, key, next)),
    [BLOCKS.HEADING_5]: (node, key, next) =>
      h("h5", getH5Style(sectionKey), next(node.content, key, next)),
    [BLOCKS.HEADING_6]: (node, key, next) =>
      h("h6", getH6Style(sectionKey), next(node.content, key, next)),
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const target = node.data.target;
      const file = target.fields.file

      return file.contentType.includes("image")
        ? h("img", { src: file.url, ...(get(file, "details.image") ?? {}) })
        : undefined;
    },
    "embedded-entry-inline": (node) => {
      const target = node.data.target;
      const type = target.sys.contentType.sys.id

      if (type === "ticket") {
        return renderTicket(target.fields)
      } else if (sectionKey.startsWith("sponsor")) {
        return renderSponsor(target.fields)
      } else if (isEventSection) {
        return renderEvents(target.fields)
      }
      return "";
    },
    "embedded-asset-block": (node) => {
      const target = node.data.target;
      const file = target.fields.file

      return file.contentType.includes("image")
        ? h("img", { src: file.url, ...(get(file, "details.image") ?? {}) })
        : undefined;
    },
  };
}
</script>

<style lang="scss">
.slider-group {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  gap: 20px;
  align-items: center;
  height: 280px;
}

.auto-fit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  justify-content: start;
  gap: 16px;
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  &:not(.cardGroup) {
    gap: 16px;
  }

  &.cardGroup {
    display: flex;
    flex-direction: column;
    border: 1px solid rgb(var(--v-theme-grey-10));
    border-radius: 8px;
    padding: 12px 16px;
    margin: 8px 0 12px;
  }
}

.list.box {
  border: 1px solid rgb(var(--v-theme-secondary));
  border-radius: 0.25rem;
  padding: 1.125rem 1.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  gap: 0;
}

.list:first-of-type {
  margin-bottom: 10px;
}

.listItem:not(.textOnly):not(.noBox) {
  border: 1px solid rgb(var(--v-theme-secondary));
  border-radius: 0.675rem;
  padding: 1.125rem 1.25rem;
  background-color: white;
}


.listItem.noBox {
  font-size: 18px;
}

.listItem::before {
  content: unset;
}

.listItem.textOnly {
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 18px;
  gap: 0.75rem;
  text-transform: uppercase;
  height: 100%;
}

.listItem strong {
  font-size: larger;
  color: rgb(var(--v-theme-secondary))
}
</style>
