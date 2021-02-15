<template>
  <router-link
    tag="div"
    :to="route"
    class="teaser"
    :class="{ 'no-image': !image }"
    :style="{
      backgroundImage: `url(${image})`,
    }"
  >
    <div class="text">
      <div class="title main">{{ article.title }}</div>
      <div v-if="article.subtitle" class="title sub">
        {{ article.subtitle }}
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Teaser",
  props: ["article"],
  computed: {
    image() {
      return (
        this.article.image &&
        `http://localhost:1337${this.article.image.formats.large.url}`
      );
    },
    route() {
      return {
        name: "article",
        params: { articleId: this.article.id, revision: this.article.revision },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.teaser {
  margin: 0.5rem 0;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-family: "Nobile", sans-serif;
  font-weight: 600;
  position: relative;
  /* overflow: hidden; */
  background-size: cover;
  background-position: center;
  cursor: pointer;
}

.no-image {
  background-color: #f4f4f4;
}

.text {
  position: relative;
  // height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 1rem;
  background: rgba(255, 255, 255, 0.8);
  z-index: 20;
  top: 0;
  transition: top 150ms ease;
}

.teaser:hover {
  z-index: 10;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.2);
  &:not(.no-image) .text {
    box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.2);
    background: rgb(255, 255, 255);
    position: relative;
    top: 2rem;
  }
}

.main {
  font-size: 120%;
}

.title {
  margin: 0 0.5rem 0.2rem;
}
</style>
