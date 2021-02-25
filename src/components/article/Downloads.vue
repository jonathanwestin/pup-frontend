<template>
  <div class="article-downloads">
    <a
      v-for="download in downloads"
      :key="download.id"
      :href="apiUrl(download.url)"
      class="download blind popout"
    >
      <div class="download-title">{{ download.caption }}</div>
      <div class="download-description">
        {{ download.ext.slice(1).toUpperCase() }}
      </div>
    </a>
  </div>
</template>

<script>
import { apiUrl } from "@/assets/api";

export default {
  props: ["downloads"],
  methods: {
    apiUrl,
  },
};
</script>

<style lang="scss" scoped>
.article-downloads {
  display: flex;
  flex-wrap: wrap;
  font-family: "Signika", sans-serif;

  .download {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: url(../../assets/file.png) no-repeat;
    background-size: 4rem;
    background-position: 1rem 50%;
    border: thin dashed #666;
    border-radius: 0.5rem;
    height: 4rem;
    padding: 1rem 1rem 1rem 5rem;
    margin-bottom: 1rem;
    width: 100%;

    .download-description {
      font-size: 85%;
    }
  }

  @media screen and (min-width: 600px) {
    margin-right: -2rem;

    .download {
      width: auto;
      margin-right: 2rem;
    }
  }
}
</style>
