<template>
  <h1>{{ type.charAt(0).toUpperCase() + type.slice(1) }}</h1>
  <p>This is the description of {{ type }}.</p>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        required: true,
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>