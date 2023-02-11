<template>
  <div>
    <div class="dimmer" :style="{ width, height }"></div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
    },
    height: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
.dimmer {
  display: block;
  background-color: gainsboro;
}
</style>
