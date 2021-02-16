<template>
  <div v-if="journal" class="home">
    <div class="container">
      <img src="/biccs_2021.jpg" />
      <h1 class="title">{{ journal.title }}</h1>
      <p v-html="parseMarkdown(journal.presentation)" />
      <div>
        <div class="grouping-select">
          <label>Order articles by:</label>
          <span
            :class="{ active: grouping === 'themes' }"
            @click="groupBy('themes')"
            >Theme</span
          >
          <span
            :class="{ active: grouping === 'formats' }"
            @click="groupBy('formats')"
            >Output format</span
          >
        </div>
      </div>
      <div v-for="group in groups" :key="group.id" class="group">
        <h2>{{ group.heading }}</h2>
        <p>{{ group.description }}</p>
        <div class="articles">
          <Teaser
            :article="
              articles.find((article2) => article.id === article2.id) || article
            "
            v-for="article of group.articles"
            :key="article.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import showdown from "showdown";
import { getJournal, getArticles } from "@/assets/api";
import Teaser from "@/components/Teaser";

const showdownConverter = new showdown.Converter();

export default {
  name: "Home",
  components: { Teaser },
  data() {
    return {
      journal: null,
      articles: null,
      grouping: "themes",
    };
  },
  computed: {
    groups() {
      return this.journal ? this.journal[this.grouping] : [];
    },
  },
  created() {
    getJournal(1).then((journal) => (this.journal = journal));
    getArticles().then((articles) => (this.articles = articles));
  },
  methods: {
    groupBy(grouping) {
      this.grouping = grouping;
    },
    parseMarkdown(md) {
      return showdownConverter.makeHtml(md);
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  font-family: "Signika", sans-serif;
  padding-bottom: 5rem;
}

img {
  max-width: 100%;
}

.grouping-select {
  display: flex;
  align-items: baseline;
}
.grouping-select span {
  display: inline-block;
  border: thin solid currentColor;
  border-left-width: 0;
  padding: 0 0.3rem;

  &:first-of-type {
    border-radius: 0.2rem 0 0 0.2rem;
    margin-left: 0.5rem;
    border-left-width: thin;
  }
  &:last-of-type {
    border-radius: 0 0.2rem 0.2rem 0;
  }
  &.active {
    background-color: #f4f4f4;
  }
}

.group {
  margin-top: 3rem;
}

.articles {
  display: flex;
  flex-wrap: wrap;
  margin-right: -0.5rem;

  .teaser {
    width: calc(50% - 0.5rem);
    margin: 0 0.5rem 0.5rem 0;
    box-sizing: border-box;

    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  }
}
</style>
