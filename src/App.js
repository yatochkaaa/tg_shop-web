import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { useTelegram } from "./hooks/useTelegram";
import Form from "./components/Form/Form";
import ProductList from "./components/ProductList/ProductList";
import "./App.css";

const App = () => {
  const { tg } = useTelegram();

  React.useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
};

export default App;
