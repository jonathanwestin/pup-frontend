<template>
  <article v-if="article" class="full-article">
    <header class="article-header">
      <div class="article-menu">
        <Dropbutton :label="`v ${article.revision} ▾`">
          <div>v 1 (2021-01-02)</div>
          <div>v 2 (2021-01-15)</div>
        </Dropbutton>
      </div>
      <div class="container">
        <div class="article-mainmeta">
          <div>
            DOI:
            <router-link :to="$route.path" class="meta-value">
              {{ article.doi }}
            </router-link>
          </div>
          <div>
            Publication date:
            <span class="meta-value">{{
              article.published_at.slice(0, 10)
            }}</span>
          </div>
        </div>

        <h1 class="article-title">{{ article.title }}</h1>
        <h2 class="article-subtitle">{{ article.subtitle }}</h2>

        <div class="article-authors">
          <div
            class="author"
            v-for="author of article.authors"
            :key="author._id"
          >
            <div class="author-name">
              {{ [author.person.firstname, author.person.lastname].join(" ") }}
            </div>
            <div class="author-affiliation">
              {{ author.institution.title }}
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
        <span v-for="(keyword, i) in article.keywords" :key="keyword._id"
          ><span class="meta-value">{{ keyword.label }}</span
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
          <div :class="{ gallery: section.media.length > 1 }">
            <div
              v-for="media of section.media"
              :key="media._id"
              class="media-item"
            >
              <img
                v-if="media.mime.split('/')[0] == 'image'"
                :src="
                  media.url.slice(0, 4) === 'http'
                    ? media.url
                    : `http://localhost:1337${media.url}`
                "
                class="media-visual"
              />
              <video
                v-if="media.mime.split('/')[0] == 'video'"
                playsinline
                controls
                class="media-visual"
              >
                <source
                  :src="
                    media.url.slice(0, 4) === 'http'
                      ? media.url
                      : `http://localhost:1337${media.url}`
                  "
                  :type="media.mime"
                />
              </video>
            </div>
          </div>
          <div
            v-if="section.caption"
            class="media-caption"
            v-html="section.caption"
          />
          <div v-if="section.rights" class="media-rights">
            Rights: {{ section.rights }}
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
          :key="reference._id"
          class="references-item"
        >
          {{ reference.text }}
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
import { getArticle } from "../assets/api";
import Dropbutton from "@/components/Dropbutton";

export default {
  name: "Article",
  components: { Dropbutton },
  props: {
    doiPrefix: String,
    doiSuffix: String,
    revision: String,
  },
  data() {
    return {
      article: null,
    };
  },
  computed: {
    doi() {
      return `${this.doiPrefix}/${this.doiSuffix}`;
    },
  },
  async created() {
    this.article = await getArticle(this.doi, this.revision);
    this.$store.commit("setArticleData", this.article);
    document.title = this.article.title;
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
  padding: 50px 0 30px;
  margin-bottom: 40px;
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
    margin: 0 0 30px;
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
  font-family: Signika, sans-serif;
  font-weight: 400;
  margin: 1.5em 0;
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
    font-family: Signika, sans-serif;

    .media-item {
      margin-bottom: 0.5rem;

      .media-visual {
        max-width: 100%;
      }
    }

    .gallery {
      display: flex;
      flex-wrap: wrap;
      margin-right: -15px;
      flex-direction: row-reverse;

      .media-item {
        width: calc(50% - 15px);
        margin: 0 15px 15px 0;

        .media-visual {
          display: block;
        }
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
      padding-left: 0.7em;
      text-indent: -0.7em;

      .extra-label {
        font-weight: bold;
      }
    }
  }
}
</style>
