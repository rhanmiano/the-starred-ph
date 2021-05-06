<template>
  <div class="ui-card--list">
    <div class="ui-card--list-item">
      <div class="--list-item-info">
        <div>
          <Dimmer :width="'16em'" :height="'20px'" />
          <Dimmer :width="'16em'" :height="'20px'" />
        </div>
        <div class="--list-item-meta">
          <Dimmer :width="'14em'" :height="'20px'" />
        </div>
      </div>
      <div class="--list-item-stars">
        <div class="--stars-container" style="border-color: gainsboro">
          <span class="--stars-icon" style="border-right-color: gainsboro">
            <unicon
              class="self-center mr-1"
              width="30"
              height="30"
              name="star"
              :fill="'gainsboro'"
              icon-style="monochrome"
            ></unicon> </span
          ><span class="--stars-count"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
