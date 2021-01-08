<template>
  <article class="full-article">
    <header class="article-header">
      <div class="article-mainmeta">
        <div>DOI: {{ article.doi }}</div>
        <div>Publication date: {{ article.publication_date }}</div>
        <div>
          Revision: {{ article.revisions.slice(-1)[0].revision_number }}
        </div>
      </div>

      <h1 class="article-title">{{ article.title }}</h1>
      <h2 class="article-subtitle">{{ article.subtitle }}</h2>

      <div class="article-authors">
        <div
          class="author"
          v-for="author of article.authors"
          :key="author.name.join()"
        >
          <div class="author-name">{{ author.name.join(" ") }}</div>
          <div class="author-affiliation">
            {{ author.affiliation.join(", ") }}
          </div>
        </div>
      </div>
    </header>
    <div class="article-summary">
      <h2>Summary</h2>
      <p>{{ article.summary }}</p>
      <div class="article-keywords">
        Keywords:
        <span v-for="(keyword, i) in article.keywords" :key="keyword"
          ><span class="keyword">{{ keyword }}</span
          ><template v-if="i < article.keywords.length - 1">, </template>
        </span>
      </div>
    </div>
    <div class="article-content">
      <section
        v-for="section in article.content"
        :key="section.label"
        class="article-section"
      >
        <figure v-if="section.media" class="article-media">
          <img
            v-if="section.media.type == 'image'"
            :src="section.media.url"
            class="article-media-visual"
          />
          <div v-if="section.media.type == 'images'" class="gallery">
            <img
              v-for="url of section.media.urls"
              :key="url"
              :src="url"
              class="article-media-visual"
            />
          </div>
          <video
            v-if="section.media.type == 'video'"
            playsinline
            controls
            class="article-media-visual"
          >
            <source :src="section.media.url" type="video/mp4" />
          </video>
          <div v-if="section.media.caption" class="media-caption">
            {{ section.media.caption }}
          </div>
          <div v-if="section.media.rights" class="media-rights">
            Rights: {{ section.media.rights }}
          </div>
        </figure>
        <template v-if="section.text[0] != '<'">{{ section.text }}</template>
        <div v-else v-html="section.text" />
      </section>
    </div>
    <div class="article-references">
      <h2>References</h2>
      <div v-for="reference in article.references" :key="reference">
        {{ reference }}
      </div>

      <div v-for="extra in article.extras" :key="extra.label">
        <div>
          <strong>{{ extra.label }}</strong>
        </div>
        <span v-for="(item, i) in extra.items || [extra.item]" :key="i">
          {{ item }}<br />
        </span>
      </div>
    </div>
  </article>
</template>

<script>
import articles from "@/assets/data";
export default {
  name: "Article",
  props: {
    doiPrefix: String,
    doiSuffix: String,
    version: String,
  },
  computed: {
    doi() {
      return `${this.doiPrefix}/${this.doiSuffix}`;
    },
    article() {
      return articles.find((article) => article.doi == this.doi);
    },
  },
};
</script>

<style>
.article-section::after {
  content: " ";
  display: block;
  clear: both;
}
.article-media {
  width: 50%;
  float: left;
}
.article-media-visual {
  max-width: 100%;
}
</style>
