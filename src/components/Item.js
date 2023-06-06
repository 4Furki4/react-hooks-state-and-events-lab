import React from "react";
import { useState } from "react"
function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setIsInCart(!isInCart)}>Add to Cart</button>
    </li>
  );
}

export default Item;
