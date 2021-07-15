import React, { useEffect } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Table from "./components/Table";
import { getNews } from "./store/actions/actions";
import { Typography, TextField } from "@material-ui/core";

function App() {
  const dispatch = useDispatch();
  const news = useSelector(({ news }) => news);

  useEffect(() => {
    dispatch(getNews());
  }, []);
  return (
    <div className="App">
      <div className="container">
        {news.loading ? <Table /> : <p>Loading...</p>}
      </div>
    </div>
  );
}

export default App;
