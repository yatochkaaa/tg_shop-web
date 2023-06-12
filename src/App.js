import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { useTelegram } from "./hooks/useTelegram";
import "./App.css";
import Form from "./components/Form/Form";
import ProductList from "./components/ProductList/ProductList";

const App = () => {
  const { tg, onToggleButton } = useTelegram();

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
