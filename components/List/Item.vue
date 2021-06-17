<template>
  <div class="ui-card--list">
    <div class="ui-card--list-item">
      <div class="--list-item-info">
        <div>
          <strong class="--list-item-title">
            <unicon
              class="self-center mr-1"
              width="15"
              height="15"
              name="code-branch"
              :fill="$store.state.colors.colors.brand"
            ></unicon>
            <template v-if="$store.state.window.innerWidth >= 768">
              <span
                v-popover.top="{
                  name: listId,
                }"
                data-test="popover"
                class="--link cursor-pointer name-popover"
                :data-name="listId"
                >{{ repo.owner.login }}</span
              >
            </template>
            <template v-else>
              <span
                class="--link cursor-pointer name-popover"
                data-test="modal-popover"
                :data-name="listId"
                @click="$refs[`${listId}`].show()"
                >{{ repo.owner.login }}</span
              >
            </template>
            /
            <span>
              <a
                class="--link --item-repo-name"
                :href="repo.url"
                target="_blank"
                rel="noopener noreferrer"
                >{{ repo.name }}
              </a>
            </span>
          </strong>
          <p class="--list-item-description">
            {{ repo.description }}
          </p>
        </div>
        <div class="--list-item-meta">
          <div>
            <span class="flex">
              <span
                class="--meta-language-color"
                :style="{
                  backgroundColor: repo.primaryLanguage
                    ? repo.primaryLanguage.color
                    : 'gainsboro',
                }"
              ></span>
              <span>{{
                repo.primaryLanguage ? repo.primaryLanguage.name : '--'
              }}</span>
            </span>
            <span title="Created at">
              Created: {{ $moment(repo.createdAt).format('MMM YYYY') }}
            </span>
            <span title="Updated at">
              Last commit: {{ $moment(repo.pushedAt).format('MMM YYYY') }}
            </span>
          </div>
        </div>
      </div>
      <div class="--list-item-stars">
        <div class="--stars-container">
          <span class="--stars-icon">
            <unicon
              class="self-center"
              :width="$store.state.window.innerWidth < 768 ? 14 : 20"
              :height="$store.state.window.innerWidth < 768 ? 14 : 20"
              name="star"
              :fill="$store.state.colors.colors.brand"
              icon-style="monochrome"
            >
            </unicon>
          </span>
          <span class="--stars-count"
            >{{ stargazerCount ? stargazerCount : repo.stargazerCount }}
          </span>
        </div>
      </div>
    </div>

    <!-- Popover or modal to show profile -->
    <template v-if="$store.state.window.innerWidth >= 768">
      <popover :name="listId" :width="400">
        <ListProfile :repoId="repo.id" :profile="repo.owner" />
      </popover>
    </template>

    <template v-else>
      <t-modal
        :ref="listId"
        footerClass="px-6 py-3 border-t flex flex-row-reverse bg-white"
        class="--modal-profile"
        transition="fade"
        :name="listId"
      >
        <ListProfile :repoId="repo.id" :profile="repo.owner" />
      </t-modal>
    </template>
  </div>
</template>

<script>
import tc from 'thousands-counter'

export default {
  props: {
    repoIndex: {
      type: Number,
      default: 0,
    },
    repo: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      listId: `${this.repo.id}${this.repo.owner.id}`,
      numStarGazerCount: this.repo.stargazerCount,
    }
  },
  computed: {
    stargazerCount() {
      return this.repo.stargazerCount > 9999
        ? tc(this.repo.stargazerCount, {
            digits: this.repo.stargazerCount >= 100000 ? 0 : 1,
            uppercase: false,
          })
        : this.repo.stargazerCount
    },
  },
}
</script>

<style style="scss">
.--profile-modal-wrapper {
  min-height: 0 !important;
}
</style>
