import NewsDataService from "../http.service";
import { SET_NEWS, SEARCH, SET_LOADING } from "../types";

export const getNews = () => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING, payload: true });
    const res = await NewsDataService.getNews();
    dispatch({
      type: SET_NEWS,
      payload: {
        articles: res.data.articles,
        numberOfArticles: res.data.totalResults,
      },
    });
    dispatch({ type: SET_LOADING, payload: true });
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
