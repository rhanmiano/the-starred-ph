<template>
  <section class="ui-card--container">
    <div class="ui-card-utilities">
      <div class="ui-card-view-number"></div>
      <div class="ui-card-view-type"></div>
    </div>
    <div v-if="repos.length > 0">
      <transition-group name="list" tag="section">
        <ListItem v-for="repo in repos" :key="repo.id" :repo="repo" />
      </transition-group>
    </div>
    <div v-if="repos.length == 0">
      <ListItemDimmer v-for="{ index } in placeholder" :key="index" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    repos: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      placeholder: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    }
  },
  mounted() {
    console.log('container repos', this.repos.length, this.repos.length)
  },
}
</script>

<style style="scss">
.ui-card {
  &--container {
    display: block;
    width: 100%;
    height: inherit;
    min-height: 1500px;
    margin-top: 100px;
    @apply px-2;

    @media screen and (min-width: 640px) {
      @apply px-0;
    }
  }

  &--list {
    @apply flex flex-col flex-wrap;

    &-item {
      @apply bg-white w-full mt-5 py-5 px-8 flex flex-col md:flex-row flex-wrap shadow-md rounded-md;
      min-height: 134px;
    }
  }
}

.--list-item-info {
  @apply flex-1 flex flex-wrap content-between;

  > div:first-child {
    width: 100%;
  }

  .--list-item-meta {
    @apply text-xs mt-3 font-light opacity-70;
    color: #7c7c7c;

    > p > span {
      margin-right: 2em;
    }

    .--meta-language-color {
      @apply w-3 h-3 rounded-full;
      /* background-color: gainsboro; */
      display: inline-block;
      margin-right: 0.5em !important;
      position: relative;
      top: 2px;
    }
  }
}
.--list-item-title {
  @apply p-0 m-0 font-bold;
}

.--list-item-description {
  @apply text-sm font-light pr-2;
}

.--list-item-stars {
  @apply flex flex-wrap items-center justify-start md:justify-end mt-4 md:mt-0;
  width: 100%;

  @media screen and (min-width: 640px) {
    width: 220px;
  }

  .--stars-container {
    @apply flex flex-row flex-wrap items-center border border-brand rounded-md;
    width: 150px;
    height: 32px;

    span.--stars-icon {
      @apply w-14 border-r border-brand flex items-center justify-center h-full;
    }

    span.--stars-count {
      @apply flex-1 text-center text-brand;
      font-weight: bold;
    }
  }
}
</style>
