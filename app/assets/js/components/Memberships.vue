<template>
  <div class="memberships mx-auto p-3 mt-3 shadow shadow-sm">
      <membership-item v-for="(item, index) in membershipsList" :membership="item" :key="index" @showInfo="showInfo" />
      <modal @closemodal="onCloseInfo" :modalopen="infoOpen" :membership="chosenMembership"/>
  </div>
</template>

<script>
import MembershipItem from './MembershipItem.vue';
import Modal from './Modal.vue';
import { mapActions, mapState } from 'pinia'
import {useMemebershipsStore} from '../store/memberships';
export default {
    name: 'Memberships',
    data(){
        return {
            membershipsData: [],
            infoOpen: false,
            chosenMembership: {}
        }
    },
    props: {
        data: {
            type: Array,
            default: []
        }
    },
    methods: {
    ...mapActions(useMemebershipsStore, ['List']),
    onCloseInfo(){
        this.infoOpen = false;
    },
    showInfo(value){
        this.infoOpen = true;
        this.chosenMembership = value;
    }
    },
    computed:{
    ...mapState(useMemebershipsStore, ['membershipsList'])
    },
    components: {
        'membership-item': MembershipItem,
        'modal': Modal
    },
    mounted() {
        this.membershipsData = this.data.map(item => {
            return {
                membership_title: item.post_title,
                membership_description: item.post_content,
                membership_prices: item.prices,
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