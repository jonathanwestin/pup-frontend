<template>
  <div>
    <h2>Articles</h2>
    <ol>
      <li v-for="article of articles" :key="article.doi">
        <router-link :to="article.path">{{ article.title }}</router-link>
      </li>
    </ol>
  </div>
</template>

<script>
import articles from "@/assets/data";

export default {
  name: "home",
  computed: {
    articles: () =>
      articles.map((article) => ({
        title: article.title,
        path: `${article.doi}/${
          article.revisions.slice(-1)[0].revision_number
        }`,
      })),
  },
};
</script>
