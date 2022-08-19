import { createApp } from "vue";
import { createPinia } from 'pinia';
import Memberships from './js/components/Memberships.vue';
import { mapState } from "pinia";
import {useBasketStore} from './js/store/basket';
const pinia = createPinia()
const app = createApp({
    delimiters: ['${', '}'],
    computed: {
      ...mapState(useBasketStore, ['itemsCount'])
    },
    components: {
        'Memberships': Memberships,
    }
  })
  .use(pinia)
  .mount('#app')
