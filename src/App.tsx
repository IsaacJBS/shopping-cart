import React, { useState } from "react";
import { useQuery } from "react-query";

import { ICartItem } from "./interfaces/CardItem";

import Item from "./components/Item/Item";
import Cart from "./components/Cart/Cart";
import { Drawer } from "@mui/material";
import { LinearProgress } from "@mui/material";
import { Grid } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";

import { Wrapper, StyledButton } from "./App.styles";

const getProducts = async (): Promise<ICartItem[]> => {
  return await (await fetch("https://fakestoreapi.com/products")).json();
};

const App = () => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState([] as ICartItem[]);

  const { data, isLoading, error } = useQuery<ICartItem[]>(
    "products",
    getProducts,
  );

  const getTotalItems = (items: ICartItem[]) => {
    return items.reduce((ack: number, item) => ack + item.quantity, 0);
  };

  const handleAddToCart = (clickedItem: ICartItem) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...clickedItem, quantity: 1 }];
    });
  };

  const handleRemoveAllProducts = () => {
    setCartItems([]);
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.quantity === 1) return ack;
          return [...ack, { ...item, quantity: item.quantity - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as ICartItem[]),
    );
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong</div>;

  return (
    <Wrapper>
      <Drawer
        anchor="right"
        open={cartOpen}
        onClose={() => setCartOpen(!cartItems)}
      >
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
          removeAllProducts={handleRemoveAllProducts}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(!cartOpen)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCart color="action" />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item: ICartItem) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
