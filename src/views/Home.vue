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
  computed: {
    articles: () => getArticles(),
    dataJson: () => JSON.stringify(getArticles(), null, 2),
  },
  methods: {
    articlePath(article) {
      return `${article.doi}/${article.revisions.slice(-1)[0].revision_number}`;
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
