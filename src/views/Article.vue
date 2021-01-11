<template>
  <article class="full-article">
    <header class="article-header">
      <div class="container">
        <div class="article-mainmeta">
          <div>
            DOI: <a :href="$route.path" class="meta-value">{{ article.doi }}</a>
          </div>
          <div>
            Publication date:
            <span class="meta-value">{{ article.publication_date }}</span>
          </div>
          <div>
            Revision:
            <span class="meta-value">{{
              article.revisions.slice(-1)[0].revision_number
            }}</span>
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
      </div>
    </header>
    <div class="container article-summary">
      <h2>Summary</h2>
      <p>{{ article.summary }}</p>
      <div class="article-keywords">
        Keywords:
        <span v-for="(keyword, i) in article.keywords" :key="keyword"
          ><span class="meta-value">{{ keyword }}</span
          ><template v-if="i < article.keywords.length - 1">, </template>
        </span>
      </div>
    </div>
    <div class="container article-content">
      <section
        v-for="section in article.content"
        :key="section.label"
        class="article-section"
        :id="section.label"
      >
        <div class="content-ear">
          <a :href="`#${section.label}`">{{ section.label }}</a>
        </div>
        <figure v-if="section.media" class="content-media">
          <img
            v-if="section.media.type == 'image'"
            :src="section.media.url"
            class="media-visual"
          />
          <div v-if="section.media.type == 'images'" class="gallery">
            <img
              v-for="url of section.media.urls"
              :key="url"
              :src="url"
              class="media-visual"
            />
          </div>
          <video
            v-if="section.media.type == 'video'"
            playsinline
            controls
            class="media-visual"
          >
            <source :src="section.media.url" type="video/mp4" />
          </video>
          <div
            v-if="section.media.caption"
            class="media-caption"
            v-html="section.media.caption"
          />
          <div v-if="section.media.rights" class="media-rights">
            Rights: {{ section.media.rights }}
          </div>
        </figure>
        <div
          v-if="section.text[0] != '<'"
          class="content-text content-text-plain"
        >
          <p>{{ section.text }}</p>
        </div>
        <div
          v-else
          v-html="section.text"
          class="content-text content-text-html"
        />
      </section>
    </div>
    <div class="container article-references">
      <h2>References</h2>
      <div class="references-list">
        <div
          v-for="reference in article.references"
          :key="reference"
          class="references-item"
        >
          {{ reference }}
        </div>

        <div
          v-for="extra in article.extras"
          :key="extra.label"
          class="references-item references-extra"
        >
          <div class="extra-label">
            {{ extra.label }}
          </div>
          <span v-for="(item, i) in extra.items || [extra.item]" :key="i">
            {{ item }}<br />
          </span>
        </div>
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

<style lang="scss">
.meta-value {
  color: #368fa5;
  font-weight: 300;
}

.article-header {
  padding-bottom: 20px;
  border-bottom: 1px dashed currentColor;
  margin-bottom: 40px;
  font-weight: 100;

  .article-mainmeta {
    margin: 50px 0 30px;
    line-height: 1.5;
  }
  .article-title {
    margin: 30px 0 10px;
  }
  .article-subtitle {
    margin: 10px 0 20px;
    font-size: 2rem;
  }

  .article-authors {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: -10px;
    font-size: 1.1rem;

    .author {
      flex: 1;
      margin: 10px;
      min-width: 15em;
      line-height: 1.5;
    }

    .author-name {
      font-size: 1.3rem;
    }
  }
}
.article-summary {
  h2 {
    margin: 0 0 20px;
  }

  p {
    margin: 20px 0;
    column-count: 2;
    column-gap: 40px;
    font-size: 1.1rem;
    font-weight: 100;
  }
}

.article-keywords {
  margin: 20px 0;
}

.article-section {
  display: flex;
  margin: 1.5rem 0;
  scroll-margin-top: 1rem;

  .content-ear {
    position: absolute;
    left: 0%;
    width: 8%;
    text-align: right;
    font-size: 1.25rem;
    font-weight: 100;
  }

  .content-media {
    width: 60%;
    margin: 0;
    margin-right: 5%;
    font-size: 0.9rem;
    text-align: right;
    position: relative;

    .media-visual {
      max-width: 100%;
      margin-bottom: 0.5rem;
    }

    .gallery {
      display: flex;
      flex-wrap: wrap;
      margin-right: -15px;
      flex-direction: row-reverse;

      .media-visual {
        display: block;
        // flex: 1;
        width: calc(50% - 15px);
        // max-width: 15rem;
        // min-width: 10rem;
        margin: 0 15px 15px 0;
      }
    }

    &::after {
      position: absolute;
      top: 0.25rem;
      left: 103%;
      content: " ";
      display: block;
      width: 0.75rem;
      height: 0.75rem;
      background-image: url("../assets/chevrons.png");
      background-size: cover;
      transform: scaleX(-1);
    }
  }

  .content-text {
    width: 35%;
    text-align: justify;

    p:first-child {
      margin-top: 0;
    }
    p:last-child {
      margin-bottom: 0;
    }
  }

  // Every other section is laid out in reverse.
  &:nth-child(2n) {
    flex-direction: row-reverse;

    .content-media {
      margin-left: 5%;
      margin-right: 0;
      text-align: left;

      .gallery {
        flex-direction: row;
      }

      &::after {
        left: auto;
        right: 103%;
        transform: none;
      }
    }
  }
}

.article-references {
  margin: 4rem auto;

  .references-list {
    columns: 2 30px;

    .references-item {
      margin-bottom: 1rem;

      .extra-label {
        font-weight: bold;
      }
    }
  }
}
</style>
