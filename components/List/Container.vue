<template>
  <section class="ui-card--container">
    <!-- Toggle view, commented out temporarily -->
    <div class="ui-card-utilities">
      <div class="ui-card-list-type">
        <select
          id="list_type"
          v-model="type"
          name="list-type"
          @change="onTypeChange"
        >
          <option value="User">Individuals</option>
          <option value="Organization">Organizations</option>
        </select>
      </div>
      <!-- <div class="ui-card-view-type">
        <div
          class="view-type --list-view"
          :class="{ '-active': viewType }"
          @click="toggleViewType(true)"
        >
          <unicon
            class="self-center"
            width="20"
            height="20"
            name="grids"
            :fill="$store.state.colors.colors.brand"
            icon-style="monochrome"
          ></unicon>
        </div>
        <div
          class="view-type --grid-view"
          :class="{ '-active': !viewType }"
          @click="toggleViewType(false)"
        >
          <unicon
            class="self-center"
            width="20"
            height="20"
            name="apps"
            :fill="$store.state.colors.colors.brand"
            icon-style="monochrome"
          ></unicon>
        </div>
      </div> -->
    </div>
    <div v-show="!loading && repos.length > 0">
      <!-- <transition-group name="list" tag="section"> -->
      <ListItem
        v-for="(repo, id) in repos"
        :key="repo.id"
        :repoIndex="id"
        :repo="repo"
      />
      <!-- </transition-group> -->
    </div>
    <div v-show="loading">
      <ListItemDimmer v-for="{ index } in placeholder" :key="index" />
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

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
      viewType: true,
      gridViewActive: false,
    }
  },
  computed: {
    ...mapGetters({
      loading: 'github/loading',
      type: 'github/type',
    }),
  },
  methods: {
    ...mapActions({
      setType: 'github/setType',
    }),
    toggleViewType(val) {
      this.viewType = val
    },
    onTypeChange(e) {
      this.setType(e.currentTarget.value)
    },
  },
}
</script>

<style lang="scss">
.ui-card {
  &--container {
    display: block;
    width: 100%;
    height: inherit;
    min-height: 1500px;
    margin-top: 4em;
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

.ui-card-utilities {
  @apply flex flex-wrap justify-start;

  .ui-card-list-type {
    select#list_type {
      @apply rounded-md  px-2 py-1 text-denotive-highlight text-sm;
      outline: none;
      -moz-appearance: none; /* Firefox */
      -webkit-appearance: none; /* Safari and Chrome */
      appearance: none;
      background: hsl(208deg 45% 67% / 35%);
      cursor: pointer;

      option {
        @apply rounded-sm text-gray-600 mt-1;
        background: white;
        outline: none;
        border: none;
      }
    }
  }

  .ui-card-view-type {
    @apply flex flex-wrap justify-end;

    > div.view-type {
      @apply cursor-pointer opacity-30;
      transition: all 200ms ease-out;

      &:hover {
        @apply opacity-100;
      }

      &.-active {
        @apply opacity-100;
      }

      &:last-child {
        @apply ml-2;
      }
    }
  }

  .--grid-view {
    @apply flex;
  }

  .--list-view {
    @apply flex;
    transform: rotateZ(90deg) scale(0.93);
  }
}

.--list-item-info {
  @apply flex-1 flex flex-wrap content-between;

  > div:first-child {
    width: 100%;
  }

  .--list-item-meta {
    @apply text-xs mt-3 font-light opacity-70 w-full;

    > div {
      @apply flex flex-wrap flex-row;
    }

    > div > span {
      margin-right: 2em;
      @apply w-full md:w-max;
    }

    .--meta-language-color {
      border-radius: 1px;
      width: 0.3rem;
      height: 1rem;
      display: inline-block;
      margin-right: 0.4em !important;
      position: relative;
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
    @apply flex flex-row flex-wrap items-center;

    @media screen and (min-width: 768px) {
      @apply border border-brand rounded-md;
      width: 150px;
      height: 32px;
    }

    span.--stars-icon {
      @apply flex items-center justify-center h-full mr-2;

      @media screen and (min-width: 768px) {
        @apply w-12 border-r border-brand mr-0;
      }
    }

    span.--stars-count {
      @apply flex-1 text-center text-brand text-sm;
      font-weight: bold;

      @media screen and (min-width: 768px) {
        @apply text-base;
      }
    }
  }
}
</style>
