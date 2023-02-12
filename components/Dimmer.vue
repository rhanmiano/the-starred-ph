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
      default: '16em',
    },
    height: {
      type: String,
      default: '20px',
    },
  },
}
</script>

<style lang="scss" scoped>
.dimmer {
  background: linear-gradient(-45deg, #e2e2e2, #b9bbc0, #9295a0);
  background-size: 400% 400%;
  animation: gradient 2s ease-in infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
