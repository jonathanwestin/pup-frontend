<template>
  <article v-if="article" class="full-article">
    <header class="article-header">
      <div class="container">
        <div class="article-mainmeta">
          <div>
            Publication date:
            <span class="meta-value">
              {{ article.date }}
            </span>
          </div>
          <div>
            Version:
            <span class="meta-value">
              {{ article.revision }}
              ({{ article.revision_date }})
            </span>
          </div>
        </div>

        <h1 class="article-title title">{{ article.title }}</h1>
        <h2 class="article-subtitle title">{{ article.subtitle }}</h2>

        <div class="article-authors">
          <div
            v-for="author of article.authors"
            :key="author.id"
            class="author"
          >
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

    <div v-if="article.guplayId || article.images" class="article-mainvisual">
      <div class="container">
        <div v-if="article.guplayId" class="mainvisual-video-wrapper">
          <iframe
            :src="`https://play.gu.se/embed/secure/iframe/entryId/${article.guplayId}/uiConfId/23450401`"
            class="mainvisual-video"
            allowfullscreen
            webkitallowfullscreen
            mozAllowFullScreen
            allow="autoplay *; fullscreen *; encrypted-media *"
            sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation"
          >
          </iframe>
        </div>
        <div v-else-if="article.images">
          <img
            v-for="image in article.images"
            :key="image.id"
            :src="apiUrl(image.formats.thumbnail.url.replace(/^\//, ''))"
          />
        </div>
      </div>
    </div>

    <div class="container article-summary">
      <h2>Summary</h2>
      <div class="summary-text" v-html="parseMarkdown(article.summary)" />
    </div>
    <div class="container">
      <div class="article-keywords">
        Keywords:
        <span v-for="(keyword, i) in article.keywords" :key="keyword.id"
          ><span class="meta-value">{{ keyword.label }}</span
          ><template v-if="i < article.keywords.length - 1">, </template>
        </span>
      </div>
      <div class="article-cite">
        Cite as:
        <span class="meta-value">
          {{ commaAnd(article.authors.map(lastnameFirst)) }}
          ({{ article.date.slice(0, 4) }})
          <em>{{ article.title }}</em>
        </span>
      </div>
      <div class="article-downloads">
        <a
          v-for="download in article.downloads"
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
    <div class="container article-content">
      <ContentSection
        v-for="section in article.content"
        :key="section.label"
        :section="section"
      />
    </div>
    <div class="container article-references">
      <h2>References</h2>
      <div class="references-list">
        <div
          v-for="reference in article.references"
          :key="reference.id"
          class="references-item"
        >
          {{ reference.content }}
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
import showdown from "showdown";
import { apiUrl, getArticle } from "../assets/api";
import { commaAnd, fullName, lastnameFirst } from "@/assets/util";
import ContentSection from "@/components/ContentSection";

const showdownConverter = new showdown.Converter();

export default {
  name: "Article",
  components: { ContentSection },
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
  methods: {
    apiUrl,
    commaAnd,
    fullName,
    lastnameFirst,
    parseMarkdown(md) {
      return showdownConverter.makeHtml(md);
    },
  },
};
</script>

<style lang="scss">
.meta-value {
  // color: #a68436;
  font-weight: 300;
}

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
    // font-size: 3rem;
    margin: 1.5rem 0 0.5rem;
  }
  .article-subtitle {
    margin: 0.5rem 0 1rem;
    // font-size: 2rem;
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

.article-summary {
  .summary-text {
    margin: 1rem 0;
    font-size: 1.1rem;
    font-weight: 100;

    p:first-child {
      margin-top: 0;
    }

    p:last-child {
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
    background: url(../assets/file.png) no-repeat;
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

.article-mainvisual {
  margin-top: -1rem; /* Snug to header */

  .mainvisual-video {
    width: 100%;
    /* TODO Set height dynamically from video's aspect ratio? */
    height: 45vw;
  }
}

.article-references {
  margin: 4rem auto;

  .references-list {
    @media screen and (min-width: 1000px) {
      columns: 2 30px;
    }

    .references-item {
      margin-bottom: 1rem;
      padding-left: 0.7em;
      text-indent: -0.7em;

      .extra-label {
        font-weight: bold;
      }
    }
  }
}
</style>
