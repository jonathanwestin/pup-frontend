// import axios from 'axios';
import articles from "@/assets/data";

export function getArticles() {
  return articles;
}

export function getArticle(doi) {
  return articles.find((article) => article.doi === doi);
}
