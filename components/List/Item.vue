<template>
  <div class="ui-card--list">
    <div class="ui-card--list-item">
      <div class="--list-item-info">
        <div>
          <h4 class="--list-item-title">
            <unicon
              class="self-center mr-1"
              width="15"
              height="15"
              name="code-branch"
              :fill="'#207fb1'"
            ></unicon
            ><span>{{ repo.owner.login }}</span> / <span>{{ repo.name }}</span>
          </h4>
          <p class="--list-item-description">
            {{ repo.description }}
          </p>
        </div>
        <div class="--list-item-meta">
          <p>
            <span
              class="--meta-language-color"
              :style="{
                backgroundColor: repo.primaryLanguage
                  ? repo.primaryLanguage.color
                  : 'gainsboro',
              }"
            ></span
            ><span>{{
              repo.primaryLanguage ? repo.primaryLanguage.name : '--'
            }}</span
            ><span
              >Created: {{ $moment(repo.createdAt).format('MMM YYYY') }}</span
            ><span
              >Updated: {{ $moment(repo.updatedAt).format('MMM YYYY') }}</span
            >
          </p>
        </div>
      </div>
      <div class="--list-item-stars">
        <div class="--stars-container">
          <span class="--stars-icon">
            <unicon
              class="self-center mr-1"
              width="20"
              height="20"
              name="star"
              :fill="'#207fb1'"
              icon-style="monochrome"
            ></unicon> </span
          ><span class="--stars-count">{{
            stargazerCount ? stargazerCount : repo.stargazerCount
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tc from 'thousands-counter'

export default {
  props: {
    repo: {
      type: Object,
      default: () => {},
    },
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
  mounted() {
    console.log('repo here', this.repo)
  },
}
</script>

<style style="scss"></style>
