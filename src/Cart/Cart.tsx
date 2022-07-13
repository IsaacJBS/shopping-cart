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
    </Wrapper>
  );
};

export default Cart;
