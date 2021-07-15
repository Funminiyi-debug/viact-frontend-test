import NewsDataService from "../http.service";
import { SET_NEWS, SEARCH } from "../types";

export const getNews = () => async (dispatch) => {
  try {
    const res = await NewsDataService.getNews();
    dispatch({
      type: SET_NEWS,
      payload: {
        articles: res.data.articles,
        numberOfArticles: res.data.totalResults,
      },
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const setSearch = (value) => async (dispatch) => {
  dispatch({
    type: SEARCH,
    payload: {
      searchTerm: value,
    },
  });
};
