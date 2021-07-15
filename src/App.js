import React, { useEffect } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { useDispatch } from "react-redux";
import Table from "./components/Table";
import { getNews } from "./store/actions/actions";
import { Typography, TextField } from "@material-ui/core";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, []);
  return (
    <div className="App">
      <div className="container">
        <Table />
      </div>
    </div>
  );
}

export default App;
