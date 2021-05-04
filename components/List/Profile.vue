<template>
  <section class="text-sm">
    <div class="flex flex-wrap pb-2">
      <div
        class="w-8 h-8 rounded-full bg-gray-200 mr-4"
        :style="{ backgroundImage: `url(${profile.avatarUrl})` }"
      >
        <img
          class="rounded-full"
          :src="profile.avatarUrl"
          :alt="`${profile.name}'s avatar`"
        />
      </div>
      <div class="flex-grow">
        <h4 class="m-0">{{ profile.name }}</h4>
        <p class="text-xs">{{ profile.login }}</p>
      </div>
    </div>
    <div class="flex flex-wrap flex-col pb-2 text-xs">
      <p class="flex" v-if="profile && profile.location">
        <unicon
          class="self-center mr-2"
          width="15"
          height="15"
          name="user-location"
          :fill="'#207fb1'"
        ></unicon>
        {{ profile.location }}
      </p>
      <p class="flex mt-1" v-if="profile && profile.websiteUrl">
        <unicon
          class="self-center mr-2"
          width="15"
          height="15"
          name="chat-bubble-user"
          :fill="'#207fb1'"
        ></unicon>
        <a
          class="--link"
          :href="profile.websiteUrl"
          target="_blank"
          rel="noopener noreferrer"
          >{{ profile.websiteUrl }}</a
        >
      </p>
    </div>

    <template v-if="profile && profile.bio">
      <hr />
      <p class="text-xs my-2">{{ profile.bio }}</p>
    </template>
    <hr />
    <p class="text-xs mt-2">
      <strong>{{ profile.followers.totalCount }}</strong> Followers
      <strong>{{ profile.following.totalCount }}</strong> Following
      <strong>{{ profile.repoCount }}</strong> Repositories
    </p>
  </section>
</template>

<script>
export default {
  props: {
    profile: {
      type: Object,
      default: () => {},
    },
    repoId: {
      type: String,
      default: () => '',
    },
  },
  mounted() {
    console.log(this.repoId, this.profile)
  },
}
</script>

<style>
[data-popover$='-github-profile'] {
  @apply shadow-md p-2;
  /* width: 300px !important; */

  h4 {
    margin: 0 0 0.5rem 0;
    font-weight: bold;
  }
}
</style>
