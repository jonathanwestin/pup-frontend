import axios from "axios";
import qs from "qs";

export function apiUrl(path, params = null) {
  return (
    "http://localhost:1337/" +
    path.replace(/^\//, "") +
    (params ? "?" + qs.stringify(params) : "")
  );
}

export async function getJournal(id) {
  return axios.get(apiUrl(`journals/${id}`)).then((response) => response.data);
}

export async function getArticles(params) {
  return axios.get(apiUrl("articles", params)).then((resp) => resp.data);
}

export async function getArticle(identifier, revision) {
  const articles = await getArticles({ identifier, revision });
  return articles.pop();
}
