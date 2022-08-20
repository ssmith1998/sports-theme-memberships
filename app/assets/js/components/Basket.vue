<template>
    <div class="basket">
        <span class="text-white me-2">{{itemsCount}}</span>
        <i class="fas fa-shopping-basket text-white" @click="onBasketActive"></i>           
    </div>
</template>

<script>
import {mapState} from 'pinia';
import {useBasketStore} from '../store/basket'
export default {
name: 'Basekt',
computed: {
...mapState(useBasketStore, ['itemsCount'])
},
methods: {
    onBasketActive() {
        this.$emit('onopenbasket')
    }
}
}
</script>

<style>
i {
    cursor: pointer;
}
</style>