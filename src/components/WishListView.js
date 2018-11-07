import React from "react";
import WishListItemView from "./WishListItemView";
import { observer } from 'mobx-react'

const WishListView = ({ wishList }) => (
  <div className="list">
    <ul>
      {wishList.items.map((item, idx) => {
        return <WishListItemView key={idx} item={item} />;
      })}
    </ul>
  </div>
);

export default observer(WishListView);
