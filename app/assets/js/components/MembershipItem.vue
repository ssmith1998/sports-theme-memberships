<template>
  <div class="membershipItem mx-auto p-5 mt-3 shadow shadow-sm">
      <p>{{membership.membership_title}}</p>
      <p>{{membership.membership_description}}</p>
  </div>
</template>

<script>
export default {
props: {
    membership: {
        type: Object,
        default: {},
    }
}
}
</script>

<style>
 .membershipItem{
        width: 95%;
        background-color: #c7c7c7;
    }
</style>