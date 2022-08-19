import { defineStore } from 'pinia'


export const useBasketStore = defineStore('basket', {
    state: () => ({ 
        items: [],
    }),
    getters: {
      basketList: (state) => state.items,
      itemsCount: (state) => state.items.length + 1,
    },
    actions: {
      List(memberships) {
        this.items = memberships;
      },
      addItem(item){
        this.items.unshift(item);
      }
    },
})