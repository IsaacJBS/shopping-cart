import CardItem from "../CartItem/CartItem";

import { Wrapper, StyledButton } from "./Cart.styles";

import { CartItemType } from "../../App";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  removeAllProducts: () => void;
};

const Cart = ({
  cartItems,
  addToCart,
  removeFromCart,
  removeAllProducts,
}: Props) => {
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
      <StyledButton onClick={removeAllProducts} variant="contained">
        Remove all
      </StyledButton>
    </Wrapper>
  );
};

export default Cart;
