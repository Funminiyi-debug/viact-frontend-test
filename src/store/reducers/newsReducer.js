import { SET_NEWS, SEARCH } from "../types";

const initialstate = {
  loading: false,
  articles: [],
  numberOfArticles: 0,
  searchIsActive: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case SET_NEWS:
      console.log(action.payload);
      return Object.assign({}, state, {
        articles: action.payload.articles,
        numberOfArticles: action.numberOfArticles,
      });

    case SEARCH:
      return Object.assign({}, state, {
        searchIsActive: true,
        articles: state.articles.filter(
          (a) =>
            (a.content &&
              a.content.includes(action.payload.searchTerm.trim())) ||
            a.title.toLowerCase().includes(action.payload.searchTerm.trim())
        ),
      });

    default:
      return state;
  }
};
