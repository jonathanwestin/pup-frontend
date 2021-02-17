import axios from "axios";
import qs from "qs";

const API_BASE = process.env.VUE_APP_API_BASE || "http://localhost:1337/";

function url(path, params = null) {
  return API_BASE + path + (params ? "?" + qs.stringify(params) : "");
}

export async function getJournal(id) {
  return axios.get(url(`journals/${id}`)).then((response) => response.data);
}

export async function getArticles(params) {
  return axios.get(url("articles", params)).then((resp) => resp.data);
}

export async function getArticle(identifier, revision) {
  const articles = await getArticles({ identifier, revision });
  return articles.pop();
}
