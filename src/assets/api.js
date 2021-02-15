import axios from "axios";
import articles from "@/assets/data";

const USE_LOCAL = false;

function url(path) {
  return "http://localhost:1337/" + path;
}

export async function getArticles() {
  return USE_LOCAL
    ? Promise.resolve(articles)
    : axios.get(url("articles")).then((resp) => resp.data);
}

export async function getArticle(id, revision) {
  const articles = await getArticles();
  return articles.find(
    (article) => article.id == id && article.revision == revision
  );
}
