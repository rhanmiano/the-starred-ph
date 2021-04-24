<template>
  <div class="ui-banner text-white text-center pt-9">
    <h1 class="font-bold">
      {{ title }}
    </h1>
    <p class="text-denotive-highlight font-thin">
      {{ kicker }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => '',
    },
    kicker: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<style></style>
