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
    <Teaser :article="article" v-for="article of articles" :key="article.id" />
  </div>
</template>

<script>
import { getArticles } from "@/assets/api";
import Teaser from "@/components/Teaser";

export default {
  name: "Home",
  components: { Teaser },
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
};
</script>

<style scoped>
img {
  max-width: 100%;
}
</style>
