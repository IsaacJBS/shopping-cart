import { useState } from "react";
import { useQuery } from "react-query";

import Item from "./Item/Item";
import { Drawer } from "@material-ui/core";
import { LinearProgress } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

import { Wrapper, StyledButton } from "./App.styles";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch("https://fakestoreapi.com/products")).json();
};

const App = () => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts,
  );

  const getTotalItems = (items: CartItemType[]) => null;

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong</div>;

  console.log(data);
  return (
    <Wrapper>
      <Drawer
        anchor="right"
        open={cartOpen}
        onClose={() => setCartOpen(!cartItems)}
      >
        Cart Goes Here
      </Drawer>
      <StyledButton onClick={() => setCartOpen(!cartOpen)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCart color="action" />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item: CartItemType) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
