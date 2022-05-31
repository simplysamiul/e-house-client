import { Provider } from "react-redux";
import store from "./redux/store";
import TheLayout from "./views/layout/TheLayout";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TheLayout />
      </Provider>
    </div>
  );
}

export default App;
