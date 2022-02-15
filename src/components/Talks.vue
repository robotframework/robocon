<template>
  <div v-if="loaded">
    <div
      v-for="({ date, talks }) in talksByDate"
      :key="date"
      class="mb-xlarge">
      <h2 class="dateTitle bg-background p-small pb-xsmall">
        {{ format(new Date(date), 'MMM dd') }}
      </h2>
      <div
        v-for="(talk, i) in talks"
        :key="talk.code"
        class="card row p-small mb-medium bg-grey-dark">
        <div class="col-sm-12 col-md-9 col-lg-8">
          <div>
            {{ format(new Date(talk.start), 'HH:mm') }} - {{ format(new Date(talk.end), 'HH:mm') }} {{ format(new Date(talk.start), 'OOO') }}
          </div>
          <h3>
            {{ talk.title.en || talk.title }}
          </h3>
          <div v-if="talk.abstract" class="mt-medium">
            {{ talk.abstract }}
          </div>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-4">
          <div
            v-for="{ name, avatar } in talk.speakers"
            :key="name"
            class="rounded bg-background row mb-small">
            <button class="flex middle speakerButton">
              <img class="speakerImg" :src="avatar || `https://www.placecage.com/${300 + i * 10}/${300 + i * 10}`" />
              <h4 class="ml-small color-white">
                {{ name }}
              </h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isSameDay, format } from 'date-fns'

export default {
  name: 'talks',
  data: () => ({
    speakers: [],
    talks: [],
    loaded: false
  }),
  computed: {
    talksByDate() {
      const dates = this.talks
        .map(({ start }) => new Date(start))
        .filter((date, index, self) => self
          .findIndex((dateInner) => isSameDay(date, dateInner)) === index)
      return dates
        .map((date) => ({
          date,
          talks: this.talks
            .filter(({ start }) => isSameDay(date, new Date(start)))
            .map((talk) => ({
              ...talk,
              speakers: (talk.speakers || [])
                .map((code) => this.speakers
                  .find((speaker) => speaker.code === code))
            }))
        }))
    }
  },
  created() {
    fetch('https://cfp.robocon.io/robocon-2022/schedule/widget/v2.json')
      .then((res) => res.json())
      .then(({ speakers, talks }) => {
        this.speakers = speakers
        this.talks = talks
        this.loaded = true
      })
  },
  methods: {
    format
  }
}
</script>

<style scoped>
  .dateTitle {
    position: sticky;
    top: 2.75rem;
  }
  @media screen and (min-width: 700px) {
    .dateTitle {
      margin-right: -1rem;
    }
  }
  .speakerImg {
    width: 4rem;
    height: 4rem;
    display: block;
    transition: filter 0.2s;
    border-radius: 0.5rem 0 0 0.5rem;
    object-fit: cover;
  }
  .speakerButton {
    width: 100%;
  }
  .speakerButton > h4 {
    transition: color 0.2s;
  }
  .speakerButton:hover > h4 {
    color: var(--color-theme) !important;
  }
  .speakerButton:hover > img {
    filter: brightness(1.3);
  }
</style>
