<template>
  <div>
      {{count + 1}}
  </div>
</template>

<script>
export default {
    name: 'test',
    props: {
        count: {
            type: Number,
        }
    }
}
</script>

<style>

</style>