<template>
  <div class="membershipItem mx-auto p-5 mt-3 shadow shadow-sm">
      <p>{{membership.membership_title}}</p>
      <p>{{membership.membership_description}}</p>
      <button class="btn btn-primary" @click="onShowInfo">Show Info</button>
  </div>
</template>

<script>
import {mapActions} from 'pinia';
import {useBasketStore} from '../store/basket';
export default {
props: {
    membership: {
        type: Object,
        default: {},
    }
},
methods: {
    ...mapActions(useBasketStore, ['addItem']),
    onShowInfo(){
        this.$emit('showInfo', this.membership);
    },
}
}
</script>

<style>
 .membershipItem{
        width: 95%;
        background-color: #c7c7c7;
    }
</style>