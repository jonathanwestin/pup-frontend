<template>
  <div>
    <h2>Articles</h2>
    <ol>
      <li v-for="article of articles" :key="article.doi">
        <router-link :to="articlePath(article)">
          {{ article.title }}
        </router-link>
      </li>
    </ol>
    <h2>Data</h2>
    <json-viewer>
      <script type="application/json">
        {{ dataJson }}
      </script>
    </json-viewer>
  </div>
</template>

<script>
import { getArticles } from "@/assets/api";
import "@power-elements/json-viewer";

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
json-viewer {
  font-size: 0.75rem;
  overflow-x: scroll;
}
</style>
