import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
// import Browse from "./components/Browse";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
