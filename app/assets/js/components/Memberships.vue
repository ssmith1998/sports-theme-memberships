<template>
  <div class="memberships mx-auto p-3 mt-3 shadow shadow-sm">
      <membership-item v-for="(item, index) in memberships" :membership="item" :key="index" />
  </div>
</template>

<script>
import MembershipItem from './MembershipItem.vue'
export default {
    name: 'Memberships',
    props: {
        memberships: {
            type: Array,
            default: [
                {
                    name: 'membership 1'
                },
                {
                    name: 'membership 2'
                },
                {
                    name: 'membership 3'
                },
            ]
        }
    },
    components: {
        'membership-item': MembershipItem
    }
}
</script>

<style>
    .memberships{
        width: 95%;
    }
</style>