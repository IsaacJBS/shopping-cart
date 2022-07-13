import CardItem from "../CartItem/CartItem";

import { Wrapper } from "./Cart.styles";

import { CartItemType } from "../App";
import CartItem from "../CartItem/CartItem";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart = ({ cartItems, addToCart, removeFromCart }: Props) => {
  const calculateTotal = (items: CartItemType[]) => {
    return items.reduce(
      (ack: number, item) => ack + item.quantity * item.price,
      0,
    );
  };
  return (
    <Wrapper>
      <h2>Your shopping cart</h2>
      {cartItems.length === 0 ? <p>No items in the cart</p> : null}
      {cartItems.map((item) => (
        <CardItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;
