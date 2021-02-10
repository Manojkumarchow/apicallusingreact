import DataFetch from "./Components/DataFetch";
import "./App.css";
import DataFetchUsingReducer from "./Components/DataFetchUsingReducer";
import FetchGithubUsers from "./Components/FetchGithubUsers";
function App() {
  return (
    <div className="App">
      {/* <DataFetch /> */}
      {/* <DataFetchUsingReducer/> */}
      <FetchGithubUsers/>
    </div>
  );
}

export default App;
