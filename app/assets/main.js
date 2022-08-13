import { createApp } from "vue";
import Memberships from './js/components/Memberships.vue'
createApp({
    delimiters: ['${', '}'],
    data() {
      return {
        count: 3000
      }
    },
    components: {
        'Memberships': Memberships,
    }
  }).mount('#app')