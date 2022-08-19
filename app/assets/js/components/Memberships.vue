<template>
  <div class="memberships mx-auto p-3 mt-3 shadow shadow-sm">
      <membership-item v-for="(item, index) in membershipsList" :membership="item" :key="index" />
  </div>
</template>

<script>
import MembershipItem from './MembershipItem.vue'
import { mapActions, mapState } from 'pinia'
import {useMemebershipsStore} from '../store/memberships';
export default {
    name: 'Memberships',
    data(){
        return {
            membershipsData: []
        }
    },
    props: {
        data: {
            type: Array,
            default: []
        }
    },
    methods: {
    ...mapActions(useMemebershipsStore, ['List'])

    },
    computed:{
    ...mapState(useMemebershipsStore, ['membershipsList'])
    },
    components: {
        'membership-item': MembershipItem
    },
    mounted() {
        this.membershipsData = this.data.map(item => {
            return {
                membership_title: item.post_title,
                membership_description: item.post_content,
            }
        }).reverse()
        this.List(this.membershipsData);

    }
}
</script>

<style>
    .memberships{
        width: 95%;
    }
</style>