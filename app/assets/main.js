import { createApp } from "vue";
import { createPinia } from 'pinia';
import Memberships from './js/components/Memberships.vue';
import Basket from './js/components/Basket.vue'
import { mapState } from "pinia";
import {useBasketStore} from './js/store/basket';
import BasketModal from './js/components/BasketModal'
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
        'Basket': Basket,
        'BasketModal': BasketModal,
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
