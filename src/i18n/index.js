import Vue from 'vue'
import locale from 'element-ui/lib/locale'
import VueI18n from 'vue-i18n'
import messages from './langs'

Vue.use(VueI18n)
if (!sessionStorage.getItem('lang')) {
  sessionStorage.setItem('lang', 'por')
}
const i18n = new VueI18n({
  locale: sessionStorage.lang, // 从localStorage中拿到用户的语言选择，如果没有，默认中文。
  messages
})
locale.i18n((key, value) => i18n.t(key, value)) // 重点：为了实现element插件的多语言切换,如没引入element则不需要
export default i18n
