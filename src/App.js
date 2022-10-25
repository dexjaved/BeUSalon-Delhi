import React from "react";
import "./styles.css";
import Cart from "./Cart";

const items = [
  { id: 1, name: "Product-1", price: 100 },

  { id: 2, name: "Product-2", price: 200 },

  { id: 3, name: "Product-3", price: 300 }
];

const App = () => {
  const [cart, setCart] = React.useState([]);
  const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);

  const incrementHandle = (item) =>
    setCart((currentCart) => [...currentCart, item]);

  const decrementHandle = (item) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1)
      ];
    });
  };

  const amountOfItems = (id) => cart.filter((item) => item.id === id).length;

  const listItemsInCart = () =>
    items.map((item) => (
      <div key={item.name}>
        {item.name} {item.price}
      </div>
    ));

  return (
    <>
      <div className="main">
        <main className="products">
          Product
          <ul>
            {items.map((product) => (
              <li key={items.id}>
                <div>
                  <strong>{product.name}</strong> - {product.price}
                </div>
                <div>
                  <button
                    className="decrement"
                    onClick={() => decrementHandle(product)}
                  >
                    -
                  </button>
                  <span> {amountOfItems(product.id)} </span>
                  <button
                    className="increment"
                    onClick={() => incrementHandle(product)}
                  >
                    +
                  </button>
                  {/* <button onClick={() => addToCart(product)}>
                    Add to Cart
                  </button> */}
                </div>
              </li>
            ))}
          </ul>
        </main>
        <Cart total={() => cartTotal} item={listItemsInCart} cart={cart} />
      </div>
    </>
  );
};

export default App;
