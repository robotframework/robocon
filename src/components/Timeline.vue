<template>
  <div class="row m-none">
    <div
      v-for="(item, i) in $tm('intro.timeline')"
      :key="i"
      class="col-sm-12 col-md-4 row p-small"
      :class="$store.state.isMobile ? 'p-small' : (i === 0 ? 'pl-none' : i === 2 ? 'pr-none' : 'pl-small pr-small')">
      <div class="card bg-grey-dark flex flex-col between middle p-medium" style="height: 100%;">
        <div>
          <div class="col-sm-12 type-small">
            {{ item.date }}
          </div>
          <div class="col-sm-12">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="col-sm-12 mt-small">
            {{ item.description }}
          </div>
        </div>
        <a
          :href="item.href"
          class="ticket p-small mt-small border-theme border-thin rounded weight-bold type-no-underline">
          {{ item.buttonText }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeline'
}
</script>

<style scoped>
  .ticket {
    width: fit-content;
    transition: transform 0.15s;
    background-color: rgba(255, 255, 255, 0.05);
  }
  .ticket:hover {
    transform: scale(1.05);
  }
</style>
