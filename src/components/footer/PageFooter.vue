<template>
  <template v-if="store.getFooter">
    <v-footer color="primary">
      <v-container fluid style="line-height: 2">
        <v-row>
          <v-col v-for="(footer) in store.getFooter" class="col-sm-6 col-md-3 ga-3">
            <div :class="[index > 0 ? 'mt-2' : '', 'd-flex flex-column']" v-for="(item, index) in footer">
              <template v-if="item?.address">
                <div class="address">
                  {{ item.address }}
                </div>
              </template>
              <template v-else>
                <a :href="item.href" target="_blank" class="title-font">{{ item.name }} </a>
              </template>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </template>
</template>


<script setup>
import { useGlobalStore } from '@/store/modules';
const store = useGlobalStore();
</script>

<style scoped lang="scss">
a {
  color: rgb(var(--v-theme-white));
  font-weight: 600;

  &:hover {
    opacity: 0.8;
  }
}

.address {
  white-space: pre-line;
  opacity: 0.8;
}
</style>
