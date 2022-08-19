import { defineStore } from 'pinia'


export const useMemebershipsStore = defineStore('memberships', {
    state: () => ({ 
        memberships: [],
    }),
    getters: {
      membershipsList: (state) => state.memberships,
    },
    actions: {
      List(memberships) {
        this.memberships = memberships;
      },
    },
})