import React, { memo } from "react";
import "./styles.css";

const Cart = (props) => {
  return (
    <main className="products">
      <ul>
        Cart
        <li>
          {/* {props.add()} */}
          {props.item()}
          {/* <strong>Name{props.name}</strong> - price{props.price} */}
        </li>
      </ul>
      <div> Total: {props.total()} </div>
    </main>
  );
};

export default memo(Cart);
