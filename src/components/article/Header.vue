<template>
  <header class="article-header">
    <div class="container">
      <div class="article-mainmeta">
        <MetaItem label="Publication date">{{ date }}</MetaItem>
        <MetaItem label="Version">
          {{ revision }} ({{ revision_date }})
        </MetaItem>
      </div>

      <h1 class="article-title title">{{ title }}</h1>
      <h2 class="article-subtitle title">{{ subtitle }}</h2>

      <div class="article-authors">
        <div v-for="author of authors" :key="author.id" class="author">
          <div class="author-name">
            {{ fullName(author) }}
          </div>
          <div class="author-affiliation">
            <div>{{ author.affiliation }}</div>
            <div>
              <code>{{ author.email }}</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { apiUrl } from "@/assets/api";
import { commaAnd, fullName } from "@/assets/util";
import MetaItem from "@/components/article/MetaItem";

export default {
  name: "ArticleHeader",
  props: ["date", "revision", "revision_date", "title", "subtitle", "authors"],
  components: { MetaItem },
  methods: {
    apiUrl,
    commaAnd,
    fullName,
  },
};
</script>

<style lang="scss" scoped>
.article-header {
  background-color: #f4f4f4;
  padding: 2.5rem 0 1.5rem;
  margin-bottom: 1rem;
  font-weight: 100;

  .article-menu {
    font-family: Signika, sans-serif;
    font-size: 16px;
    position: absolute;
    right: 0;
    width: 10%;

    button {
      font-family: Signika, sans-serif;
      font-size: inherit;
    }
  }

  .article-mainmeta {
    font-family: Signika, sans-serif;
    font-weight: 400;
    margin: 0 0 1.5rem;
    line-height: 1.5;
  }
  .article-title {
    margin: 1.5rem 0 0.5rem;
  }
  .article-subtitle {
    margin: 0.5rem 0 1rem;
  }

  @media screen and (min-width: 600px) {
    .article-title {
      font-size: 3rem;
    }
    .article-subtitle {
      font-size: 2rem;
    }
  }

  .article-authors {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size: 1.1rem;

    .author {
      flex: 1;
      margin-bottom: 1rem;
      min-width: 15em;
      line-height: 1.5;
    }

    .author-name {
      font-size: 1.3rem;
    }

    @media screen and (min-width: 600px) {
      margin-right: -2rem;

      .author {
        margin-right: 2rem;
      }
    }
  }
}
</style>
