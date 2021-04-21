<template>
  <section class="ui-card--container">
    <div class="ui-card-utilities">
      <div class="ui-card-view-number"></div>
      <div class="ui-card-view-type"></div>
    </div>
    <ListItem />
  </section>
</template>

<script>
export default {}
</script>

<style style="scss">
.ui-card {
  &--container {
    display: block;
    width: 100%;
    height: inherit;
    min-height: 400px;
    margin-top: 100px;
  }

  &--list {
    @apply flex flex-col flex-wrap;

    &-item {
      @apply bg-white w-full mt-2 py-5 px-8 flex flex-row flex-wrap shadow-md rounded-md;
      height: 154px;
    }
  }
}
</style>
