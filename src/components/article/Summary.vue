<template>
  <div class="container article-summary">
    <h2>Summary</h2>
    <div class="summary-text" v-html="parseMarkdown(summary)" />

    <div class="article-keywords">
      <MetaItem label="Keywords">
        {{ keywords.map((keyword) => keyword.label).join(", ") }}
      </MetaItem>
    </div>
    <div class="article-cite">
      <MetaItem label="Cite as">
        {{ commaAnd(authors.map(lastnameFirst)) }}
        ({{ date.slice(0, 4) }})
        <em>{{ title }}.</em>
        Biennial International Conference for the Craft Sciences. Version
        {{ revision }}. https://&lt;url&gt;{{ $route.path }}
      </MetaItem>
    </div>
    <div class="article-downloads">
      <a
        v-for="download in downloads"
        :key="download.id"
        :href="apiUrl(download.url)"
        class="download blind popout"
      >
        <div class="download-title">{{ download.caption }}</div>
        <div class="download-description">
          {{ download.ext.slice(1).toUpperCase() }}
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import showdown from "showdown";
import { commaAnd, lastnameFirst } from "@/assets/util";
import { apiUrl } from "@/assets/api";
import MetaItem from "@/components/article/MetaItem";

const showdownConverter = new showdown.Converter();

export default {
  props: [
    "summary",
    "keywords",
    "authors",
    "date",
    "title",
    "revision",
    "downloads",
  ],
  components: {
    MetaItem,
  },
  methods: {
    apiUrl,
    commaAnd,
    lastnameFirst,
    parseMarkdown(md) {
      return showdownConverter.makeHtml(md);
    },
  },
};
</script>

<style lang="scss" scoped>
.article-summary {
  .summary-text {
    margin: 1rem 0;
    font-size: 1.1rem;
    font-weight: 100;

    /* Deep selector needed for v-html. The >>> syntax does not work in scss. */
    ::v-deep p:first-child {
      margin-top: 0;
    }

    ::v-deep p:last-child {
      margin-bottom: 0;
    }

    @media screen and (min-width: 1000px) {
      column-count: 2;
      column-gap: 2rem;
    }
  }
}

.article-keywords,
.article-cite {
  font-family: "Signika", sans-serif;
  font-weight: 400;
  margin: 1.5em 0;
}

.article-downloads {
  display: flex;
  flex-wrap: wrap;
  font-family: "Signika", sans-serif;

  .download {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: url(../../assets/file.png) no-repeat;
    background-size: 4rem;
    background-position: 1rem 50%;
    border: thin dashed #666;
    border-radius: 0.5rem;
    height: 4rem;
    padding: 1rem 1rem 1rem 5rem;
    margin-bottom: 1rem;
    width: 100%;

    .download-description {
      font-size: 85%;
    }
  }

  @media screen and (min-width: 600px) {
    margin-right: -2rem;

    .download {
      width: auto;
      margin-right: 2rem;
    }
  }
}
</style>
