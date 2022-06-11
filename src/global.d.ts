import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    THEMEARR: any
  }
  interface Window {
    THEMEARR: any
  }
}
