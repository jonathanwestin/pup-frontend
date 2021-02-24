<template>
  <div>
    <div v-masonry transition-duration="0" item-selector=".images-item">
      <div
        v-for="image in images"
        :key="image.id"
        v-masonry-tile
        class="images-item"
      >
        <a :href="apiUrl(image.formats.large.url)">
          <img :src="apiUrl(image.formats.small.url)"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
import { apiUrl } from "@/assets/api";

export default {
  name: "MainGallery",
  props: ["images"],
  methods: {
    apiUrl,
  },
};
</script>

<style lang="scss" scoped>
.images-item {
  width: 50%;

  img {
    transition: opacity 150ms ease;
    &:hover {
      opacity: 0.9;
    }
  }

  img {
    display: block;
    width: 100%;
    margin: 0;
  }
}
</style>
