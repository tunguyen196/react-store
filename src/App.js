import logo from "./logo.svg";
import "./App.css";
import TodoFeature from "./features/Todo";
import Count from "./features/Counter";
import { useEffect } from "react";
import productApi from "./api/productApi";
import Header from "components/Header";

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await productApi.getAll({
        _limit: 10,
      });
    };
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoFeature />
      <Count />
    </div>
  );
}

export default App;
