import { createApp } from "vue";
import { createPinia } from 'pinia';
import Memberships from './js/components/Memberships.vue';
import { mapState } from "pinia";
import {useBasketStore} from './js/store/basket';
const pinia = createPinia()
const app = createApp({
    delimiters: ['${', '}'],
    data(){
      return {
        basketOpen: false,
      }
    },
    computed: {
      ...mapState(useBasketStore, ['itemsCount'])
    },
    components: {
        'Memberships': Memberships,
    },
    methods: {
      onCloseBasket() {
        this.basketOpen = false;
      },
      onBasketOpen() {
        console.log(this.basketOpen);
        this.basketOpen = true;
      }
    },
  })
  .use(pinia)
  .mount('#app')
