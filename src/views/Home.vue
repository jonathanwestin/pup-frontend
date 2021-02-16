<template>
  <div v-if="journal" class="home">
    <div class="container">
      <img src="/biccs_2021.jpg" />
      <h1 class="title">{{ journal.title }}</h1>
      <p v-html="parseMarkdown(journal.presentation)" />
      <div>
        <div class="grouping-select">
          <label>Order articles by: </label>
          <span
            :class="{ active: grouping === 'themes' }"
            @click="groupByThemes"
          >
            Theme
          </span>
          <ToggleButton
            :value="grouping === 'formats'"
            @change="toggleGroupBy"
            :color="{ unchecked: '#333', checked: '#333' }"
            :sync="true"
          />
          <span
            :class="{ active: grouping === 'formats' }"
            @click="groupByFormats"
          >
            Output format
          </span>
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
import { ToggleButton } from "vue-js-toggle-button";
import { getJournal, getArticles } from "@/assets/api";
import Teaser from "@/components/Teaser";

const showdownConverter = new showdown.Converter();

export default {
  name: "Home",
  components: { ToggleButton, Teaser },
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
    groupByThemes() {
      this.grouping = "themes";
    },
    groupByFormats() {
      this.grouping = "formats";
    },
    toggleGroupBy({ value }) {
      this.grouping = value ? "formats" : "themes";
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

.grouping-select span.active {
  font-weight: bold;
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
