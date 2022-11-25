import { Provider } from "react-redux";
import AppRouter from "routers/AppRouter";
import { store } from "store/store";
import { GlobalStyle } from "styles/theme/GlobalStyles";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppRouter />
    </Provider>
  );
}
export default App;
