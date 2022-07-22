import CardItem from "../CartItem/CartItem";

import { Wrapper, StyledButton } from "./Cart.styles";

import { ICartItem } from "../../interfaces/CardItem";

type Props = {
  cartItems: ICartItem[];
  addToCart: (clickedItem: ICartItem) => void;
  removeFromCart: (id: number) => void;
  removeAllProducts: () => void;
};

const Cart = ({
  cartItems,
  addToCart,
  removeFromCart,
  removeAllProducts,
}: Props) => {
  const calculateTotal = (items: ICartItem[]) => {
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
