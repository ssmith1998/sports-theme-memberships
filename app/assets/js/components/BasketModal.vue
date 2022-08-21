<template>
  <div :class="modalopen ? 'basketModal d-flex justify-content-center align-items-center basketModal--active' :'basketModal justify-content-center align-items-center'">
      <div v-if="basketList.length" class="card basketModalInner h-75 w-75 p-4">
          <div v-for="(item,index) in basketList" :key="index" class="item d-flex p-4 mt-3 justify-content-between align-items-center">
              <div class="basketItem__info">
                <p class="text-dark">{{item.membership_title}}</p>
                <p class="text-dark">{{item.membership_description}}</p>
              </div>
            <i class="fas fa-minus-circle text-danger"></i>
          </div>
        <div class="checkoutBtn"><i class="fas fa-long-arrow-alt-right"></i></div>
      </div>
      <div v-else class="card basketModalInner--empty h-50 w-50"> <p>Your basket is empty, add some items!</p> </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import {useBasketStore} from '../store/basket';
export default {
name: 'BasketModal',
props: {
    modalopen: {
        required: true,
        default: false,
    }
},
methods: {
    onRemoveItem() {
        
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

<style lang="scss">
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

.basketModalInner{
    overflow: scroll;
}

.checkoutBtn{
   background: #3FE76A;
    border-radius: 50%;
    color: #ffffff;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 108px;
    right: 137px;
    cursor: pointer;
    i{
        font-size: 25px;
    }
}

.item{
    border: 1px solid #000000;
    border-radius: 10px;
    padding: 10px;
    i{
        font-size: 25px;
    }
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 0 0 1px rgba(255, 255, 255, .5);
}
</style>