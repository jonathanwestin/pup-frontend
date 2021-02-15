<template>
  <router-link tag="div" :to="route" class="teaser">
    <img :src="`http://localhost:1337${article.image.formats.medium.url}`" />
    <div class="title">{{ article.title }}</div>
    <div class="subtitle">{{ article.subtitle }}</div>
  </router-link>
</template>

<script>
export default {
  name: "Teaser",
  props: ["article"],
  computed: {
    route() {
      return {
        name: "article",
        params: { articleId: this.article.id, revision: this.article.revision },
      };
    },
  },
};
</script>

<style scoped>
.teaser {
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-family: "Nobile", sans-serif;
  font-weight: 600;
  position: relative;
  overflow: hidden;
}

img {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: -1;
  opacity: 0.4;
}

.title {
  font-size: 120%;
}

.title,
.subtitle {
  margin: 0 0.5rem;
}
</style>
