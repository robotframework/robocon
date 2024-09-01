import { createI18n } from "vue-i18n";
import {
  datetimeFormats,
  pluralizationRules
} from "./rules";


export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: "en-US",
  warnHtmlInMessage: "off",
  legacy: false,
  globalInjection: true,
  pluralizationRules,
  datetimeFormats
})