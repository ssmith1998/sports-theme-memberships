<template>
  <div class="memberships mx-auto p-3 mt-3 shadow shadow-sm">
      <membership-item v-for="(item, index) in memberships" :membership="item" :key="index" />
  </div>
</template>

<script>
import MembershipItem from './MembershipItem.vue'
export default {
    name: 'Memberships',
    data(){
        return {
            memberships: []
        }
    },
    props: {
        data: {
            type: Array,
            default: []
        }
    },
    components: {
        'membership-item': MembershipItem
    },
    mounted() {
        this.memberships = this.data.map(item => {
            return {
                membership_title: item.post_title,
                membership_description: item.post_content,
            }
        }).reverse()
    }
}
</script>

<style>
    .memberships{
        width: 95%;
    }
</style>