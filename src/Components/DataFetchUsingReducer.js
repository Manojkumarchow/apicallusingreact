import React, { useReducer, useEffect } from "react";
import axios from "axios";
const initialState = {
  loading: true,
  post: {},
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "ERROR":
      return {
        loading: false,
        post: {},
        error: action.payload,
      };
    default:
      return initialState;
  }
};
function DataFetchUsingReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "SUCCESS", payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: "ERROR", payload: "Something went wrong!!!" });
      });
  }, []);
  return (
    <div>
      {state.loading ? "Loading..." : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchUsingReducer;
