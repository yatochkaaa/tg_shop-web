import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import { products } from "../../mocks/products";
import { useTelegram } from "../../hooks/useTelegram";
import "./ProductList.css";

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
};

const ProductList = () => {
  const { tg } = useTelegram();

  const [addedItems, setAddedItems] = React.useState([]);

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id);
    let newItems = [];

    if (alreadyAdded) {
      newItems = addedItems.filter((item) => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }

    setAddedItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Купить ${getTotalPrice(newItems)}`,
      });
    }
  };

  return (
    <div className="list">
      {products.map((item) => {
        <ProductItem product={item} className={"item"} onAdd={onAdd} />;
      })}
    </div>
  );
};

export default ProductList;
