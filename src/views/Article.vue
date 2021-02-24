<template>
  <article v-if="article" class="full-article">
    <Header v-bind="article" />

    <div
      v-if="article.guplayId || (article.images && article.images.length)"
      class="article-mainvisual"
    >
      <div class="container">
        <MainVideo v-if="article.guplayId" :guplay-id="article.guplayId" />
        <MainGallery v-else-if="article.images" :images="article.images" />
      </div>
    </div>

    <Summary v-bind="article" />

    <div class="container article-content">
      <ContentSection
        v-for="section in article.content"
        :key="section.label"
        :section="section"
      />
    </div>

    <References
      v-if="article.references && article.references.length"
      :references="article.references"
      :extras="article.extras"
    />
  </article>
</template>

<script>
import { getArticle } from "@/assets/api";
import Header from "@/components/article/Header";
import MainVideo from "@/components/article/MainVideo";
import MainGallery from "@/components/article/MainGallery";
import Summary from "@/components/article/Summary";
import ContentSection from "@/components/article/ContentSection";
import References from "@/components/article/References";

export default {
  name: "Article",
  components: {
    Header,
    MainVideo,
    MainGallery,
    Summary,
    ContentSection,
    References,
  },
  props: ["identifier", "revision"],
  data() {
    return {
      article: null,
    };
  },
  async created() {
    this.article = await getArticle(this.identifier, this.revision);
    this.$store.commit("setArticleData", this.article);
    document.title = this.article.title;
  },
};
</script>

<style lang="scss" scoped>
.full-article {
  /* Make bottom margin match side margin */
  margin: 0 0 10vw;
}

.article-mainvisual {
  margin-top: -1rem; /* Snug to header */
}
</style>
