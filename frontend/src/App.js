import { Provider } from "react-redux";
import { persistor, store } from "./app/store";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
      <ToastContainer />
    </>
  );
}

export default App;
