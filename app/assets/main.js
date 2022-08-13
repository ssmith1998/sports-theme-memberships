import { createApp } from "vue";
import Test from './js/components/Test.vue'
createApp({
    delimiters: ['${', '}'],
    data() {
      return {
        count: 3000
      }
    },
    components: {
        'test': Test,
    }
  }).mount('#app')