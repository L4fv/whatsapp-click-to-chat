import Vue from 'vue'
import VueGtm from '@gtm-support/vue2-gtm';
// Configuration VueAnalytics
Vue.use(VueGtm, {
    id: process.env.VUE_APP_BASE_ANALITICS_ID,
    defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
    compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
    nonce: '2726c7f26c', // Will add `nonce` to the script tag
    enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
    debug: true, // Whether or not display console logs debugs (optional)
    loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
    trackOnNextTick: false // Whether or not call trackView in Vue.nextTick
  });
