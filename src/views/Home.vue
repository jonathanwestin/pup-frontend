<template>
  <div class="container">
    <img src="/biccs_2021.jpg" />
    <h1>Biennial International Conference for the Craft Sciences</h1>
    <p>
      Quis tempor tempor nisi anim minim sint sit velit cillum labore non irure
      deserunt incididunt. Aliquip aute qui in culpa aliqua dolore Lorem.
      Laboris excepteur veniam consequat mollit incididunt elit nisi. Veniam et
      mollit Lorem Lorem nisi incididunt ex duis consequat laborum aute do. Non
      esse ullamco excepteur ea dolor aliqua velit consequat nulla aliquip
      proident aute cillum consectetur.
    </p>
    <ol>
      <li v-for="article of articles" :key="article.doi">
        <router-link :to="articlePath(article)">
          {{ article.title }}
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
import { getArticles } from "@/assets/api";

export default {
  name: "Home",
  data() {
    return {
      articles: null,
    };
  },
  computed: {
    dataJson() {
      return JSON.stringify(this.articles, null, 2);
    },
  },
  async created() {
    this.articles = await getArticles();
  },
  methods: {
    articlePath(article) {
      return `${article.doi}/${article.revision}`;
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
}
</style>
