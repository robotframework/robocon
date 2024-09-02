import type { I18nOptions } from "vue-i18n"

const datetimeFormats: NonNullable<I18nOptions["datetimeFormats"]> = {
  'en-US': {
    short: {
      year: 'numeric', month: 'short', day: 'numeric'
    },
    long: {
      year: 'numeric', month: 'short', day: 'numeric',
      weekday: 'short', hour: 'numeric', minute: 'numeric'
    }
  },
}
export default datetimeFormats