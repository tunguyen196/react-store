import logo from "./logo.svg";
import TodoFeature from "./features/Todo";
import Count from "./features/Counter";
import { useEffect } from "react";
import productApi from "./api/productApi";
import Header from "components/Header";
import { Route, Switch } from "react-router";
import ProductFeature from "features/Product";

function App() {
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const products = await productApi.getAll({
  //       _limit: 10,
  //     });
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/products" component={ProductFeature} />
        <Route path="/" component={ProductFeature} />
      </Switch>
      {/* <TodoFeature />
      <Count /> */}
    </div>
  );
}

export default App;
