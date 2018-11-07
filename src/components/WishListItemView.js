import React from "react";

const WishListItemView = ({ item }) => (
  <li className="item">
    {item.image && <img src={item.image} alt={item.name} />}
    <span>{item.name}</span>
    <span>{item.price}</span>
  </li>
);

export default WishListItemView;
