import React from "react";

import { Button } from "@mui/material";

import { ICartItem } from "../../interfaces/CardItem";

import { Wrapper } from "./Item.styles";

type Props = {
  item: ICartItem;
  handleAddToCart: (clickedItem: ICartItem) => void;
};

const Item = ({ item, handleAddToCart }: Props) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Wrapper>
  );
};

export default Item;
