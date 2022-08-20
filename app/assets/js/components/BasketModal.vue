<template>
  <div :class="modalopen ? 'basketModal d-flex justify-content-center align-items-center basketModal--active' :'basketModal justify-content-center align-items-center'">
      <div v-if="basketList.length" class="card basketModalInner h-50 w-50">
          <div v-for="(item,index) in basketList" :key="index" class="item">
            <p class="text-dark">{{item.membership_title}}</p>
            <p class="text-dark">{{item.membership_description}}</p>
          </div>
      </div>
      <div v-else class="card basketModalInner--empty h-50 w-50"> <p>Your basket is empty, add some items!</p> </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import {useBasketStore} from '../store/basket';
export default {
name: 'BasketModal',
props: {
    modalopen: {
        required: true,
        default: false,
    }
},
computed: {
    ...mapState(useBasketStore, ['basketList'])
},
mounted() {
    document.addEventListener('click', (event) => {
        if(event.target.classList.contains('basketModal--active')){
            this.$emit('closemodal');
        }
    })
}
}
</script>

<style>
.basketModal {
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    display: none;
}

.basketModal--active {
    display: flex;
}

.basketModalInner--empty {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>