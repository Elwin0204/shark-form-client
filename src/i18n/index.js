import Vue from "vue";
import VueI18n from "vue-i18n";

// element-ui built-in lang
import elementEn from "element-ui/lib/locale/lang/en";
import elementCN from "element-ui/lib/locale/lang/zh-CN";

// local lang
import localeEn from "./lang/en";
import localeCN from "./lang/zh-CN";

Vue.use(VueI18n);

const defaultLocale = "zh_CN";

export const messages = {
  en: {
    ...localeEn,
    ...elementEn,
  },
  "zh-CN": {
    ...localeCN,
    ...elementCN,
  },
};

export const getLocale = () => {
  const locales = Object.keys(messages);

  // browser lang
  const browserLocal = navigator.language.toLowerCase();
  // localStorage lang
  const storageLocal = defaultLocale;

  const currentLocal = storageLocal || browserLocal;
  if (currentLocal) {
    for (const locale of locales) {
      if (currentLocal.indexOf(locale.toLowerCase()) > -1) {
        document.documentElement.lang = locale;
        return locale;
      }
    }
  }

  // Default language is zh-CN
  return defaultLocale;
};

const i18n = new VueI18n({
  locale: getLocale(),
  messages,
  silentTranslationWarn: true,
});

export const setLocale = (lang) => {
  i18n.locale = lang;
  document.querySelector("html").setAttribute("lang", lang);
  return lang;
};

export function tRender(key) {
  return i18n.t(`${key}`);
}

export default i18n;
