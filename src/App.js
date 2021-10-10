import logo from "./logo.svg";
import Header from "components/Header";
import { Route, Switch } from "react-router";
import ProductFeature from "features/Product";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/products" component={ProductFeature} />
        <Route path="/" component={ProductFeature} />
      </Switch>
    </div>
  );
}

export default App;
