import http from "./http-common";
import config from "../config";

class NewsDataService {
  baseUrl = "https://newsapi.org/v2/top-headlines";
  // baseUrl = "https://newsapi.org/v2/everything";
  proxyUrl = "https://cors-anywhere.herokuapp.com/";

  getNews() {
    return http.get(
      `${this.baseUrl}/?country=us&page=1&apiKey=${config.API_KEY}`
    );
  }
}
export default new NewsDataService();
