import "./css/App.css";
import ConnectNavbar from "./ConnectNavbar";
import ConnectContentList from "./ConnectContentList";
import { Provider } from "react-redux";
import store from "./configureStore";
import ContentFilter from "./ContentFilter";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ConnectNavbar />
        <ContentFilter />
        <ConnectContentList />
      </div>
    </Provider>
  );
}

export default App;
