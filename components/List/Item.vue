<template>
  <div class="ui-card--list">
    <div class="ui-card--list-item">
      <div class="--list-item-info">
        <h3 class="--list-item-title">
          <span>mithi</span> / <span>robotics-courseworld</span>
        </h3>
        <p class="--list-item-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          voluptatibus omnis! Aliquam consequuntur placeat eveniet totam tenetur
          vel sapiente alias itaque odit, earum ut, mollitia dolor sunt libero,
          adipisci minus.
        </p>
        <div class="--list-item-meta">
          <p>
            <span class="--meta-language-color"></span><span>Javascript</span
            ><span>Created at: Jan 2019</span
            ><span>Last Updated at: Dec 2019</span>
          </p>
        </div>
      </div>
      <div class="--list-item-stars">
        <div class="--stars-container">
          <span class="--stars-icon">
            <unicon
              class="self-center mr-1"
              width="30"
              height="30"
              name="star"
              :fill="'#207fb1'"
              icon-style="monochrome"
            ></unicon> </span
          ><span class="--stars-count">14.1k</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style style="scss">
.--list-item-info {
  @apply flex-1;

  .--list-item-meta {
    @apply text-xs mt-3 font-bold;
    color: #7c7c7c;

    > p > span {
      margin-right: 2em;
    }

    .--meta-language-color {
      @apply w-3 h-3 rounded-full;
      background-color: gainsboro;
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
  @apply text-sm font-light pr-2 opacity-70;
}

.--list-item-stars {
  @apply flex flex-wrap items-center justify-end;
  width: 220px;

  .--stars-container {
    @apply flex flex-row flex-wrap items-center border border-brand rounded-md;
    width: 150px;
    height: 42px;

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