import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";
import PreLoader from "./views/custom/PreLoader";
import TheLayout from "./views/layout/TheLayout";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={<PreLoader />} persistor={persistor}>
          <BrowserRouter>
              <TheLayout />
            </BrowserRouter>
          </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
